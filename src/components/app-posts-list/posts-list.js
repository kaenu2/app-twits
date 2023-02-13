import React from "react";
import "./posts-list.scss";

import PostItem from "../app-post-item";


const PostsList = () => {
	return (
		<ul>
			<PostItem/>
			<PostItem/>
			<PostItem/>
		</ul>
	)
};

export default PostsList;