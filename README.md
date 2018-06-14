# Node.js + Express.js URL shortener
Blog article on <a href="https://www.codeproject.com/Articles/996559/URL-shortener-in-Node-js-plus-Express-js-plus-MySQL">Node, MySQL, and link shortening (doesn't include the front end)</a>.


## Installation

1. Download the files to the location you would like application to be.
1. Go to the folder with the command line and execute `npm install`, so all dependencies will be installed.
1. In your MySQL database, create a new table and execute `urlshortener.sql`
1. In `constants.js`, fill in the correct MySQL settings and fill in your root URL (e.g. http://d.co/ or http://localhost:3500/)
1. If you install this script on your server and you have a custom short domain, make sure you create a reverse proxy in your Apache or Nginx (or any other server), so your domain (e.g. d.co) points to `http://localhost:3500/` (or any other port number you've configured).


## Note

API Calls:

Get all URL's: http://localhost:3500/geturls

Generate a new shortlink: 
http://localhost:3500/add?url=https://www.codeproject.com/Tags/All-Topics

Get more info about a specific URL (based on its shortlink/hash):
http://localhost:3500/whatis?url=http://facebook.com


This script is meant to be used as a public URL shortener. If you want to use this script for personal use, you have to include some sort of authentication.