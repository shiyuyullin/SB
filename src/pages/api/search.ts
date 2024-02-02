import { NextApiRequest, NextApiResponse } from "next";
// /api/search
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = req.body;
    console.log(body);
    res.status(200).json({ message: "success" });
  } else {
    res.status(404).json({});
  }
}
