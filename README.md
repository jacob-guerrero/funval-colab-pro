# 🍽️ Comidex

**Comidex** es una aplicación web que permite descubrir recetas de cocina de manera sencilla e intuitiva. Utiliza la API pública de [TheMealDB](https://www.themealdb.com/api.php) para mostrar una amplia variedad de platos categorizados por tipo, con la posibilidad de buscar por nombre o explorar una receta al azar.

## 🚀 Características

- 🧭 Navegación simple con React Router.
- 🍲 Vista detallada de cada receta con ingredientes y preparación.
- 🔍 Búsqueda por nombre de platillo.
- 🎲 Receta aleatoria desde la página principal.
- 🎨 Diseño responsive con TailwindCSS.

## 🧱 Estructura del proyecto
```bash
├── public/ # Archivos públicos y assets (favicon, logo, etc.) 
├── src/ 
│ ├── components/ # Componentes reutilizables (Navbar, Cards, etc.) 
│ ├── hooks/ # Custom hooks (uso de API, lógica compartida) 
│ ├── App.jsx # Componente principal con definición de rutas 
│ ├── main.jsx # Punto de entrada de React 
│ └── index.css # Estilos base y configuración de Tailwind
├── index.html
├── README.md
├── package.json
```

## 🛠️ Tecnologías utilizadas

- **React**
- **React Router**
- **Axios** para manejo de solicitudes HTTP
- **TailwindCSS** para estilos rápidos y responsivos
- **TheMealDB API** como fuente de datos

## 🛠️ Live Preview
Puedes usar la aplicacion live haciendo click [aquí](https://comidex.vercel.app/)

## 🤝 Créditos

Desarrollado en colaboración por el equipo de Funval:
- Adriana Aquino
- Miguel Angel Cornejo
- Jacob Guerrero

Datos proporcionados por TheMealDB.
##
¡Gracias por visitar Comidex y buen provecho! 🍝
