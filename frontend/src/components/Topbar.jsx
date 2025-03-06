import { useContext } from "react"
import LoggedTopbar from "./LoggedTopBar";
import UnloggedTopbar from "./UnloggedTopbar";
import { UserContext } from "../context/UserContext";

const Topbar = () => {
  const { currentUser } = useContext(UserContext);

  if(currentUser){
    return (<LoggedTopbar/>)
  }
  else{
    return(<UnloggedTopbar />)
  }
}

export default Topbar
