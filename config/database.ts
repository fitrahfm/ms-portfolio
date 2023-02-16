export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-gentle-meadow-053963.ap-southeast-1.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'portfolio'),
      user: env('DATABASE_USERNAME', 'fitrhmnr+hasura1'),
      password: env('DATABASE_PASSWORD', 'lpbBKNWJuO78'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
