import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <div className='background1'></div>
      </header>
      <div className='about-us'>
        <div>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!</p>
        </div>
        <div>
          <video width="600px" controls>
            <source src='/videos/about-us.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='why-chose-us'>
        <img src='/images/about-us.jpeg'></img>
        <div>
          <h2>Why Chose Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!</p>
        </div>
      </div>
      <div className='explore'>
        <div className='explore-button-1'><button><Link to='/store'>Explore The Store</Link></button></div>
        <div className='explore-button-2'><button><Link to='/contact'>Contact Us Now</Link></button></div>
      </div>
      <footer className="footer">
        <h3>Info</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores!</p>
      </footer>
    </div>
  );
}

export default Home;
