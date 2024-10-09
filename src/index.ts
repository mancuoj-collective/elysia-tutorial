import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

class Note {
  constructor(public data: string[] = ['hi']) {}
}

const app = new Elysia()
  .use(swagger())
  .decorate('note', new Note())
  .get('/note', ({ note }) => note.data)
  .get(
    '/note/:id',
    ({ note, params: { id } }) => {
      return note.data[id]
    },
    {
      params: t.Object({
        id: t.Number(),
      }),
    },
  )
  .listen(3000)

console.log(`Running at http://${app.server?.hostname}:${app.server?.port}`)
