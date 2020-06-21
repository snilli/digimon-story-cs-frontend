import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { Ability } from './interface'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req

  switch (method) {
    case 'GET': {
      const { data: abilityList } = await axios.get<Ability[]>(
        `${process.env.HOST_URL}/json/ability_list.json`,
      )

      if (abilityList) {
        res.status(200).json(Object.values(abilityList).map((abi) => abi))
        break
      }

      res.status(404).end(`Cannot find any data`)
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
