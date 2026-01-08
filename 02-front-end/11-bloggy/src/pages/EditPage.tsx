import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function EditPage() {
  const navigate = useNavigate();
  const params = useParams();

  const [articleData, setArticleData] = useState({
    title: "",
    image: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getArticleDetail() {
      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}/${params.id}`
      );

      setArticleData(response.data);
      navigate("/");
    }

    getArticleDetail();
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_DOMAIN}/${params.id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(articleData),
        }
      );

      if (response.ok) {
        alert("Congratulations, article has been updated!");
      } else {
        alert("Failed, Please check your input");
      }

      setArticleData({ title: "", image: "", content: "" });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      alert("Failed to cupdate the article. Please try again after 5 minutes");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <h1>Update Article</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={articleData.title}
          onChange={(event) =>
            setArticleData({ ...articleData, title: event.target.value })
          }
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          value={articleData.image}
          onChange={(event) =>
            setArticleData({ ...articleData, image: event.target.value })
          }
        />

        <label htmlFor="content">Content</label>
        <textarea
          name=""
          id="content"
          value={articleData.content}
          onChange={(event) =>
            setArticleData({ ...articleData, content: event.target.value })
          }
        ></textarea>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Update"}
        </button>
      </form>
    </main>
  );
}

export default EditPage;
