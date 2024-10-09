import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { note } from './note'

const app = new Elysia().use(swagger()).use(note).listen(3000)

console.log(`Running at http://${app.server?.hostname}:${app.server?.port}`)
