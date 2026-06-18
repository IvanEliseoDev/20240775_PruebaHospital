import { app } from "./src/app.js";
import "./src/database.js"
import { config } from "./src/config/config.js";

async function main() {
    app.listen(config.server.PORT)
    console.log("Server is runing in 400 port")
}

main()