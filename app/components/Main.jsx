var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
// In this case we're not using this.props.children because of the arrow function    	
	return (
          <div>
            <Nav />
            <div className="row">
              <div className="columns medium-6 large-4 small-centered">
                {props.children}
              </div>
            </div>
          </div>
		);
};

module.exports = Main;