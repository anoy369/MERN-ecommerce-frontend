import React from "react";
import "./header.css";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { CiRepeat, CiHeart, CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { BiDialpadAlt } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end  text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel: (000)-000-00-00">
                  (000)-000-00-00
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">anoy369</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="text-white d-flex align-items-center">
                    <CiRepeat className="header-icons" />
                    <p>
                      Compare
                      <br />
                      Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white d-flex align-items-center">
                    <CiHeart className="header-icons" />
                    <p>
                      Favorite
                      <br />
                      wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white d-flex align-items-center">
                    <CiUser className="header-icons" />
                    <p>
                      Login
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white d-flex align-items-center">
                    <BsCart4 className="header-icons" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p>$ 0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center">
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle text-uppercase bg-transparent border-0 gap-15 me-5 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BiDialpadAlt className="header-icons"/>
                      <span className="me-5 d-inline-block ">Shop Categories</span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex alignitems-center gap-15 text-uppercase">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Stor</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
