# My to-do list app

it's a basic to-do list application that allowed me to use standard fullstack development technologies.

## Technologies used

<ul>
    <li>React</li>
    <li>Storybook</li>
    <li>Material UI</li>
    <li>GraphQL</li>
    <li>Apollo-client</li>
    <li>NodeJs</li>
    <li>Apollo-server</li>
    <li>Express</li>
    <li>Mongoose</li>
    <li>Jest</li>
    <li>Docker</li>
    <li>Github action</li>
</ul>

## Project structure

    ├── client
           └── src
                ├── components  # All components files go here
                ├── constants
                ├── context
                ├── graphql
                ├── helpers
                ├── pages
                ├── stories
                ├── types
                ├── App.tsx
                └── ...
            ├── package.json
            └── ...
    ├── server
          └── account-service
                     └── src
                          ├── __tests__
                          ├── config
                          ├── generated
                          ├── graphql
                          ├── helpers
                          ├── interface
                          ├── models
                          └── index.ts
                     ├── Dockerfile
                     ├── package.json
                     ├── .env
                     └── ...
          ├── federated-gateway
          └── project-service # Same as account-service directory structure
    ├── docker-compose.yml
    └── READMEA.md

## Run locally

1. Clone the repository

```
git clone git@github.com:laza6030/my-todo-list-app.git
```

2. Create **.env** file in **account-service** and **project-service** directory and fill them like in the **.env.example**

3. Move to **my-todo-list-app** directory

```
cd my-todo-list-app
```

4. Start all services

```
docker-compose up
```

5. Move to **client** directory and run front-end app

```
cd client
npm run install
npm run start
```

Now, you should be able to see the preview of the app in **http://localhost:3000/**

Good navigation!!! :wave: :wave: :wave:

:computer: Developer: **Laza Nantenaina**

:mailbox_with_mail: Mail address: laza6030@gmail.com
