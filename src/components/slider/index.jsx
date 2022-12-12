import sliderbene  from '../../assets/img/sliderbene.png'
import sliderdior  from '../../assets/img/sliderdior.png'
import slidernyx  from '../../assets/img/slidernyx.png'
import sliderrev  from '../../assets/img/sliderrev.png'
import slidermaybe  from '../../assets/img/slidermaybe.png'

const Slider = () => {
    return (
        <section className="Slider">        
        <div className="Slider"/>    
           <div className="Slider__container"> 
            <input type="radio" id="1" name="image-slide" hidden/>
            <input type="radio" id="2" name="image-slide" hidden/>
            <input type="radio" id="3" name="image-slide" hidden/>
            <input type="radio" id="4" name="image-slide" hidden/>
            <input type="radio" id="5" name="image-slide" hidden/>

            <div className="slide"> 
               <div className="slide__item">
                 <img src={sliderbene}/>
               </div> 
               <div className="slide__item">
                <img src={sliderdior}/>
               </div>              
               <div className="slide__item">
                <img src={slidernyx}/>
               </div>
               <div className="slide__item">
                <img src={sliderrev}/>
               </div>
               <div className="slide__item">
                <img src={slidermaybe}/>
               </div> 
           </div>

            <div className="pagination"> 
               <label className="pagination__item" for="1">
                  <img src={sliderbene}/>
               </label>    
               <label className="pagination__item" for="2">
                  <img src={sliderdior}/>
               </label>    
               <label className="pagination__item" for="3">
                  <img src={slidernyx}/>
               </label>
               <label className="pagination__item" for="4">
                  <img src={sliderrev}/>
               </label>
               <label className="pagination__item" for="5">
                  <img src={slidermaybe}/>
               </label>                            
           </div> 
        </div>        
     </section>
    );
}

export default Slider