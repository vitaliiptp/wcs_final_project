import dbConnect from "../../../middleware/connectDB";
import Comment from "../../../models/Comment";

/** Get method for Comment schema */
export default async function handler (req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const comment = await Comment.find({})
                res.status(200).json({ success: true, data: comment })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const comment = await Comment.create(req.body)
                res.status(201).json({ success: true, data: comment })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}