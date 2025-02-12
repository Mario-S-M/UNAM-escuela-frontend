module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'npm',
      args: 'run dev',
      watch: true, // Habilita el modo watch para hot-reload
      ignore_watch: ['node_modules'], // Ignora cambios en node_modules
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};