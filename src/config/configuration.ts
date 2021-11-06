export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    password: process.env.DB_PASSWORD,
  },
  s3: {
    bucket: process.env.AWS_S3_BUCKET_NAME,
    access_key: process.env.AWS_ACCESS_KEY_ID,
    secret_key: process.env.AWS_SECRET_ACCESS_KEY,
    resion: process.env.AWS_REGION,
  },
});
