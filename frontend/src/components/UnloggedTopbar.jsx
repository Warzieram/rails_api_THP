import { Link } from "react-router-dom"

const UnloggedTopbar = () => {
  return(
    <>
      <div>Unlogged</div>
      <Link to="/login"> Se connecter </Link>
      <Link to="/register"> Inscription </Link>
    </>
  )
}

export default UnloggedTopbar
