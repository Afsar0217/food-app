import { FlatList, Platform, StatusBar, Text, View } from "react-native";
import {useCart } from '@/src/providers/CartProvider';
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
    const { items,total } = useCart();
    return (
        <View className="p-3">
        <FlatList data={items}
         renderItem={({item})=><CartListItem
          cartItem={item}
          />}
          contentContainerStyle={{gap:10}}
          />


        <Text className="my-2 text-md ml-2">Total Price : <Text className="font-bold text-lg"> ${total.toFixed(2)}</Text></Text>
        <Button text="Checkout" />

        {/* <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'} /> */}
        </View>
    )
}

export default CartScreen;