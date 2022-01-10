import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';

import { InformationPreparation } from '../../components/InformationPreparation';
import { ProductItem } from '../../components/ProductItem';
import { Container, ButtonAdd, TextButton } from './styles';
import { View } from 'react-native';


export function ItemPage(){
    const route = useRoute<any>();
    const navigation = useNavigation<any>();

    return (
        <Container >
            <ProductItem image={route.params?.image} price={route.params?.price} product={route.params?.title}  />
            <View style={{marginTop: 60}}>

                <InformationPreparation star='4.9' calories={route.params?.calories} time='20 - 30 min' />          
            </View>
         
            <ButtonAdd onPress={() => navigation.navigate('Home')}>
                <TextButton>ADD TO CART</TextButton>
            </ButtonAdd>
        </Container>
    );
};
