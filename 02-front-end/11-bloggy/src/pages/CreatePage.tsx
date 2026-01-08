import { useState } from "react";

import { type IArticle } from "../types/articletype";

function CreatePage() {
  const [articleData, setArticleData] = useState<IArticle>({
    title: "",
    image: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://healthyrange-us.backendless.app/api/data/articles",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(articleData),
        }
      );

      if (response.ok) {
        alert("Congratulations, new article craeted!");
      } else {
        alert("Failed, Please check your input");
      }

      setArticleData({ title: "", image: "", content: "" });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      alert("Failed to created new article. Please try again after 5 minutes");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <h1>Create New Article</h1>

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
          {isLoading ? "Saving..." : "Create Article"}
        </button>
      </form>
    </main>
  );
}

export default CreatePage;
