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
      host: 'us-cdbr-iron-east-04.cleardb.net',
      user: 'b5794d01784e8b',
      password: '7eebe9f0',
      database: 'heroku_f4ea44a144af0b0'
    }
};