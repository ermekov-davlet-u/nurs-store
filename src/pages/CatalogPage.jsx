import PageWrapper from "../components/common/PageWrapper";
import CardTop from '../components/elements/CardTop';


function CatalogPage() {
    return (
        <PageWrapper>
            <div className="catalog-page">
                <div className="catalog-page_container">
                    <CardTop/>
                    <CardTop/>
                    <CardTop/>
                    <CardTop/>
                    <CardTop/>
                </div>
            </div>
        </PageWrapper>
    );
}

export default CatalogPage;