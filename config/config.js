require('dotenv').config()
module.exports =
{
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "db_assestment_ttd",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "unit_testing_ttd",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "protocol": "postgres",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  }
}
