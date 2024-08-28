import { useEffect, useState } from 'react';

class Card{
    constructor(id,name,price,img,desc,cat){
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.desc = desc;
        this.cat = cat;
    }

    render(){
        return <h1>{this.props.id}</h1>   
    }
    
}

const createArray = (productDetails)=>{
    let array = [];
    productDetails.map((prod,index)=>{
        const temp = new Card(prod.id, prod.title, prod.price, prod.image, prod.description, prod.category);
        array.push(temp)
    });
    return array;
}

const CardArray = ()=>{
    const [productDetails, setProductDetails] = useState(null);
    const [array,setArray] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("https://fakestoreapi.com/products", { mode: "cors" });
                const result = await response.json();
                setProductDetails(result);
                setArray(createArray(result))

            } catch(error){
                console.error(error);
            }
            };
        fetchData();
    }, []);

    
    
    return (
        (productDetails && (
        <div>
            
            <p>{array[2].name}</p>
        </div>
        )) || <h1>Loading...</h1>
    );
}

export {CardArray};