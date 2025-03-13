import { useEffect } from "react";

const EscKeyListener = ({ onEsc }) => {
useEffect(()=> {
    const handleKeyDown = (event) => {
        if (event.key === "Escape"){
            onEsc();
        }
    };
    document.addEventListener("keydown", handleKeyDown);

return () => {
    document.removeEventListener("keydown", handleKeyDown);
};
}, [onEsc]);
return null;
}

export default EscKeyListener


