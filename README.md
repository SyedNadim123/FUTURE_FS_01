# Personal Portfolio Website

This project is the first task of the Future Interns Full Stack Web Development internship. It is a personal portfolio website built to showcase skills, projects, and a way for visitors to get in touch directly through the site.

## What the application does

The site presents a short introduction, an about section, a list of skills, a set of project cards, and a contact form. The contact form allows a visitor to send a message through the page itself. When submitted, the message is sent by email to the site owner, and the visitor sees a confirmation directly on the page without being redirected anywhere else.

## How it was built

The frontend is built with plain HTML, CSS, and JavaScript, structured into clear sections that double as an interactive resume. The backend is a small Node.js server using Express, which serves the site and exposes a single route for handling contact form submissions. Email sending is handled with Nodemailer. During development, a temporary test email account was used so that submissions could be verified without needing a personal email account or any third party signup that required sharing personal details. The page also includes a meta description in the HTML head to support basic search engine visibility.

## Running the project

After cloning the repository, install the dependencies and start the server with the following commands.

npm install
node server.js

Once the server is running, the site can be viewed by opening http://localhost:3001 in a web browser.

## Available routes

The server responds to a small number of routes. A request to the root address using GET serves the portfolio page along with its static files. A request to contact using POST accepts a name, email, and message, validates that all fields are present, and sends an email containing the submitted details.

## Notes on scope

This project focuses on the core requirement of a working contact form with email notifications, built without relying on a third party form service. A database for storing messages was not used, since the brief listed this as optional, and the focus was kept on getting the contact flow working end to end. A live deployment is a reasonable next step if this project were taken further.
