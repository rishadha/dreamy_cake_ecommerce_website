import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from "../components/layout/Layout";
import Modal from 'react-modal';
import { useRouter } from 'next/router';

Modal.setAppElement('#__next'); // this line is important for accessibility purposes

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = { email, password };
        try {
            const response = await axios.post('http://localhost:4000/api/login', user);
            if (response.data.success) {
                // store token into localStorage
                localStorage.setItem('token', response.data.token);
                // Show success modal and redirect user to the homepage
                setModalMessage('Login succeeded!');
                setIsOpen(true);
                setTimeout(() => {
                    setIsOpen(false);
                    router.push('/');
                }, 2000);
            } else {
                // Handle login failure (e.g. show an error message)
                setModalMessage('Login failed. Please check your email or password.');
                setIsOpen(true);
            }
        } catch (error) {
            console.error('An error occurred while logging in:', error);
            // Handle error (e.g. show an error message)
            setModalMessage('An error occurred. Please try again.');
            setIsOpen(true);
        }
    };
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Login & Register">
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                            <div className="row">
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <img className="border-radius-15" src="assets/imgs/page/login-1.png" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <h1 className="mb-5">Login</h1>
                                                <p className="mb-30">Don't have an account? <Link href="/page-register"><a>Create here</a></Link></p>
                                            </div>
                                            <form method="post" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="text" required="" name="email" placeholder="Username or Email *" value={email} onChange={e => setEmail(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="password" placeholder="Your password *" value={password} onChange={e => setPassword(e.target.value)} />
                                                </div>
                                                <div className="login_footer form-group mb-50">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                            <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                                        </div>
                                                    </div>
                                                    <a className="text-muted" href="#">Forgot password?</a>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-heading btn-block hover-up" name="login">Log in</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                        color: 'lightsteelblue'
                    }
                }}
                contentLabel="Example Modal"
            >
                <h2>{modalMessage}</h2>
                <button onClick={() => setIsOpen(false)}>close</button>
            </Modal>
        </>
    );
}

export default Login;
