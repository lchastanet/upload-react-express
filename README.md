# Upload avec React et Express

To setup the project : 

```shell
$ cd frontend && npm i
```

```shell
$ cd backend && npm i
```

- To make migration of the database :

First create a `[DATABASE_NAME]` in your db server.

- Then :

Creat a `.env` file in the `backend` folder and add the folowing line whit correct informations:

`"mysql://[DB_USER]:[DB_PASSWORD]@[SERVER_NAME]:[SERVER_PORT]/[DATABASE_NAME]?schema=public"`

- Then run (still in the `backend` folder) :

```shell
$ npx prisma migrate reset
```

- Finally run in two differents terminals :

```shell
$ cd frontend && npm start
```

```shell
$ cd backend && npm run dev
```
