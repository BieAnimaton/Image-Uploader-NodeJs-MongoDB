# Image-Uploader-Nodejs-MongoDB

Projeto para enviar e receber imagens do MongoDB usando NodeJs. // Project to send and receive images from MongoDB using NodeJs.

# Banco de dados // Database
Para conectar à seu banco de dados MongoDB, crie o arquivo ".env" na raiz do projeto e digite: " MONGO_URL=mongodb+srv://<usuário>:<senha do usuário>@cluster0.uvjzi.mongodb.net/<nome do banco>?retryWrites=true&w=majority' ". // For connect to your MongoDB database, create ".env" file nn project root and write: " MONGO_URL='mongodb+srv://user:user@cluster0.uvjzi.mongodb.net/galeria?retryWrites=true&w=majority' ".

# Inciar // Start
Para iniciar o server, basta digitar "node server.js" no terminal. // To initialize the server, enough write "node server.js" in terminal.

# Alterando tabela // Alter table
Caso queria adicionar mais parâmetros em sua table do MongoDB, altere o arquivo "galeria.js" e modifique o "imgSchema", depois disso, complete com os mesmos parâmetros em "rotas.js", na parte "rotas.post()". // If you want add more params in your MongoDB table, change the file "galeria.js" and modify the "imgSchema", thereafter, complete with same params in "rotas.js", on part called "rotas.post()".