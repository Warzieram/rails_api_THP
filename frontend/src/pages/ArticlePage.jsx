import { useState } from "react";
import { API_URL } from "../api_url";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleComment from "../components/ArticleComment";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(API_URL + `articles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la requête");
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
      });
    fetch(API_URL + `articles/${id}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la requête");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
      });
  }, [id]);

  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.content}</p>

      {comments.length >0 ? (
        comments.map((comment) => (
          <>
            <ArticleComment key={comment.id} content={comment.content} />
          </>
        ))
      ) : (
        <div>Pas de commentaire...</div>
      )}
    </>
  );
};

export default ArticlePage;
