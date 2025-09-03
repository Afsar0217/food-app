import { createContext, PropsWithChildren, ReactNode, useContext, useState } from "react"
import { CartItem, Product } from "../types";
import products from "@/assets/data/products";

type CartType = {
    items: CartItem[];
    onAddItem: (product:Product,size:CartItem['size']) => void;
};

export const CartContext = createContext<CartType>({
    items: [],
    onAddItem: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const[items,setItems]=useState<CartItem[]>([]);

    const onAddItem=(product:Product,size:CartItem['size'])=>{
        const newCartItem:CartItem={
            id:'1',
            product,
            product_id:product.id,
            size,
            quantity:2,
        };

        setItems([newCartItem,...items])
    }
    return (
        <CartContext.Provider value={{ items, onAddItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart=()=>useContext(CartContext)