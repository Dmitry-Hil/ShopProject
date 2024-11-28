import express, { Express, Request, Response } from "express";

const host = process.env.LOCAL_PATH || 'localhost'; 
const port = Number(process.env.LOCAL_PORT) || 3000;

export function initServer(): Express {
  const app: Express = express();

  
  app.options("/*", (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    res.sendStatus(200);
  });

  
  const jsonMiddleware = express.json();
  app.use(jsonMiddleware);

  // Запускаем сервер
  app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
  });

  return app;
}