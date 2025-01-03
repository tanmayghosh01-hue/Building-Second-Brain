import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, UserModel } from "./db";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";


// const JWT_PASSWORD = "badshah-ki-jali-anus-chalo-change-kare-syllabus";
const app = express();

app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  // const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  await UserModel.create({
    username: username,
    password: password,
  });

  res.json({
    message: "User signed up",
  });
});

app.post("/api/v1/signin", async (req, res) => {
  const password = req.body.password;
  const username = req.body.username;

  const existingUser = await UserModel.findOne({
    username,
    password,
  });

  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_PASSWORD
    );

    res.json({
      token,
    });
  }
});

app.post("/api/v1/content", userMiddleware , async (req, res) => {

  const link = req.body.link;
  const type = req.body.type;

  await ContentModel.create({
    link,
    type,
    //@ts-ignore
    userId: req.userId,
    tags: []
  })

  res.json({
    message: "Content added"
  })

});

app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000, () => console.log("server is started"));
