import React from "react";
import "./header-logo.scss";

import logo from "./img/logo.png";


const HeaderLogo = () => {
	return (
			<div className="header__logo">
				<a href="https://github.com/kaenu2">
					<img src={logo} alt=""/>
					<h1>Andrey Kurnosov</h1>
				</a>
			</div>
	)
};

export default HeaderLogo;