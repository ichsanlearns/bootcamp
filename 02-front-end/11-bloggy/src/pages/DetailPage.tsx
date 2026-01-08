import { useEffect, useState } from "react";

import { Link, useParams, useNavigate } from "react-router";
import axios from "axios";

import { type IArticle } from "../types/articletype";

function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    async function getArticleDetail() {
      // const response = await fetch(
      //   `${import.meta.env.VITE_API_DOMAIN}/${params.id}`
      // );
      // const data = await response.json();

      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}/${params.id}`
      );

      setArticle(response.data);
    }

    getArticleDetail();
  }, []);

  async function handleDelete() {
    const confirmDelete = confirm("Are you sure to delete this article ?");

    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_DOMAIN}/${params.id}`);
      navigate("/");
    } catch (error) {
      console.error("Failed to delete article", error);
      alert("Delete failed");
    }
  }

  console.log(article);

  return (
    <main>
      <div>
        <Link to={`/edit/${article?.objectId}`}>Update</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <img src={article?.image} alt="" />
      <h2>{article?.title}</h2>
      <span>{article?.likes}💛</span>
      <p>{article?.content}</p>
    </main>
  );
}

export default DetailPage;
