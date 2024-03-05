import userModel from "../Model/userModel.js";

export const homeRoute = (req, res) => {
  res.render("index.ejs", {
    title: "Home Page",
  });
};

export const signUpRoute = async (req, res) => {
  const { username, emailID, pwd } = req.body;

  try {
    await userModel.create({
      username,
      emailID,
      pwd,
    });
    return res.render("signUp", {
      title: "Home Page",
    });
  } catch (error) {
    if (error) throw error;
  }
};

export const loginRoute = async (req, res) => {
  const { emailID, pwd } = req.body;

  const checkUser = await userModel.findOne({
    emailID,
    pwd,
  });

  if (!checkUser) {
    return res.status(422).render("login.ejs", {
      title: "Login",
    });
  }
  return res.redirect("/");
};
