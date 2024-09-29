


function InputNumber() {
    return ( 
        <div className="input-number">
            <div className="input-number_container">
                <label htmlFor="" className="input-number_label">
                    Label:
                </label>
                <div className="input-number_wrap">
                    <button className="input-number_button">-</button>
                    <input type="number" className="input-number_inp" />
                    <button className="input-number_button">+</button>
                </div>
            </div>
        </div>
     );
}

export default InputNumber;