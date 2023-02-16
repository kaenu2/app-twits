import React, { Component } from "react";
import "./posts-list.scss";

import PostItem from "../app-post-item";


export default class PostsList extends Component {
	render() {
		const {posts, onToggleLiked, onToggleImportant, onRemove} = this.props;
		const elements = posts.map(post => {
			const {id, ...postProps} = post;
			return (
				<li key={id}>
					<PostItem 
					{...postProps}
					onToggleLiked={() => {onToggleLiked(id)}}
					onToggleImportant={() => {onToggleImportant(id)}}
					onRemove={() => {onRemove(id)}}/>
				</li>
			)

		});
		return (
			<ul className="post__list">
				{posts.length === 0 ? (<li key="0">
					<p className="zero-post">Ваш список постов пуст</p>
				</li>) : elements}
			</ul>
		)
	}
};
