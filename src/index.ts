const express = require("express");
import { AppDataSource } from "./data-source"
import { Supplier } from "./entity/Supplier"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new supplier into the database...")
    // const supplier = new Supplier()
    // supplier.name = "Chipskey"
    // await AppDataSource.manager.save(supplier)
    // console.log("Saved a new supplier with id: " + supplier.id)

    console.log("Loading suppliers from the database...")
    const suppliers = await AppDataSource.manager.find(Supplier)
    console.log("Loaded suppliers: ", suppliers)

    console.log("Here you can setup and run express / fastify / any other framework.")

    const app = express();

    const port = process.env.PORT ?? 3000;
    app.listen(port, () => console.log("Server listening at port 3000"));

    app.get("/", (req, res) => {
        res.send("Hello World");
    });
}).catch(error => console.log(error))
