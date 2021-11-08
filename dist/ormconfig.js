module.exports = [
    {
        name: 'default',
        type: 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: 3306,
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '4321',
        database: 'nestjs_schema',
        synchronize: true,
        logging: true,
        entities: ['dist/src/**/*.entity.js'],
        migrationsTableName: 'se_migration_table',
        migrations: ['dist/src/migrations/*.js'],
        subscribers: ['dist/src/subscriber/*.js'],
        cli: {
            entitiesDir: 'dist/src/entity',
            migrationsDir: 'src/migrations',
            subscribersDir: 'dist/src/subscriber',
        },
    },
];
//# sourceMappingURL=ormconfig.js.map