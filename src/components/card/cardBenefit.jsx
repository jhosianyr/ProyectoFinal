import axios from "axios";
import { useEffect, useState} from "react";


const URLbenefit = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit'

const CardBenefit = () => {
    const [benef, setBenef] = useState([]);
    
    useEffect (()=>{        
        dataBenef();        
    }, [])
    
    const dataBenef = async () => {
        try {
            const data = await axios (URLbenefit);
            console.log(data.data);
            setBenef (data.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        benef.map(item => (            
                <div key= {item.id} className="Card__container" >
                        <img src={item.api_featured_image}/>
                        <h4>{item.name.toUpperCase()}</h4>
                        <h6>{item.brand.toUpperCase()}</h6>
                        <p>{item.price}$</p>
                        <a href="https://www.benefitcosmetics.com/">GO TO STORE</a>
                </div>
            )
        )
    )         
}

export default CardBenefit

// const CardBenefit = () => {
    
//     const [Benef, setBenef] = useState(null)

//     useEffect (() => {
//         const dataBenefit = async () => {
//             try {
//                 const request = await axios.get (URLbenefit);
//                 console.log(request.data);
//                 return request.data;
                
//             } catch (error) {
//                 console.log(error);
//             } 
//     }

//     dataBenefit().then(data => setBenef(data));

//     },[]) 

//     return ( 
//     );
//   }
  
//   export default CardBenefit
  