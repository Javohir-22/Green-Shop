import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../CardContext/CardContext";
import Product from "../Product/Product";

const ProductList = ({ setCount, count }) => {
  const [category, setCategory] = useState(1);
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

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

  const sortOptions = (order) => {
    const sortedOptions = [...products].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
         return b.price - a.price;
      }else {
        return a.id - b.id;
      }
    });
    setProducts(sortedOptions);
  };


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
    <div className="max-w-[840px] w-full">
      <div className="w-full mb-6 flex items-start justify-between">
        <div className="relative flex gap-8 items-center pb-4">
        <button onClick={() => setCategory(1)} className={`${category === 1 ? "primary-text font-rbold" : ""}`}>All Products</button>
        <button onClick={() => setCategory(2)} className={`${category === 2 ? "primary-text font-rbold" : ""}`}>New Arrivals</button>
        <button onClick={() => setCategory(3)} className={`${category === 3 ? "primary-text font-rbold" : ""}`}>Sale</button>
        <div className={`absolute bottom-0 transition-all left-0 h-[3px] primary-bg ${category === 1 ? "w-[90px] " : category === 2 ? "w-24 translate-x-[120px]" : "w-8 translate-x-[244px]"}`}></div>
        </div>
        <div className="flex gap-1 items-center">
          <h4>Sort by:</h4>
        <select onChange={(e) => sortOptions(e.target.value)} className="outline-none" name="sort" id="sort">
          <option value="default">Default sorting</option>
          <option value="asc">Price: low to high</option>
          <option value="desc">Price: high to low</option>
        </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 ">
        {products.map((product) => (
          <Product
            setCount={setCount}
            count={count}
            addItem={addItem}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
