const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Configuration
const baseUrl = "https://cleanpro.com";

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
    title: "Professional Cleaning Services in Minneapolis | CleanPro",
    description: "CleanPro provides expert residential and commercial cleaning services in the Minneapolis Maple Grove/Plymouth area. Get a free quote today!",
    active: "home",
    canonical: `${baseUrl}/`,
  });
});

app.get("/services", (req, res) => {
  res.render("services", {
    title: "Our Cleaning Services | CleanPro",
    description: "Comprehensive cleaning services including residential, commercial, and specialized cleaning solutions in the Minneapolis area. Serving Maple Grove and Plymouth.",
    active: "services",
    canonical: `${baseUrl}/services`,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Our Cleaning Company | CleanPro",
    description: "Learn about CleanPro's professional cleaning team and our commitment to excellence in cleaning services in the Minneapolis Maple Grove/Plymouth area.",
    active: "about",
    canonical: `${baseUrl}/about`,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact CleanPro | Professional Cleaning Services",
    description: "Get in touch with CleanPro for all your cleaning service needs in the Minneapolis Maple Grove/Plymouth area. Free quotes available.",
    active: "contact",
    canonical: `${baseUrl}/contact`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", {
    title: "Server Error | CleanPro",
    description: "An error occurred while processing your request.",
    active: "error",
    canonical: `${baseUrl}/error`,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page Not Found | CleanPro",
    description: "The page you are looking for could not be found.",
    active: "404",
    canonical: `${baseUrl}/404`,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
