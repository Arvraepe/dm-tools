module.exports = {
    apps: [{
        name: 'fv-core',
        script: './fv-core/Server.js',
        env: {
            "NODE_ENV": "local"
        },
        env_dev: {
            "NODE_ENV": "dev"
        },
        env_production: {
            "NODE_ENV": "prod"
        }
    }]
};
