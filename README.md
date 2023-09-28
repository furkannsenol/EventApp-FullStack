# EventApp - FullStack
- Backend: [Node.js](https://nodejs.org) + [MongoDB](https://www.mongodb.com/)
- Frontend: [React Native CLI](https://reactnative.dev/)

# Backend Usage
- Node_module package installed, no need to download again!
- Run `npm run dev` to start your application!
- [localhost:3000/docs](https:/localhost:3000/docs) you can see all `CRUD` operations from this page
- `api_key` PARAMETER IS MANDATORY. The value of the api_key `17bcaf6d3a99f8967c98606b11d56a0d`. If you want you can change it from the `.env` file
- Example: [http://localhost:3000/api/events/all?api_key=17bcaf6d3a99f8967c98606b11d56a0d&page=1](http://localhost:3000/api/events/all?api_key=17bcaf6d3a99f8967c98606b11d56a0d&page=1)

## Backend - Base Dependencies
- `Typescript`
- `ES6`
- `Express`
- `Swagger`
- `Mongoose`
- `Dotenv`

## Backend - Folder Structure
- `src`: This folder is the main container of all the code inside your application.
  - `controllers`:
  - `database`:
  - `models`:
  - `routes`:
  - `swagger`:
  - `utils`:
  - `app.ts`
- `.env`:
- `package.json`:
- `tsconfig.json`:

