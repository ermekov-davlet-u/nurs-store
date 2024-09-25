import { useEffect } from "react";
import "../css/shopnow.css"
import Button from "./ui-comp/Button";

function Shopnow() {

    function ArraySort(arr){
        const newArr = arr;
        return function (sort = "asc") {
            return Object.freeze(newArr.sort((a, b) => {
                if(sort == "desc") return b.id - a.id;
                else if(sort == "asc") return a.id - b.id
            }))
        }
    }

    useEffect(() => {
    }, [])
    return (
        <div className="shopnow_wrap">
            <div className="shopnow">
                <div className="shopnow_container">
                    <div className="shopnow_content">
                        <div className="shopnow_sibtitle">
                            NEW BAgs
                        </div>
                        <div className="shopnow_title">
                            Up to 30% off<br/>

                            on all items.
                        </div>
                        <div className="shopnow_button_wrap">
                            <Button title={"SHOP now"}> 
                            </Button>
                        </div>
                    </div>
                    <div className="shopnow_img_wrap">
                        <img src="/products/shopnow1.png" alt="" className="shopnow_img" />
                    </div>
                </div>
            </div>
            <div className="shopnow">
                <div className="shopnow_container">
                    <div className="shopnow_content">
                        <div className="shopnow_sibtitle">
                            NEW BAgs
                        </div>
                        <div className="shopnow_title">
                            Up to 30% off<br/>

                            on all items.
                        </div>
                        <div className="shopnow_button_wrap">
                            <Button title={"SHOP now"}>
                                
                            </Button>
                        </div>
                    </div>
                    <div className="shopnow_img_wrap">
                        <img src="/products/shopnow1.png" alt="" className="shopnow_img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shopnow;