import { Platform, StatusBar, Text, View } from "react-native";
import {useCart } from '@/src/providers/CartProvider';

const CartScreen = () => {
    const { items } = useCart();
    return (
        <View>
        <Text>Cart Items lengths is : {items.length}</Text>
        <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'} />
        </View>
        
    )
}

export default CartScreen;