import Cards from "../components/common/Cards";
import CardTop from "../components/elements/CardTop";
import Hero from "../components/Hero";
import Shopnow from "../components/Shopnow";
import Header from '../components/Header';
import PageWrapper from "../components/common/PageWrapper";



function MainPage() {
    return (
        <PageWrapper>
            <Hero />
            <Shopnow />
            <Cards />
            <CardTop/>
        </PageWrapper>
    );
}

export default MainPage;