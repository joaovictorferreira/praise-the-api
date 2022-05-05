# **Praise the API** 
![alt text](https://i.pinimg.com/564x/a3/a2/f6/a3a2f67a23e7c74e5529a9937cd355d2.jpg)
##### image source: https://br.pinterest.com/pin/673499319247652247/
<!-- <p>&nbsp;</p> -->
<br> 
<br> 
<br> 

## *What is the Praise API?*
<br>

### The idea of the Praise API is to provide some of the data contained in the Dark souls game to anyone that wants to consume them. The project as it is right now doesn't have a lot of data to be consumed, just a few things that will be covered later on this documentation, that's because the project started with the intuit of improve my skills as a programmer but i intend to improve the API over time to provide more data from this and the others souls games.

<br> 
<br> 
<br> 

# **Softwares and other tools used in the project**
<br>

* Node.js &nbsp; <img src="https://seekicon.com/free-icon-download/nodejs_2.svg" alt="drawing" width="15"/>
<br>

* Mysql &nbsp; <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="drawing" width="30"/>
<br>

* Insomnia &nbsp; <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/insomnia-icon.png" alt="drawing" width="20"/>
<br>

* Swagger &nbsp; <img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_swagger_icon_130134.png?type=webp" alt="drawing" width="20"/>
<br>

* Heroku &nbsp; <img src="https://cdn.iconscout.com/icon/free/png-64/heroku-2752161-2284978.png" alt="drawing" width="20"/>
<br>

* Visual Studio Code &nbsp; <img src="https://img.icons8.com/fluent/2x/visual-studio-code-2019.png" alt="drawing" width="20"/>
<br>
<br>
<br>
<br>

## *Node.js and modules used* 
<br>

### *In this project i used the software Node.js for my back-end development, with a couple of modules:*
<br>

### 1. &nbsp; express, used to deal with the server part of my project and other funcionalities 
<br>

### 2. &nbsp; mysql2, the module that will provide the methods for the connection between the server and the database that i use, in this case is Mysql. You can see a exemple of it's use in the code below.
<br>

```javascript
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

exports.pool = pool;
```
<br>

### 3. &nbsp; dotenv, module that i use to manage the environment variables of my project, you can see in the code bellow from my db.js file that i use the variables DB_HOST, DB_USER and others, they're comming from the .env file that is on my project, there is where i store these informations and reference them in this db file with the process.env.
<br>

```javascript
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});
```
<br>

### 4. &nbsp; swagger-ui-express, the swagger module is a part of the documentation of the project, there you can see and test API routes and get the result of the requests, along with more info of how to use the API, i will put the link of the swagger documentation on the next sections and you can see on the code below a exemple of how i implemented the swagger in the project.
<br>

```javascript
const swaggerUi = require('swagger-ui-express');
const sjson = require("./doc/swagger.json");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(sjson))
```
<br>

### In the code above you can see that i require the swagger module and the sjson file, this is the file that i confugre the swagger documentation, at last i especify the url for the documentation and the others swagger parameters. Note that if you don't want to use swagger you will have to delete this lines from the server.js file and type ```npm uninstall swagger-ui-express``` on your terminal to remove the swagger module from the project, but if you want to use it you just have to create the .json file and require it in the ```sjson``` variable or whatever name that you'll be using on your variable, the rest of how to configure your own swagger json file you can search on the internet for more detailed information.
<br>
<br>

### 5. &nbsp; nodemon, this module is just for help along the development of the project, instead of run the file everytime that i have to change it i use the nodemon, with the nodemon i can just save the file and it restarts the server automatcly, applying the new changes, this module is not needed for the API to work, if you don't want to use it you can uninstall it by typing ```npm uninstall nodemon``` in your terminal.
<br>
<br>

## *Heroku*
<br>

### Heroku is the cloud service that i used to deploy my API, i used heroku becouse you can use it for free with certains limitations of course, but for the size of my project is more than enough, you can use the service that you want, you'll just have to adapt the project for the cloud service that you're using.
<br> 
<br>

# **Things you can do with this API**
<br>

## *The API have 3 tipes of responses that you can get*

* All the bosses from the game with their essential data
* One boss per request with his essential data
* All the itens from a single boss per request with the item and it's data
<br>

### Note that all these data will be returned to you as a json object, so with the url and it's parameters you can get the data you need to consume in your project.
<br>

### As i mentioned before i used the Swagger module to create the other part of the documentation where you can test the routes of the API and see how it works, what you can get with your's requests, here it's the link to my Swagger documentation, you can go there and test by yourself [Swagger documentation](https://praise-the-api.herokuapp.com/api-docs) 
<br>
<br>

# **How can i consume this API?**
<br>

## *To use the things that this API have to offer to your is pretty simple, i will devide this part in sections to be more clear, so let's begin*.
<br>

## To consume the data coming from the API you'll work with url's that i will be listing down below
<br>

### Let's begin with the url that get all the bosses from the game including bosses from the dlc's
* &nbsp;  https://praise-the-api.herokuapp.com/bosses/
<br>
<br>

### With the link above you'll get some json object with the bosses, you can see the information that you get on the json using the Swagger documentation mentioned before or by just puting this url on your browser, i recommend using the Swagger documentation because it have more information and the json is organized in a way that is more readble, either way this link will provide that array of json object's to you.
<br>

### **Further ahead on this section i will talk about how to get the boss by it's ```ID```, but before that keep in mind that these ```ID'S``` will be avaible in this url that get all bosses, each boss will have their ```ID``` on their respective json object**
<br>
<br>

### This url will get a single boss with his data
* &nbsp;  https://praise-the-api.herokuapp.com/bosses/bossId
<br>

### With that url above you can pass a parameter after the bosses/, this parameter is the ```ID``` of the boss you want to get the informations, this is the same ```ID``` that i mentioned in the previous url to get all the bosses. 
<br>

### **Note that when you use this url to get one boss per request is returned another variable in the json object called ```drops``` with a url inside of it, i will talk about the drops of each boss in the next section, but keep that in mind.**
<br>
<br>

### And for the last one we have the url that'll get all the drops from a single boss
* &nbsp;  https://praise-the-api.herokuapp.com/bosses/drops/bossId
<br>

### This url works the same way as the previous one, you pass the parameter after the drops/, this parameter being the same ```ID``` that you use in the previous url to get a single boss. It will return all the drops of the boss with the respective ```ID``` that you passed through the url.
<br>

### **Something to keep in mind about the drops of the bosses is that you can either type the whole url to get the drops of the boss or you can get their respective url of their drops by searching one boss by its ```ID```, if you recall what i said in the 2nd url it gives to you the json that contain variable ```drops```, this variable already contain the url to the drops of the specific boss that you are searching, but the way you will work with this url is up to you, just keep in mind that you have this option to get the url of the drops directly from each boss**
<br>

### And once again i recommend you to check the [Swagger documentation](https://praise-the-api.herokuapp.com/api-docs) to test out all the url's described above and see what it is their respective responses.
<br>
<br>

# **Observations**
<br>

## *In this section i will pass somethings to keep in mind while consuming the API*
<br>

### 1. &nbsp; This API just return the values of the bosses in the new game, not in ng+ and so on, but i pretend to implement the ng+ values when i get the chance.
<br>

### 2. &nbsp; The bosses doesn't have the life value of their tails, that is something that i will implement later
<br>

### 3. &nbsp; There is some bosses that works different like the gargoyles that i didn't separate properly, so you will see that you will get only one boss with the values of the two togheter, i already fixed this in other bosses but i didn't have time to fix this one yet, but it will be fixed.
<br>

<br>

### 4. &nbsp; There is a boss that you can get the **Ornstein and Smough**, each of them have 2 phases, the **normal** and the other that i will call **super** phase, if you played the game you know what i mean, so if you want to get either them in the normal phase or in the second phase there will be a different ```ID``` for each one, so remember these ID'S below.
<br>

* normal-ornstein
* super-ornstein
* normal-smough
* super-smough  
<br>

### The ones that will appear when you search for all the bosses is the super ones, if you want to get the normal ones you''ll have to search them by their ```ID```, just like the way i typed above, and keep in mind that the normal ones doesn't have drops, just the 2nd phase ones.
<br>

### 5. &nbsp; Be careful with the ```ID's```, if you do not type them the exact way that it is placed in the list of all bosses you will get an error.
<br>

### 6. &nbsp; Do keep in mind that this project is subject to modifications over the time, i intend to improve some of it's funcionalities and provide even more data from the game, not only the bosses, but all there is to be gathered.
<br>

### 7. &nbsp; Some files like the .env and the swagger json mentioned before won't be published with the rest of the API, so if you choose to use them in your project remember to create them and adapt to your code.
<br>

### 8. &nbsp; If you want to use this project to build yours be sure to install the dependencies of the project with the ```npm install``` command, i will post the project without the node_modules file.