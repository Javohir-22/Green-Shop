import Header from "../../layout/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import Category from "../../components/Category/Category";
import Footer from "../../layout/Footer/Footer";
import PlantCare from "../../components/PlantCare/PlantCare";

const Home = ({ setCount, count, category, setCategory }) => {
  return (
    <>
      <Header />
      <main className="flex justify-between max-w-[1200px] mx-auto">
        <Category category={category} setCategory={setCategory} />
        <ProductList setCount={setCount} count={count} />
      </main>
      <PlantCare />
      <Footer />
    </>
  );
};

export default Home;
