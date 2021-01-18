module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || "notasecret"
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'HUYxV1ZkCw',
        password: process.env.MYSQL_PASS || 'IkrDSlMMZa',
        database: process.env.MYSQL_DB || 'HUYxV1ZkCw',

    },
    mysql_service: {
        port: process.env.MYSQL_SRV_PORT || 3001,
        host: process.env.MYSQL_SRV_HOST || 'localhost',
    },
    cacheService: {
        port: process.env.MYSQL_SRV_PORT || 3003,
        host: process.env.MYSQL_SRV_HOST || 'localhost',
    },
    remoteDB: process.env.REMOTE_DB || false,
    post: {
        port: process.env.POST_PORT || 3002,
    },
    redis: {
        host : "redis-10787.c93.us-east-1-3.ec2.cloud.redislabs.com",
        port: 10787,
        password: "pedro123"
    }
}