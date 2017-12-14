var mysql = require ("mysql");
var inquire = require ("inquirer");


'use strict';

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) 
    throw err
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
  start();
});


function start() {
  inquirer.prompt(
    {
    name: "item",
    type: "input",
    message: "What is the id of the item you would like to purchase?"
    },
    {
      name: "quantity",
      type: "input",
      message: "How many units would you like to purchase?",
      validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
    }
  ).then(function(answer) {
    parseInt(answer.item);

    //var query = "SELECT * item_id, quantity FROM products WHERE quantity item_id: answer.item";
    connection.query(
      "UPDATE products SET ? WHERE ?",
      [
      {
        item_id: answer.item
      },
      {
        quantity: answer.quantity - products.quantity
      }
      ],
      function(err) {
          if (err) throw err;
          console.log("Your purchase was Successful!");
        }
      );
  });
}



function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
     });
}


