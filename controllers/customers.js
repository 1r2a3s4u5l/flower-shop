const db = require("../config/db");

exports.getAllcustomers = (req, res) => {
  db.query("SELECT * FROM customers", (error, results) => {
    if (error) {
      console.log("Error retrieving customers:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createcustomers = (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO customers(name,email) VALUES(?,?)",
    [name, email],
    (error, results) => {
      if (error) {
        console.log("Error creating customers: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "customers created successfully",
        customersId: results.insertId,
      });
    }
  );
};

exports.getcustomersByid = (req, res) => {
  const customersId = req.params.id;
  db.query(
    "SELECT * FROM customers WHERE id = ?",
    [customersId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving customers: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "customers not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.updatecustomers = (req, res) => {
  const customersId = req.params.id;
  const { name, email } = req.body;
  db.query(
    "UPDATE customers SET name = ?, email = ? WHERE id = ?",
    [name, email, customersId],
    (error) => {
      if (error) {
        console.log("Error updating customers: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "customers updating successfully" });
    }
  );
};

exports.deletecustomers = (req, res) => {
  const customersId = req.params.id;
  db.query("DELETE FROM customers WHERE id = ?", [customersId], (error) => {
    if (error) {
      console.log("Error deleting customers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "customers deleted successfully" });
  });
};
