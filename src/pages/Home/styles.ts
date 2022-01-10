import styled from 'styled-components/native';

export const Container = styled.ScrollView`   
   width: 100%;  
   flex:1;
   margin-top: 20px;      
   margin-left: 16px;   
   
`;
export const Welcome = styled.Text`   
   color: #FE5150 ;
   font-size: 23px ;
`;
export const Text = styled.Text`   
   color: #000 ;
   font-size: 20px ; 
   margin-bottom: 32px;      
`;
export const Banner = styled.View`   
    background-color:#FD8700; 
    width: 90%; 
    height: 150px ; 
    align-self: flex-start;
    border-radius:10px;
    margin-bottom: 32px;
    padding-left: 16px;
    padding-top: 16px;
`;
export const Box = styled.View`   
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
`;
export const SectionIcon = styled.View`  
    top: -20px;
    right: -20px;
`;
export const Propaganda = styled.Text`   
    color: #fff;
    font-size: 14px;
`;
export const NameRestaurant = styled.Text`   
    color: #CD1D00;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 20px;
`;


export const Popular = styled.Text`   
    color: #000 ;
    font-size: 20px ; 
    font-weight: bold ;
    margin-top: 24px;
    margin-bottom: 25px;      
`;

export const ButtonMenu = styled.TouchableOpacity`
    background-color: #FE5150 ;
    opacity: 0.8;
    border-radius: 90px;
    margin-bottom: 10px;
    position: absolute;
    right: 10%;
    bottom: -10px;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content:center ;
    align-items: center;

`;
