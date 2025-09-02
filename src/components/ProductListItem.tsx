import { Text, View,Image } from 'react-native';
import { Product } from '../types';

export const defaultPizzaImage='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';


const ProductListItem = ({ name, image, price }: Product) => {
  return (
    <View className='flex flex-col justify-content-start items-center justify-center p-2 bg-white rounded-lg'>
      <Image
        source={{ uri: image || defaultPizzaImage }}
        className='w-80 h-80'
      />
      <Text className='text-xl font-[600]'>{name}</Text>
      <Text className='text-light-tint my-2'>${price}</Text>
    </View>
  )
}



export default ProductListItem;

