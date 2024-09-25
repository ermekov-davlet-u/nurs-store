import Logo from "./ui-comp/Logo";
import Menu from "./ui-comp/Menu";
import { IoIosSearch } from "react-icons/io";
import "../css/header.css"
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";


export default function Header() {

	return (
		<div className="header">
			<div className="header-container">
				<Logo></Logo>
				<div className="header-toggle">
					<div className="header-toggle_container">
						<div className="header-toggle_button">
							<IoIosSearch />
						</div>
						<div className="header-toggle_button">
							<IoBagHandleOutline />
						</div>
						<div className="header-toggle_button">
							<FaRegUser />
						</div>
						<div className="header-toggle_button">
							<IoHomeOutline />
						</div>
					</div>
				</div>
			</div>
			<Menu></Menu>
		</div>
	)
}