import React, { Component } from "react";
import "./search-post.scss";

export default class SearchPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		}
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
	}
	onUpdateSearch(e) {
		const term = e.target.value.toLowerCase();
		this.setState(({term}));
		this.props.onUpdateSearch(term);
	}
	render() {
		return (
			<div className="panel__search-post">
				<input
				placeholder="Поиск постов"
				onChange={this.onUpdateSearch}
				/>
			</div>
		)
	}
};