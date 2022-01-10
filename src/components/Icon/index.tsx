//import liraries
import React from 'react';
import { View} from 'react-native';

import {  ISvgSelector, SvgSelector } from '../../assets';


export function Icon({...props}: ISvgSelector) {
    return (
        <View>
            <SvgSelector {...props} />
        </View>
    )
};


