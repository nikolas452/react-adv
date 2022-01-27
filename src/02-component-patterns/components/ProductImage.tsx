import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import { useContext } from "react";
import styles from '../styles/styles.module.css';

export interface PropsImage {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: PropsImage) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string; 
    if (img) imgToShow = img;
    else if (product.img) imgToShow = product.img;
    else imgToShow = noImage;
    
    return (<img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product image" />)
}