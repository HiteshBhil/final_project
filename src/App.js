import './App.css';
import Header from './Components/Header/Header';
import Product from './Containers/Product';
import Arrivals from './Containers/Arrivals';
import Collection from './Containers/Collection';
import Feature from './Containers/Feature';
import Blog from './Containers/Blog';
import Clients from './Containers/Clients';
import Newsletter from './Containers/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Product/>
      <Arrivals/>
      <Collection/>
      <Feature/>
      <Blog/>
      <Clients/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
