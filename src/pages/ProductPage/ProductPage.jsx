import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../components/CardContext/CardContext";
import LoadingProduct from "../../components/LoadingProduct/LoadingProduct";
import ProductAbout from "../../components/ProductAbout/ProductAbout";
import ReletedProducts from "../../components/ReletedProducts/ReletedProducts";
import Footer from "../../layout/Footer/Footer";

const ProductPage = ({ setPage, count, setCount }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(1);
  const [size, setSize] = useState("s");
  const [heart, setHeart] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://1034506f7a622249.mokky.dev/products/${id}`
        );
        setProduct(response.data);
        setPage(1);
      } catch (error) {
        setError("Ошибка при загрузке продукта");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
    setCount(count + 1);
  };

  if (loading) {
    return (
      <LoadingProduct />
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div key={product.id} className="product-page">
      <h6 className="my-4">
        <Link className="font-rbold" to="/">
          Home
        </Link>
        /Shop
      </h6>
      <div className="flex justify-between ">
        <div className="flex border bg-stone-50">
          <div className="flex flex-col justify-between">
            <img
              onClick={() => setImage(1)}
              className={`w-[100px] cursor-pointer ${
                image === 1 ? "border border-green-600" : ""
              }`}
              src={product.img}
              alt=""
            />
            <img
              onClick={() => setImage(2)}
              className={`w-[100px] cursor-pointer ${
                image === 2 ? "border border-green-600" : ""
              }`}
              src={product.img2}
              alt=""
            />
            <img
              onClick={() => setImage(3)}
              className={`w-[100px] cursor-pointer ${
                image === 3 ? "border border-green-600" : ""
              }`}
              src={product.img3}
              alt=""
            />
            <img
              onClick={() => setImage(4)}
              className={`w-[100px] cursor-pointer ${
                image === 4 ? "border border-green-600" : ""
              }`}
              src={product.img4}
              alt=""
            />
          </div>
          <img
            className="w-[444px] h-[444px p-10"
            src={`${
              image === 1
                ? product.img
                : image === 2
                ? product.img2
                : image === 3
                ? product.img3
                : product.img4
            } `}
            alt=""
          />
        </div>
        <div className="w-full max-w-xl">
          <h2 className="font-rbold text-2xl">{product.name}</h2>
          <div className="flex border-b py-1 justify-between">
            <div className="flex items-center gap-6">
              <h3 className="font-rbold text-xl primary-text">
                ${product.price}.00
              </h3>
              <h4 className="font-rbold text-xl opacity-60 line-through">
                {product.oldPrice}
              </h4>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                <img
                  src={`/icons/${product.star >= 1 ? "bxs" : "bx"}-star.svg`}
                  alt=""
                />
                <img
                  src={`/icons/${product.star >= 2 ? "bxs" : "bx"}-star.svg`}
                  alt=""
                />
                <img
                  src={`/icons/${product.star >= 3 ? "bxs" : "bx"}-star.svg`}
                  alt=""
                />
                <img
                  src={`/icons/${product.star >= 4 ? "bxs" : "bx"}-star.svg`}
                  alt=""
                />
                <img
                  src={`/icons/${product.star >= 5 ? "bxs" : "bx"}-star.svg`}
                  alt=""
                />
              </div>
              <h5>1 Customer Review</h5>
            </div>
          </div>
          <h4 className="font-rbold my-3">Short Description:</h4>
          <p className="text-sm text-slate-500 mb-3">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <h4 className="font-rbold my-3">Size:</h4>
          <div className="flex gap-4 items-center cursor-pointer">
            <p
              onClick={() => setSize("s")}
              className={`border text-sm rounded-xl px-1.5 w-max scale-125 ${
                size === "s"
                  ? "text-green-600 border-green-600 font-rbold"
                  : "text-slate-500 "
              }`}
            >
              S
            </p>
            <p
              onClick={() => setSize("m")}
              className={`border text-sm rounded-xl px-1.5 w-max scale-125 ${
                size === "m"
                  ? "text-green-600 border-green-600 font-rbold"
                  : "text-slate-500 "
              }`}
            >
              M
            </p>
            <p
              onClick={() => setSize("l")}
              className={`border text-sm rounded-xl px-1.5 w-max scale-125 ${
                size === "l"
                  ? "text-green-600 border-green-600 font-rbold"
                  : "text-slate-500 "
              }`}
            >
              L
            </p>
            <p
              onClick={() => setSize("xl")}
              className={`border text-sm rounded-xl px-1.5 w-max scale-125 ${
                size === "xl"
                  ? "text-green-600 border-green-600 font-rbold"
                  : "text-slate-500 "
              }`}
            >
              XL
            </p>
          </div>
          <div className="flex gap-4 my-4">
           <div className="flex items-center gap-4">
           <button onClick={decreaseQuantity} className="primary-bg text-white w-8 h-10 text-lg cursor-pointer flex items-center justify-center font-rbold rounded-2xl">--</button>
            <p className="text-lg w-3">{quantity}</p>
            <button onClick={increaseQuantity} className="primary-bg text-white w-8 h-10 text-lg cursor-pointer flex items-center justify-center font-rbold rounded-2xl">+</button>
           </div>
           <button className="primary-bg text-white w-36 h-10 text-sm cursor-no-drop flex items-center justify-center font-rbold rounded-xl opacity-70">BUY NOW</button>
           <button onClick={handleAddToCart} className="primary-text border border-green-600 w-36 h-10 text-sm cursor-pointer flex items-center justify-center font-rbold rounded-xl">ADD TO CART</button>
           <button onClick={() => setHeart(!heart)} className={`text-white border border-green-600 w-12 h-10 text-sm cursor-pointer flex items-center justify-center font-rbold rounded-xl ${heart ? "border-red-600" : ""}`}><img src={`/icons/${heart ? "bxs-" : ""}heart.svg`} alt="" /></button>
          </div>
          <div className="flex flex-col gap-1">
          <p>SKU:</p>
          <p>Categories:</p>
          <p>Tags:</p>
          <p className="font-rbold">Share this product:</p>
          </div>
        </div>
      </div>
      <ProductAbout />
      <ReletedProducts />
      <Footer />
    </div>
  );
};

export default ProductPage;
