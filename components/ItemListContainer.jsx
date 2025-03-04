import "../src/App.css"

function ItemListContainer({text}){
  return(
    <section className="buttonContainer">
    <button>Smash burgers</button>
    <button>Vegan option</button>
    <button>Fries</button>
    <button>Contact us</button>
    <button>{text}</button>
    </section>
  )
}

export default ItemListContainer


//     const buttonClass = "buttons";
//     const buttonText = ["Smash burgers","Vegan option","Fries","Contact us"]
//     return(
//         <section className="buttonContainer">
//           {buttonText.map((text, index) => (
//             <button key={index} className={buttonClass}><span className="buttonText">{text}</span></button>
//           ))}
//         </section>
//     )
// };