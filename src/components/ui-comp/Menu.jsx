import { Link } from "react-router-dom";
import "./../../css/menu.css"

function Menu() {
	return (
		<div className="menu-wrap">
			<div className="menu-wrap-container">
				<ul className="menu-wrap_list">
					<Link className="menu_link" to={"/home"}>Home</Link>
					<Link className="menu_link" to={"/blogs"}>Blogs</Link>
					<Link className="menu_link" to={"/coding"}>Coding</Link>
					<Link className="menu_link" to={"/skills"}>Skills</Link>
					<Link className="menu_link" to={"/extras"}>Extras</Link>
					<Link className="menu_link" to={"/contact"}>Contact</Link>
				</ul>
			</div>
		</div>
	);
}

export default Menu;