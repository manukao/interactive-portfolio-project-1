export default async function handler(req, res) {
  const { lat, lng } = req.query;
  const MAPTILER_API_KEY = process.env.MAPTILER_API_KEY;

  try {
    const mapTilerResponse = await fetch(
      `https://api.maptiler.com/maps/84ae0c2c-718b-49a5-a818-493c28f227bb/style.json?key=${MAPTILER_API_KEY}&center=${lng},${lat}`
    );
    const mapTilerData = await mapTilerResponse.json();

    res.status(200).json(mapTilerData);
  } catch (error) {
    console.error("Error fetching Maptiler data:", error);
    res.status(500).json({ message: "Failed to fetch Maptiler data" });
  }
}
