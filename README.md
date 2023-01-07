# Keywords parser
It's a Node.JS application that is created to check count of each word of the requested page, in another words "keywords parse"

### Stack
 - Javascript, Typescript, Node.JS (16+)
 - Express
 - Yup
 - Jest
 - Prettier / ESLint

### Project structure

 - dist
 - tests  
 - src
	 - lib
		 - errors
		 - middlewares
		 - utils
		 - ... other common files / folders
	 - modules
		 - web
			 - ... folders splitted by routing

### How to run

 1. Clone project
 2. Run `npm i`
 3. Create `.env` file and use `.env.example` as a template
 4. Run `build:watch` and `start:watch` commands in parallel 
 5. Use it with pleasure :)

### How to use
There is single endpoint at the moment, and in order to get keywords from the website you need to run
`http://localhost:{{PORT}}/api/v1/keywords?url=https://google.com`
(url is required)

Response example:

    "keywords": {
    	"google": 19,
    	"com": 17,
    	"https": 13,
    	...
    }

### How to test
Project has unit tests that are stored in the `tests` folder. Tests are written with `Jest` library.
To test a project, you need to run this command `test:unit`
