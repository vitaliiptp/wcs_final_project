import nc from "next-connect";
const controller = require("../../controllers/file.controller");



// /** Example of routes to get/post the data from Google Cloud */
// let routes = (app) => {
//     router.post("/upload", controller.upload);
//     router.get("/files", controller.getListFiles);
//     router.get("/files/:name", controller.download);
//
//     app.use(router);
// };
//
// module.exports = routes;


/** Route to get user photos from Google Cloud */

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