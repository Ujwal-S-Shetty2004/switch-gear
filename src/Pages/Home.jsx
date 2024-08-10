import React from 'react';
import './Home.css';
import home from "../Images/home.jpeg"

const Home = () => {
  return (
    <div className="home-page">
      <header className="top-bar">
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="search" placeholder="Search products..." />
          <button>Search</button>
        </div>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Home & Garden</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Toys</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Health</a></li>
            <li><a href="#">Automotive</a></li>
            <li><a href="#">Groceries</a></li>
            <li><a href="#">Office Supplies</a></li>
            <li><a href="#">Pet Supplies</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Video Games</a></li>
          </ul>
          <h2>Filters</h2>
          <ul>
            <li><a href="#">Price: Low to High</a></li>
            <li><a href="#">Price: High to Low</a></li>
            <li><a href="#">Brand: A-Z</a></li>
            <li><a href="#">Customer Ratings</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Discounts</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Limited Edition</a></li>
            <li><a href="#">Clearance</a></li>
          </ul>
        </aside>
        <main>
          <section className="hero" style={{backgroundImage:`url(${home})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
           
            <div className="hero-text">
              <h1>Welcome to Our Store!</h1>
              <p>Find the latest deals and discounts on our products</p>
              <button>Shop Now</button>
            </div>
          </section>
          <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-grid">
              <div className="product">
                <img src="product1.jpg" alt="Product 1" />
                <h3>JBL Wave Buds in-Ear Wireless Earbuds (TWS) with Mic,App for Customized Extra Bass Eq,32 Hours Battery&Quick Charge,Ip54 Water&Dust Resistance,Ambient Aware&Talk-Thru,Google Fastpair (Black)</h3>
                <p>-44% ₹2,254</p>
              </div>
              <div className="product">
                <img src="product2.jpg" alt="Product 2" />
                <h3>Apple iPhone 15 (128 GB) - Blue</h3>
                <p>₹70,900 M.R.P: ₹79,600 (11% off)</p>
              </div>
              <div className="product">
                <img src="product3.jpg" alt="Product 3" />
                <h3>OnePlus 12R (Iron Gray, 16GB RAM, 256GB Storage)</h3>
                <p>-2% ₹44,999</p>
              </div>
              <div className="product">
                <img src="product4.jpg" alt="Product 4" />
                <h3>Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74L (Black)</h3>
                <p>-45% ₹54,990</p>
              </div>
              <div className="product">
                <img src="product5.jpg" alt="Product 5" />
                <h3>Fastrack Limitless Glide Advanced UltraVU HD Display|BT Calling|Advance Chipset|85+ Sports Modes & Watchfaces|Voice Assistant|24 * 7 Health Suite|IP67 Smartwatch</h3>
                <p>-61% ₹1,099</p>
              </div>
              <div className="product">
                <img src="product6.jpg" alt="Product 6" />
                <h3>Casio G-Shock Analog-Digital Black Dial Men's Watch GA-140-1A4DR(G976)</h3>
                <p>-14% ₹7,556</p>
              </div>
              <div className="product">
                <img src="product7.jpg" alt="Product 7" />
                <h3>Fastrack Mens Trendies Quartz Analog Black Dial Silicone Strap Watch for Guys-NS38058PP03</h3>
                <p>-20% ₹1,274</p>
              </div>
              <div className="product">
                <img src="product8.jpg" alt="Product 8" />
                <h3>Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (Rib-Shirt)</h3>
                <p>-89% ₹449</p>
              </div>
              <div className="product">
                <img src="product9.jpg" alt="Product 9" />
                <h3>Product 9</h3>
                <p>$99.99</p>
              </div>
              <div className="product">
                <img src="product10.jpg" alt="Product 10" />
                <h3>Product 10</h3>
                <p>$109.99</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
