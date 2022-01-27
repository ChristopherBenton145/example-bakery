import '../styles/Contact.scss';
import Navbar from './Navbar';

function Contact() {
  return (
    <div>
      <header>
        <Navbar />
        <div className='background3'></div>
      </header>
      <div className='contact-us'>
        <div>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!</p>
        </div>
        <div>
          <video width="600px" controls>
            <source src='/videos/contact-us.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <footer className="footer">
        <h3>Info</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores!</p>
      </footer>
    </div>
  );
}

export default Contact;
