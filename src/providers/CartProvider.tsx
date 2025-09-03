import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  onAddItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
};

export const CartContext = createContext<CartType>({
  items: [],
  onAddItem: () => {},
  updateQuantity: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const onAddItem = (product: Product, size: CartItem["size"]) => {

    const existingItem=items.find((item)=>item.product===product && item.size===size);
    if(existingItem){
        updateQuantity(existingItem.id,1)
        return
    }
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  //Update Qunatity
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedItems = items.map((item) =>
      item.id !== itemId ? item : { ...item, quantity: item.quantity + amount }
    ).filter((item)=>item.quantity>0);
    setItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ items, onAddItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
