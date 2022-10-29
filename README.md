# Bootcamp MERN Capstone
## Deepen
*  A social platform for developers where they can showcase their projects, help and inspire. Like a GitHub Project Search page mixed with the UX|UI of the social platforms Pinterest/Behance. Users upload their work descriptions, code snippets, screenshots and live links or GitHub repo where the project can be found.

* Features:
  * Create, edit, delete and see posts.
  * Follow other users, see followers and save your favorite projects.
  * Create and edit user information.
  * Allows donations to developer or platform.
  * PWA
  
## Models:
  * User/Follower
  * Post/Like
  * Comment
  * Saved list
 
 ## Views:
 * Html: Landingpage / Login, Homepage (feed), Single-Post, Create/Edit Post, see Followers/Following list, Use Profile.
 * JS: User Profile section display (about, work, liked posts, saved posts).
 * CS: Boostrap.
 
 ## Controllers:
  * User: `create, edit, delete, getAll, get :id`
  * Post: `create, edit, delete, getAll, get :id` - Attached to User
  * Followers: `create, update` - Attached to User
  * Comment: `create, delete, getAll` - Attached to Post
  * Like: `create, update` - Attached to User and Post
  * Save List: `create, getAll, update` - Attached to User and Post
  
## API’s:
	* Google email for sign-up/login
	* Free images library for user: Post cover, User pic, and/or Profile hero. [Pexels maybe]
	* GraphQL
  
### Technologies:
- HTML5 / CSS3
- JavaScript
- Express
- React
- MongoDB
- Mongoose
- GraphQL
- Bcrypt
- webpage
- IndexedDB
- JWT (Authentication)
- [Node.js](https://nodejs.org/en/) ES6
- [MySQL](https://dev.mysql.com/doc/)
- Payment Platform


## **Mock-up:**
# Homepage
![Landing - Login](./client/assets/images/Homepage-50.jpg)


# Feed
![Homepage - Feed](./client/assets/images/feed-50.jpg)


# Single Post
![Post - single-post](./client/assets/images/single-post2-50.jpg)

# User Profile
![Profile - Section-examples](./client/assets/images/profile-50.jpg)


# Create Post
![Create-post - Forum](./client/assets/images/create-post-50.jpg)


___________________________________________________
## Section to finish later !!
### Live View:
Heroku

## Installation
1. To install this application, `git clone` this repo.
2. Ensure Node.js is installed in your operating system `npm i node`.
3. Create a `.env` file in the root directory and include your MySQL username (DB_USER) and password (DB_PASSWORD) between the single quotes:
4. Install ***all*** of the npm packages listed above via command-line in terminal with `npm i -y`
5. Initialize MySQL by running `mysql -u root -p`, and enter your password when prompted. Once loaded, enter `SOURCE db/schema.sql;` to create the database. Exit MySQL by entering `quit;` in terminal.
6. The application can be accessed by visiting `http://localhost:3001` in the browser after running the following command:
```
`npm start` or
`node server.js`
```
7. [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) can be used to check the backend functionality.

_____________________________________________________________________________________________
## Learning Curve
* While creating this app I learned and practice:
1. To use proper code organization paradigms in a full-stack app, following the MVC paradigm to organize your code into Models, Views, and Controllers.
2. Used Handlebar.js a template engine to deliver front-end files along expressions and helpers.
3. Used Express.js and Sequelize to implement sessions. Restrict routes to only logged in users and write custom middleware for Express.js, while using Sequelize to manage SQL data.
4. Managed front-end JavaScript logic in an MVC app to make fetch requests on the front end.
5. Used an ORM (Object-Relational-Mapping) to translate the object model into a relational data model using associations.
6. Create all of the server endpoints using RESTful API standards to work with model’s data and execute CRUD 
7. Create a login route for authentication. Use environment variables to protect sensitive data while securing user passwords stored in a database with hashing.

## Questions?
For any questions about this repo, please contact me at [nashalysf@gmail.com](mailto:nashalysf@gmail.com).

To view more of my works, please visit my GitHub: [nashalysf](https://github.com/nashalysf).
