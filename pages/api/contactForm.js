import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const webhookURL = `https://discord.com/api/webhooks/1097889545292361889/${process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_TOKEN}`;

    const embed = {
      title: "New message from a Portfolio Visitor",
      fields: [
        { name: "Name", value: name, inline: true },
        { name: "Email", value: email, inline: true },
        { name: "Message", value: message },
      ],
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post(webhookURL, { embeds: [embed] });
      res.status(200).json({ message: "Message sent to Discord." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending message to Discord." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
