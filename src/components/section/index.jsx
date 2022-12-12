import article1 from './../../assets/img/article1.jpg';
import article2 from './../../assets/img/article2.jpg';
import article3 from './../../assets/img/article3.jpg';

const Section = () => {
    return (
        <article className="Article" >
         <h5>IMPORTANCE OF MAKEUP</h5>
         <p> People who implement cosmetic products infer that makeup is important since it can change the way others see us.
            Likewise, makeup supports the self-esteem of the person who uses it, granting security and highlighting the natural beauty.</p>
            <div className="Article__img">
            <img src={article1}/>
            <img src={article3}/>
            </div>
            <p>In addition, professionals in these areas say that value is detracted from being well dressed and groomed, spectacularly combed and not having makeup, since this implement enlivens and complements anyone's look. For this reason we understand that makeup is so that the person who uses it can look much better, answering this about the importance of makeup </p>
            
        </article>
    );
}

export default Section