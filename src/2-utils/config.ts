import path from "path";

class Config {
    public port = process.env.PORT || 3002;
    // public mysqlDatabase = "project3";
    // public mysqlHost = "localhost";
    // public mysqlUser = "root";
    // public mysqlPassword = "";
    
    // public mysqlDatabase = "project3";
    // public mysqlHost = "project3.c7awgtjmgpxz.us-east-1.rds.amazonaws.com";
    // public mysqlUser = "admin";
    // public mysqlPassword = "IThinkYouAreWrongToWantAHeart";
    
    public mysqlHost = process.env.MYSQLHOST;
    public mysqlUser = process.env.MYSQLUSER;
    public mysqlPassword = process.env.MYSQLPASSWORD;
    public mysqlDatabase = process.env.MYSQLDATABASE;
    public mysqlPort = process.env.MYSQLPORT;
    public imagesFolder = path.resolve(__dirname, "..", "1-assets", "images");
}

console.log(process.env);
const config = new Config();
export default config;