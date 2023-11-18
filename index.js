/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
const admin = require("firebase-admin");

const serviceAccount = require("./permission.json");
const data = require("./orders.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://zerot-api-default-rtdb.asia-southeast1.firebasedatabase.app"
});

// Setup app dependencies
const db = admin.firestore();
const express = require("express");
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors({ origin: true }));

// use app to create route with request (req) and response (res)
// Basic test route
app.get("/hello-world", (req, res) => {
  return res.status(200).send("Hello World! and better");
});

// Create
app.post("/users", (req, res) => {
  (async () => {
    try {
      const query = db.collection("users");
      const response = [];
      await query
        .get()
        .then((querySnapshot) => {
          const docs = querySnapshot.docs; // the result of our query
          for (const doc of docs) {
            // add each doc to our JSON response
            const selectedItem = {
              id: doc.id,
              ...doc.data(),
            };
            response.push(selectedItem);
          }
        })
        .then(async (respro) => {
          const id = response.length + 1;
          await db
            .collection("users")
            .doc("/" + id + "/")
            .create({
              ...req.body,
              createdAt: new Date().toISOString(),
              status: "inactive",
            });
          return res.status(200).send();
        });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Read item
app.get("/users/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("users").doc(req.params.id);
      const user = await document.get();
      const response = user.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Read all
app.get("/users", (req, res) => {
  (async () => {
    try {
      const query = db.collection("users");
      const response = [];
      await query.get().then((querySnapshot) => {
        const docs = querySnapshot.docs; // the result of our query
        for (const doc of docs) {
          // add each doc to our JSON response
          const selectedItem = {
            id: doc.id,
            ...doc.data(),
          };
          response.push(selectedItem);
        }
        return response; // each then should return a value
      });
      return res.status(200).send(response); // end of async function should return a value
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Update
app.patch("/users/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("users").doc(req.params.id);
      await document.update(req.body);
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Delete
app.delete("/users/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("users").doc(req.params.id);
      await document.update({ deletedAt: new Date().toISOString() });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

const productsss = 

app.post("/products", (req, res) => {
  (async () => {
    try {
      const query = db.collection("products");
      const response = [];
      await query
        .get()
        .then((querySnapshot) => {
          const docs = querySnapshot.docs; // the result of our query
          for (const doc of docs) {
            // add each doc to our JSON response
            const selectedItem = {
              id: doc.id,
              ...doc.data(),
            };
            response.push(selectedItem);
          }
        })
        .then(async (respro) => {
          const id = response.length + 1;
          await db
            .collection("products")
            .doc("/" + id + "/")
            .create({ ...req.body, createdAt: new Date().toISOString() });
          return res.status(200).send();
        });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Read item
app.get("/products/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.id);
      const user = await document.get();
      const response = user.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Read all
app.get("/products", (req, res) => {
  (async () => {
    try {
      const query = db.collection("products");
      const response = [];
      await query.get().then((querySnapshot) => {
        const docs = querySnapshot.docs; // the result of our query
        for (const doc of docs) {
          // add each doc to our JSON response
          const selectedItem = {
            id: doc.id,
            ...doc.data(),
          };
          response.push(selectedItem);
        }
        return response; // each then should return a value
      });
      return res.status(200).send(response); // end of async function should return a value
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Update
app.patch("/products/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.id);
      await document.update(req.body);
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Delete
app.delete("/products/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.id);
      await document.update({ deletedAt: new Date().toISOString() });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

app.post("/orders", (req, res) => {
  (async () => {
    try {
      const query = db.collection("orders");
      const response = [];
      await query
        .get()
        .then((querySnapshot) => {
          const docs = querySnapshot.docs; // the result of our query
          for (const doc of docs) {
            // add each doc to our JSON response
            const selectedItem = {
              id: doc.id,
              ...doc.data(),
            };
            response.push(selectedItem);
          }
        })
        .then(async (respro) => {
          const id = response.length + 1;
          await db
            .collection("orders")
            .doc("/" + id + "/")
            .create({ ...req.body, createdAt: new Date().toISOString() });
          return res.status(200).send();
        });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Read item
app.get("/orders/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("orders").doc(req.params.id);
      const user = await document.get();
      const response = user.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Read all
app.get("/orders", (req, res) => {
  (async () => {
    try {
      const query = db.collection("orders");
      const response = [];
      await query.get().then((querySnapshot) => {
        const docs = querySnapshot.docs; // the result of our query
        for (const doc of docs) {
          // add each doc to our JSON response
          const selectedItem = {
            id: doc.id,
            ...doc.data(),
          };
          response.push(selectedItem);
        }
        return response; // each then should return a value
      });
      return res.status(200).send(response); // end of async function should return a value
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Update
app.patch("/orders/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("orders").doc(req.params.id);
      await document.update(req.body);
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// // Delete
app.delete("/orders/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("orders").doc(req.params.id);
      await document.update({ deletedAt: new Date().toISOString() });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// Expose our CRUD app as a single Cloud Function :)
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
