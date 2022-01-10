import React from 'react';
import { Image } from 'react-native';
import { ViewCard } from '../../components/ViewCard';
import { Container, Box } from './styles';
import {useNavigation} from '@react-navigation/native';


export function GettingStarted(){
  const navigation = useNavigation<any>();
  
  return (
   <Container > 
     <Image source={require('../../assets/delivery-man.png')} resizeMode='contain' style={{width: '90%', height: '90%',  alignSelf: 'center'}}/>
     <Box>
      <ViewCard onPress={()=> navigation.navigate('Home')} />
     </Box>
   </Container>
  );
};

