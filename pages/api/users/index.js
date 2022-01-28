import nc from "next-connect";
const controller = require("../../../controllers/file.controller");
//
// let routes = (app) => {
//     router.post("/upload", controller.upload);
//     router.get("/files", controller.getListFiles);
//     router.get("/files/:name", controller.download);
//
//     app.use(router);
// };
//
// module.exports = routes;



const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res, next) => {
        res.status(404).end("Page is not found");
    },
})
    .get(controller.getListFiles);

export default handler;