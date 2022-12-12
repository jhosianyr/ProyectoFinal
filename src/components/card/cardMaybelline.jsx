import axios from "axios";
import { useEffect, useState} from "react";


const URLmaybelline = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'

const CardMaybelline = () => {
    const [maybe, setMaybe] = useState([]);
    
    useEffect (()=>{        
        dataMaybe();        
    }, [])
    
    const dataMaybe = async () => {
        try {
            const data = await axios (URLmaybelline);
            console.log(data.data);
            setMaybe (data.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        maybe.map(item => (            
                <div key= {item.id} className="Card__container" >
                        <img src={item.api_featured_image}/>
                        <h4>{item.name.toUpperCase()}</h4>
                        <h6>{item.brand.toUpperCase()}</h6>
                        <p>{item.price}$</p>
                        <a href="https://www.maybelline.cl/">GO TO STORE</a>
                </div>
            )
        )
    )         
}

export default CardMaybelline