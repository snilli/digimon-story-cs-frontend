import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { AbilityInfo } from './interface'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET': {
      const { data: abilityList } = await axios.get<Record<string, AbilityInfo>>(
        `${process.env.HOST_URL}/json/ability_info.json`,
      )

      const ability = abilityList[parseInt(id.toString())]
      if (ability) {
        res.status(200).json(ability)
        break
      }

      res.status(404).end(`Cannot find ability data`)
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
