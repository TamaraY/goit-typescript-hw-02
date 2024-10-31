import React from "react";
import { createRoot } from "react-dom/client"; // Правильний імпорт createRoot з react-dom/client
import App from "./components/App/App"; // Зверни увагу, що файл має бути з розширенням .tsx, якщо це TypeScript файл
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
