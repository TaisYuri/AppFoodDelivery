import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { ItemPage } from '../pages/ItemPage';
import { Home } from '../pages/Home';
import {GettingStarted} from '../pages/GettingStarted';
import { View } from 'react-native';
import { ContainerDrawer, Image } from './styles';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='GettingStarted' component={GettingStarted} options={{ headerShown: false}}/>
            <Stack.Screen name='Home' component={DrawerRoutes} options={{ headerShown: false}}/>
            <Stack.Screen name='ItemPage' component={ItemPage} options={{ title: ''}}/>
        </Stack.Navigator>
    )
}

export function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{drawerActiveTintColor: '#FE5150', drawerLabelStyle: {fontSize: 20}}} drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen name='Homes' component={Home}  options={{
                title:'Lets Eat 😋',
                headerTintColor: '#FE5150',                 
                drawerIcon: ({focused}) =>  <AntDesign name="home" size={24} color= {focused ? '#FE5150': '#000' } />      
            }} />
            <Drawer.Screen name='GettingStarted' component={GettingStarted} options={{headerShown: false,
                title: 'Sair',
                drawerIcon: ({focused}) =>  <MaterialIcons name="exit-to-app" size={24} color= {focused ? '#FE5150': '#000' } />
                
            }}/>
        </Drawer.Navigator>
    )
}

const CustomSidebarMenu = (props:any) => {
    return (
        <View>
            <ContainerDrawer>
                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1138/1138035.png'}} />
            </ContainerDrawer>
            <DrawerItemList {...props} />
        </View>
    )

}