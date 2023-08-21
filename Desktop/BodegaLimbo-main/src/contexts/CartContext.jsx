import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    if(!JSON.parse(localStorage.getItem("cart"))){
        localStorage.setItem("cart", JSON.stringify([]))
    };
    const cartInit = JSON.parse(localStorage.getItem("cart"));
    const [cart, setCart] = useState(cartInit);
    const addItem = (vino, quantity) => {
        if(cart.length > 0) {
            function finderTitulo(producto) {
                return (producto.Titulo === vino.Titulo)
            };
            let tituloDuplicado = cart.find(finderTitulo);
            if(tituloDuplicado === undefined){
                setCart([...cart, {Titulo: vino.Titulo, imagen: vino.imagen, cantidad: quantity}]);
                localStorage.setItem("cart", JSON.stringify([...cart, {Titulo: vino.Titulo, imagen: vino.imagen, cantidad: quantity}]));
                const tituloFiltrado = cart.filter(producto => producto.Titulo !== vino.Titulo);
                setCart([...tituloFiltrado, {Titulo: vino.Titulo, imagen: vino.imagen, cantidad: quantity}]);
                localStorage.setItem("cart", JSON.stringify([...tituloFiltrado, {Titulo: vino.Titulo, imagen: vino.imagen, cantidad: quantity}]));
            } else {
                const filtroTitulo = cart.filter(producto => producto.Titulo !== vino.Titulo);
                setCart([...filtroTitulo]);
                localStorage.setItem("cart", JSON.stringify([...filtroTitulo]));
            }
        } else {
            setCart([...cart, {Titulo: vino.Titulo, imagen: vino.imagen, cantidad: quantity}]);
            localStorage.setItem("cart", JSON.stringify([...cart, {Titulo: vino.Titulo, imagen: vino.imagen, cantidad: quantity}]));
        }
    };
    const removeItem = (Titulo, cantidad) => {
        let tituloFiltrado = cart.filter(product => product.Titulo !== Titulo);
        setCart([...tituloFiltrado]);
        localStorage.setItem("cart", JSON.stringify([...tituloFiltrado]));
    };
    const vaciarCarrito = () => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    };
    // const totalCompra = () => {
    //     return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    // };
    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    };
    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem,  
            removeItem, 
            vaciarCarrito,
            cantidadCarrito
        }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;