import { Elysia, t } from 'elysia'

class Note {
  constructor(public data: string[] = ['hi']) {}
}

export const note = new Elysia()
  .decorate('note', new Note())
  .get('/note', ({ note }) => note.data)
  .get(
    '/note/:id',
    ({ note, params: { id }, error }) => {
      return note.data[id] ?? error(404, 'oh no :(')
    },
    {
      params: t.Object({
        id: t.Number(),
      }),
    },
  )
