# 🌐 CRUD Asíncrono con React, Axios y JSON Server

Este proyecto Fullstack simula la interacción de una aplicación **React** con una API externa para realizar las operaciones básicas de persistencia de datos (CRUD). Utiliza **Axios** para las peticiones HTTP y **JSON Server** para montar una API REST simulada.

Este desarrollo fue realizado como parte de la práctica avanzada de Oplesk Academy, enfocándose en el manejo de la asincronía.

---

## 🚀 Funcionalidades y Endpoints

La aplicación gestiona una entidad (ej. Usuarios o Tareas) y se comunica con la API simulada utilizando los métodos HTTP correspondientes:

| Operación CRUD | Método HTTP | Endpoint (Simulado) | Descripción |
| :--- | :--- | :--- | :--- |
| **C**reate (Crear) | `POST` | `/api/users` | Envía un nuevo objeto de usuario al servidor. |
| **R**ead (Leer) | `GET` | `/api/users` | Solicita la lista completa de usuarios. |
| **U**pdate (Actualizar) | `PUT` o `PATCH` | `/api/users/:id` | Modifica un registro existente. |
| **D**elete (Eliminar) | `DELETE` | `/api/users/:id` | Elimina un registro específico del servidor. |

---

## 💻 Stack Tecnológico Utilizado

Este proyecto destaca por la integración de herramientas específicas para la comunicación cliente-servidor:

| Categoría | Tecnología | Rol en el Proyecto |
| :--- | :--- | :--- |
| **Framework UI** | **React** | Construcción de la interfaz de usuario y manejo del estado. |
| **Librería HTTP** | **Axios** | Cliente HTTP basado en Promesas para realizar peticiones (GET, POST, etc.) a la API REST. |
| **Simulación Backend** | **JSON Server** | Levanta una API REST simple y rápida a partir de un archivo JSON, simulando un servidor real. |
| **Gestión de Estado** | **React Hooks** | Uso de `useState` para datos y `useEffect` para el ciclo de vida de las peticiones. |

---

## ⚙️ Arquitectura y Puntos Clave de Aprendizaje

Este proyecto fue crítico para consolidar el entendimiento del flujo de datos en aplicaciones modernas:

* **Asincronía (Promises):** Implementación de funciones asíncronas (`async/await`) dentro de los componentes para manejar las respuestas de red.
* **Manejo de Carga y Errores:** Gestión del estado de la interfaz durante las peticiones (`isLoading`, `hasError`) para ofrecer una mejor experiencia de usuario.
* **Comunicación Cliente-Servidor:** Demostración de cómo se traduce una acción del usuario (ej. clic en "Eliminar") en una petición HTTP (`DELETE`) y cómo se actualiza el estado de React con la respuesta del servidor.
* **Interacción con API REST:** Comprensión de los códigos de estado HTTP y cómo reaccionar a ellos.

---

## 🎬 Cómo Ejecutar el Proyecto

Para ejecutar este proyecto, se requiere iniciar tanto la aplicación React como el JSON Server.

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Girouetten21/CRUD-React-Axios-Json.git](https://github.com/Girouetten21/CRUD-React-Axios-Json.git)
    cd CRUD-React-Axios-Json
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    # o 
    yarn install
    ```
3.  **Iniciar el JSON Server (Mock API):**
    Asegúrate de tener `json-server` instalado globalmente o como dependencia de desarrollo.
    ```bash
    # Comando específico para levantar el servidor
    npm run api  # o el comando definido en el package.json
    ```
4.  **Ejecutar la aplicación React:**
    ```bash
    npm start
    # o
    yarn start
    ```
    La aplicación estará disponible en `http://localhost:3000`.

---
**Desarrollado por:** [@Girouetten21](https://github.com/Girouetten21)
