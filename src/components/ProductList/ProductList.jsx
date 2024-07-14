import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../CardContext/CardContext";

const ProductList = ({ setCount, count }) => {
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://1034506f7a622249.mokky.dev/products"
        );
        setProducts(response.data);
      } catch (error) {
        setError("Ошибка при загрузке продукта");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-8 flex-wrap">
        {[...new Array(6)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse w-[270px] flex flex-col gap-3 p-3 shadow-lg "
          >
            <div className="bg-slate-200 h-[250px] w-full rounded-2xl"></div>
            <div className="bg-slate-200 h-[18px] w-[full] rounded-2xl"></div>
            <div className="flex gap-4">
              <div className="w-[80px] h-[18px] bg-slate-200 rounded-xl"></div>
              <div className="w-[150px] h-[18px] bg-slate-200 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!products) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="">
      <h2>Список товаров</h2>
      <div className="flex flex-wrap gap-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="product w-[270px] p-3 bg-[#FBFBFB] relative shadow "
          >
            <h3 className="primary-bg text-white font-rnormal absolute top-4 left-1 px-1">{product.superSale}</h3>
            <Link to={`/product/${product.id}`}>
              <div className="line absolute top-6 left-0 w-full h-0.5 invisible primary-bg opacity-0 transition-all"></div>
              <img
                className="w-[250px] h-[250px]"
                src={product.img}
                alt=""
              />
              <p className="w-full">{product.name} </p>
              <div className="flex gap-4"> 
              <h4 className="font-rbold text-lg primary-text">
                ${product.price}.00
              </h4>
              <h4 className="font-rnormal text-lg opacity-60 line-through">
                {product.oldPrice} 
              </h4>
              </div>
            </Link>
            <div className="btn-hover opacity-0 invisible bottom-0 absolute transition-all z-10 flex gap-4 items-center left-12">
              <button
                className=" p-2.5 shadow-md rounded-xl bg-slate-100 hover:shadow-inner hover:shadow-slate-300"
                onClick={() => {
                  addItem(product), setCount(count + 1);
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
                  <img
                    className="opacity-80"
                    src="/icons/bx-heart.svg"
                    alt=""
                  />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
