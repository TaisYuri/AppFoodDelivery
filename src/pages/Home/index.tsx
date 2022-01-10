import React, { useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FoodItemData } from '../../data/FoodItemData';
import { FoodItem } from '../../components/FoodList/FoodItem';
import { PopularFood } from '../../components/PopularFood';
import { Arrowright } from '../../components/Icon/Arrow-right';
import { Heart } from '../../components/Icon/Heart';
import { Seek } from '../../components/Icon/Seek';

import { Container, ButtonMenu,  Text, Popular ,Welcome, Banner, Box, SectionIcon, Propaganda, NameRestaurant} from './styles';

export const Width = Dimensions.get('window').width;
export const Heigth = Dimensions.get('window').height;


export function Home(){
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [productSelected, setProductSelected] = useState('');

    return (
        <Container >
            <Welcome>Hello!</Welcome>
            <Text>Find your Delicious Food</Text>

            <Banner>
              <Heart width={20} height={20} />  
              <Box>
                <View>
                    <Propaganda>Restaurant of the week</Propaganda>
                    <NameRestaurant>Hengbok Restaurant</NameRestaurant>
                    <Arrowright width={24} height={24} />  
                </View>
                <SectionIcon>
                    <Seek width={148} height={105} />  
                </SectionIcon>
              </Box>
            </Banner>                
  
            <View style={{ width: '93%' }}>
            <FlatList
                data={FoodItemData}
                renderItem={({item, index}) => 
      
                <FoodItem id={item.id} product={item.product} image={item.image} 
                    isSelected={index === currentIndex} 
                    onPress={() => {setCurrentIndex(index), setProductSelected(item.product);
                    }}
                />
                } 
                horizontal showsHorizontalScrollIndicator={false}/>
            

            <Popular>Popular</Popular>
            
            <PopularFood typeFood={productSelected}/>
            </View>
          
            <ButtonMenu >
                <Entypo name="shopping-cart" size={24} color="#fff" />
            </ButtonMenu>
        </Container>
    );
};
