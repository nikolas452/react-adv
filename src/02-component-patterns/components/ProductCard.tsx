import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';

import styles from '../styles/styles.module.css';
import { ProductContextProductCardProps, ProductCardProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProductCardProps);
const { Provider } = ProductContext;






export const ProductCard = ({children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider value={{ counter, increaseBy, product }}>
        <div className={styles.productCard}> 
            { children }
            </div>            
        </Provider>
    )
};

