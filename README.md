# testingNodeExpress"# testingNodeExpres" 
this proyect is only for testing porpuse , I hope some day it will become reallity and helps people to undertake is litle business

# What is this for?
 this is the main service that is in charge of manage multiple #nodeSells apps to expose a REST API for the frontend application that wants to sell the product


# How use this?
 you just need to run the command in "Procfile" file, 
 I used because this app is deploy in Heroku at link
 https://flower-example.herokuapp.com/
 and if you need to see the documentation see  https://flower-example.herokuapp.com/api-doc/ . You need register a new "node" app too

 # How I register a new node app?

 you only need to pass (firstName,lastName,email,password,endPoint) in json format in the request body in the 
 "/back_register" endpoint, for more details see api-doc in the link above. The "endPoint" property refers to where 
 the node server is allocate. There is one on heroku see https://nodesellflowers.herokuapp.com/ and the documentation on https://nodesellflowers.herokuapp.com/api-doc/