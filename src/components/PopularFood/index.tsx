//import liraries
import React from 'react';
import { FlatList, View, } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import { PopularFoodData } from '../../data/PopularFoodData';
import {  ItemPopular } from './Item';

interface IPopularFood{
    typeFood: string;
}

export function PopularFood({typeFood}: IPopularFood){
    const navigation = useNavigation<any>();
    return (
        <View style={{marginBottom: 16}}>
        <FlatList
        data={PopularFoodData}
        renderItem={({item}) => (
            item.type === typeFood ?
            <ItemPopular title={item.title} calories={item.calories} price={item.price} image={item.image} 
                onPress={ () => navigation.navigate('ItemPage', item) }/> : null)} 
        horizontal showsHorizontalScrollIndicator={false}
        ListFooterComponent={ <View style={{marginRight: 16}}/>} />
        </View>
    )
}