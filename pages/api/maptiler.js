export default async function handler(req, res) {
  const { lat, lng } = req.query;
  const MAPTILER_API_KEY = process.env.MAPTILER_API_KEY;

  try {
    const mapTilerResponse = await fetch(
      `https://api.maptiler.com/maps/1803d634-29fe-444b-9340-8d78e2816bc5/style.json?key=${MAPTILER_API_KEY}&center=${lng},${lat}`
    );
    const mapTilerData = await mapTilerResponse.json();

    res.status(200).json(mapTilerData);
  } catch (error) {
    console.error("Error fetching Maptiler data:", error);
    res.status(500).json({ message: "Failed to fetch Maptiler data" });
  }
}
