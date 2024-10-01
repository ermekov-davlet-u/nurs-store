import classNames from "classnames";
import "../../css/button.scss"
import { IoBagHandleOutline } from "react-icons/io5";
function Button({ title, onClick = () => { }, options = {mode: ""} }) {
	const { mode = "secondary" } = options;


	return (
		<button className={classNames("button", (mode && mode === "secondary") ? "button_secondary" : "")} onClick={onClick}>
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