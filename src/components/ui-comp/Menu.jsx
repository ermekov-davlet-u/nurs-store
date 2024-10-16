import { Link } from "react-router-dom";
import "./../../css/menu.css"

function Menu() {
	return (
		<div className="menu-wrap">
			<div className="menu-wrap-container">
				<ul className="menu-wrap_list">
					<Link className="menu_link" to={"/"}>Home</Link>
					<Link className="menu_link" to={"/product"}>product</Link>
					<Link className="menu_link" to={"/product/2"}>Coding</Link>
					<Link className="menu_link" to={"/catalog"}>Catalogs</Link>
					<Link className="menu_link" to={"/form"}>Create</Link>
					<Link className="menu_link" to={"/contact"}>Contact</Link>
				</ul>
			</div>
		</div>
	);
}

export default Menu;