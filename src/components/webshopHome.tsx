import Header from "./Header";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Benefits from "./Benefits";
import Footer from "./Footer";
export default function WebshopHome() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
