import { typeIcon } from "../../Icon/types";

export interface IFoodItem{
    id?: string;
    product: string;
    image: string;
    isSelected?: boolean;
    onPress?: () => void;
    typeFood?: string;
}

export interface IsSelectedClick{
    isSelected?: boolean;
}