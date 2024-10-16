


function TextEdit() {
    return ( 
        <div className="textedit">
            <div className="textedit_container">
                <div className="textedit_label">
                    Text
                </div>
                <div className="textedit_input_wrap">
                    <input type="text" className="textedit_input" />
                    <div className="textedit_input_icon">
                        <img src="#" alt="" className="textedit_input_icon_img" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default TextEdit;