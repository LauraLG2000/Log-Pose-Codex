# ⚓ Log Pose Codex API v1.0

**Log Pose Codex** es una API inspirada en el mundo de *One Piece*, diseñada para gestionar información sobre los piratas de los mares. Esta API ofrece operaciones CRUD completas para manipular registros de piratas dentro de una base de datos SQLite.

## 🔧 Backend API - (Funcional)

- **CRUD completo de piratas**
  - `GET /pirates` — Obtiene la lista completa de piratas registrados.
  - `GET /pirates/:id` — Devuelve los detalles de un pirata específico según su identificador.
  - `POST /pirates` — Agrega un nuevo pirata al registro.
  - `PUT /pirates/:id` — Actualiza los datos de un pirata existente.
  - `DELETE /pirates/:id` — Elimina un pirata del registro.

- **Base de datos local SQLite**  
  La API utiliza una base de datos llamada `pirates.db`, incluida en el repositorio para facilitar la instalación y las pruebas locales.

  - **Control de errores**
  - `400 bad-request` — Si en `POST /pirates` no se ha introducido `name`, `nickname`, `bounty` o `crew` se devuelve `There are fields to be filled in.`
  - `404 not found` — Devuelve `the pirate has not been founded`.
  - `409 conflict` — Devuelve `The pirate is already on the hunt and capture.` en caso de introducir un pirata con un nombre que ya está registrado en la base de datos.
  
  - **Estructura modular**  
  Código organizado en controladores, modelos y rutas para favorecer la escalabilidad y el mantenimiento.

  ## 🖼️ Frontend - Páginas HTML (Guías Visuales)

  El proyecto incluye un frontend estático con **4 páginas HTML** que sirven como **maquetas visuales** de cómo funcionaría la interfaz se conecten a la API:

| Página | Función | Estado |
|--------|---------|--------|
| **logPoseCodex.html**  | **Página principal** | 📄 **Guía visual** - Lista de todos los piratas con tarjetas que están almacenados en la base de datos |
| **pirate_data.html** | **Detalle de pirata** | 📄 **Guía visual** - Info completa + botones **Editar pirata** y **Eliminar pirata** |
| **form.html** | **Crear pirata** | 📄 **Guía visual** - Formulario POST completo |
| **modify_data.html** | **Editar pirata** | 📄 **Guía visual** - Pagina que simula como sería la edición con la función `PUT /pirates/:id` de los datos previamente insertados en `POST /pirates`. |
| **DELETE** | **Eliminar pirata** | 🔄 Botón en `pirate_data.html` listo para futura implementación. |