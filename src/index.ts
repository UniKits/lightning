import express, { Request, Response } from 'express';
import { AppDataSource } from "./data-source";
import { Product } from "./entity/Product";
import { Supplier } from "./entity/Supplier";

// CORS
// import cors from 'cors';

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new supplier into the database...")
    // const supplier = new Supplier()
    // supplier.name = "Chipskey"
    // await AppDataSource.manager.save(supplier)
    // console.log("Saved a new supplier with id: " + supplier.id)

    /**
     * EXAMPLE QUERIES USING MANAGER
     */
    // console.log("Loading suppliers from the database...");
    // const suppliers = await AppDataSource.manager.find(Supplier);
    // console.log("Loaded suppliers: ", suppliers);

    // console.log("Loading products from the database...");
    // const products = await AppDataSource.manager.find(Product);
    // console.log("Loaded products: ", products);

    const app = express(),
      port = process.env.PORT || 3000;

    /**
     * CORS
     */
    // const corsOptions = {
    //     origin: 'http://unikits.be',
    //     optionsSuccessStatus: 200
    // }

    // app.use(cors(corsOptions));

    /**
     * START BACKEND
     */
    app.listen(port, () => console.log("⚡ Lightning listening at port 3000"));

    /**
     * HELLO WORLD
     */
    app.get("/", (req: Request, res: Response) => {
      res.send("Lightning is working ⚡⚡⚡");
    });
  })
  .catch((error) => console.log(error));
