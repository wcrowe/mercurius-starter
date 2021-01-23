import { MercuriusLoaders } from "mercurius"

const owners: Record<string, { firstname: string, lastname: string }> = {
    Max: {
      firstname: 'Jennifer',
      lastname: 'Doe'
    },
    Charlie: {
      firstname: 'Sue',
      lastname: 'Hamilton'
    },
    Buddy: {
      firstname: 'Tracy',
      lastname: 'Johnson'
    },
}

export const loaders: MercuriusLoaders = {
    Dog: {
      async owner(queries, _ctx) {
        return queries.map(({ obj }) => owners[obj.name])
      },
    },
}
