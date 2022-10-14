import path from "path";

class Config {
    public environment = "production";
    public port = +process.env.PORT || 3001;
    public mysqlDatabase = process.env.MYSQLDATABASE;
    public mysqlHost = process.env.MYSQLHOST;
    public mysqlUser = process.env.MYSQLUSER;
    public mysqlPassword = process.env.MYSQLPASSWORD;
    public mysqlPort = +process.env.MYSQLPORT;
    public imagesFolder = path.resolve(__dirname, "..", "1-assets", "images");
}
console.log(process);

const config = new Config();
export default config;