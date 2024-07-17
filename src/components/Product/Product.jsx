import { Link } from "react-router-dom";

const Product = ({count, setCount, addItem,product }) => {

  return (
    <div
      key={product.id}
      className="product w-[263px] p-3 bg-[#FBFBFB] relative shadow "
    >
      <h3 className="primary-bg text-white font-rnormal absolute top-4 left-1 px-1">
        {product.superSale}
      </h3>
      <Link to={`/product/${product.id}`}>
        <div className="line absolute top-6 left-0 w-full h-0.5 invisible primary-bg opacity-0 transition-all"></div>
        <img className="w-[250px] h-[250px]" src={product.img} alt="" />
        <p className="w-full">{product.name} </p>
        <div className="flex gap-4">
          <h4 className="font-rbold text-lg primary-text">${product.price}.00</h4>
          <h4 className="font-rnormal text-lg opacity-60 line-through">
            {product.oldPrice}
          </h4>
        </div>
      </Link>
      <div className="btn-hover opacity-0 invisible bottom-0 absolute transition-all z-10 flex gap-4 items-center left-12">
        <button
          className=" p-2.5 shadow-md rounded-xl bg-slate-100 hover:shadow-inner hover:shadow-slate-300"
          onClick={() => {
            addItem({ ...product, quantity: 1 }), setCount(count + 1);
          }}
        >
          <img className="" src="/icons/basket.png" alt="" />
        </button>
        <Link to={`/product/${product.id}`}>
          <button className=" p-3 shadow-md rounded-xl bg-slate-100 hover:shadow-inner hover:shadow-slate-300">
            <img className="w-5" src="/icons/search.png" alt="" />
          </button>
        </Link>
        <Link to={`/product/${product.id}`}>
          <button className=" p-2.5 shadow-md rounded-xl bg-slate-100 hover:shadow-inner hover:shadow-slate-300">
            <img className="opacity-80" src="/icons/bx-heart.svg" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
