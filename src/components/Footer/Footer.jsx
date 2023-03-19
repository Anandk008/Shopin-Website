import "./Footer.scss";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaMobile,
} from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            fuga ratione excepturi tempora eius, ab unde rerum! Excepturi
            aperiam repellendus, nostrum minima voluptate ut quas, doloribus
            optio, nulla dignissimos quia!
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Walchand College of Engineering, Sangli, Maharashtra, 413102
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone : 0123 456 789</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email : Store@Shopy.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theater</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privecy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact Us</div> 
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                Shopy Created by Beta Army Coders. Premium E-Commerce Solutions.
            </div>
            <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
