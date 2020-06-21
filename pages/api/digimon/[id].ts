import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { StatInfo } from './interface'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET': {
      const { data: digimonList } = await axios.get<StatInfo[]>(
        `${process.env.HOST_URL}/json/digimon_info.json`,
      )

      const digimon = digimonList[parseInt(id.toString())]
      if (digimon) {
        res.status(200).json(digimon)
        break
      }

      res.status(404).end(`Cannot find digimon data`)
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
