
import Cardproduct from './../elements/Cardproduct';
import "../../css/common.scss"
import { useSelector } from 'react-redux';

function Cards() {

    const products = useSelector(state => state.product)
    return (
        <div className="cards">
            <div className="cards_container">
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                {
                    products.map(item => {
                        return (
                            <Cardproduct />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Cards;