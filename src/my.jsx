var React=require('react');
var ThumbnailList=require('./thumbnail-list');

var options={
	thumbnailData:[
		{
			imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png",
			alt:"react",
			label:"React JS",
			paragraph:"React is the new sexy js library"

		},
		{
			imageUrl:"https://avatars0.githubusercontent.com/u/6200624?v=3&s=400",
			alt:"gulp",
			label:"Gulp JS",
			paragraph:"Gulp is a build tool"
		}
	]
};


var thumbnail=React.createElement(ThumbnailList,options);
React.render(thumbnail,document.querySelector('#target'));