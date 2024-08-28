import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import '../styles/card.css';

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
        return(
            <>
                <h1>{this.name}</h1>
                <span><img className='card-image' src={this.img} alt='product image'/></span>
                <ul>
                    <li><b>Price:</b> ${this.price}</li>
                    <li><b>Category:</b> {this.cat}</li>
                </ul>
                <div className='card-checkout'>
                    <label htmlFor={`quantity${this.id}`}>Quantity:&emsp;</label>
                    <input type='number' min='0' max='100' id={`quantity${this.id}`} defaultValue={0}></input>
                    <button>Add to cart</button>
                </div>
                
            </>
        );   
    }
    
}

function DisplayCards(props){
    const renderedOutput = props.Array.map(item => <div className='card' key={item.id}>{item.render()}</div>);
  
      return (
        <>
          {renderedOutput}
        </>
      );
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
        <div className='content'>
            <DisplayCards Array={array} />
        </div>
        )) || <h1>Loading...</h1>
    );
}

export {CardArray};