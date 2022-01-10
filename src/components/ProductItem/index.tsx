import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Container, PressQtd, Price, PriceFinaly, Product, Quantity, TextMoney, TextPrice, TextQuantity } from "./styles";
import { IProductItem } from "./types";
import Subtract from '../../assets/svg/Subtract.svg'
import PlusMath from '../../assets/svg/PlusMath.svg'

export function ProductItem({image,price, product}: IProductItem){
    const [qtd, setQtd] = useState(1);
    const [priceFinaly, setPriceFinaly] = useState(parseFloat(price));

    
    useEffect(()=> {  
        setPriceFinaly(qtd * parseFloat(price))      
    },[qtd])

    const handleSub = () =>{
        if (qtd !== 0){
            setQtd( qtd - 1)
            setPriceFinaly(qtd * parseFloat(price))
        }
    }

    return(
        <Container>
            <Product>{product}</Product>
            <Price>
                <TextMoney>$ <TextPrice>{price}</TextPrice></TextMoney>
            </Price>
        
            <Image source={{uri: image}}  style={{width: 260, height: 260}}/>
            <Quantity>
               <PressQtd onPress={handleSub}>
                    <Subtract width={27} height={27} /> 
                </PressQtd> 
                <TextQuantity>{qtd}</TextQuantity>
                <PressQtd onPress={()=> setQtd( qtd + 1)  }>
                    <PlusMath width={27} height={27} /> 
                </PressQtd> 
            </Quantity>
            {priceFinaly !== 0 && <PriceFinaly>$ {priceFinaly.toFixed(2)}</PriceFinaly>}
                
        </Container>
    )
}