var React=require('react');
var ThumbnailList=require('./thumbnail-list');

var options={
	thumbnailData:[
		{
			imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png",
			alt:"react",
			label:"React JS",
			paragraph:"React is the new sexy js library",
			company:"facebook"

		},
		{
			imageUrl:"https://avatars0.githubusercontent.com/u/6200624?v=3&s=400",
			alt:"gulp",
			label:"Gulp JS",
			paragraph:"Gulp is a build tool",
			company:"facebook"
		},
		{
			imageUrl:"http://i.ytimg.com/vi/qvHecQOiu8g/maxresdefault.jpg",
			alt:"angular",
			label:"Angular JS",
			paragraph:"Angular JS is a JS framework",
			company:"google"
		},

	]
};


var thumbnail=React.createElement(ThumbnailList,options);
React.render(thumbnail,document.querySelector('#target'));