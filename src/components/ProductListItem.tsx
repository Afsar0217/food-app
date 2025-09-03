import { Text, View,Image,Pressable } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultPizzaImage='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';


const ProductListItem = ({ id, name, image, price }: Product) => {
  return (
    <Link href={`/(tabs)/menu/${id}` as any} asChild>
      <Pressable className='flex-1 justify-content-start items-center justify-center p-2 bg-white rounded-lg max-w-[50%]'>
        <Image
          source={{ uri: image || defaultPizzaImage }}
          className='w-full aspect-square'
        resizeMode='contain'
      />
      <Text className='text-xl font-[600]'>{name}</Text>
      <Text className='text-light-tint my-2 mb-2'>${price}</Text>
    </Pressable>
    </Link>
  )
}



export default ProductListItem;

