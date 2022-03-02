import 'reflect-metadata'
import express, { Request, Response } from 'express'
import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from 'typeorm'
import { createDatabase } from 'typeorm-extension'

(async() => {
  const connectionOptions: ConnectionOptions = await getConnectionOptions()

  const initDatabase = () => {
    return (
      createDatabase({ ifNotExist: true }, connectionOptions)
        .then(() => {
          console.log('Database has been created.')
        })
        .then(createConnection)
        // SEED DATABASE
        .then(async (connection: Connection) => {
          // seedDatabase(connection)
        })
    )
  }

  const main = () => {
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
  }

  initDatabase()
    .then(main)
    .catch(e => {
      console.error('❌ Could not initialize database.')
      console.error(e)
    })
})()
