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
                                            <form action="#">
                                                <select className="select-active">
                                                    <option>
                                                        Your Location
                                                    </option>
                                                    <option>Alabama</option>
                                                    <option>Alaska</option>
                                                    <option>Arizona</option>
                                                    <option>Delaware</option>
                                                    <option>Florida</option>
                                                    <option>Georgia</option>
                                                    <option>Hawaii</option>
                                                    <option>Indiana</option>
                                                    <option>Maryland</option>
                                                    <option>Nevada</option>
                                                    <option>New Jersey</option>
                                                    <option>New Mexico</option>
                                                    <option>New York</option>
                                                </select>
                                            </form>
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
                                {/*<div className="main-categori-wrap d-none d-lg-block">*/}
                                {/*    <a*/}
                                {/*        className="categories-button-active"*/}
                                {/*        onClick={handleToggle}*/}
                                {/*    >*/}
                                {/*        <span className="fi-rs-apps"></span>*/}
                                {/*        <span className="et">Browse</span> All*/}
                                {/*        Categories*/}
                                {/*        <i className="fi-rs-angle-down"></i>*/}
                                {/*    </a>*/}

                                    {/*<div*/}
                                    {/*    className={*/}
                                    {/*        isToggled*/}
                                    {/*            ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"*/}
                                    {/*            : "categories-dropdown-wrap categories-dropdown-active-large font-heading"*/}
                                    {/*    }*/}
                                    {/*>*/}
                                    {/*    /!*<div className="d-flex categori-dropdown-inner">*!/*/}
                                    {/*    /!*    <CategoryProduct2/>*!/*/}
                                    {/*    /!*    <CategoryProduct3/>*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*    /!*<div*!/*/}
                                    {/*    /!*    className="more_slide_open"*!/*/}
                                    {/*    /!*    style={{ display: "none" }}*!/*/}
                                    {/*    /!*>*!/*/}
                                    {/*    /!*    <div className="d-flex categori-dropdown-inner">*!/*/}
                                    {/*    /!*        /!*<ul>*!/*!/*/}
                                    {/*    /!*        /!*    <li>*!/*!/*/}
                                    {/*    /!*        /!*        <Link href="/products"><a>*!/*!/*/}
                                    {/*    /!*        /!*            {" "}*!/*!/*/}
                                    {/*    /!*        /!*            <img*!/*!/*/}
                                    {/*    /!*        /!*                src="/assets/imgs/theme/icons/icon-1.svg"*!/*!/*/}
                                    {/*    /!*        /!*                alt=""*!/*!/*/}
                                    {/*    /!*        /!*            />*!/*!/*/}
                                    {/*    /!*        /!*            Milks and Dairies*!/*!/*/}
                                    {/*    /!*        /!*        </a></Link>*!/*!/*/}
                                    {/*    /!*        /!*    </li>*!/*!/*/}
                                    {/*    /!*        /!*    <li>*!/*!/*/}
                                    {/*    /!*        /!*        <Link href="/products"><a>*!/*!/*/}
                                    {/*    /!*        /!*            {" "}*!/*!/*/}
                                    {/*    /!*        /!*            <img*!/*!/*/}
                                    {/*    /!*        /!*                src="/assets/imgs/theme/icons/icon-2.svg"*!/*!/*/}
                                    {/*    /!*        /!*                alt=""*!/*!/*/}
                                    {/*    /!*        /!*            />*!/*!/*/}
                                    {/*    /!*        /!*            Clothing & beauty*!/*!/*/}
                                    {/*    /!*        /!*        </a></Link>*!/*!/*/}
                                    {/*    /!*        /!*    </li>*!/*!/*/}
                                    {/*    /!*        /!*</ul>*!/*!/*/}
                                    {/*    /!*        /!*<ul className="end">*!/*!/*/}
                                    {/*    /!*        /!*    <li>*!/*!/*/}
                                    {/*    /!*        /!*        <Link href="/products"><a>*!/*!/*/}
                                    {/*    /!*        /!*            {" "}*!/*!/*/}
                                    {/*    /!*        /!*            <img*!/*!/*/}
                                    {/*    /!*        /!*                src="/assets/imgs/theme/icons/icon-3.svg"*!/*!/*/}
                                    {/*    /!*        /!*                alt=""*!/*!/*/}
                                    {/*    /!*        /!*            />*!/*!/*/}
                                    {/*    /!*        /!*            Wines & Drinks*!/*!/*/}
                                    {/*    /!*        /!*        </a></Link>*!/*!/*/}
                                    {/*    /!*        /!*    </li>*!/*!/*/}
                                    {/*    /!*        /!*    <li>*!/*!/*/}
                                    {/*    /!*        /!*        <Link href="/products"><a>*!/*!/*/}
                                    {/*    /!*        /!*            {" "}*!/*!/*/}
                                    {/*    /!*        /!*            <img*!/*!/*/}
                                    {/*    /!*        /!*                src="/assets/imgs/theme/icons/icon-4.svg"*!/*!/*/}
                                    {/*    /!*        /!*                alt=""*!/*!/*/}
                                    {/*    /!*        /!*            />*!/*!/*/}
                                    {/*    /!*        /!*            Fresh Seafood*!/*!/*/}
                                    {/*    /!*        /!*        </a></Link>*!/*!/*/}
                                    {/*    /!*        /!*    </li>*!/*!/*/}
                                    {/*    /!*        /!*</ul>*!/*!/*/}
                                    {/*    /!*    </div>*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*    /!*<div className="more_categories">*!/*/}
                                    {/*    /!*    <span className="icon"></span>{" "}*!/*/}
                                    {/*    /!*    <span className="heading-sm-1">*!/*/}
                                    {/*    /!*        Show more...*!/*/}
                                    {/*    /!*    </span>*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*</div>*/}
                                {/*</div>*/}
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
                                                    <li>
                                                        <Link href="/page-404">
                                                            <a>404 Page</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>payment</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
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
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="/assets/imgs/shop/thumbnail-3.jpg"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>
                                                                    Plain
                                                                    Striola
                                                                    Shirts
                                                                </a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $800.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="/assets/imgs/shop/thumbnail-4.jpg"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>
                                                                    Macbook Pro
                                                                    2022
                                                                </a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $3500.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>$383.00</span>
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
