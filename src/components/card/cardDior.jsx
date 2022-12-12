import axios from "axios";
import { useEffect, useState} from "react";


const URLdior = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior'

const CardDior = () => {
    const [dior, setDior] = useState([]);
    
    useEffect (()=>{        
        dataDior();        
    }, [])
    
    const dataDior = async () => {
        try {
            const data = await axios (URLdior);
            console.log(data.data);
            setDior (data.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        dior.map(item => (            
                <div key= {item.id} className="Card__container" >
                        <img src={item.api_featured_image}/>
                        <h4>{item.name.toUpperCase()}</h4>
                        <h6>{item.brand.toUpperCase()}</h6>
                        <p>{item.price}$</p>
                        <a href="https://www.dior.com/es_sam">GO TO STORE</a>
                </div>
            )
        )
    )         
}

export default CardDior