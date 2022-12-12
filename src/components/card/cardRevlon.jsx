import axios from "axios";
import { useEffect, useState} from "react";


const URLrevlon = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=revlon'

const CardRevlon = () => {
    const [revlon, setRevlon] = useState([]);
    
    useEffect (()=>{        
        dataRevlon();        
    }, [])
    
    const dataRevlon = async () => {
        try {
            const data = await axios (URLrevlon);
            console.log(data.data);
            setRevlon (data.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        revlon.map(item => (            
                <div key= {item.id} className="Card__container" >
                        <img src={item.api_featured_image}/>
                        <h4>{item.name.toUpperCase()}</h4>
                        <h6>{item.brand.toUpperCase()}</h6>                        
                        <p>{item.price}$</p>
                        <a href="https://www.revlonprofessional.com/es/#">GO TO STORE</a>
                </div>
            )
        )
    )         
}

export default CardRevlon