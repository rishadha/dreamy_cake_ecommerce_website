
import Layout from "../components/layout/Layout";

function Guide() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Guide">
            <div className="page-content pt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                                        <div className="single-header style-2">
                                            <h2>Purchase Guide</h2>
                                            {/* <div className="entry-meta meta-1 meta-3 font-xs mt-15 mb-15">
                                                <span className="post-by">By <a href="#">Jonh</a></span>
                                                <span className="post-on has-dot">9 April 2020</span>
                                                <span className="time-reading has-dot">8 mins read</span>
                                                <span className="hit-count has-dot">29k Views</span>
                                            </div> */}
                                        </div>
                                        <figure className="border-radius-15 mb-30">
                                            <img className="border-radius-15" src="assets/imgs/page/guide-3.jpg" alt="" />
                                        </figure>
                                        <div className="single-content mb-50">
                                
                                            <h3>1. Account Registering</h3>
                                            <p>When using a cake ordering system that includes course registration, for ordering process 
                                                it's important to first create an account for ordering . 
                                                Account registration is a simple process that requires the user 
                                                to provide basic information such as their name, email address, and password.
                                                 Once the account is created, the user can then access the cake ordering system 
                                                 and browse through the available products, and purchase that:</p>
                                            <ul className="mb-30">
                                                <li>Name (required)</li>
                                                <li>Email Address (required)</li>
                                                <li>Password(required)</li>
                                            </ul>

                                            <h3>2. Select Cake</h3>
                                            <p>To choose the perfect cake, 
                                                there are a few things to keep in mind. 
                                                First, think about the occasion and what 
                                                kind of cake would fit best. Consider the 
                                                recipient's preferences and any dietary 
                                                restrictions or allergies. Also, keep in mind 
                                                the size of the cake and the number of guests you'll
                                                 be serving. And don't forget about the design or theme
                                                you have in mind. By considering all of these factors,
                                                you'll be sure to find the perfect cake for your special
                                                event!</p>
                                            
                                            <h3>3. Add to Cart</h3>
                                            <p>To add items to your cart, 
                                                you must be logged in to the cake 
                                                ordering system. Browse products and 
                                                click 'Add to Cart' for the items you 
                                                want. Your cart will be saved as long 
                                                as you stay logged in, so be sure to 
                                                checkout before logging out.</p>
                                            
                                            <h3>4. Delivery Method</h3>
                                            <ul>
                                                <li>
                                                    Pickup
                                                </li>
                                                    <p> Pick up at Dreamy cake shop - 
                                                        get your order from our location.</p>
                                                
                                                <li>
                                                    Standard Delivery
                                                </li>
                                                <p>
                                                Select date, add delivery info 
                                                (name, address, postal code, district, phone number), 
                                                update and submit."
                                                </p>
                                            </ul>
                                            
                                            <h3>5. Payment Method </h3>
                                            <p>A. Credit Cards payment available</p>
                                            <ul type="circle">
                                                <li>Visa</li>
                                                <li>Mastercard</li>
                                            </ul>
                                            <br/>
                                            <p>B. Cash on delivery</p>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default Guide;
