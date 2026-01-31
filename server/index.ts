import express from "express";
import cors from "cors";
import { sendContactFormNotification } from "./email";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    const subject = company ? `Inquiry from ${company}` : "Website Contact Form";
    
    await sendContactFormNotification(name, email, subject, message, phone);

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
