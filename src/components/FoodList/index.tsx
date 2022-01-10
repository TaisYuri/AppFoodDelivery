import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FoodItem } from './FoodItem';

export interface IFoodList{
  data?: any;
}

export function FoodList({data}: IFoodList){
  // const [currentIndex, setCurrentIndex] = useState(-1);
  
  // return(
  //   <FlatList
  //     data={data}
  //     renderItem={({item, index}) => 
      
  //       <FoodItem id={item.id} product={item.product} image={item.image} 
  //           isSelected={index === currentIndex} 
  //           onPress={() => setCurrentIndex(index)}
  //       />
  //     } 
  //     horizontal showsHorizontalScrollIndicator={false}/>
  // )
}