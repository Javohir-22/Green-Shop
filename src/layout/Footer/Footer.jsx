import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className="w-full max-w-[1200px] mt-28 mx-auto flex flex-col">
      <div className="p-6 w-full flex gap-10 bg-[#FBFBFB]">
        <div className="flex flex-col max-w-60 pr-8 border-r gap-2 w-full">
          <div className="relative w-20 h-24">
            <img
              className="absolute right-0.5 bottom-0 w-[74px] h-[74px]"
              src="/Ellipse.png"
              alt=""
            />
            <img
              className="absolute top-0 right-0 w-[61px] h-[46px]"
              src="/Frame-1.png"
              alt=""
            />
            <img
              className="absolute bottom-1 right-1 w[55px] h-12"
              src="/Frame.png"
              alt=""
            />
          </div>
          <h3 className="text-lg font-rbold">Garden Care</h3>
          <p className="text-slate-500 leading-5">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex flex-col max-w-60 pr-8 border-r gap-2 w-full">
          <div className="relative w-20 h-24">
            <img
              className="absolute right-2 bottom-0 w-[74px] h-[74px]"
              src="/Ellipse.png"
              alt=""
            />
            <img
              className="absolute bottom-1 right-0 w-[68px] h-[87px]"
              src="/gard-1.png"
              alt=""
            />
          </div>
          <h3 className="text-lg font-rbold">GPlant Renovation</h3>
          <p className="text-slate-500 leading-5">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex flex-col max-w-60 pr-8 border-r gap-2 w-full">
          <div className="relative w-20 h-24">
            <img
              className="absolute right-3 bottom-0 w-[74px] h-[74px]"
              src="/Ellipse.png"
              alt=""
            />
            <img
              className="absolute bottom-1 right-0 w-[83px] h-[85px]"
              src="/gard.png"
              alt=""
            />
          </div>
          <h3 className="text-lg font-rbold">Watering Graden</h3>
          <p className="text-slate-500 leading-5">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-rbold">
            Would you like to join newsletters?
          </h2>
          <form onSubmit={handleEmail} className="flex">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="enter your email address..."
              className="w-[270px] bg-white p-3 outline-none border rounded-l-lg"
            />
            <button
              type="submit"
              className="px-6 primary-bg rounded-r-lg text-white text-lg font-rbold"
            >
              Join
            </button>
          </form>
          <p className="text-slate-500">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </p>
        </div>
      </div>

      <div className="flex pl-6 bg-[#46A3581A] gap-16 items-center w-full h-[88px] border-y border-green-300">
        <img src="/Logo.svg" className="w-[150px]" alt="logo" />
        <div className="flex gap-4 items-center">
          <img className="w-5 h-5" src="/icons/Location.png" alt="" />
          <p className="text-slate-500 text-sm leading-5">
            70 West Buckingham Ave. <br />
            Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img className="w-5 h-5" src="/icons/Message.png" alt="" />
          <p className="text-slate-500 text-sm leading-5">
            contact@greenshop.com
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img className="w-5 h-5" src="/icons/Calling.png" alt="" />
          <p className="text-slate-500 text-sm leading-5">
            +88 01911 717 49011735
          </p>
        </div>
      </div>
      <div className="flex p-6 gap-40 w-full bg-[#FBFBFB] border-b border-green-300">
        <div>
          <h3 className="text-lg font-rbold">My Account</h3>
          <p className="text-slate-500 text-sm leading-8 mt-2">
            My Account <br /> Our stores <br /> Contact us <br /> Career <br />
            Specials
          </p>
        </div>
        <div>
          <h3 className="text-lg font-rbold">Help & Guide</h3>
          <p className="text-slate-500 text-sm leading-8 mt-2">
            Help Center <br /> How to Buy <br /> Shipping & Delivery <br />
            Product Policy <br /> How to Return
          </p>
        </div>
        <div>
          <h3 className="text-lg font-rbold">Categories</h3>
          <p className="text-slate-500 text-sm leading-8 mt-2">
            House Plants <br /> Potter Plants <br /> Seeds <br />
            Small Plants <br />
            Accessories
          </p>
        </div>
        <div>
          <h3 className="text-lg font-rbold">Social Media</h3>
          <div className="flex gap-2 items-center mb-5 mt-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-md border border-green-300">
              <img className="w-2 h-4" src="/icons/Facebook.png" alt="" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-md border border-green-300">
              <img className="w-4 h-4" src="/icons/Instagram.png" alt="" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-md border border-green-300">
              <img className="w-4 h-3.5" src="/icons/Twitter.png" alt="" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-md border border-green-300">
              <img className="w-4 h-4" src="/icons/Linkedin.png" alt="" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-md border border-green-300">
              <img className="w-5 h-3.5" src="/icons/Union.png" alt="" />
            </div>
          </div>

          <h3 className="text-lg font-rbold mb-2 mt-5">We accept</h3>
          <img src="/icons/visa.png" alt="" />
        </div>
      </div>

      <p className="text-slate-500 text-sm leading-7 p-4 mx-auto">
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
