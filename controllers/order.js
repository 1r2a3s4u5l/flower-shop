const db = require("../config/db");

exports.getAllorders = (req, res) => {
  db.query("SELECT * FROM orders", (error, results) => {
    if (error) {
      console.log("Error retrieving orders:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createorder = (req, res) => {
  const { customer_id, flower_id, quantity } = req.body;
  db.query(
    "INSERT INTO orders(customer_id,flower_id,quantity) VALUES(?,?,?)",
    [customer_id, flower_id, quantity],
    (error, results) => {
      if (error) {
        console.log("Error creating order: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "order created successfully",
        orderId: results.insertId,
      });
    }
  );
};

exports.getorderByid = (req, res) => {
  const orderId = req.params.id;
  db.query(
    "SELECT * FROM orders WHERE id = ?",
    [orderId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving order: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "order not found" });
      }
      res.json(results[0]);
    }
  );
};


exports.updateorder = (req, res) => {
  const orderId = req.params.id;
  const { customer_id, flower_id, quantity } = req.body
  db.query(
    "UPDATE orders SET customer_id = ?, flower_id = ?,quantity = ? WHERE id = ?",
    [customer_id, flower_id, quantity,orderId],
    (error) => {
      if (error) {
        console.log("Error updating order: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "order updating successfully" });
    }
  );
};


exports.deleteorder = (req, res) => {
  const orderId = req.params.id;
  db.query(
    "DELETE FROM orders WHERE id = ?",
    [orderId],(error) => {
      if (error) {
        console.log("Error deleting order: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "order deleted successfully" });
    }
  );
};