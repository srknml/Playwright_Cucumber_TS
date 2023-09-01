const fs = require("fs-extra");
try {
    if (!fs.existsSync("target")) {
        fs.mkdirSync("target")

    }
    fs.emptyDir("target");
    fs.ensureDir("target");


} catch (error) {
    console.log("Folder not created! " + error);
}