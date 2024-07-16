import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import logo  from "../../assets/images/Logo.png";

const Navbar = ({count, setPage, page }) => {

  return (
    <div className="flex justify-between items-center h-[78px] border-b border-slate-300 sticky top-0 z-20 bg-white">
      <Link to={ROUTES.HOME}>
        <img src={logo} alt="logo" className="w-[150px]" />
      </Link>
      <nav className="flex flex-col">
        <ul className="flex items-center gap-6">
          <Link to={ROUTES.HOME}>
            <li onClick={() => setPage(0)}
              className={`text-slate-700 cursor-pointer ${
                page === 0 && "font-rbold"
              }`}
            >
              Home{" "}
            </li>
          </Link>
          <li
            className={`text-slate-700 cursor-pointer ${
              page === 1 && "font-rbold"
            }`}
          >
            Shop
          </li>
          <li
            className={`text-slate-700 cursor-pointer ${
              page === 2 && "font-rbold"
            }`}
          >
            Plant Care
          </li>
          <li
            className={`text-slate-700 cursor-pointer ${
              page === 3 && "font-rbold"
            }`}
          >
            Blogs
          </li>
        </ul>
        <div
          className={`transition-all max-w-[47px] w-full translate-y-[25px] rounded-md h-1 bg-green-600 ${
            page === 1 && "max-w-10 translate-x-[66px]"
          } ${page === 2 && "max-w-20 translate-x-[126px]"} ${
            page === 3 && "max-w-12 translate-x-[220px]"
          }`}
        ></div>
      </nav>
      <div className="flex gap-6">
        <button className="w-5">
          <img src="/icons/search.png" alt="search logo" />
        </button>    
        <button onClick={() => setPage(1)} className="relative">
          <Link to={ROUTES.CART}>
            
            <img src="/icons/basket.png" alt="basket icon" className="w-6" />
            <span className="text-white absolute top-1.5 -right-1.5 text-xs font-medium primary-bg rounded-3xl px-1 border border-white">
              {count}
            </span>
          </Link>
        </button>

        <button className="flex gap-2 py-2 px-4 primary-bg text-white items-center rounded-lg font-rmedium">
          <img src="/icons/login.png" alt="login icon" className="w-5" />
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
