import EasyButton from "../ui-comp/EasyButton";


function Sizeswitch() {
    return ( 
        <div className="sizeswitch">
            <div className="sizeswitch_container">
                <div className="sizeswitch_name">
                    Size: XXL
                </div>
                <div className="sizeswitch_buttons">
                    <EasyButton/>
                    <EasyButton/>
                    <EasyButton/>
                    <EasyButton/>
                </div>
            </div>
        </div>
     );
}

export default Sizeswitch;