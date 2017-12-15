var mysql = require ("mysql");
var inquirer = require ("inquirer");


// connect to mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});
// connect to database and log thread id calls function to show invenetory
connection.connect(function(err) {
  if (err) 
    throw err
  console.log("connected as id " + connection.threadId + "\n");
});

var custQ = [
  {
    name:"item",
    type: "input",
    message: "What is the item_id of the item you would like to purchase?"
  },{
    name: "quantity",
    type: "input",
    message: "How many would you like to purchase?"
  }
  //answer takes user input and returns it to item_id user is purchasing
];
start();

// inquirer function asks user what they would like to purchase and how many
function start() {
//readProducts();
  inquirer
  .prompt(custQ).then(function(answer) {

    var item = answer.item;
    var quant = parseInt(answer.quantity);
    var query = "SELECT * FROM products WHERE ?";
    connection.query(query, {item_id: item}, function (err, results) {
      
       var inStock = results[0].quantity;

       var total = results[0].price * quant;

       if(quant > inStock){
        console.log("we do not have enough inventory");
        } else {
            inStock -= quant;
            query = "UPDATE products SET ? WHERE ?";
            connection.query(query, [{quantity: inStock}, {item_id: item}], function(err, results) {
            });
            console.log("the total of your purchase is : " + total);
        }

    });
  });
}
  
