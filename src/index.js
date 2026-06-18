import { app } from "./app.js";
import { config } from "./config/config.js";

async function main() {
    app.listen(config.server.PORT)
    console.log("Server is runing in 400 port")
}

main()