import { useRef, useState } from "react";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        loop={true}
        className=" max-w-[1200px] w-full mx-auto h-[450px] my-7 "
      >
        <SwiperSlide className="w-full h-full flex justify-between bg-[#F5F5F5] pl-10 ">
          <div className=" max-w-[530px] mt-16">
            <h5 className=" text-sm leading-4 tracking-widest uppercase font-rmedium">
              Welcome to GreenShop
            </h5>
            <h1 className=" text-7xl uppercase leading-tight tracking-tight mt-4 font-rblack opacity-85">
              Let’s Make a Better <span className="primary-text">Planet</span>
            </h1>
            <p className="text-sm leading-6 text-slate-700">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Link to="/product/4">
              <button className="uppercase font-rbold primary-bg text-white px-7 py-2 rounded-md  mt-10">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="w-1/2 h-full relative flex justify-end">
            <img
              src="/plant-2.png"
              alt="plant image"
              className="w-[135px] h-[135px] absolute bottom-8 left-32"
            />
            <img src="/plant.png" alt="plant image" className="h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex justify-between bg-[#F5F5F5] pl-10 ">
          <div className=" max-w-[530px] mt-16">
            <h5 className=" text-sm leading-4 tracking-widest uppercase font-rmedium">
              Welcome to GreenShop
            </h5>
            <h1 className=" text-7xl uppercase leading-tight tracking-tight mt-4 font-rblack opacity-85">
              Let’s Make a Better <span className="primary-text">Planet</span>
            </h1>
            <p className="text-sm leading-6 text-slate-700">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Link to="/product/4">
              <button className="uppercase font-rbold primary-bg text-white px-7 py-2 rounded-md  mt-10">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="w-1/2 h-full relative flex justify-end">
            <img
              src="/plant-2.png"
              alt="plant image"
              className="w-[135px] h-[135px] absolute bottom-8 left-32"
            />
            <img src="/plant.png" alt="plant image" className="h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex justify-between bg-[#F5F5F5] pl-10 ">
          <div className=" max-w-[530px] mt-16">
            <h5 className=" text-sm leading-4 tracking-widest uppercase font-rmedium ">
              Welcome to GreenShop
            </h5>
            <h1 className=" text-7xl uppercase leading-tight tracking-tight mt-4 font-rblack">
              Let’s Make a Better <span className="primary-text">Planet</span>
            </h1>
            <p className="text-sm leading-6 text-slate-700">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Link to="/product/4">
              <button className="uppercase font-rbold primary-bg text-white px-7 py-2 rounded-md  mt-10">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="w-1/2 h-full relative flex justify-end">
            <img
              src="/plant-2.png"
              alt="plant image"
              className="w-[135px] h-[135px] absolute bottom-8 left-32"
            />
            <img src="/plant.png" alt="plant image" className="h-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
