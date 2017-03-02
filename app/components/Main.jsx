var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');

var Main = (props) => {
// In this case we're not using this.props.children because of the arrow function    	
	return (
          <div>
            <Nav />
              <div className="row main-block">
                <div className="columns medium-6 large-4 small-centered">
                  {props.children}
                </div>
              </div>
            <Footer />
          </div>
		);
};

module.exports = Main;