import { ProductCard as ProdcuctCardHOC } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from "./ProductButtons";

import { ProductCardHOCPros } from '../interfaces/interfaces';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductButtons } from "./ProductButtons";


export const ProductCard: ProductCardHOCPros = Object.assign(ProdcuctCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;