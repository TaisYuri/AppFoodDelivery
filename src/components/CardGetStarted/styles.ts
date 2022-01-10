import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #FFF;
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 26px;    
    elevation: 7;
    height: 230px;    
    max-width: 80%;
    ;
`;
export const Title = styled.Text`
    font-size: 24px;
    color: #4F4F4F;
    text-align: center;

`;
export const TextAdd = styled.Text`
    font-size: 24px;
    color: #FE5150;
`;
export const Description = styled.Text`
    font-size: 14px;
    color:#BDBDBD;
    text-align: center;
    margin-top: 8px;

`;
export const ButtonStarted = styled.TouchableOpacity`
    background: #FE5150;
    box-shadow: 3px 1px 4px #000;
    elevation: 7;
    border-radius: 40px;
    margin-top: 16px;
`;
export const TextButton = styled.Text`
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 25px;
    padding-right: 25px;
    text-align: center;
    color: #fff;
    font-size: 20px;
`;
