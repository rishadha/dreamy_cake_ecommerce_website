import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const Header = ({
    totalCartItems,
    totalCompareItems,
    toggleClick,
    totalWishlistItems,
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>
                        Grand opening, <strong>up to 15%</strong> off all items.
                        Only <strong>3 days</strong> left
                    </span>
                </div>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info">
                                    <ul>
                                        <li>
                                            <Link href="/page-about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page-account">
                                                <a>My Account</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-wishlist">
                                                <a>Wishlist</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page-account">
                                                <a>Order Tracking</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div
                                        id="news-flash"
                                        className="d-inline-block"
                                    >
                                        <ul>
                                            <li>
                                                Get great offer up to 50% off
                                                <Link href="/shop-grid-right">
                                                    <a> View details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li>
                                            Need help? Call Us:{" "}
                                            <strong className="text-brand">
                                                {" "}
                                                +94788205107
                                            </strong>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/theme/logo1.png"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="search-location">
                                            
                                        </div>

                                        <div className="header-action-icon-2">
                                            <Link href="/shop-wishlist">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="Evara"
                                                        src="/assets/imgs/theme/icons/icon-heart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalWishlistItems}
                                                    </span>
                                                </a>
                                            </Link>
                                            <Link href="/shop-wishlist">
                                                <span className="lable">
                                                    Wishlist
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-cart">
                                                <a className="mini-cart-icon">
                                                    <img
                                                        alt="Evara"
                                                        src="/assets/imgs/theme/icons/icon-cart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalCartItems}
                                                    </span>
                                                </a>
                                            </Link>
                                            <Link href="/shop-cart">
                                                <a>
                                                    <span className="lable">
                                                        Cart
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="header-action-icon-2">
                                            <Link href="/page-account"><a>
                                                <img
                                                    className="svgInject"
                                                    alt="Nest"
                                                    src="/assets/imgs/theme/icons/icon-user.svg"
                                                />
                                            </a></Link>
                                            <Link href="/page-account"><a>
                                                <span className="lable ml-0">
                                                    Account
                                                </span>
                                            </a></Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <Link href="/page-account">
                                                             <a>
                                                                <i className="fi fi-rs-user mr-10"></i>
                                                                My Account
                                                            </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account"><a>
                                                            <i className="fi fi-rs-location-alt mr-10"></i>
                                                            Order Tracking
                                                        </a></Link>
                                                    </li>

                                                    <li>
                                                        <Link href="/shop-wishlist"><a>
                                                            <i className="fi fi-rs-heart mr-10"></i>
                                                            My Wishlist
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account"><a>
                                                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                                                            Setting
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-login"><a>
                                                            <i className="fi fi-rs-sign-out mr-10"></i>
                                                            Sign out
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/theme/logo1.png"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <h2> Dreamy Cake</h2>
                                </div>
                              
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>

                                            <li>
                                                <Link href="/">
                                                    <a className="active">
                                                        Home

                                                    </a>
                                                </Link>

                                            </li>
                                            <li>
                                                <Link href="/page-about">
                                                    <a>About</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products">
                                                    <a>
                                                        Shop
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">

                                                    <li>
                                                        <Link href="/shop-list-left">
                                                            <a>
                                                                Shop List – Left
                                                                Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link href="/shop-checkout">
                                                            <a>
                                                                Shop – Checkout
                                                            </a>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </li>

                                            <li>
                                                <Link href="/blog-category-big">
                                                    <a>
                                                        Course
                                                        {/*<i className="fi-rs-angle-down"></i>*/}
                                                    </a>
                                                </Link>

                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        Pages
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">

                                                    <li>
                                                        <Link href="/page-contact">
                                                            <a>Contact</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account">
                                                            <a>My Account</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-login-register">
                                                            <a>
                                                                login/register
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-purchase-guide">
                                                            <a>
                                                                Purchase Guide
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-privacy-policy">
                                                            <a>
                                                                Privacy Policy
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-terms">
                                                            <a>
                                                                Terms of Service
                                                            </a>
                                                        </Link>
                                                    </li>
                                                   
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/page-payment">
                                                    <a>payment</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/page-gallery'>
                                                    <a>Gallery</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-flex">
                                <img
                                    src="/assets/imgs/theme/icons/icon-headphone.svg"
                                    alt="hotline"
                                />

                                <p>
                                    0788205107<span>24/7 Support Center</span>
                                </p>
                            </div>

                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>

                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-compare.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCompareItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-heart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalWishlistItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCartItems}
                                                </span>
                                            </a>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                        
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>Rs.3830.00</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link href="/shop-cart">
                                                        <a>View cart</a>
                                                    </Link>
                                                    <Link href="/shop-checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-action-icon-2 d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
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

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
