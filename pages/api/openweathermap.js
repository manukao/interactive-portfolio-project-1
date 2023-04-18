export default async function handler(req, res) {
  const { city } = req.query;
  const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`
    );
    const weatherData = await weatherResponse.json();

    res.status(200).json(weatherData);
  } catch (error) {
    console.error("Error fetching OpenWeatherMap data:", error);
    res.status(500).json({ message: "Failed to fetch OpenWeatherMap data" });
  }
}
