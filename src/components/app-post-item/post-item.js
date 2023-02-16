import React, { Component } from "react";
import "./post-item.scss";

export default class PostItem extends Component {
	render() {
		const {label, date, important, like, onToggleLiked, onToggleImportant, onRemove} = this.props;

		let className = "post__item";

		if (like) {
			className += " _like";
		}
		if (important) {
			className += " _important";
		}

		return (
			<div className={className}>
				<div className="post__content content">
				<p className="content__date">{date}</p>
				<p
				className="content__labele cp"
				onClick={onToggleLiked}>{label}</p>
				</div>
				<div className="post__btn-group btn">
					<button
					className="btn__importatnt cp"
					onClick={onToggleImportant}>
						<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.9121 1.59053C12.7508 1.2312 12.3936 1 11.9997 1C11.6059 1 11.2487 1.2312 11.0874 1.59053L8.27041 7.86702L1.43062 8.60661C1.03903 8.64895 0.708778 8.91721 0.587066 9.2918C0.465355 9.66639 0.574861 10.0775 0.866772 10.342L5.96556 14.9606L4.55534 21.6942C4.4746 22.0797 4.62768 22.4767 4.94632 22.7082C5.26497 22.9397 5.68983 22.9626 6.03151 22.7667L11.9997 19.3447L17.968 22.7667C18.3097 22.9626 18.7345 22.9397 19.0532 22.7082C19.3718 22.4767 19.5249 22.0797 19.4441 21.6942L18.0339 14.9606L23.1327 10.342C23.4246 10.0775 23.5341 9.66639 23.4124 9.2918C23.2907 8.91721 22.9605 8.64895 22.5689 8.60661L15.7291 7.86702L12.9121 1.59053Z" fill="currentColor"/>
						</svg>
					</button>
					<button
					className="btn__remove cp"
					onClick={onRemove}>
						<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z" fill="currentColor"/>
							<path d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z" fill="currentColor"/>
						</svg>
					</button>
					<button
					className="btn__like cp"
					onClick={onToggleLiked}>
						<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 2C3.31333 2 1 5.21475 1 8.5C1 11.8412 2.67415 14.6994 4.77151 16.9297C6.8721 19.1634 9.47698 20.8565 11.5528 21.8944C11.8343 22.0352 12.1657 22.0352 12.4472 21.8944C14.523 20.8565 17.1279 19.1634 19.2285 16.9297C21.3259 14.6994 23 11.8412 23 8.5C23 5.22013 20.7289 2 17 2C15.275 2 14.0531 2.47979 13.1186 3.20977C12.6785 3.55357 12.311 3.95011 11.9974 4.33639C11.6802 3.94929 11.3091 3.55266 10.8649 3.2079C9.92877 2.48125 8.70883 2 7 2Z" fill="currentColor"/>
							</svg>
					</button>
				</div>
			</div>
		)
	}
};
