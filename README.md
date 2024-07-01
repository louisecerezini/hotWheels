## Nome: `Louise Cerezini Rodrigues`

## Dev environment guidelines

1. Execute the hotwheels-api: `docker run -p 5000:5000 hotwheels:v1`. This Api has a few endpoints that are used by this app:
 - GET /cars - retuns all saved cars
 - POST /cars - save a new car
 - PUT /cars - update an existing car
 - DELETE /cars/:id - delete an existing car by id. 

2. Access the repository: `https://github.com/louisecerezini/-hotWheels`

3. Clone the repository to your machine:`git clone git@github.com:louisecerezini/-hotWheels.git`

4. Enter the context-react-project folder in the terminal: `cd examples/context-react-project`

5. Install the dependencies: `npm install`

6. Serving the app: `npm start`

7. For tests: `npm test`

## Introduction

This is a project made in react using typeScript. It's a project for a HotWheels Trolley collection.

## Components

The components are in the ./src/components directory and have the following characteristics:

1. Home: This is the homepage.
   ![alt text](Home.png)

2. About: This is an explanation of the project. It is an application for a CRUD of HotWheels cars.
   ![alt text](About.png)

3. CarForm: This is a form to add cars, the user can add cars according to the name, brand, color and year.  
   ![alt text](Add.png)

4. CarEditForm: This is a form to edit cars, the user can adit cars according to the name, brand, color and year.
   ![alt text](Edit.png)

5. CarList: This is a list of cars and the user can delete the cars.
   ![alt text](Carlist.png)

6. NavBar: This component is using for the application links.

## Conclusion

This project is for demonstration purposes only and does not contain more changes than necessary to demonstrate some useful features for developing projects in ReactJS.
