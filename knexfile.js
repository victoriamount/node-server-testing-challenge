const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' }
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: { filename: './data/fruits.db3' }
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' }
  }
}
