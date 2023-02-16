import React, { Component } from "react";
import "./status-filter.scss";

export default class StatusFilter extends Component {
	constructor(props){
		super(props);
		this.buttons = [
			{name: 'all', label: 'Все'},
			{name: 'like', label: 'Лайкнутые'}
		];
	}

	render() {
		const buttons = this.buttons.map(({name, label}) => {
			const {filter, onFilterSelect} = this.props;
			const active = filter === name;
			const activeClass = active ? 'btn btn-active' : 'btn btn-outline';
			return (
				<button
				key={name}
				onClick={() => {onFilterSelect(name)}}
				className={activeClass}
				type='button'>
					{label}
				</button>
			)
		})
		return (
			<div className="panel__btn-group">
				{buttons}
			</div>
		)
	}
}