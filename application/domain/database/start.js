async () => {
  console.debug('Connect to pg');
  const database = new metarhia.metasql.Database(config.database);
  domain.db = database;
  application.auth.init(database);
};
