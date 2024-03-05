import { Router } from "express";
import {
  homeRoute,
  signUpRoute,
  loginRoute,
} from "../controller/controllers.js";

const routes = Router();

routes.get("/", homeRoute);

routes.post("/user/signUp", signUpRoute);
routes.get("/user/signUp", (req, res) => {
  res.render("signUp.ejs", {
    title: "Sign Up",
  });
});

routes.post("/user/login", loginRoute);
routes.get("/user/login", (req, res) => {
  res.render("login.ejs", {
    title: "Login",
  });
});

export default routes;
