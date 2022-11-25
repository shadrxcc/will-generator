import { Link } from 'react-router-dom';
import logo from '../assets/casual.png'


const Homepage = () => {
    return (
      <div className="mt-5">
        <div className="d-flex justify-content-between px-5 text-center text-md-start align-items-center mx-auto flex-column-reverse flex-md-row">
          <span className="d-flex flex-column">
            <h2>Tomorrow is not certain. Generate your will today.</h2>
            <Link to="/will-form">
              <button className="rounded mt-md-5 w-100 text-center border-0 p-3">
                Get Started
              </button>
            </Link>
          </span>
          <img src={logo} className="img-fluid w-50" alt="illustration"></img>
        </div>
      </div>
    );
}

export default Homepage;