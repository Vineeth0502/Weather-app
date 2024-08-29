
# Weather App

This is a simple weather application built with React that allows users to search for current weather information by city name. The app displays the current temperature, humidity, wind speed, and weather condition, along with a 5-day forecast. The background color and temperature text dynamically change based on the weather conditions.

## Features

- Search for weather information by city name
- Displays current weather data:
  - Temperature (color-coded based on value)
  - Humidity
  - Wind speed
  - Weather condition (with icon)
- 5-day weather forecast
- Dynamic background color based on weather conditions

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/Weather-app.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd weather-app
   ```

3. **Install Dependencies**:
   Install the necessary dependencies using npm (Node Package Manager):
   ```bash
   npm install
   ```

4. **Add Your OpenWeatherMap API Key**:
   - Replace the placeholder `your_openweathermap_api_key` in the `App.js` file with your actual OpenWeatherMap API key.

5. **Run the Application**:
   Start the application locally:
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000` by default.

## Usage

1. **Search for a City**:
   - Enter the name of the city you want to search for in the input field and click the "Get Weather" button.

2. **View Current Weather**:
   - The app will display the current temperature, humidity, wind speed, and weather condition of the searched city.

3. **View 5-Day Forecast**:
   - Scroll down to see the 5-day weather forecast for the searched city.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **OpenWeatherMap API**: Provides weather data including current conditions and forecasts.
- **Axios**: Promise-based HTTP client for the browser and Node.js used to fetch weather data from the OpenWeatherMap API.
- **CSS**: For styling the application and adding dynamic visual effects.

## What I Did

- Created a responsive weather application using React.
- Implemented dynamic background color changes based on the weather conditions.
- Integrated the OpenWeatherMap API to fetch real-time weather data.
- Styled the application using CSS to make it visually appealing and user-friendly.
- Handled edge cases such as invalid city names with appropriate error messages.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to reach out.

- **Email**: vineethketham@gmail.com
