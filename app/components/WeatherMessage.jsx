var React = require('react');

var WeatherMessage = ({temp, location}) => {
// In the case below we're using props instead of this.props because of the arrow function 
    return (
          <div>
            <h3>It is {temp} in {location}. </h3>
          </div>  
		);
};

module.exports = WeatherMessage;