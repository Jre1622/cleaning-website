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

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

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

app.get("/services", (req, res) => {
  res.render("services", {
    title: "Our Cleaning Services | HomeCleanMN",
    description: "Explore our comprehensive cleaning services for homes and businesses in the Minneapolis area. Residential, commercial, and specialized cleaning solutions.",
    active: "services",
    canonical: `${baseUrl}/services`,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About HomeCleanMN | Professional Cleaning Service",
    description: "Learn about HomeCleanMN's commitment to providing top-quality cleaning services in Minneapolis. Meet our team and discover our values.",
    active: "about",
    canonical: `${baseUrl}/about`,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact HomeCleanMN | Request a Cleaning Quote",
    description: "Get in touch with HomeCleanMN for professional cleaning services in Minneapolis. Request a quote or ask questions about our services.",
    active: "contact",
    canonical: `${baseUrl}/contact`,
  });
});

// Service Detail Pages
app.get("/services/residential", (req, res) => {
  res.render("services/residential", {
    title: "Residential Cleaning Services | HomeCleanMN",
    description: "Professional residential cleaning services for homes in Minneapolis. Keep your home sparkling with our reliable maid services.",
    active: "services",
    canonical: `${baseUrl}/services/residential`,
  });
});

app.get("/services/commercial", (req, res) => {
  res.render("services/commercial", {
    title: "Commercial Cleaning Services | HomeCleanMN",
    description: "Reliable commercial and office cleaning services in the Minneapolis area. Maintain a clean and professional workspace.",
    active: "services",
    canonical: `${baseUrl}/services/commercial`,
  });
});

app.get("/services/deep-cleaning", (req, res) => {
  res.render("services/deep-cleaning", {
    title: "Deep Cleaning Services | HomeCleanMN",
    description: "Thorough deep cleaning services for homes and offices in Minneapolis. Get a fresh start with our detailed cleaning approach.",
    active: "services",
    canonical: `${baseUrl}/services/deep-cleaning`,
  });
});

app.get("/services/move-in-out", (req, res) => {
  res.render("services/move-in-out", {
    title: "Move In/Out Cleaning Services | HomeCleanMN",
    description: "Stress-free move-in and move-out cleaning services in Minneapolis. Ensure your old or new place is spotless.",
    active: "services",
    canonical: `${baseUrl}/services/move-in-out`,
  });
});

app.get("/services/recurring", (req, res) => {
  res.render("services/recurring", {
    title: "Recurring Cleaning Services | HomeCleanMN",
    description: "Flexible recurring cleaning plans (weekly, bi-weekly, monthly) for Minneapolis homes and businesses. Enjoy consistent cleanliness.",
    active: "services",
    canonical: `${baseUrl}/services/recurring`,
  });
});

app.get("/services/special-event", (req, res) => {
  res.render("services/special-event", {
    title: "Special Event Cleaning Services | HomeCleanMN",
    description: "Pre-event and post-event cleaning services for parties, weddings, and corporate functions in Minneapolis.",
    active: "services",
    canonical: `${baseUrl}/services/special-event`,
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
