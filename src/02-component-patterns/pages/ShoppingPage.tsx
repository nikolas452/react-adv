import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components/index';


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection:'row', flexWrap: 'nowrap' }}>
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title={'Hola Mundo'} />
                    <ProductCard.Buttons/>
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle />
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    )
};
