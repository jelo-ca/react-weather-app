# Weather Today

A modern, responsive React weather application that provides real-time weather information for cities around the world.

## Features

- **City Search**: Enter any city name to get current weather data
- **Real-time Data**: Fetches live weather information from OpenWeatherMap API
- **Dynamic Backgrounds**: Background color changes based on temperature ranges
- **Comprehensive Weather Info**: Displays temperature, pressure, visibility, humidity, and cloud coverage
- **Error Handling**: Shows user-friendly messages when city data is not found
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- **React 18** - Modern JavaScript library for building user interfaces
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Styling and responsive design
- **Create React App** - Build setup and development server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jelo-ca/react-weather-app.git
   cd weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```
   REACT_APP_WEATHER_API=your_api_key_here
   ```

   To get an API key:

   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key in your dashboard

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them.

## Project Structure

```
weather-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── InputCity.jsx
│   │   └── ShowWeather.jsx
│   ├── App.jsx
│   ├── index.js
│   └── style.css
├── package.json
└── README.md
```

## Components

- **Header**: Displays the app title "Weather Today"
- **InputCity**: Handles city name input and submission
- **ShowWeather**: Displays weather data with dynamic styling
- **App**: Main component managing state and API calls

## API Usage

The app uses the OpenWeatherMap Current Weather API endpoint:

```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Built with [Create React App](https://github.com/facebook/create-react-app)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
