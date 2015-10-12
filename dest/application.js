var options={
	thumbnailData:[
		{
			imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png",
			alt:"react",
			label:"React JS",
			paragraph:"React is the new sexy framework"
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
var Thumbnail=React.createClass({displayName: "Thumbnail",
	render:function() {
		return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
				React.createElement("div", {className: "thumbnail"}, 
					React.createElement("img", {src: this.props.imageUrl, alt: this.props.alt}), 
					React.createElement("div", {className: "caption"}, 
						React.createElement("h3", null, this.props.label), 
				        React.createElement("p", null, this.props.paragraph), 
				        React.createElement("p", null, React.createElement("a", {href: "#", className: "btn btn-primary", role: "button"}, "Button"), 
				        React.createElement("a", {href: "#", className: "btn btn-default", role: "button"}, "Button"))
					)
				)
			)
	}
});

var ThumbnailList=React.createClass({displayName: "ThumbnailList",
	render:function(){
		var list=this.props.thumbnailData.map(function(list){
			return React.createElement(Thumbnail, React.__spread({},  list))
		});

		return React.createElement("div", null, 
			list
		)
	}
});