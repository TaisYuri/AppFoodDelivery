//import liraries
import React from 'react';

import { Box, Container, Text } from './styles';
import { IInformationPreparation } from './types';
import Star from '../../assets/svg/Star.svg'
import Fire from '../../assets/svg/Fire.svg'
import Time from '../../assets/svg/Time.svg'

export function InformationPreparation({star, calories, time}:IInformationPreparation){
    return (
        <Container >
            <Box>
                <Star width={25} height={25} />
                <Text>{star}</Text>
            </Box>
            <Box>
                <Fire width={25} height={25} />
                <Text>{calories}</Text>
            </Box>            
            <Box>
                <Time width={25} height={25} />
                <Text>{time}</Text>
            </Box>            
        </Container>
    );
};

