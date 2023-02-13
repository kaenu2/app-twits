import React, { Component } from "react";
import "./app.scss";


import AppHeader from "../app-header";
import SearchPost from "../app-search-post/search-post";
import StatusFilter from "../app-status-filter";
import PostsList from "../app-posts-list";
import FormAddItem from "../app-form-add-item";


export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
				{id: 1, label: 'Всем привет! Это мой первое приложение на React.', like: false, important: false, date: new Date()},
				{id: 2, label: 'Здесь можно добавлять, лайкать, удалять посты. А так же есть поиск по постам и фильтр.', like: false, important: false, date: new Date()},
				{id: 3, label: 'Спасибо что испольузете мое приложение! <3', like: false, important: false, date: new Date()},
			],
		};
	}


	render(){
		return (
			<div className="app">
			<AppHeader/>
			<div className="app__group-panel panel">
				<SearchPost/>
				<StatusFilter/>
			</div>
			<PostsList/>
			<FormAddItem/>
			</div>
		);
	}
}