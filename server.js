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
    title: "Home Cleaning Services | Maple Grove, Plymouth MN | HomeCleanMN",
    description: "HomeCleanMN: Top-rated house & office cleaning for Maple Grove, Plymouth, Rogers, St. Michael & NW Suburbs. Get your free quote!",
    active: "home",
    canonical: `${baseUrl}/`,
  });
});

app.get("/services", (req, res) => {
  res.render("services", {
    title: "Our Cleaning Services in Maple Grove & NW Metro | HomeCleanMN",
    description: "Explore residential, commercial, deep cleaning & more from HomeCleanMN, serving Maple Grove, Plymouth, Rogers, and surrounding areas.",
    active: "services",
    canonical: `${baseUrl}/services`,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About HomeCleanMN | Local Maple Grove Cleaning Company",
    description: "Learn about HomeCleanMN, your local, trusted cleaning service provider for Maple Grove, Plymouth, and the NW metro area.",
    active: "about",
    canonical: `${baseUrl}/about`,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact HomeCleanMN | Cleaning Quotes for Maple Grove Area",
    description: "Get a free cleaning quote from HomeCleanMN. Contact us for services in Maple Grove, Plymouth, Rogers, St. Michael, and nearby towns.",
    active: "contact",
    canonical: `${baseUrl}/contact`,
  });
});

// Service Detail Pages
app.get("/services/residential", (req, res) => {
  res.render("services/residential", {
    title: "Residential House Cleaning | Maple Grove & Plymouth | HomeCleanMN",
    description: "Professional home & maid cleaning services in Maple Grove, Plymouth, MN. Reliable cleaners for your house. Get a free quote!",
    active: "services",
    canonical: `${baseUrl}/services/residential`,
  });
});

app.get("/services/commercial", (req, res) => {
  res.render("services/commercial", {
    title: "Commercial & Office Cleaning | Maple Grove Area | HomeCleanMN",
    description: "Reliable office & commercial cleaning services for businesses in Maple Grove, Plymouth, Rogers & NW suburbs.",
    active: "services",
    canonical: `${baseUrl}/services/commercial`,
  });
});

app.get("/services/deep-cleaning", (req, res) => {
  res.render("services/deep-cleaning", {
    title: "Deep Cleaning Services | Maple Grove & NW Suburbs | HomeCleanMN",
    description: "Thorough deep cleaning services for homes and offices in Maple Grove, Plymouth, Rogers. Get a fresh start with our detailed cleaning approach.",
    active: "services",
    canonical: `${baseUrl}/services/deep-cleaning`,
  });
});

app.get("/services/move-in-out", (req, res) => {
  res.render("services/move-in-out", {
    title: "Move In/Out Cleaning Services | Maple Grove Area | HomeCleanMN",
    description: "Stress-free move-in and move-out cleaning services in Maple Grove, Plymouth, and nearby areas. Ensure your old or new place is spotless.",
    active: "services",
    canonical: `${baseUrl}/services/move-in-out`,
  });
});

app.get("/services/recurring", (req, res) => {
  res.render("services/recurring", {
    title: "Recurring Cleaning Services | Maple Grove, Plymouth | HomeCleanMN",
    description: "Flexible weekly, bi-weekly, monthly cleaning plans for Maple Grove & Plymouth homes/businesses. Enjoy consistent cleanliness.",
    active: "services",
    canonical: `${baseUrl}/services/recurring`,
  });
});

app.get("/services/special-event", (req, res) => {
  res.render("services/special-event", {
    title: "Special Event Cleaning | Maple Grove & Surrounding | HomeCleanMN",
    description: "Pre-event & post-event cleaning for parties, weddings & functions in Maple Grove, Plymouth, Rogers, St. Michael.",
    active: "services",
    canonical: `${baseUrl}/services/special-event`,
  });
});

// Legal Pages
app.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy", {
    title: "Privacy Policy | HomeCleanMN",
    description: "Read the Privacy Policy for HomeCleanMN, serving the Maple Grove, MN area.",
    active: "privacy",
    canonical: `${baseUrl}/privacy-policy`,
  });
});

app.get("/terms-of-service", (req, res) => {
  res.render("terms-of-service", {
    title: "Terms of Service | HomeCleanMN",
    description: "Read the Terms of Service for HomeCleanMN, providing cleaning services in the Maple Grove, MN area.",
    active: "terms",
    canonical: `${baseUrl}/terms-of-service`,
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
