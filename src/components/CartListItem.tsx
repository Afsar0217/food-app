import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { CartItem } from "../types";
import { Link } from "expo-router";
import { defaultPizzaImage } from "./ProductListItem";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "../providers/CartProvider";

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const {updateQuantity} = useCart();
  return (
    <View className="bg-white rounded-xl p-3 flex-row items-center">
      <Image
        source={{ uri: cartItem.product.image || defaultPizzaImage }}
        className="w-[75px] aspect-square self-center mr-2.5"
        resizeMode="contain"
      />
      <View className="flex-1">
        <Text className="font-medium text-base mb-1.5">
          {cartItem.product.name}
        </Text>
        <View className="flex-row space-x-1.5">
          <Text className="text-blue-500 font-bold mr-2">
            ${cartItem.product.price.toFixed(2)}
          </Text>
          <Text className="text-gray-500">
            Size: <Text className="text-gray-900 font-semibold">{cartItem.size}</Text>
          </Text>
        </View>
      </View>
      <View className="flex-row items-center justify-center my-3 p-4 rounded-lg bg-gray-100 space-x-5 mr-3">
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, -1)}
          name="minus"
          color="gray"
          style={{ padding: 5 }}
        />
        <Text className="font-medium text-lg">{cartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, 1)}
          name="plus"
          color="gray"
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
};


export default CartListItem;
