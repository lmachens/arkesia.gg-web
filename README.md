# Arkesia.gg Website - A Lost Ark interactive map

- [Website](https://arkesia.gg)
- [Overwolf App on GitHub](https://github.com/lmachens/arkesia.gg-overwolf)

## Contribution

This app is Open Source. Contributors are highly welcome!

Join us on our [Discord](https://discord.com/invite/NTZu8Px).

### Requirements

This project uses [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/).
You need to set some environment variables to run the app. A common way is to create an `.env` file, based on `template.env`.

```
cp template.env .env
```

The following list shows the variables you need to set:

| KEY          | VALUE                      |
| ------------ | -------------------------- |
| DATABASE_URL | URI of your MongoDB server |

### Development

From your terminal, you need to install the dependencies first:

```sh
npm install
```

Now you are ready to start the app in development mode:

```sh
npm run dev
```

### Libraries

The project is based on [Remix](https://remix.run/), a full stack [React](https://reactjs.org/) web framework focused on user experience and performance.
For UI components, we use [Mantine](https://mantine.dev/).
The database is connected via [Prisma](https://www.prisma.io/), an ORM which connects to [MongoDB](https://www.mongodb.com/).

Please refer to these documentations for more information.

## Deployment

The app is deployed on [Vercel](https://vercel.com/).

## Licensing

MIT
