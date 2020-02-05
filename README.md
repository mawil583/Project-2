# Project-2

Welcome to Penny Pincher! 

https://shielded-tor-95793.herokuapp.com/

This web application lets users create a monthly budget and compare their budget to their expenses. When a user types in a budget, the browser redirects to a chart page where they can see a visual representation (bar graph) of their budget. When an expense needs to be added, the user click on the "add expense" button to be redirected to the page where an expense is added. Three fields are required to add an expense: Item name, price, and category. Once an expense is added, you are again redirected to the chart page, but this time there is an expenses bar next to the budget bar. This lets users compare expenses to budget with ease using a visual aid. What's more is that, once expenses have exceeded the budget, the expenses bar will be displayed in red, indicating that there is a problem. And underneath the bar graph, there is a table of expenses displaying all the relevant data from their purchase history: date purchased, item name, dollar amount, and category. So it's easy for the user to track down how well their expenses have matched up with their budget. 

I played the role of group lead in this project. The structure and style of the webpage was accomplished using Bootstrap and custom CSS to override Bootstrap classes. DOM manipulation was accomplished using a template engine called Express-Handlebars. We used jQuery AJAX calls to gather data from the server to send it to the DOM. Authentication was included because each user as their own unique budget. Passport.js was the library used for authentication. The backend used node.js/express server. We constructed our own APIs. Our database was a SQL database, and we used the ORM sequelize to handle queries. 
