## Squirro Frontend Coding Challenge

Welcome to Squirro coding challenge! Your task is to create an APP with the book stores listing. 

This repo contains JSON:API based application which should be used as the main source of book store data. API is located within `book-store-api` folder. Within the section below you will find more information on how to run/use `book-store-api`.

Your goal is to present the data (that you receive from the API) as shown in the wireframe:

![Screenshot](wireframe.png)



####Each circle marker represents specific task:
1. book store image as a circle
2. list of maximum of 2 books ordered by the number of copies sold. If there are no books show "No data available".
3. Book store rating displayed with the stars. When user selects/clicks on the stars rating, it should be updated on the API side.
4. Book store establishment date in DD/MM/YYYY format and website link. API will return the date in ISO 8601 format.
5. Book store country of the origin flag image. Book store API will return only ISO 3166-1 2-letter country code. Use https://restcountries.eu/ API to get flag image for each country. 

**You should follow wireframe positioning of elements, but you can make it a bit prettier ;)**

### Book Store API

JSON:API is a specification for how a client should request that resources be fetched or modified, and how a server should respond to those requests.
You can find JSON:API documentation on this link https://jsonapi.org/format/ but we will explain you some basics here to make it easier for you. 

Book store API contains the `stores`, `books`, `countries` and `authors` resources. Each of the resources can have attributes object and a relationships object describing relationships between the resource and other resources.

**Breakdown of resources and their relationships:** 

- Stores
    - Attributes:
        - `name`
        - `website`
        - `rating`
        - `image`
        - `establishmentDate`
    - Relationships
        - `books`
        - `countries`
- Books
    - Attributes:
        - `name`
        - `copiesSold`
    - Relationships
        - `authors`
- Countries
    - Attributes:
        - `code`
- Authors
    - Attributes:
        - `fullName`
        
API endpoint that you will need for most of the tasks is: `http://localhost:3000/stores`. This endpoint will return all store resources and related resources within `included` array.
If you need any other endpint, check the JSON:API specification. 

#### Running API:
- Clone this repo locally
- `cd` inside `book-store-api` folder and run `npm install`
- serve it on the port 3000 by running `npm run start`


Rules
- You can choose between Backbone and React as your main framework
- Project startup procedure must be documented
- Javascript should be based on ES6 or above
- GIT history must be clean
- Application presentation must be done by responsive web design principles
- Write CSS from scratch, do not use Bootstrap and similar

Happy coding!!!

                





