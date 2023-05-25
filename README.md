# Fusion Fables

Group-Project-2 (A Collaborative Writing Platform)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-URL](#live-url)

- [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Credits](#credits)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Suggested-Future-Development](#suggested-future-development)

- [Contribution-Guidelines](#contribution-guidelines)

- [Test-Instructions](#test-instructions)

- [License](#license)

- [Questions](#questions)

## Description

Are you or a creative talent you know experiencing writers block? Well then fusion fables is the platform for you. Showcase your work, join our community and collaborate with other talented professionals in a melting pot of creativity that is sure to get you out of your rut and back onto the road. 

Fusion Fables was established for writers to come together to harness the fusion of collaboration and community. This is the space where innovation can be allowed to exceed beyond the power of one mind. Join our community, and allow this intuitive platform to springboard your narratives to unimagined realms. 

Our teams motivation behind making this application was to create a collaborative site where writers can come and cultivate new ideas for their current work and contribute to others, giving new life to stagnating ideas. This was our teams very first full stack web application. It utilizes a MySQL database, API middleware, and a clean, brand forward facing UI.

Challenges faced while creating the application were git merge conflicts, the utilization of the Handlebars template engine, our 2 week time crunch, and project bloating. However much of these were overshadowed by our successes which included exceeding our MVP (implementation of additional routing and functionality), project strategy and task delegation, pair programming, and direct application of an agile work flow.

## Live URL

http://www.fusionfables.com/

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1rs7Uj6IAD6Ud4okg2N-DwEgH_f7YYtfG/view

## Screenshots

![Screenshot1-project-2](https://github.com/HunterHester/fusion-fables/assets/120127903/5b998d41-f9a2-4a0e-87f3-9f299d73cd7f)

![Screenshot2-project-2](https://github.com/HunterHester/fusion-fables/assets/120127903/bb7af314-6024-4f48-b264-c0a46650bf00)

![Screenshot3-project-2](https://github.com/HunterHester/fusion-fables/assets/120127903/58579050-cf24-4f3f-8718-a35935770db9)

![Screenshot4-project-2](https://github.com/HunterHester/fusion-fables/assets/120127903/1e033748-fb64-44b6-a8df-8a267a6da32f)

![Screenshot5-project-2](https://github.com/HunterHester/fusion-fables/assets/120127903/a9f6fa07-5fee-4f20-b692-dd3f45bb02cc)

![Screenshot6-project-2](https://github.com/HunterHester/fusion-fables/assets/120127903/56c1e0db-5c99-457d-b7b7-8cb6110fc420)

## Technologies Used

This application is powered by Node.js (v16.19.1), Express.js (v.14.18.2), JavaScript, MySQL, Sequelize (ORM), and Handlebars (template engine). It utilizes the node package manager (npm) dependencies sequelize (v6.31.1), mysql2 (v3.3.0), express (v4.18.2), dotenv (16.0.3v), nodemon (v2.0.22), bcrypt (v.5.1.0), connect-session-sequelize(v.7.1.6), eslint (v.8.40.0), express-handlebars (v7.0.7), express-session (v1.17.3), and moment (v2.29.4). Jest (v.29.5.0) is installed for future unit testing. Also, the Insomnia application was utilized to test the functionality of routes within the program.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Installation

1. Clone the repo:
   git clone https://github.com/HunterHester/fusion-fables.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).

   Commands to install each dependency:

   - Command for sequelize will be npm i sequelize
   - Command for mysql2 will be npm i mysql2
   - Command for express will be npm i express@4.18.2
   - Command for dotenv will be npm i dotenv
   - Command for nodemon will be npm i nodemon
   - Command for bcrypt will be npm i bcrypt
   - Command for connect-session-sequelize will be npm i connect-session-sequelize
   - Command for eslint will be npm i eslint
   - Command for express-handlebars will be npm i express-handlebars
   - Command for express-session will be npm i express-session
   - Command for moment will be npm i moment
   - Command for jest will be npm i jest

6. Next, you will need to make sure you have an added .env file within the root directory of your repository, within which you will pass your environmental variables specifying the database name, your MySQL username, and your MySQL password. This will need to be completed before running the application, and will allow the connection.js file to utilize your environmental variables keeping your sensitive information protected.

7. If you do not have a MySQL account, you will need to create one (see https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

8. Once all dependencies are installed, you will need to create the database. To do this you will need to navigate to the directory db directory containing the schema.sql file. Once there, you will need to open up a MySQL shell using the command mysql -u root -p, where you will then be prompted to enter you password. Once your password is entered you will be in the MySQL shell.

9. Once in the MySQL shell you will then run the command source schema.sql. This will create the database.

10. Once the database has been created, you will then need to seed the database (this will also create the model structure for the tables within the database). To do this, navigate to the root directory and run the command npm run seed. This needs to be done from the root directory because the .env file lives within the root.

11. Once the database has been seeded, you will then be able to run the command npm start from the root directory to spin up the server. With nodemon installed, you will also be able to utilize the command npm run watch to keep the server spun up between code edits.

12. From there, you can utilize applications such as Insomnia to test the functionality of the routes within the program and make edits to both the front-end and back-end of the code base.

## Credits

Our team of contributors -> Eric Easthope handled much of the backend framework, routing, and user authentication. Elizabeth Olsavsky managed API routing and backend framework. Ryan Messett took on database modeling and frontend functionality (edit/delete functionality). Chris McNamara took charge of styling the application, frontend functionality, and handlebars templating. Hunter Hester, addressed application deployment, individual handlebars templating specifically within the user page. And Brian Hamlin engineered seeding the database, mock data, database modeling, and advertising (easter egg).

## Features

Features of the application include the users ability to create an authorized account through the use of cookies and session storage enabling page protection; allowing only logged in users to create content. Visitors of the site will however have access to the content posted on the public feed without needing to create an account. Once logged in users can create posts within their own user page feed, see a public feed of posts that other users have made, and be given the ability to comment on their own posts and the posts of other users giving our application its collaborative spin. Users also have the ability to edit and delete their own comments as well as the ability to enable comments, and if they would like to display their posts to the public feed or keep them private. Our application is mobile responsive and also features an easter egg hidden somewhere within the page which when found and clicked on, takes users to our teams other built out application "Dude Where's My Show", a site designed for searching the streaming availability of movies and TV shows.

## Usage Information

Usage of this application is very intuitive, once users visit the site fusionfables.com, they will see a public facing feed, and a login button where they will be prompted to either login or create an account. From there navigation of the entire application can be conducted, and users can contribute and start creating content instantly.

## Suggested Future Development

- Functionality allowing users to favorite specific content
- Addition of a friends feature
- Public post editing (revisions) -> creating an even more collaborative site
- Version control (allowing creators to keep track of the different stages of their content)
- Users ability to up-vote & like content
- Dark mode toggle
- Including unit testing

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

NOTICE: Contributor Covenant is released under the Creative Commons Attribution 4.0 International Public License, which requires that attribution be included.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to us reach us through GitHub or Email.

Ryan Messett: [Link to Github](https://github.com/rmessett15) Email: <a href="mailto:rmessett15@gmail.com">rmessett15@gmail.com</a>

Chris McNamara: [Link to Github](https://github.com/cmcnamara15) Email: <a href="mailto:cmcnamara1991@icloud.com">cmcnamara1991@icloud.com</a>

Hunter Hester: [Link to Github](https://github.com/HunterHester) Email: <a href="mailto:hunter.hester15@gmail.com">hunter.hester15@gmail.com</a>

Brian Hamlin: [Link to Github](https://github.com/MisterBham) Email: <a href="mailto:misterbham.dev@gmail.com">misterbham.dev@gmail.com</a>

Elizabeth Olsavsky: [Link to Github](https://github.com/elizabetholsavsky) Email: <a href="mailto:elizabetholsavsky@gmail.com">elizabetholsavsky@gmail.com</a>

Eric Easthope: [Link to Github](https://github.com/eeast) Email: <a href="mailto:eeasthope@gmail.com">eeasthope@gmail.com</a>
