var React=require('react');
var Badge=require('./badge.jsx');

module.exports=React.createClass({
	render:function() {
		return <div className="col-sm-6 col-md-4">
				<div className="thumbnail">
					<img src={this.props.imageUrl} alt={this.props.alt} />
					<div className="caption">
						<h3>{this.props.label}</h3>
				        <p>{this.props.paragraph}</p>
				        <p>
				        <Badge />
				        <a href="#" className="btn btn-primary" role="button">Button</a> 
				        <a href="#" className="btn btn-default" role="button">Button</a></p>
					</div>
				</div>
			</div>
	}
});
