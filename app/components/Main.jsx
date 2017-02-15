var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
// 	render: function () {
		
// 	}
// });

var Main = (props) => {
// In this case we're not using this.props.children because of the arrow function    	
	return (
          <div>
            <Nav />
            <h2>Main Component</h2>        
            {props.children}
          </div>
		);
};

module.exports = Main;