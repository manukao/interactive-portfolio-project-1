import useSWR from "swr";
import styled from "styled-components";

const weatherIcons = {
  "01d": "☀️",
  "02d": "⛅️",
  "03d": "☁️",
  "04d": "☁️",
  "09d": "🌧️",
  "10d": "🌧️",
  "11d": "🌩️",
  "13d": "❄️",
  "50d": "🌫️",
};

const Badge = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border-radius: 999px;
  padding: 2px 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

const WeatherBadge = ({ location }) => {
  const usersCity = `${location.city}`;
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${usersCity}&units=metric&appid=${API_KEY}`,
    fetcher,
    { refreshInterval: 120000 }
  );

  if (error) {
    return <div>Error fetching weather</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { main, weather } = data;
  const temperature = main ? Math.round(main.temp) : null;
  const weatherIcon = weather && weather[0] ? weather[0].icon : null;

  console.log(location);

  return (
    <Badge>
      {weatherIcons[weatherIcon] || "🌥️"} {temperature}°C
    </Badge>
  );
};

export default WeatherBadge;
