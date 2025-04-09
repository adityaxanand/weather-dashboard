# Weather Dashboard Application

A sleek, responsive weather dashboard built with React and Tailwind CSS. This application leverages the OpenWeatherMap API to display current weather conditions and a 5-day forecast for any searched city. Enjoy a modern UI complete with dark/light mode toggle and persistent recent searches stored directly in your browser.

---

## Features

- **Current Weather:** Get up-to-date weather conditions for any city.
- **5-Day Forecast:** View a daily forecast based on data from the OpenWeatherMap API.
- **Recent Searches:** Quickly access your last five searched cities using local storage.
- **Dark/Light Mode:** Toggle between dark and light themes with your preference saved between sessions.
- **Responsive Design:** Optimized for mobile, tablet, and desktop displays.
- **Clean UI Elements:** Enhanced styling with custom fonts, header, and footer components.

---

## Technologies Used

- **React:** For building a dynamic, component-based user interface.
- **Tailwind CSS:** For rapid development of a responsive and modern design.
- **Axios:** For making HTTP requests to fetch weather data.
- **Framer Motion:** For smooth animations on weather cards.
- **OpenWeatherMap API:** Provides real-time weather and forecast data.
- **Local Storage:** To persist recent searches and dark mode preferences.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or if you prefer Yarn:
   yarn install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root of your project and add your OpenWeatherMap API key:

   ```env
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual API key from [OpenWeatherMap](https://openweathermap.org/).

4. **Run the Application:**

   ```bash
   npm start
   # or with Yarn:
   yarn start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
weather-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Forecast.js
│   │   ├── ThemeToggle.js
│   │   ├── SearchBar.js
│   │   ├── RecentSearches.js
│   │   └── WeatherCard.js   
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .env
├── package.json
└── README.md
```

- **App.js:** Main component integrating all sub-components.
- **Components:** Includes individual components for the search bar, weather cards, forecast, theme toggle, header, and footer.
- **index.css:** Contains Tailwind CSS directives, custom styles, and Google fonts for enhanced typography.

---

## Customization & Further Improvements

- **Enhanced UI/UX:** Customize themes, fonts, and responsive breakpoints via Tailwind CSS.
- **Additional Features:** You might integrate more APIs (e.g., air quality, wind direction, or historical weather data).
- **Accessibility Improvements:** Enhance keyboard navigation and screen reader support in future updates.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request for review.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.

---

## Acknowledgements

- **OpenWeatherMap:** Thanks for providing a robust API for weather data.
- **Open Source Community:** For inspiration and numerous open-source projects that influenced the design of this app.

---

Happy Coding!
```
