import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Login.module.css";
import { useState } from "react";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credenciais, setCredenciais] = useState({
    user: "",
    password: "",
  });
  const handleChange = (e) => {
    setCredenciais({ ...credenciais, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, password } = credenciais;
    const success = login(user, password);
    if (success) {
      navigate("/");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <label className={styles.label}>
          Usuário:
          <input
            type="text"
            name="user"
            value={credenciais.user}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Senha
          <input
            type="password"
            name="password"
            value={credenciais.password}
            onChange={handleChange}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};
