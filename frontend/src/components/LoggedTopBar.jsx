import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const LoggedTopbar = () => {
  const { logout } = useContext(UserContext);

  return(
    <>
      <div>Logged</div>
      <button onClick={logout} > Se déconnecter </button>
    </>
  )
}

export default LoggedTopbar
