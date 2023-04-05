import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LocationCard from "./LocationCard";

// Mock the entire maplibre-gl module
jest.mock("maplibre-gl", () => ({
  Map: jest.fn(() => ({
    addControl: jest.fn(),
  })),
  NavigationControl: jest.fn(),
  Marker: jest.fn(() => ({
    setLngLat: jest.fn().mockReturnThis(),
    addTo: jest.fn(),
  })),
}));

describe("LocationCard", () => {
  const location = {
    lat: 50.7399,
    lng: 7.0904,
    timezone: "Europe/Berlin",
  };

  test("renders map container, weather badge, and local time", () => {
    render(<LocationCard location={location} />);

    const mapContainer = screen.getByTestId("map-container");
    expect(mapContainer).toBeInTheDocument();

    const weatherBadgeContainer = screen.getByTestId("weather-badge-container");
    expect(weatherBadgeContainer).toBeInTheDocument();

    const timeBadgeContainer = screen.getByTestId("time-badge-container");
    expect(timeBadgeContainer).toBeInTheDocument();
  });
});
