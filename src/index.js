import express from "express";
import apiproductos from "./routes/apiproductos";
import path from "path";
import handlerbars from "express-handlebars";

// Inicializacion express
const app = express();
const port = 8080;
const server = app.listen(port, () => console.log("Server UP en puerto", port));

server.on("error", (err) => {
  console.log("Error en servidor", err);
});

// Inicializacion handlebars
const layoutDirPath = path.resolve(__dirname, "../views/layouts");
const defaultLayerPath = path.resolve(__dirname, "../views/layouts/index.hbs");
const partialDirPath = path.resolve(__dirname, "../views/partials");
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlerbars({
    layoutsDir: layoutDirPath,
    extname: "hbs",
    defaultLayout: defaultLayerPath,
    partialsDir: partialDirPath,
  })
);

// Inicializacion public folder
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.render("main");
});

//Routers
app.use("/api/productos", apiproductos);

// Rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});