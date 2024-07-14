import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import Category from "../../components/Category/Category";

const Home = ({ setCount, count, category, setCategory }) => {
  return (
    <>
      <Header />
      <div className="flex justify-between">
        <Category category={category} setCategory={setCategory} />
        <ProductList setCount={setCount} count={count} />
      </div>
    </>
  );
};

export default Home;
