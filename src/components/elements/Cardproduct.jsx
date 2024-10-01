import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import "../../css/element.css"
import { useDispatch } from "react-redux";
import { newProducts } from './../../redux/actions/product';


function Cardproduct() {

    const dispatch = useDispatch()

    return (
        <div className="card-product">
            <div className="card-product_container">
                <div className="card-product_img_wrap">
                    <img src="/card/card1.jpg" alt="" className="card-product_img" />
                    <div className="card-product_top">
                        <div className="card-product_discount">
                            <div className="card-product_percent">
                                27%
                            </div>
                            <div className="card-product_new">
                                new
                            </div>
                            <div className="card-product_sale">
                                sale
                            </div>
                        </div>
                        <div className="card-product_chosen">
                            <CiHeart />
                        </div>
                    </div>
                    <div className="card-product_tools">
                        <div className="card-product_tool">
                            <FaRegEye />
                        </div>
                        <div className="card-product_tool" onClick={() => {
                            dispatch(newProducts)
                        }}>
                            <CiSettings />
                        </div>
                    </div>
                </div>
                <div className="card-product_footer">
                    <div className="card-product_title">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="card-product_price">
                        $115.00 $140.00
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardproduct;