import LinkButton from "../ui-comp/LinkButton";


function CardTop() {
    return ( 
        <div className="card-top">
            <div className="card-top_background">
                <img src="/card/card1.jpg" alt="" className="card-top_img" />    
            </div>        
            <div className="card-top_content">
                <div className="card-top_title">
                    Title
                </div>
                <div className="card-top_text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
                <LinkButton />
            </div>        
        </div>
     );
}

export default CardTop;