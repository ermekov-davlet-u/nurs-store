import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


function ImagesDetail() {

    

    return (
        <div className="images-detail">
            <div className="images-detail_container">
                <div className="images-list">
                    <button className="images-list_button">
                        <IoIosArrowUp />
                    </button>
                    <div className="images-list_container">
                        <div className="images-list_item">
                            <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/oversized_v_neck_sweatshirt_1_576x.jpg?v=1683647633" alt="" className="images-list_item_img" />
                        </div>
                        <div className="images-list_item">
                            <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/oversized_v_neck_sweatshirt_4_576x.jpg?v=1683647633" alt="" className="images-list_item_img" />
                        </div>
                        <div className="images-list_item">
                            <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/oversized_v_neck_sweatshirt_3_576x.jpg?v=1683647633" alt="" className="images-list_item_img" />
                        </div>
                        <div className="images-list_item">
                            <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/oversized_v_neck_sweatshirt_2_576x.jpg?v=1683647633" alt="" className="images-list_item_img" />
                        </div>
                        <div className="images-list_item">
                            <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/oversized_v_neck_sweatshirt_5_576x.jpg?v=1683647633" alt="" className="images-list_item_img" />
                        </div>
                    </div>
                    <button className="images-list_button">
                        <IoIosArrowDown />
                    </button>
                </div>
                <div className="main-image_wrap">
                    <button className="main-image_button">a</button>
                    <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/oversized_v_neck_sweatshirt_1_576x.jpg?v=1683647633" alt="" className="main-image_img" />
                    <button className="main-image_button">b</button>
                </div>
            </div>
        </div>
    );
}

export default ImagesDetail;