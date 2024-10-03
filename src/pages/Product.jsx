import Cards from "../components/common/Cards";
import PageWrapper from "../components/common/PageWrapper";
import CardTop from "../components/elements/CardTop";



function ProductsPage() {
    return (
        <PageWrapper>
            <Cards />
            <CardTop/>
        </PageWrapper>
    );
}

export default ProductsPage;