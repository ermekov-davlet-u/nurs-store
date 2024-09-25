
import Button from './ui-comp/Button';
import "../css/hero.css"

function Hero() {
	return (
		<div className="hero">
			<div className="hero_img" />
			<div className="hero_container">
				<div className="hero_content">
					<div className="hero_subtitle">
						50% off everything
					</div>
					<div className="hero_title">
						Women's Clothing
					</div>
					<div className="hero_text">
						We offer free shipping on all orders over
					</div>
					<div className="hero_bottom">
						<Button title={"Discover now"}/>
					</div>
				</div>

			</div>
		</div>
	);
}

export default Hero;