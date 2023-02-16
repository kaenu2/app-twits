import React, { Component } from "react";
import "./header-statistics.scss";

export default class HeaderStatistics extends Component {
	constructor(props) {
		super(props);
		this.state = '';
	}

	render() {
		const {allPosts, liked} = this.props;
		const createStrPost = (allPosts === 0 || allPosts > 4) ? 'постов' : (allPosts === 1) ? 'пост' : (allPosts >= 2 && allPosts <= 4) ? 'поста' : 'постов';
		const createStrLike = (liked === 1) ? 'понравился' : 'понравилось';
		return(
			<div className="header__statistics">
				<h2><span>{allPosts}</span> {createStrPost}, <span>{liked}</span> {createStrLike}</h2>
			</div>
		)
	}
};