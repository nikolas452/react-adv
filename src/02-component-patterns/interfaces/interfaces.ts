import { PropsButtons } from "../components/ProductButtons";
import { PropsImage } from "../components/ProductImage";
import { PropsTitle } from "../components/ProductTitle";
import { ProductCardProps } from "../components/ProductCard";



export interface Product {
    id: string;
    title: string;
    img?: string
}
export interface ProductContextProductCardProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCPros {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ( Props: PropsTitle) => JSX.Element;
    Image: ( Props: PropsImage) => JSX.Element;
    Buttons: (Props: PropsButtons) => JSX.Element;
}