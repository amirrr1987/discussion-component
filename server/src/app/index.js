const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes")
const config = require('config');
class Application {
    constructor() {
        this.HandelDataBase();
        this.HandelMiddleware();
        this.HandelRoutes();
        this.HandelStartServer();
    }
    HandelStartServer() {
        app.listen(config.get("serverPort"), () => {
            console.log("Server is running on port: " + config.get("serverPort"));
        });
    }
    HandelMiddleware() {
        app.use(express.json())
        app.use(function (err, req, res, next) {
            if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
                res
                    .status(500)
                    .send({
                        code: 500,
                        message: "JSON parse error",
                        success: false,
                    })
            }
            next(err)
        });
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res
                .status(500)
                .send({
                    code: 500,
                    message: "Internal Server Error",
                    success: false,
                })
        });
        app.use(cors());

    }
    async HandelDataBase() {
        mongoose.set('strictQuery', false);
        try {
            await mongoose.connect(config.get("dbAddress"),
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
            console.log('db is connected');
        } catch (error) {
            console.log(error);
        }
    }
    HandelRoutes() {
        app.use(routes);
    }
}
const App = new Application()
module.exports = function useApp() {
    return App
}
