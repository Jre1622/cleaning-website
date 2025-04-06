const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Configuration
const baseUrl = "https://homecleanmn.com";

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static("public"));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Basic routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Professional Cleaning Services in Minneapolis | HomeCleanMN",
    description: "HomeCleanMN provides expert residential and commercial cleaning services in the Minneapolis Maple Grove/Plymouth area. Get a free quote today!",
    active: "home",
    canonical: `${baseUrl}/`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", {
    title: "Server Error | HomeCleanMN",
    description: "An error occurred while processing your request.",
    active: "error",
    canonical: `${baseUrl}/error`,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page Not Found | HomeCleanMN",
    description: "The page you are looking for could not be found.",
    active: "404",
    canonical: `${baseUrl}/404`,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
