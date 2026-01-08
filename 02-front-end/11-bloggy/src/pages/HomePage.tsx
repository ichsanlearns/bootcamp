import { useEffect, useState } from "react";
import { Link } from "react-router";

import type { IArticle } from "../types/articletype";

function HomePage() {
  const [articles, setArticles] = useState<IArticle[] | null>(null);

  useEffect(() => {
    async function getArticles() {
      const response = await fetch(import.meta.env.VITE_API_DOMAIN);
      const data = await response.json();

      setArticles(data);
    }

    getArticles();
  }, []);

  return (
    <main>
      {articles?.map((article) => (
        <article key={article.objectId}>
          <img src={article.image} alt="" />
          <Link to={`/detail/${article.objectId}`}>
            <h2>{article.title}</h2>
          </Link>
        </article>
      ))}
    </main>
  );
}

export default HomePage;
