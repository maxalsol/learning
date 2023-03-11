//* SETUP

const PORT = 9001;
const express = require("express");
const app = express();

//* - - - - - - - - - - - - - HB BOILER PLATE - - - - - - - - - - - - - - - - *//
const { engine } = require("express-handlebars");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
//* - - - - - - - - - - - - - HB BOILER PLATE - - - - - - - - - - - - - - - - *//

//* MIDDLEWARE
app.use(express.static("./projects"));
app.use(express.static("./public"));

//* ROUTING
app.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
        // teachers: teachers, -> was used
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
    });
});

//* LISTENER
app.listen(PORT, () => console.log("Listening on Port:", PORT));
