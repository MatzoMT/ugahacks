// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  role: string;
  age: number;
  funFact: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({
      name: "Andrei Spatariu",
      role: "Tech Lead/Advisor",
      age: 22,
      funFact: "I am an avid skier and tennis fan!",
    });
}
