import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from './components/Slider'
// import banner from './data/data.json'
import data from './data/data.json'
import Offers from './components/Offers.jsx'
import Heading from './components/Heading.jsx';
import StarProduct from './components/StarProduct.jsx';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.jsx'
import HotAccessories from './components/HotAccessories.jsx'
import ProductReviews from './components/ProductReviews.jsx';
import Videos from './components/Videos.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import NavOptions from './components/NavOptions.jsx';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle}  home={data.home} audio={data.audio} accessories={data.accessories}/>

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
      </Routes>

      <Routes>
        <Route path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
      </Routes>
      <Routes>
        <Route path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
      </Routes>

      <Routes>
        <Route path='/lifestyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
      </Routes>

      <Routes>
        <Route path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>

      <Heading text="VIDEOS" />

      <Videos videos={data.videos}/>

      <Heading text="IN THE PRESS"/>

      <Banner banner={data.banner.end}/>
      <Footer footer={data.footer}/>



    </Router>
  );
}

export default App;
