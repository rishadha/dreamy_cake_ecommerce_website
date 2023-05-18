import Link from "next/link";
import Layout from "../components/layout/Layout";
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/api/registration', form);
      const { token } = res.data;

      // Save the token to local storage or use it as needed
      localStorage.setItem('auth-token', token);
    } catch (error) {
      // Handle the error (you might want to set an error state and display it)
      console.error(error);
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
                          <h1 className="mb-5">Create An account</h1>
                          <p className="mb-30">Don't have an account? <Link href="/page-register"><a>Create here</a></Link></p>
                        </div>
                        <form method="post" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input type="text" required name="name" onChange={handleChange} placeholder="Your name *" />
                          </div>
                          <div className="form-group">
                            <input type="text" required name="email" onChange={handleChange} placeholder="Username or Email *" />
                          </div>
                          <div className="form-group">
                            <input required type="password" name="password" onChange={handleChange} placeholder="Your password *" />
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
                            <button type="submit" className="btn btn-heading btn-block hover-up" name="login">Sign Up</button>
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
    </>
  );
}

export default Login;


