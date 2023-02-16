import React, { Component } from "react";
import "./form-add-item.scss";

export default class FormAddItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};

		this.onValueChange = this.onValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onValueChange(e) {
		this.setState(({text: e.target.value}));
	}

	onSubmit(e) {
		e.preventDefault();
		if (this.state.text.length !== 0) {
			this.props.onAddPost(this.state.text);
			this.setState(({text: ''}));
		}
	}


	render() {
		const {text} = this.state;
		
		return (
			<form
			className="app__form-add-item"
			onSubmit={this.onSubmit}>
				<input
				onChange={this.onValueChange}
				placeholder="О чем вы сейчас думаете?"
				value={text}/>
				<button className="btn">Добавить</button>
			</form>
		);
	}
};
