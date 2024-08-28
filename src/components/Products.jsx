import { CardArray } from './Card';

const Products = () => {

    
    //const bag = new Card('2','FANcy DocHolder',3,'r','nice','bag');

    return(
        <>
            <h1 style={{paddingLeft:`${5}rem`}}>Shop All</h1>
            <div>{CardArray()}</div>
        </>
    );
}

export default Products;