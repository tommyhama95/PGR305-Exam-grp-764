# PGR305-Exam:

### Group Members:
* Exam Candidate: 10055
* Exam Candidate: 10039

## Project Details:

The backend is built using the terminal commands and structure provided to us in the classes. While the front-end deviates slightly from the general structure of the classes.

Our frontend is primarilly built with Yarn to control the javascript packages, and we also opted to use Typescript instead of implementing proptypes into the project.

The following frameworks / languages are used in the frontend:
- React
- Typescript
- React Bootstrap + Bootstrap
- Axios
- Styled Components

## Project Initialization:

The backend is for the sake of the closed exam project fully provided with all files intact, and should run as is from the extracted directories.

When using Visual Studio Code, the backend can be run like so: 
- `run > run without debugging` 

The front-end can be run after running the following commands:
During development we primarilly used yarn to build it, so it's best to use yarn to install the dependencies.

If you want to run it using npm, we recommend removing the yarn.lock file to prevent multiple lock files in the project.

- `yarn install` or `npm install`
- `yarn start` or `npm start`


There are a few error checks in place in the front end should the back-end be unavailable, but in order to actually access the data, please run the back-end server *before* the front-end.

### Default ports:
- The backend will run on port 5001
- The frontend will run on port 3000

Ensure these ports are free and not being used by other processes to avoid issues.

## Description:

The exam entails creating a fullstack application meant to showcase Playstation 5 or Xbox Series X, and we decided to create an application aimed towards Playstation 5.

Our backend is built with .NET C# Webapi, and ties together with a backend database using Mongo DB plugins for .NET C#.

Our database has a single database (Ps5Games) with two document collections: Characters and Games.
Due to MongoDB not acting as a traditional relational database, we tie these two collections together through the GameId property on the Characters collection.

To properly see a game sample with many characters, please see the game details for the game **Genshin Impact**.

All images taken for the project are taken from various google image searches or game sites, and due to the closed nature of the project, are not meant to infringe on any copyrights or similar protections.

### Games objects have the following properties:
- _id: ObjectId()
- Title: String
- Category: String
- CoverImage: String
- Price: Int
- PegiRating: Int
- Description: String

### Characters objects have the following properties:
- _id: ObjectId()
- Name: String
- GameId: ObjectId()
- Image: String
- Description: String

The versions of these objects used in the project can be seen in the `models/` directiories of both the front-end for typescript types, and the back-end for bson object models.

## Design Choices:
In the front-end of the application, we've went with two very distinct but separate versions of both the User-side and admin-side of the application.

The user-side is designed with the intent of being eye-catchy, as well as simple to interact with. Large text and buttons in order to display the Playstation 5 games in a visually appealing manner.

Comparatively, the admin-site is designed with simplicity and compactness in mind, allowing administrators to get a clear and large overview over the data they are managing. Admins also have easy access to edit/delete functions for each of the games and characters under their respective games.

We have separated the API's for both users and admins into separate controllers in the backend as a sort of "security" measure. Obviously due to the fact that there is no authentication in place, this isn't 100% secure, but in order to conform to the exam's scope this is how we have structured it for now.

## Bugs or potential error messages:

### Strictmode warnings:

- React Bootstrap Carousel gives out a findDOMNode warning, but this issue is not fixed over at the react-bootstrap team and is only occuring in StrictMode. This causes no visual bugs. 
Link to discussion: https://github.com/react-bootstrap/react-bootstrap/issues/5075