import { useContext } from "react";
import { API_URL } from "../api_url";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Cookies from "universal-cookie";
import { useEffect } from "react";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_URL + "users/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: e.target.email.value,
          password: e.target.password.value,
        },
      }),
    })
      .then((response) => {
        const authHeader = response.headers.get("Authorization");
        if (!response.ok) {
          throw new Error("Erreur lors de la requête");
        }
        cookies.set("token", authHeader, { path: "/" });
        return response.json();
      })
      .then((data) => {
        if (data.user) {
          setCurrentUser(data.user);
          navigate("/");
        } else {
          console.log("Erreur");
        }
      })

      .catch((error) => console.error(error));
  };
  return (
    <>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email </label>
        <input type="text" name="email" id="email" />

        <label htmlFor="password"> Mot de Passe </label>
        <input type="password" name="password" id="password" />

        <button type="submit"> Se connecter </button>
      </form>
    </>
  );
};

export default Login;
