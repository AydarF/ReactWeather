var React = require('react');

var About = (props) => {
	return (
		  <div>
            <h1 className="text-center page-title">About</h1>
            <p>
              This is a weather application build on React.
              Here are some of the tools I used:
            </p>
            <ul>
              <li>
                <a href="https://facebook.github.io/react" target="_blank">React</a> - The project was built using 
                React Javascript framework. 
              </li>
              <li>
                <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - To search for weather data by city name 
                Open Weather Map API was used.
              </li>
              <li>
                <a href="http://sass-lang.com" target="_blank">Sass</a> - Sass was used to 
                style the layout.
              </li>
            </ul> 	
          </div>    
		);
};

module.exports = About;