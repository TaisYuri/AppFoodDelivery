import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #FFF;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 26px;    
    elevation: 7;
    height: 230px;
    max-width: 80%;
`;
export const Title = styled.Text`
    font-size: 24px;
    color: #FE5150;
    text-align: center;
`;

export const Description = styled.Text`
    font-size: 14px;
    color:#BDBDBD;
    text-align: center;
    margin-top: 8px;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    resize-mode: contain;
`;




