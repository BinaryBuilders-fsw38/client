import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [isCartOpen, setIsCartOpen] = useState(false);

const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
};

return (
    <CartContext.Provider value={{ isCartOpen, toggleCart }}>
    {children}
    </CartContext.Provider>
)
}

export const useCart = () => {
return useContext(CartContext);
};
