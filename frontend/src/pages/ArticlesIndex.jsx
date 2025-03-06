import { useEffect } from "react";
import { useState } from "react"
import { API_URL } from "../api_url";
import Article from "../components/Article";

const ArticlesIndex = () => {
  const [articles, setArticles] = useState([]); 
  
  useEffect(() => {
    fetch(API_URL + "articles")
    .then((response) => response.json())
    .then((data) => setArticles(data))
    .catch((error) => console.error(error)
    )
  }, [setArticles])
  
  

  return(
    <>
      {articles.length > 0 ? (
        articles.map((element) => (
          <Article key={element.id} title={element.title} content={element.content} />
        ))
      ) : <div>Loading...</div>}
    </>
  )
}

export default ArticlesIndex
