import { Link } from 'react-router-dom';
import lrn from '../../assets/img/lrn.png'

const Header = () => {
    return (
    <header className="Header">
        <div className="Header__logo" >
        <Link to="/"> <img src= {lrn}/>
        </Link>
        </div>
        <div className="Header__text" >
            <h6> BEST 5 MAKEUP BRANDS </h6>
        </div>        
    </header>
    );
}

export default Header