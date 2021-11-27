const apps = [
    {
        name: 'timecat-docs',
        script: 'yarn serve-static',
        instances: 1
    }
]

module.exports = {
    apps: apps.map(app => {
        return Object.assign(app, {
            autorestart: false,
            listen_timeout: 15000,
            log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS'
        })
    })
}
