var React = require('react');

var About = (props) => {
	return (
		  <div>
            <h1 className="text-center page-title">About</h1>
            <p>
              This is is a simple weather application. It was built using:
            </p>
            <ul>
              <li>
                <a href="https://facebook.github.io/react" target="_blank">React</a> - Javascript framework 
              </li>
              <li>
                <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - to search for weather data by city name
              </li>
              <li>
                <a href="http://sass-lang.com" target="_blank">Sass</a> - to style the layout
              </li>
              <li>
                <a href="https://karma-runner.github.io" target="_blank">Karma</a> - to test the app
              </li>
            </ul>
            <p>
              Get today's current weather. To use the application, just search for a city.
            </p> 	
          </div>    
		);
};

module.exports = About;