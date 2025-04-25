import { createContext, useContext, useState, useEffect } from "react";
import { EscKeyListener } from "../../lib/escKeyListener";

const CartContext = createContext();

export const UseCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [isOpened, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const toggleCart = () => setIsOpen(prev => !prev);
    
    const openCart = () => setIsOpen(true);
    
    const closeCart = () => setIsOpen(false);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const addToCart = (product, quantity) => {
        if (quantity === 0) return;

        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity }];
            }
        });
    };
    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([])
    }

    const values = {
        isOpened,
        toggleCart,
        closeCart,
        openCart,
        cartItems,
        addToCart,
        removeItem,
        cartCount,
        clearCart
    }
    


    return (
        <CartContext.Provider value={values}>
            {children}
            <EscKeyListener onEsc={closeCart} />
        </CartContext.Provider>
    );
};
