import 'reflect-metadata'
import express, { Request, Response } from 'express'
import { createConnection } from 'typeorm'

createConnection().then((conn) => {
  // APP SETUP
  const app = express(),
    port = process.env.PORT || 3000

  // MIDDLEWARE
  app.use(express.json()) // for parsing application/json

  // ROUTES
  app.get('/', (request: Request, response: Response) => {
    response.send(`Welcome, just know: you matter!`)
  })

  // APP START
  app.listen(port, () => {
    console.info(`\nServer 👾 \nListening on http://localhost:${port}/`)
  })
})
