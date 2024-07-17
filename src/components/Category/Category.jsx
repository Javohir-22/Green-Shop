import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = ({ category, setCategory }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://1034506f7a622249.mokky.dev/ads"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="max-w-[300px] w-full  bg-[#FBFBFB]">
      <h2 className="p-2.5">Categories</h2>
      <div className="flex flex-col gap-2 p-4 items-start">
        <button
          onClick={() => setCategory(0)}
          className={category === 0 ? "font-rbold primary-text" : ""}
        >
          House plants
        </button>
        <button
          onClick={() => setCategory(1)}
          className={category === 1 ? "font-rbold primary-text" : ""}
        >
          Indoor plants
        </button>
        <button
          onClick={() => setCategory(2)}
          className={category === 2 ? "font-rbold primary-text" : ""}
        >
          Outdoor plants
        </button>
        <button
          onClick={() => setCategory(3)}
          className={category === 3 ? "font-rbold primary-text" : ""}
        >
          Seeds
        </button>
        <button
          onClick={() => setCategory(4)}
          className={category === 4 ? "font-rbold primary-text" : ""}
        >
          Potter plants
        </button>
        <button
          onClick={() => setCategory(5)}
          className={category === 5 ? "font-rbold primary-text" : ""}
        >
          Flowering plants
        </button>
      </div>
      <div>
        {data.map((item) => (
          <Link to={`/product/${item.fakeId}`}>
            <div key={item.id} className="flex flex-col gap-2 p-4 items-center mt-8 bg-green-50">
            <img src="/super-sale.png" alt="" />
            <h2 className="text-2xl font-rbold">{item.text}</h2>
            <img src={item.img} alt="img" />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
