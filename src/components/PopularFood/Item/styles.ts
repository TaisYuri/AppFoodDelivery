import styled from 'styled-components/native';

export const Container = styled.View`
    margin-right: 32px;
    margin-left: 0px;
    align-items: center;
    /* height: 272px; */
    width: 192px;
    border-width: 0.2px;
    border-radius: 15px;
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.Text`
    justify-content: center;
    margin-top: 8px;
    font-size: 18px;
`;
export const Calories = styled.View`
    flex-direction: row;
    margin-top: 8px;
    margin-bottom:  20px;
    justify-content: center;
    align-items: center;
`;
export const TextCalories = styled.Text`
    margin-left: 5px;
    font-size: 15px;
    color: #EB5757;
;
`;
export const ViewIcon = styled.View`
    margin-left: 16px;
    margin-right: 16px;
`;

export const Price = styled.View`
    margin-top: 8px;
    margin-bottom:  20px;
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

export const Plus = styled.TouchableOpacity`
    background-color: #FE5150 ;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    margin-bottom: 25px;
    
`;