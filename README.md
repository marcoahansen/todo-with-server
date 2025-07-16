# 📝 Todo List com React + Vite + JSON Server

Aplicação de lista de tarefas com rotas, edição, status organizados em colunas e backend simulado com JSON Server.

---

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Lucide Icons](https://lucide.dev/)
- [JSON Server](https://github.com/typicode/json-server)

---

## 📦 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. **Instale as dependências:**

```bash
npm install
```

---

## ▶️ Como rodar localmente

### 1. Inicie o JSON Server (backend fake):

```bash
npm run mock
```

> Isso irá iniciar o JSON Server em: `http://localhost:3001`

---

### 2. Inicie o frontend com Vite:

Em outro terminal:

```bash
npm run dev
```

> O frontend estará em: `http://localhost:5173`

---

## 🗂 Estrutura do Projeto

```
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── routes/
│   └── App.jsx
├── db.json            # banco de dados simulado
├── package.json
└── vite.config.js
```

---

## ✅ Funcionalidades

- Adicionar, editar e deletar tarefas
- Organização por status: pendente, em progresso, concluída
- Interface responsiva e leve
- Backend mock com persistência local via `db.json`

---

## 🧑‍💻 Autor

- [@marcoahansen](https://github.com/marcoahansen)
