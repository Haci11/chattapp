const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url =
  "mongodb+srv://haco:haco@cluster0.vvmdaur.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect(url);

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

app.get("/messages", async (req, res) => {
  const message = await Message.find();
  res.send(message);
});

app.post("/message", async (req, res) => {
  const { message } = req.body;
  await Message.create({ message: message });
  res.send("ok");
});

app.listen(3000);
