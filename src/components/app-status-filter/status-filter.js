import React, { Component } from "react";
import "./status-filter";

export default class StatusFilter extends Component {
	constructor(props){
		super(props);
		this.buttons = [

		];
	}

	render() {
		return (
			<div className="panel__btn-group">
				<button>Все</button>
				<button>Лайкнутые</button>
			</div>
		)
	}
}