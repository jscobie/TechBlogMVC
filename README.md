# Challenge 14 MVC (Model-View-Controller): Tech Blog

## Badges
[![License: CC0-1.0](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This project was built to demonstrate an application built using the entire MVC (Model-View-Controller) process which begins our first project as a full stack developer. This requested build is based on a blogging system, like Wordpress. This application was built using technologies including handlebars, node js, mysql, sequelize and other npm packages. The deployed app is loaded to Heroku for assignment submission and completing the assignment of loading a full stack application with database to Heroku.

### Required links for review and grading submission
[Github Repository Link](https://github.com/jscobie/TechBlogMVC)<br>
[Deployed Website Application (Heroku deployment)](https://warm-shore-33539.herokuapp.com/)
[Walkthrough video of all functions working in the Heroku deployment](https://drive.google.com/file/d/17PyOQdyCGDMOmc5Rplk9YAIA51g2lZog/view)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Credits](#credits)
* [Questions?](#questions)

## Installation

**1. Clone to ***your computer*** using SSH from GitHub:**
```
git clone git@github.com:jscobie/TechTalk-Blog.git
```
**2. You'll need to run to install the node required dependencies after you clone the install by running:**
```
npm install
```
**3. You will need to make an .env file to handle the MySQL connection, an example file (.env.EXAMPLE) has been included for you to reference. Contents of .env.EXAMPLE are:**
```
DB_NAME='techblog_db'
DB_USER=''
DB_PASSWORD=''
```
**4. You will then need to run the following commands in your MySQL server command line to build the database and tables and then seed/populate the tables needed:**
```
- mysql -u root -p
- <enter password>
- SOURCE db/schema.sql
```
**5. You will need to seed the database:**
```
npm run seed
```
**6. Finally to start node server you need to type the following command:**
```
npm start
```
**7. Open a browser to test using http://localhost:3001**

## Usage

The usage of this project is to allow myself to turn this project in for grading to the MSU Bootcamp academic grading team. Additionally this projects main use is to see if I can handle a MVC fullstack site as required for grading.

## License
Read more about [MIT license](https://opensource.org/licenses/MIT).

## Tests

Grading tests can either build their own user/content using the Sign Up option, alternatively the existing users with posts (Erlich, Richard, BigHead, and Gilfoyle) share the current password of: password

## Credits

Credit to the MSU Bootcamp and instructors for training and training materials to resolve some of these issues.<br>
*Programs, packages used:*<br>
[Node.js](https://nodejs.org/en/)<br>
[Sequelize](https://sequelize.org/)<br>
[Express JS](https://expressjs.com/)<br>
[Mysql2 npm package](https://www.npmjs.com/package/mysql2)<br>
[dotenv npm package](https://www.npmjs.com/package/dotenv)<br>
[express-handlebars](https://www.npmjs.com/package/express-handlebars)<br>
[bcrypt](https://www.npmjs.com/package/bcrypt)<br>
[express-session](https://www.npmjs.com/package/express-session)<br>
[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)<br>
[path](https://www.npmjs.com/package/path)<br>
[Eslint](https://www.npmjs.com/package/eslint)<br>
[prettier](https://www.npmjs.com/package/prettier)<br>
[Heroku](https://www.heroku.com/)<br>
[JawsDB MySQL](https://devcenter.heroku.com/articles/jawsdb)

## Questions:
*Use the following options to contact me for questions:*<br>
[jscobie](https://github.com/jscobie)<br>
jscobie@focus-solutions.net