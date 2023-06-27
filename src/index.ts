const express = require("express");
import { AppDataSource } from "./data-source";
import { Product } from "./entity/Product";
import { Supplier } from "./entity/Supplier";

// CORS
const cors = require("cors");

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new supplier into the database...")
    // const supplier = new Supplier()
    // supplier.name = "Chipskey"
    // await AppDataSource.manager.save(supplier)
    // console.log("Saved a new supplier with id: " + supplier.id)

    console.log("Loading suppliers from the database...");
    const suppliers = await AppDataSource.manager.find(Supplier);
    console.log("Loaded suppliers: ", suppliers);
    
    console.log("Loading products from the database...");
    const products = await AppDataSource.manager.find(Product);
    console.log("Loaded products: ", products);

    const app = express(),
      port = process.env.PORT || 3000;

    // const corsOptions = {
    //     origin: 'http://unikits.be',
    //     optionsSuccessStatus: 200
    // }

    // app.use(cors(corsOptions));

    app.listen(port, () => console.log("Server listening at port 3000"));

    app.get("/", (req, res) => {
      res.send("Hello World");
    });
  })
  .catch((error) => console.log(error));
