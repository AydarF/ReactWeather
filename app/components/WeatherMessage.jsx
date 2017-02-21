var React = require('react');

var WeatherMessage = ({temp, location}) => {
// In the case below we're using props instead of this.props because of the arrow function 
    return (
          <div>
            <h3 className="text-center">It is {temp}&deg;F in {location.charAt(0).toUpperCase() + location.slice(1)}.</h3>
          </div>  
		);
};

module.exports = WeatherMessage;