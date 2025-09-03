import { FlatList, Platform, StatusBar, Text, View } from "react-native";
import {useCart } from '@/src/providers/CartProvider';
import CartListItem from "../components/CartListItem";

const CartScreen = () => {
    const { items } = useCart();
    return (
        <View>
        <FlatList data={items}
         renderItem={({item})=><CartListItem
          cartItem={item}
          />}
          contentContainerStyle={{padding:10,gap:10}}
          />

        <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'} />
        </View>
        
    )
}

export default CartScreen;