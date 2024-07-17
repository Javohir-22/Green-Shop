import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlantCare = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://1034506f7a622249.mokky.dev/plant-care');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center gap-8 mt-20">
      {
        data.map((item) => (
          <div key={item.id} className="flex justify-between w-full border rounded-xl items-end bg-[#FBFBFB]">
            <img className="rounded-xl" src={item.img} alt="" />
            <div className="flex flex-col p-8 pl-0 items-end gap-4">
            <h3 className="text-lg font-rbold uppercase max-w-[150px]">{item.name}</h3>
            <p className="w-[292px] text-sm text-slate-600 text-right">{item.text}</p>
            <Link className="primary-bg font-rnormal leading-5 text-white px-6 py-2 rounded-md" to={`/product/${item.fakeId}`}>More</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PlantCare
