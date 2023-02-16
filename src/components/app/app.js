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
			data: JSON.parse(localStorage.getItem('data')) || [
				{id: 1, label: 'Это мое первое приложение на React.', like: false, important: false, date: '22'},
				{id: 2, label: 'Здесь можно добавлять, лайкать, удалять посты. Так же есть поиск по постам и фильтр.', like: false, important: true, date: '22'},
				{id: 3, label: 'Спасибо что испольузете мое приложение! <3', like: true, important: false, date: '22'},
			],
			term: '',
			filter: 'all'
		};

		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onRemove = this.onRemove.bind(this);
		this.onAddPost = this.onAddPost.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);

		this.maxNum = 4;

	}


	//
	onToggleLiked(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, like: !old.like};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			localStorage.setItem('data', JSON.stringify(newArr));

			return {
				data: newArr
			};
		});
	}

	onToggleImportant(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, important: !old.important};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			localStorage.setItem('data', JSON.stringify(newArr));


			return {
				data: newArr
			};
		});
	}

	onRemove(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const newArr = [...data.slice(0,index), ...data.slice(index + 1)];
			localStorage.setItem('data', JSON.stringify(newArr));


			return {
				data: newArr
			};
		});
	}

	onAddPost(body){
		if (body.length === '') return;
		const element = {
			id: this.maxNum++,
			label: body,
			important: false,
			like: false,
			date: new Date().toLocaleTimeString(),
		};
		this.setState(({data}) => {
			const newArr = [...data, element];
			localStorage.setItem('data', JSON.stringify(newArr));


			return {
				data: newArr,
			};
		});
	}

	// Search && filter
	searchPost(items, term) {
		if (!term.length) {
			return items;
		}

		return items.filter(item => {
			return item.label.toLowerCase().indexOf(term) > -1;
		});
	}

	onUpdateSearch(term){
		this.setState(({term}));
	}

	filterPosts(items, filter){
		if (filter === 'all') {
			return items;
		}
		if (filter === 'like') {
			return items.filter(item => item.like);
		}
	}
	onFilterSelect(filter){
		this.setState(({filter}));
	}

	render(){
		const {data, term, filter} = this.state;

		const allPosts = data.length;
		const liked = data.filter(item => item.like).length;

		const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);


		return (
			<div className="app ff">
			<AppHeader
			allPosts={allPosts}
			liked={liked}/>
			<div className="app__group-panel panel">
				<SearchPost
				onUpdateSearch={this.onUpdateSearch}/>
				<StatusFilter
				filter={filter}
				onFilterSelect={this.onFilterSelect}/>
			</div>
			<PostsList
			posts={visiblePosts}
			onToggleLiked={this.onToggleLiked}
			onToggleImportant={this.onToggleImportant}
			onRemove={this.onRemove}/>
			<FormAddItem
			onAddPost={this.onAddPost}/>
			</div>
		);
	}
}