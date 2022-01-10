import styled from 'styled-components/native';
import { IsSelectedClick } from './type';

export const Container = styled.View`   
   justify-content: center;
   align-items: center;
   margin-right: 4px;   
`;

export const ViewIcon = styled.TouchableOpacity<IsSelectedClick>`
  border-width: ${(props) => (props.isSelected ? 3: 0)}px;
  border-color: ${(props) => (props.isSelected ? '#FE5150' : '#fff')};
  margin-left: 5px;
  margin-right: 4px;
  padding: 16px;
  background-color: #fff;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  elevation: 10;
`;

export const Product = styled.Text`
    text-align: center;
    margin-left: 8px;
    margin-right: 6px;
    margin-top: 5px;
`;