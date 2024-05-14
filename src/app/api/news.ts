import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		const client = await clientPromise;
		const db = client.db("news-app");
		const news = await db.collection("news").find({}).toArray();
		res.status(200).json(news);
	} catch (e) {
		console.error(e);
		res.status(500).json({ message: "Internal Server Error" });
	}
}
