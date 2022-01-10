//import liraries
import React from 'react';
import {Image} from 'react-native';
import { Container,Title ,Calories, TextCalories, ViewIcon, Price, TextPrice, TextMoney, Plus} from './styles';
import { IItemPopular } from './types';

import Fire from '../../../assets/svg/Fire.svg'
import PlusMath from '../../../assets/svg/PlusMath.svg'


export function ItemPopular({title,calories, price, image, onPress}: IItemPopular){
    return (
        <Container>
            <Title>{title}</Title>
            <Calories>
                <Fire width={13} height={13} />
                <TextCalories>{calories}</TextCalories>
            </Calories>
            <ViewIcon>
                <Image source={{uri: image}}  style={{width: 100, height: 100}}/>
            </ViewIcon>

            <Price>
                <TextMoney>$ <TextPrice>{price}</TextPrice></TextMoney>
            </Price>
            <Plus onPress={onPress}>
                <PlusMath width={18} height={18} />
            </Plus>
            
        </Container>
    );
};



