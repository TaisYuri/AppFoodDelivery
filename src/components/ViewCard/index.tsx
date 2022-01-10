//import liraries
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Animated, ScrollView, ViewPropsIOS } from 'react-native';
import { CardDelivery } from '../CardDelivery';
import { CardGetStarted } from '../CardGetStarted';



export function ViewCard({onPress}:any){
    const scrollX = useRef(new Animated.Value(0)).current;
    const [scrollViewHeight, setScrollViewHeight] = React.useState(0);

    return (
        <ScrollView horizontal  pagingEnabled showsHorizontalScrollIndicator={false} >        
            
            <CardGetStarted title={'Quick Delivery at your'} 
            description='Home delivery and onlione reservation system for retaurants and cafe'
            titleAdd='Doorstep' click='Get Started'
            onPress={onPress}/>
        
            <CardDelivery title='Order food you like' description='Restaurant of the week' />        
        </ScrollView>
    );
};




