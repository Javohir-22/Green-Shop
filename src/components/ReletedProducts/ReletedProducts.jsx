import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";

const ReletedProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://1034506f7a622249.mokky.dev/products"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-[1200px]">
      <h1 className="text-lg font-rbold primary-text w-full border-b py-2">Releted Products</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full py-11"
      >
        {
          data.map((product) => (
            <SwiperSlide className="w-[220px] border ">
              <Link to={`/product/${product.id}`}>
              <img className="w-full h-[255px]" src={product.img} alt="" />
              <p>{product.name}</p>
              <h3 className="font-rbold primary-text"> ${product.price}</h3></Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default ReletedProducts;
