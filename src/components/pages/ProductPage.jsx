import ImagesDetail from "../common/ImagesDetail";
import ProductDesc from "../common/ProductDesc";


function ProductPage() {
    return (
        <div className="product-page">
            <div className="product-page_container">
                <ImagesDetail />
                <ProductDesc />
            </div>
        </div>
    );
}

export default ProductPage;