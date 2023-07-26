import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addProduct = (product, quantity) => {
        const isInCart = cart.find(prod => prod.id === product.id)

        if (!isInCart) {
            setCart(prev => [...prev, { ...product, quantity }])
            setTotalQuantity(prev => prev + quantity)
            setTotal(prev => prev + (product.precio * quantity))
        } else {
            const cartUpdated = cart.map(prod => {
                if (prod.product.id === product.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                } else {
                    return prod;
                }
            });
            setCart(cartUpdated);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (product.precio * quantity));
        }
    }

    const removeProduct = (id) => {
        const productDelete = cart.find(product => product.id === id)
        const cartUpdated = cart.filter(product => product.id !== id)
        setCart(cartUpdated)
        setTotalQuantity(prev => prev - productDelete.quantity);
        setTotal(prev => prev - (productDelete.precio * productDelete.quantity));
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, addProduct, removeProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}