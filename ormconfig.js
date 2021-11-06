const SnakeNamingStrategy =
  require('typeorm-naming-strategies').SnakeNamingStrategy;

module.exports = [
  {
    name: 'default',
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '71312m**0312',
    database: 'nestjs_schema',
    synchronize: false,
    namingStrategy: new SnakeNamingStrategy(),
    logging: true,
    entities: ['dist/src/**/*.entity.js'],
    migrationsTableName: 'se_migration_table',
    migrations: ['dist/src/migrations/*.js'],
    subscribers: ['dist/src/subscriber/*.js'],
    cli: {
      entitiesDir: 'dist/src/entity', // entity는 .js 그대로 사용해야 하고 migration은 .ts에서도 사용 가능 !
      migrationsDir: 'src/migrations',
      subscribersDir: 'dist/src/subscriber',
    },
  },
];
