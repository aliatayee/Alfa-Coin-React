import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import { FiSettings, FiMic, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NavbarDetails = ({ coin }) => (
  <>
    <nav className="relative flex flex-wrap bg-white items-center border-b border-slate-200 justify-between px-2  mb-3 nav-layout">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div>
          <Link to="/">

            <span className="font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap text-blue-500 text-3xl">
              <FiChevronLeft />
              {coin.name}
            </span>
          </Link>
        </div>
        <div>
          <i className="float-left mr-5 text-2xl">
            {' '}
            <FiMic />
            {' '}
          </i>
          <i className="float-left text-2xl">
            <FiSettings />
          </i>
        </div>
      </div>
    </nav>
  </>
);
NavbarDetails.propTypes = {
  coin: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.string,
    change: PropTypes.string,
    iconUrl: PropTypes.string,
  }).isRequired,
};
export default NavbarDetails;
