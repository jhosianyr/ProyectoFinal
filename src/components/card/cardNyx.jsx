import axios from "axios";
import { useEffect, useState} from "react";


const URLnyx = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx'

const CardNyx = () => {
    const [nyx, setNyx] = useState([]);
    
    useEffect (()=>{        
        dataNyx();        
    }, [])
    
    const dataNyx = async () => {
        try {
            const data = await axios (URLnyx);
            console.log(data.data);
            setNyx (data.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        nyx.map(item => (            
                <div key= {item.id} className="Card__container" >
                        <img src={item.api_featured_image}/>
                        <h4>{item.name.toUpperCase()}</h4>
                        <h6>{item.brand.toUpperCase()}</h6>
                        <p>{item.price}$</p>
                        <a href="https://www.nyxcosmetics.es/">GO TO STORE</a>
                </div>
            )
        )
    )         
}

export default CardNyx