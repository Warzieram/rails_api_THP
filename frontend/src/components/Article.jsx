const Article = (props) => {
  return(
    <div className="article-card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default Article
