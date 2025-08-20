import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4" style={{backgroundColor:"#3A883A"}}>
      <div className="container">
        <div className="row mb-4">
          {/* Logo + Description */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="logo.png"
              alt="Logo"
              style={{ height: "80px" }}
              className="mb-3"
            />
            <p className="text-light">
              Crafting wholesome snacks from farm to table with integrity and
              flavor.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/product" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Recipe
                </a>
              </li>
              <li>
                <a href="/blog" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Our Snacks */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Our Snacks</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Potato Chips
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Veggie Crisps
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Nut Clusters
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Granola Bites
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-geo-alt text-warning"></i>
                <span>123 Farm Road, Organic Valley, CA 90210</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-telephone text-warning"></i>
                <a
                  href="tel:+18005551234"
                  className="text-light text-decoration-none"
                >
                  (800) 555-1234
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope text-warning"></i>
                <a
                  href="mailto:hello@simplytrue.com"
                  className="text-light text-decoration-none"
                >
                  hello@simplytrue.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">
            © 2025 Simply True. All rights reserved.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a href="#" className="text-light text-decoration-none">
              Privacy Policy
            </a>
            <a href="#" className="text-light text-decoration-none">
              Terms of Service
            </a>
            <a href="#" className="text-light text-decoration-none">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
