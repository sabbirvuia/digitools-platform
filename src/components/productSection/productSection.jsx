import { use } from 'react';
import SingleProduct from './singleProduct';


const ProductSection = ({productPromise,carts, setCarts, isClicked, setIsClicked}) => {
    const productData = use(productPromise);
    // console.log(productData);
    
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 p-8 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                productData.map(product=> <SingleProduct carts={carts} setCarts={setCarts} isClicked={isClicked} setIsClicked={setIsClicked} key={product.id} product={product}></SingleProduct>)
            }
        </div>
    );
};

export default ProductSection;