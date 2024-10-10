import { createClient } from 'redis';

const redisClient = createClient({
  password: 'auZoxhOclHAr4tDNk7ABUu8RusYBxDGw',
  socket: {
    host: 'redis-19177.c267.us-east-1-4.ec2.redns.redis-cloud.com',
    port: 19177,
  },
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await redisClient.connect();
})();

export default redisClient;
