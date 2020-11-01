# Image-Uploader-Nodejs-MongoDB

## Original project by Rishi Prasad, on "blog.bitsrc.io" (step-by-step links below)
- https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
- https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82
- https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718

This is project to send and receive images from MongoDB using NodeJs (Multer, Mongoose, Express, Ejs, path, fs...).

## How Install
```
# Create folder for store the files, like 'image-uploader'

# Clone the project
git clone https://github.com/BieAnimaton/Image-Uploader-NodeJs-MongoDB

# Install the dependencies
npm install
    or
yarn install

#To start
npm start
   or
yarn start

# The server will start in port 3000
# Access http://localhost:3000
```
## Change the database
For connect to your MongoDB database, create ".env" file nn project root and write: " MONGO_URL='mongodb+srv://user:user@cluster0.uvjzi.mongodb.net/galeria?retryWrites=true&w=majority' ".

## Alter tables
If you want add more params in your MongoDB table, change the file "galeria.js" and modify the "imgSchema", thereafter, complete with same params in "rotas.js", on part called "rotas.post()".

## Images

## Features :hammer_and_wrench:
- Node Js
- Express
- Mongoose
- Multer
- Ejs
- Nodemon (development only)