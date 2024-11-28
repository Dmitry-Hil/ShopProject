require('dotenv').config();

import { Express } from "express";
import { Connection } from "mysql2/promise";
import { initDataBase } from "./Server/services/db";
import { initServer } from "./Server/services/server";
import ShopAPI from "./Shop.API";
import ShopAdmin from "./Shop.Admin";

export let server: Express;
export let connection: Connection | null = null;

async function launchApplication() {
  server = initServer();
  connection = await initDataBase();

  if (!connection) {
    throw new Error("Database connection failed.");
  }

  initRouter();
}

function initRouter() {
  if (connection) {
    const shopApi = ShopAPI(connection); 
    server.use("/api", shopApi);
  } else {
    console.error("Connection is null, API routing will not be initialized."); 
  }

  const shopAdmin = ShopAdmin();
  server.use("/admin", shopAdmin);

  server.use("/", (_, res) => {
    res.send("React App");
  });
}

launchApplication();