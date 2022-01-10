//import liraries
import React from 'react';
import { Dimensions } from 'react-native';

import { Container, Description,Title, Image } from './styles';
import { ICardDelivery } from './types';


export const Width = Dimensions.get('window').width;
export const MarginPercentage = Width * .2;

export function CardDelivery({title, description}:ICardDelivery){
    return (
        <Container style={{width:Width, marginLeft: MarginPercentage / 2, marginRight: MarginPercentage / 2 }}>
            <Image source={require('../../assets/Layer.png')} />
            <Title>{title}</Title>
            <Description>{description}</Description>            
        </Container>
    );
};''



