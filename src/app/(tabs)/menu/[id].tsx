import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];



const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { onAddItem } = useCart();

  const product = products.find((item) => item.id.toString() === id);

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("L");

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const addToCart = () => {
    onAddItem(product, selectedSize);
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Stack.Screen options={{ title: product.name }} />
      <Image
        className="w-[100%] aspect-square"
        resizeMode="contain"
        source={{ uri: product.image || defaultPizzaImage }}
      ></Image>

      <Text className="text-md">Select Size</Text>
      <View className="flex flex-row justify-around">
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            className={`flex w-[50px] aspect-square rounded-[25px] items-center justify-center my-4 ${
              selectedSize === size ? "bg-[#DCDCDC]" : "bg-white"
            }`}
          >
            <Text className="text-xl font-[500]">{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text className="font-bold text-2xl mt-auto">
        Price : ${product.price}
      </Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

export default ProductDetailsScreen;
