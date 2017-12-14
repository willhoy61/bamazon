var inquire = require ("inquirer");
var mysql = require ("mysql");

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
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
  
});
// function start() {
//   inquirer.prompt([
//     {
//     name: "item",
//     type: "input",
//     message: "What is the id of the item you would like to purchase?"
//     },
//     {
//       name: "quantity",
//       type: "input",
//       message: "How many units would you like to purchase?"
//     }
//   ]).then(function(answer) {

//     connection.query(
//       "INSERT INTO products SET ?",
//       {
//         item_id: answer.item,
//         quantity: answer.quantity,
//       },
//   function(err) {
//   if(err) throw err;
//   console.log("your purchase was successfull");
//   readProducts();
//       }
//     );
//   });
// }



// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
    
//   });
// }

connection.end();