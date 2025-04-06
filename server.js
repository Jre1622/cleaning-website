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

// Handle contact form submissions
app.post("/contact", (req, res) => {
  // Here you would normally process the form data, send emails, etc.
  // For now, we'll just redirect to a thank you page

  console.log("Contact form submission:", req.body);

  // Redirect back with a success message
  res.render("contact", {
    title: "Contact HomeCleanMN | Request a Cleaning Quote",
    description: "Get in touch with HomeCleanMN for professional cleaning services in Minneapolis. Request a quote or ask questions about our services.",
    active: "contact",
    canonical: `${baseUrl}/contact`,
    success: "Thank you for your message! We will get back to you shortly.",
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
