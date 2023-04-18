import useSWR from "swr";
import { useRouter } from "next/router";

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

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function WeatherBadge({ location }) {
  const router = useRouter();
  const usersCity = `${location.city}`;

  const { data, error } = useSWR(
    router.pathname === "/api/openweathermap"
      ? null
      : `/api/openweathermap?city=${usersCity}`,
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

  return (
    <>
      {weatherIcons[weatherIcon] || "🌥️"} {temperature}°C
    </>
  );
}
