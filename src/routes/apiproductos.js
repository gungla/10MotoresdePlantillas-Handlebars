import express from "express";
import { productos } from "../class";
const router = express.Router();

//product list
router.get("/listar", (req, res) => {
  if (productos.length == []) {
    return res.status(404).render("error");
  }
  res.render("listar", { productos });
});

//list id product
router.get("/listar/:id", (req, res) => {
  const idSearch = req.params.id;
  const product = productos.find((idProd) => idProd.id == idSearch);

  if (!product) {
    return res.status(404).json({
      Error: "ERROR, product not found",
    });
  }
  res.json({
    data: product,
  });
});

//Endpoint para acceder al formulario de ingreso de productos
router.get("/guardar", (req, res) => {
  res.render("ingresar");
});

//Endpoint para guardar productos
router.post("/guardar", (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body))

  if (body == undefined) {
    return res.status(400).json({
      Error: "ERROR, product not added",
    });
  }

  const newProduct = {
    title: body.title,
    price: body.price,
    id: productos.length + 1,
    thumbnail: body.thumbnail
  };

  productos.push(newProduct);

  res.status(201).json({
    msg: "Product added",
    data: newProduct,
  });
});

//Endpoint para modificar productos
router.put("/actualizar/:id", (req, res) => {
  const idActualizar = parseInt(req.params.id);
  const body = req.body;
  const idProductos = productos.findIndex((index) => index.id == idActualizar);

  if (idProductos != -1) {
    productos.splice(idProductos, 1, body);
  } else {
    return res.status(400).json({
      Error: "ERROR, id not exist",
      idActualizar,
    });
  }
  res.status(201).json({
    msg: "Product update",
    data: body,
    productos,
  });
});

router.delete("/borrar/:id", (req, res) => {
  const idBorrar = parseInt(req.params.id);
  const idProductos = productos.findIndex((index) => index.id == idBorrar);
  if (idProductos != -1) {
    productos.splice(idProductos, 1);
  } else {
    return res.status(400).json({
      Error: "ERROR, id not exist",
      idBorrar,
    });
  }
  res.status(201).json({
    msg: "Product deleted",
    data: productos,
  });
});

export default router;
