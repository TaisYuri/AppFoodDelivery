//import liraries
import React from 'react';
import { Dimensions } from 'react-native';
import { ButtonStarted, Container, Description,TextAdd, TextButton, Title } from './styles';
import { ICardGetStarted } from './types';

export const Width = Dimensions.get('window').width;
export const MarginPercentage = Width * .2;

export function CardGetStarted({title, description,titleAdd, click, onPress}:ICardGetStarted){
    return (
        <Container style={{width:Width, marginLeft: MarginPercentage / 2, marginRight: MarginPercentage / 2 }}>
            <Title>{title}<TextAdd> {titleAdd}</TextAdd></Title>
            <Description>{description}</Description>
            <ButtonStarted onPress={onPress}>
                <TextButton>{click}</TextButton>
            </ButtonStarted>
        </Container>
    );
};



