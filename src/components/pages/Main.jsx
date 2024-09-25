import Cards from "../common/Cards";
import Hero from "../Hero";
import Shopnow from "../Shopnow";
import Header from './../Header';
import ProductPage from "./ProductPage";



function MainPage() {
    return (
        <>
            <Header />
            <Hero />
            <Shopnow />
            <Cards />
            <ProductPage />
        </>
    );
}

export default MainPage;