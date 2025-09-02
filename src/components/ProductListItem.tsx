import { Text, View,Image } from 'react-native';


type ProductListItemProps = {
  name: string;
  image: string;
  price: number;
};

const ProductListItem = ({ name, image, price }: ProductListItemProps) => {
  return (
    <View className='flex flex-col justify-content-start items-center justify-center p-2 bg-white rounded-lg'>
      <Image source={{ uri: image }} className='w-80 h-80' />
      <Text className='text-xl font-[600]'>{name}</Text>
      <Text className='text-light-tint my-2'>${price}</Text>
    </View>
  )
}



export default ProductListItem;

