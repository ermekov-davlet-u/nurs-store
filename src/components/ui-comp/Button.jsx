import "../../css/button.css"
import { IoBagHandleOutline } from "react-icons/io5";
function Button({ title, onClick = () => { } }) {
	return (
		<button className="button" onClick={onClick}>
			<div className="button_icon">
				<IoBagHandleOutline />
			</div>
			<div className="button_text">
				{
					title
				}
			</div>
		</button>
	);
}

export default Button;