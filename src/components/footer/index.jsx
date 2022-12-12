import lcn from '../../assets/img/lcn.png'
import lbenefit  from '../../assets/img/lbenefit.png'
import ldior  from '../../assets/img/ldior.png'
import lnyx  from '../../assets/img/lnyx.png'
import lrevlon  from '../../assets/img/lrevlon.png'
import lmaybe  from '../../assets/img/lmaybe.png'
import logofb  from '../../assets/img/logofb.png'
import logoinst  from '../../assets/img/logoinst.png'
import logotwt  from '../../assets/img/logotwt.png'

const Footer = () => {
    return (
        <footer className="Footer">
            <div >
                <img className="Footer__logo" src= {lcn}/>
            </div>

            <div className="Footer__brands">
                <p>ASSOCIATED STORES</p>
                <div className="Footer__brands--container">
                 <a href="https://www.benefitcosmetics.com/">
                    <img src={lbenefit}/>
                 </a>
                 <a href="//www.dior.com/es_sam">
                    <img src={ldior}/>
                 </a>
                 <a href="//www.nyxcosmetics.es/">
                    <img src={lnyx}/>
                 </a>
                 <a href="https://www.revlonprofessional.com/es/#">
                    <img src={lrevlon}/>
                    </a>
                 <a href="https://www.wetnwildbeauty.com/">
                    <img src={lmaybe}/>
                 </a>
                </div>
            </div>

            <div className="Footer__socialmedia">
                <p>FOLLOW US</p>
                <div className="Footer__socialmedia--container">
                <a href="#"><img src={logofb}/></a>
                <a href="#"><img src={logoinst}/></a>
                <a href="#"><img src={logotwt}/></a>
                </div>
            </div>
      </footer>    
    )
}

export default Footer