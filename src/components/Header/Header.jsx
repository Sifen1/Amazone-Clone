import React, { useContext } from 'react';
import { BsCart2, BsSearch } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '..//DataProvider/DataProvider';


const Header = () => {
  const [{basket}, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) =>{
    return item.amount + amount
  },0)

  return (
    <>
    <section className={classes.fixed}>
      <nav className={classes.nav_wrapper}>
        <div className={classes.header_container}>
          {/* Logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
              </Link>
          </div>

          {/* Delivery Section */}
          <div className={classes.delivery}>
            <span>
            <IoLocationSharp />
            </span>
            <div>
              <p>Delivered to</p>
              <span>ETHIOPIA</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={25} />
          </div>

          {/* Account & Orders */}
          <div className={classes.order_container}>
            <a href="#" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
                alt="flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            <Link to="/">
              <p>Sign In<br />
              Account & List
              </p>
            </Link>

            <Link to="/Orders">
              <p>Returns <br/>& Orders
              </p>
            </Link>

            {/* Shopping Cart */}
            <Link to="/Cart" className={classes.cart}>
              <BsCart2 size={35} />
              <span>{totalItem}</span>
              </Link>
          </div>
        </div>
      </nav>

      {/* Lower Navigation */}
      <div className={classes.lower_container}>
        <ul>
          <li>All</li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
      </section>
    </>
  );
};

export default Header;

