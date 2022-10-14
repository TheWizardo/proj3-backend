import mysql from 'mysql2';
import config from './config';

// connecting to MySQL database
const connection = mysql.createPool({
    host: config.mysqlHost,
    user: config.mysqlUser,
    password: config.mysqlPassword,
    database: config.mysqlDatabase,
    port: config.mysqlPort
});

// executing a query on the DB
function execute(query: string, ...values: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        connection.query(query, values, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    });
}

export default { execute };