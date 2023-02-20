module.exports = {
  HOST: "localhost",
  USER: "alice",
  PASSWORD: "alice123",
  DB: "todos",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
