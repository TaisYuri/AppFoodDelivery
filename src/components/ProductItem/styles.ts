import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;  
    margin-top: 15px;
    
`;

export const Product = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const Price = styled.View`
    margin-top: 8px;
    margin-bottom: 25px;
`;
export const TextPrice = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    line-height: 30px;
`;
export const TextMoney = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #EB5757;
    line-height: 35px;    
`;


export const Quantity = styled.View`
    flex-direction: row ;
    margin-top: 30px;
    align-items: flex-start;
`;

export const PressQtd = styled.TouchableOpacity`
    background-color: #FE5150 ;
    border-radius: 2px;
    margin-bottom: 25px;  
`;

export const TextQuantity = styled.Text`
    font-size: 22px;
    margin-right: 16px;  
    margin-left: 16px;  

`;
export const PriceFinaly = styled.Text`
    font-size: 22px;    
    color: #828282;
  
`;