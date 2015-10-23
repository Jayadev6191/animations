var React=require('react');
var Badge=require('./badge.jsx');

module.exports=React.createClass({
	render:function() {
		return <button className="btn btn-danger" type="button">
				  Messages <span class="badge">4</span>
				</button>
	}
});