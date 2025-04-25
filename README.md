# 🍔 TheKiddU - E-Commerce de Smash Burgers

Bienvenid@ a **TheKiddU**, tu destino online para las mejores *smash burgers* artesanales. Esta aplicación fue desarrollada con **React + Vite** y diseñada para ofrecer una experiencia moderna, rápida y responsive 🍟🔥.

---

## 🚀 Tecnologías y Librerías

- ⚛️ **React 19** – Para una UI dinámica y basada en componentes.
- ⚡ **Vite** – Build tool ultra-rápido.
- 🎨 **Tailwind CSS 4** – Para un diseño limpio y responsive.
- 🔥 **Firebase 11.6.0** – Backend y base de datos en tiempo real.
- 🧠 **Headless UI** – Accesibilidad y componentes UI sin estilos.
- 💎 **Heroicons** – Íconos SVG hermosos y listos para usar.
- 🌐 **React Router DOM 7.5** – Enrutamiento moderno y sencillo.

---

## 🛠️ Funcionalidades Principales

- 🛒 **Carrito de compras**: Añadí, eliminá o actualizá productos en tu pedido.
- 💳 **Checkout**: Proceso de compra fluido y sencillo.
- 🔗 **Conexión con Firebase**: Productos, usuarios y órdenes gestionados en la nube.
- 📱 **Diseño responsive**: Adaptado a todos los dispositivos.
- 📂 **Menú desplegable**: Navegación intuitiva desde cualquier pantalla.

---

## 📁 Estructura del Proyecto

```bash
src/
├── components/         # Componentes reutilizables (Navbar, Footer, BurgerCard, etc.)
├── pages/              # Páginas principales (Home, Cart, Checkout, etc.)
├── firebase/           # Configuración y funciones de Firebase
├── hooks/              # Custom hooks
├── assets/             # Imágenes, íconos, etc.
├── App.jsx             # Componente raíz
├── main.jsx            # Punto de entrada principal
└── index.css           # Estilos globales con Tailwind



# TO DO
# Agregar y eliminar productos del carrito (Inlcuyendo limpiar todos los productos) DONE
## Hacer el número del ícono dinamico DONE
# Hacer el check out (Interfaz y conexión con firebase(Haciendo el push desde vsc de las ordenes y datos del cliente)) DONE
# una vez enviado el form  que aparezca un alert de Toastify o SweetAlert DONE
# Diseñar la section del checkout y las rutas para llegar a dicah seccion desde "finalizar compra" del carrito DONE
# Una vez hecha la compra, redirigir a la página root y que el carrito se muestre en 0 devuelta (Usando useNavigate) DONE
# Cuando agregas un item al carrito, colocar un toastify DONE
# Hacer las rutas en el componente Menu DONE
# Hacer el deploy en Vercel