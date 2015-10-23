var React=require('react');
var Thumbnail=require('./thumbnail.jsx');

module.exports=React.createClass({
	render:function(){
		var list=this.props.thumbnailData.map(function(list){
			return <Thumbnail {...list} />
		});

		return <div>
			{list}
		</div>
	}
});