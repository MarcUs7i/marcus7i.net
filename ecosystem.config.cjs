module.exports = {
    apps: [{
        name: 'marcus7i',
        script: '.output/server/index.mjs',
        instances: 'max',
        exec_mode: 'cluster',
        env: {
            NODE_ENV: 'production',
            PORT: 9031
        },
        watch: false,
        max_memory_restart: '1G'
    }]
}