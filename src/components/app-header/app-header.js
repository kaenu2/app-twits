import React, { Component } from "react";
import "./app-header.scss";

import HeaderLogo from "./header-logo";
import HeaderStatistics from "./header-statistics/header-statistics";

export default class AppHeader extends Component {
	render() {
		return (
			<header className="header">
				<HeaderLogo/>
				<HeaderStatistics/>
			</header>
		)
	}
}