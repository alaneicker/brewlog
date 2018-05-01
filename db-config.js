module.exports = {
    dev: {
      host: 'localhost',
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
      user: 'root',
      password: 'root',
      database: 'brewlog'
    },
    production: {
      connectionLimit: 100,
      host: 'us-cdbr-iron-east-05.cleardb.net',
      user: 'be477d69ad2e03',
      password: 'ec5a1352',
      database: 'heroku_18b06d6c55cb8e4'
    }
};