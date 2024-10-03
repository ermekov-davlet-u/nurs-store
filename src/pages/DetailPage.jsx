import ImagesDetail from "../components/common/ImagesDetail";
import PageWrapper from "../components/common/PageWrapper";
import ProductDesc from "../components/common/ProductDesc";


function DetailPage() {
    return (
        <PageWrapper>
            <div className="product-page">
                <div className="product-page_container">
                    <ImagesDetail />
                    <ProductDesc />
                </div>
            </div>
        </PageWrapper>
    );
}

export default DetailPage;