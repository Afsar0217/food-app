import { View, FlatList } from "react-native";
import { Stack } from "expo-router";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Menu" }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem {...item} />}
        numColumns={2}
        contentContainerStyle={{gap:10,padding:10}}
        columnWrapperStyle={{gap:10}}
      />
      </View>
  );
}
