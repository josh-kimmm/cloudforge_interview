# How to run this Repository

1. Make sure you have [postgres](https://www.postgresql.org/download/) installed and running.
2. Create a local DB called **cloudforge**

- Make sure you remember the db username and password as we'll need it to connect locally

3. Install [pnpm](https://pnpm.io/installation) globally.
4. Clone this repo if you haven't already and add the .env file I send to you
5. Add the correct POSTGRES_PRISMA_URL connection string in .env
6. Run `pnpm install`. Add all the necessary modules needed.
7. Run `pnpm run db:init`. This will update your local DB schema and seed it with fake data.
8. Run `pnpm run dev` to get the app started.
