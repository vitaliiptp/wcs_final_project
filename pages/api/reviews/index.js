import dbConnect from "../../../middleware/connectDB";
import Review from "../../../models/Review";

/** Get method for Reviews schema */

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const review = await Review.aggregate([
          {
            $lookup: {
              from: "comments",
              localField: "_id",
              foreignField: "reviewId",
              as: "comments",
            },
          },
          // Deconstructs the array field from the input document to output a document for each element
          // {
          //   $unwind: "$comments",
          // },
        ]);
        res.status(200).json({ success: true, data: review });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const review = await Review.create(req.body);
        res.status(201).json({ success: true, data: review });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
