import dbConnect from '../../../middleware/connectDB'
import User from '../../../models/User'



/** Get method for Reviews schema */
export default async function handler (req, res) {
    const { method } = req;
    const uid = req.query.id

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const user = await User.findOne({_id: uid})
                res.status(200).json({ success: true, data: user })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const user = await User.create(req.body)
                res.status(201).json({ success: true, data: user })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}