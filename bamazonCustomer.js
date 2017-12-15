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
// connect to database and log thread id calls function to show invenetory
connection.connect(function(err) {
  if (err) 
    throw err
  console.log("connected as id " + connection.threadId + "\n");
});
start();

// inquirer function asks user what they would like to purchase and how many
function start() {
readProducts();
  var id;
  var quanUP = 0;
  connection.query("SELECT  * FROM bamazon.products", function(err, results) {
    if (err) throw err;
  inquirer
  .prompt([
  {
    name:"item",
    type: "input",
    message: "What is the item_id of the item you would like to purchase?"
  },{
    name: "quantity",
    type: "input",
    message: "How many would you like to purchase?"
  }
]).then(function(id) {
  for(var i=0; i<results.length; i++) {
    if(results[i].item == id.item) {
      id = results[i];

        if(results[i].quantity < id.quantity) {
          console.log("we do not have any more in stock");
          start();
        } else if(results[i].quantity >= id.quantity) {
          price(id.quantity, id.price);
          purchase(results[i].quantity, id.quantity, id.item)
        }
    }
  }
})
})
};
//displays the price based on how many the user ordered
function price(pur, pri) {
  var total = pur * pri;
  console.log("each item cost $ " + p);
  console.log("Your Total is : $ " + total);
}
// updates the data base with depleted inventory
function updateDb(q, p, r) {
  quanUp = q - p;
  connection.query("UPDATE products SET ? where ?", [{quantity: quanUp}, {item: r}],
function (err) {
  if (err) throw err;
  console.log("purchase Complete");
})
  connection.end();
};
// validates users purchase and makes sure they want to proceed
function purchase (a, b, c) {
  inquirer.prompt([{
    name: "yesorno",
    type: "rawlist",
    message:"Would you like to complete this purchase?",
    choices: ["yes", "no"]
  }]).then(function(answer){
    if(answer.yesorno.toLowerCase() === "yes") {
      quanUp(a, b, c);
    } else {
      start();
    }
  })
};


// shows user inventory available to purchase
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
      //start();
     });
}

//function start() {
//   inquirer.prompt(
//     {
//     name: "item",
//     type: "input",
//     message: "What is the id of the item you would like to purchase?"
//     },
//     {
//       name: "quantity",
//       type: "input",
//       message: "How many units would you like to purchase?",
//       validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//     }
//   ).then(function(answer) {
//     //var query = "SELECT  item_id, quantity FROM products WHERE quantity item_id: answer.item";

//     connection.query(
      
//       )
//     connection.query(
//       "UPDATE products SET ? WHERE ?",
//       [
//       {
//         quantity: answer.quantity - products.quantity
//       },
//       {
//         item_id: answer.item
//       }
//       ],
//       function(err) {
//           if (err) throw err;
//           console.log("Your purchase was Successful!");
//         }
//       );
//   });
// }
