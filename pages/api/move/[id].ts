import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { MoveInfo } from './interface'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET': {
      const { data: moveList } = await axios.get<Record<string, MoveInfo>>(
        `${process.env.HOST_URL}/json/move_info.json`,
      )

      const move = moveList[parseInt(id.toString())]
      if (move) {
        res.status(200).json(move)
        break
      }

      res.status(404).end(`Cannot find move data`)
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
