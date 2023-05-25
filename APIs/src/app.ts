import express, { NextFunction, Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'

import { Vort } from 'vort'

export const app = new Vort({
  routes: path.join(__dirname, 'routes'),
  swaggerRoute: '/swagger',
  openApiFile: path.join(__dirname, '..', 'openapi.json'),
})

app
  .use(express.json())
  .use(cors())
  .use(morgan(':date[web] :method :url :status :res[content-length] - :response-time ms'))
  .title('Drivn backend')
  .description("Backend for accessing smart conracts' functions")
  .version('1.0.0')
  .appExpress.use(
    '/natspec',
    express.static(path.join(__dirname, '..', 'public', 'natspec'))
  )

const PORT = 3000

if (!process.env.TEST)
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
