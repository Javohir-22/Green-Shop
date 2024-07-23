import { useCart } from "../../components/CardContext/CardContext";
import Footer from "../../layout/Footer/Footer";
import ReletedProducts from "../../components/ReletedProducts/ReletedProducts";
import { Link } from "react-router-dom";

const Basket = ({ setCount }) => {
  const { cartItems, updateItemQuantity, removeItem } = useCart();

  const handleIncreaseQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      updateItemQuantity(productId, product.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      updateItemQuantity(productId, product.quantity - 1);
    }
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  setCount(cartItems.length);

  return (
    <>
      <div className="mb-24">
        <h2 className="my-8"><Link className="font-rnormal" to="/">Home</Link> / Shop / Shopping-cart</h2>
        {cartItems.length === 0 ? (
          <p>Your basket is empty!</p>
        ) : (
          <div className="flex justify-between">
            <ul>
              <li className="flex py-2 items-center border-b font-rnormal">
                <h4>Products</h4>
                <h4 className="ml-[290px] mr-24">Price</h4>
                <h4 className="mr-20">Quantity</h4>
                <h4>Total</h4>
              </li>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center my-2 bg-[#FBFBFB] pr-6"
                >
                  <img className="w-[70px] h-[70px] mr-4" src={item.img} alt="" />
                  <div>
									<h3 className="font-rnormal w-48">{item.name}</h3>
									<p className="text-slate-600 text-sm">SKU: 19957518757065</p>
									</div>
                  <p className=" text-slate-600 font-rnormal mx-20">${item.price}.00</p>
                  
                  <button className="h-6 w-6 rounded-xl flex items-center mr-3 justify-center primary-bg text-white text-xl leading-4" onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
									<p>{item.quantity}</p>
                  <button className="h-6 w-6 ml-3 mr-16 rounded-xl flex items-center justify-center primary-bg text-white text-xl leading-4" onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
									<p className="text-slate-600 font-rnormal mr-14">{item.quantity * item.price}.00</p>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    <img src="./icons/Delete.png" alt="" />
                  </button>
                </li>
              ))}
            </ul>
						<div className="w-80">
							<h2 className="font-rbold text-lg py-2 border-b">Card Totals</h2>
							<p className="text-sm my-2">Coupon Apply</p>
							<div>
								<input className="outline-none border-green-600 border rounded-l-md p-2 w-[230px]" placeholder="Enter coupon code here..." type="text" />
								<button className="primary-bg text-white rounded-r-md p-2 border border-green-600 w-[90px]">Apply</button>
							</div>
							<div className="flex items-center justify-between mt-5"> 
								<p>Subtotal</p>
								<p className="font-rnormal">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}.00</p>
							</div>
							<div className="flex items-center justify-between my-2"> 
								<p>Coupon Discount</p>
								<p>(-) 00.00</p>
							</div>
							<div className="flex items-center justify-between my-2"> 
								<p>Shiping</p>
								<p className="font-rnormal">$16.00</p>
							</div>
							<div className="flex items-center justify-between my-5 font-rbold"> 
								<p>Total</p>
								<h3>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 16)}.00</h3>
							</div>
							<button className="primary-bg text-white rounded-md p-2 w-full">Proceed To Checkout</button>
						</div>
          </div>
        )}
      </div>
      <ReletedProducts />
      <Footer />
    </>
  );
};

export default Basket;
