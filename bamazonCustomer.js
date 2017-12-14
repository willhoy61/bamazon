var mysql = require ("mysql");
var inquirer = require ("inquirer");


'use strict';
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
// connect to database and log thread id
connection.connect(function(err) {
  if (err) 
    throw err
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});

// inquirer function asks user what they would like to purchase and how many
function start(res) {
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
    res[answer.item].
    //var query = "SELECT  item_id, quantity FROM products WHERE quantity item_id: answer.item";
    connection.query(
      "UPDATE products SET ? WHERE ?",
      [
      {
        quantity: answer.quantity - products.quantity
      },
      {
        item_id: answer.item
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
      start(res);
     });
}


