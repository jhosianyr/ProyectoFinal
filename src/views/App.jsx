
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar'
import Header from '../components/header';
import Footer from '../components/footer';



const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <NavBar/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App
