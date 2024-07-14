const Category = ({ category, setCategory }) => {
  return (
    <div className="max-w-[300px] w-full p-2.5 bg-[#FBFBFB]">
      <h2>Categories</h2>
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
    </div>
  );
};

export default Category;
