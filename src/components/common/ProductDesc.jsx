import { IoIosStarOutline } from "react-icons/io";
import Sizeswitch from './../elements/Sizeswitch';
import { FaRegEye } from "react-icons/fa";
import InputNumber from "../ui-comp/NumberInput";
import Button from './../ui-comp/Button';

function ProductDesc() {
    return (
        <div className="product-desc">
            <div className="product-desc_herder">
                <div className="product-desc_herder_container">
                    <p className="product-desc_herder_title">
                        In Stock
                    </p>
                    <div className="product-desc_raiting">
                        <div className="product-desc_raiting_stars">
                            <div className="roduct-desc_raiting_star">
                                <IoIosStarOutline />
                            </div>
                            <div className="roduct-desc_raiting_star">
                                <IoIosStarOutline />
                            </div>
                            <div className="roduct-desc_raiting_star">
                                <IoIosStarOutline />
                            </div>
                            <div className="roduct-desc_raiting_star">
                                <IoIosStarOutline />
                            </div>
                            <div className="roduct-desc_raiting_star">
                                <IoIosStarOutline />
                            </div>
                        </div>
                        <div className="product-desc_raiting_text">
                            0 reveiws
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-desc_container">
                <div className="product-desc_title">
                    Oversized V-neck Sweatshirt
                </div>
                <div className="product-desc_price">
                    $79.99
                </div>
                <div className="product-desc_size_switcher">
                    <Sizeswitch />
                </div>
                <div className="product-desc_text">
                    Sweaters of premium class and the highest quality.
                    Large selection of sweaters in the online store.
                    Now it is not only warm but also a stylish item in your wardrobe.
                    When choosi...
                </div>
                <div className="product-viewed">
                    <div className="product-viewed_icon">
                        <FaRegEye />
                    </div>
                    <div className="product-viewed_count">
                        8
                    </div>
                    <div className="product-viewed_text">
                        Lorem, ipsum dolor.
                    </div>
                </div>
                <Button title={"Add to card"}/>
                <div className="product-viewed_count_block">
                    <InputNumber />
                </div>
            </div>
        </div>
    );
}

export default ProductDesc;