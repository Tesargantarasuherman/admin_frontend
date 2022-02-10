import React, { Component } from 'react';
import BookForm from '../../components/BookForm';
import BookList from '../../components/BookList';
import { AuthContext } from '../../contexts/AuthContext';
import BookContextProvider from '../../contexts/BookContext';
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../img/logo.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const login = () => {

  return (
    <BookContextProvider>
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
            <div className="container-input-login">
              <input type="text" name="" id="" className='input-form' placeholder='Email' />
              <i>
                <ion-icon name="at-circle"></ion-icon>
              </i>
            </div>
            <div className="container-input-login">
              <input type="text" name="" id="" className='input-form' placeholder='Password' />
              <i>
                <ion-icon name="key"></ion-icon>
              </i>
            </div>
            <button className="btn-login">Login</button>
          </div>
        </div>
      </div>
    </BookContextProvider>
  );
}


export default login;
