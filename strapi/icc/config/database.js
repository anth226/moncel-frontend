module.exports = ({ env }) => ({
  connection: {
      client: env("DATABASE_CLIENT", "postgres"),
      connection: {
          host: env("DATABASE_HOST", "db-postgresql-tor1-strapi-dev-do-user-1217489-0.b.db.ondigitalocean.com"),
          port: env.int("DATABASE_PORT", 25060),
          database: env("DATABASE_NAME", "defaultdb"),
          user: env("DATABASE_USERNAME", "doadmin"),
          password: env("DATABASE_PASSWORD", "AVNS_7IXnZMC5LwBbVJf ")
      },
  debug: false,
  },
  });