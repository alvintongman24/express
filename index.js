// What You're Aiming For

// In this checkpoint, we are going to create a web application that contains three pages:

// Home page.
// Our Services.
// Contact us.
// These pages should follow the next requirements:

// Each page should contain a nav bar link (Home, Our Services, Contact us).
// Feel free to put any content you want.
// The web application is only available during working hours (Monday to Friday,  from 9 to 17).

// Instructions

// Use Express to create the server and handle routes.
// Create a custom middleware to verify the time of the request.
// The pages should be styled with CSS.
// Optionally, you can use any template engine you want.

// The web application is only available during working hours (Monday to Friday,  from 9 to 17).
//first we install expressjs so we could use the req res
//import express

import express from "express";
const app = express();
const port = 3000;
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res, next) => {
  const time = 17;
  if (time < 9 && time < 17) {
    res.send("error found Guy watin you dey do");
    return next();
  }
  res.sendFile(__dirname + "/index.html");
});

app.get("/Services", (req, res, next) => {
  const time = 16;
  if (time < 9 && time < 17) {
  res.send("sorry you dont have access");
    return next();
  }
  
  res.sendFile(__dirname + "/services.html");
});

app.get("/ContactUs", (req, res, next) => {
  const time = 18;
  if (time < 9 && time < 17) {
    res.send("sorry you dont have access");
    return next();
  }
 
   res.sendFile(__dirname + "/contactUS.html");
});

app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
