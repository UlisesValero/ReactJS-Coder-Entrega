// import "../App.css";
// import { useState, useEffect } from "react";

// const CartPopUp = ({ isOpened, onClose }) => {
//   const [text, setText] = useState("→");

//   useEffect(() => {
//     if (!isOpened) {
//       setText("→");
//     }
//   }, [isOpened]);

//   const handleMouseEnter = () => {
//     setText("→");
//   };

//   const handleMouseLeave = () => {
//     setText("→");
//   };

//   if (!isOpened) return null;

//   return (
//     <section className="fixed right-0 top-0 h-[100%] w-[25rem] bg-[#c0c0c04a]">
//       <div className="">
//         {/* productos en el carrito */}
//       </div>
//       <div className="">
//         {/* boton de pago */}
//       </div>
//       <div
//         className="bg-cyan text-orange w-[7%] h-[10%] absolute top-[50%] flex items-center text-[25px] cursor-pointer closeButton"
//         onClick={onClose}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {text}
//       </div>
//     </section>
//   );
// };

// export default CartPopUp;
