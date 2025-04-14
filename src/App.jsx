import { useState } from "react";
import "./App.css";
import DiscoverSection from "./components/DiscoverSection/DiscoverSection";
import FilterBar from "./components/FilterBar/FilterBar";
import Footer from "./components/footer/Footer";
import MainHeader from "./components/header/MainHeader";
import ProductList from "./components/ProductList/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <div>
        <MainHeader />
        <DiscoverSection />
        <main>
          <FilterBar
            isFilterVisible={isFilterVisible}
            toggleFilterVisibility={toggleFilterVisibility}
          />
          <div className="container">
            <div className="main_wrapper">
              {isFilterVisible && <Sidebar />}
              <ProductList />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
