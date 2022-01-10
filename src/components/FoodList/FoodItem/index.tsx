//import liraries
import React from 'react';
import { Icon } from '../..';
import { IFoodItem } from './type';
import { Container,ViewIcon, Product,  } from './styles';
import { Image } from 'react-native';


export function FoodItem({id, product, image, isSelected, onPress, typeFood}: IFoodItem){
    return (
        <Container>
            <ViewIcon onPress={onPress} isSelected={isSelected} activeOpacity={1}>
                {/* <Icon name={image} width={40} height={40} /> */}
                <Image source={{uri: image}}  style={{width: 40, height: 40}}/>
            </ViewIcon>
         
            <Product>{product}</Product>
        </Container>
    );
};



