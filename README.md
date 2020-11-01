# Image-Uploader-Nodejs-MongoDB

## Original project by rishabhjain21, on "www.geeksforgeeks.org" (step-by-step link below) :point_up:
- https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/

This is project to send and receive images from MongoDB using NodeJs (Multer, Mongoose, Express, Ejs, path, fs...).

## Image
![image-uploader](https://user-images.githubusercontent.com/52220244/97816936-f5798580-1c77-11eb-9b29-f5d125960d93.gif)

## How Install :bookmark_tabs:
```
# Create folder for store the files, like 'image-uploader'

# Clone the project
git clone https://github.com/BieAnimaton/Image-Uploader-NodeJs-MongoDB

# Install the dependencies
npm install
    or
yarn install

# To start
npm start
   or
yarn start

# The server will start in port 3000
# Access http://localhost:3000
```

## Change the database :pushpin:
For connect to your MongoDB database, create ".env" file nn project root and write: " MONGO_URL='mongodb+srv://user:user@cluster0.uvjzi.mongodb.net/galeria?retryWrites=true&w=majority' ".

## Alter tables :file_folder:
If you want add more params in your MongoDB table, change the file "galeria.js" and modify the "imgSchema", thereafter, complete with same params in "rotas.js", on part called "rotas.post()".

## Features :hammer_and_wrench:
- Node Js
- Express
- Mongoose
- Multer
- Ejs
- Nodemon (development only)