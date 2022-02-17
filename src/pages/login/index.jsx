import React, { useContext, useEffect, useState } from 'react';
import BookForm from '../../components/BookForm';
import BookList from '../../components/BookList';
import BookContextProvider from '../../contexts/BookContext';
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../img/logo.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AuthContextProvider, { AuthContext } from '../../contexts/AuthContext';
import {
  useNavigate
} from "react-router-dom";

function Login() {
  const { postLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(localStorage.getItem("data_user"))
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    postLogin({ email: email, password: password })
    setEmail('')
    setPassword('')
  }
  useEffect(() => {
    if (token) {
      Navigate('/dashboard')
    }
  }, []);
  return (
    <AuthContextProvider>
      <div className="login">
        <div className="login-left-side">
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide ><img src='https://images.unsplash.com/photo-1644405910624-fa741dd9eda3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' /></SwiperSlide>
            <SwiperSlide ><img src='https://images.unsplash.com/photo-1644408263761-7ef58e7f9ddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80' /></SwiperSlide>
            <SwiperSlide ><img src='https://images.unsplash.com/photo-1644405910624-fa741dd9eda3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' /></SwiperSlide>

          </Swiper>
        </div>
        <div className="login-right-side">
          {/* <BookList />
          <BookForm /> */}
          <div className="form-login">
            <img src={Logo} alt="" className="logo" width={100} />
            <p className="title-login">Hello Again</p>
            <p className="label-login">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora omnis ea!</p>
            <form action="" onSubmit={handleSubmit}>
              <div className="container-input-login">
                <input type="text" name="" id="" className='input-form' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <i>
                  <ion-icon name="at-circle"></ion-icon>
                </i>
              </div>
              <div className="container-input-login">
                <input type="text" name="" id="" className='input-form' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <i>
                  <ion-icon name="key"></ion-icon>
                </i>
              </div>
              <button type="submit" className="btn-login">Login</button>
            </form>
          </div>
        </div>
      </div>
    </AuthContextProvider>
  );
}


export default Login;
