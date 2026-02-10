import React from "react";
import { useRef, useState } from "react";

import api from "@/api/axios";

import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Upload, X } from "lucide-react";

import { v4 as uuidV4 } from "uuid";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface UploadedFile {
  id: string;
  preview: string;
  name: string;
  rawFile: File;
}

function CreateEvent() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      handleFileSelect(e.target.files?.[0]);
    }
  }

  function handleFileSelect(selectedFile: File) {
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5 MB");
        return;
      }

      if (!selectedFile.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = e.target?.result as string;
        setFile({
          id: uuidV4(),
          preview: preview,
          name: selectedFile.name,
          rawFile: selectedFile,
        });
      };

      reader.readAsDataURL(selectedFile);
    }
  }

  function handleDelete() {
    setFile(null);
    setError(null);
  }

  async function handleUpload() {
    if (!file) return;
    setError(null);
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("singleImage", file.rawFile);

      await api.post("/images/single", formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      toast.success("Image uploaded successfully");
      setFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      let message: string = "Upload failed";

      if (error instanceof Error) {
        message = error.message;
      }

      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Single Image Upload</CardTitle>
        <CardDescription>Upload a single image to the server</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {!file ? (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50 hover:border-gray-400"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleInputChange}
              className="hidden"
            />
            <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">
              Drag and drop your image, or click to browse
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, GIF up to 5 MB
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <img
                className="h-64 object-cover rounded-lg w-full"
                src={file.preview || "/placeholder.svg"}
                alt={file.name}
              />
              <button
                onClick={handleDelete}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
              >
                <X className="h-4 w-4" />
              </button>
              <div>
                <p className="text-sm text-gray-600 truncate">{file.name}</p>
                <Button
                  onClick={handleUpload}
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? "Uploading..." : "Upload"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default CreateEvent;
