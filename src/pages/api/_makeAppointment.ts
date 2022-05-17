import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body
  try {
    const appointment = await prisma.appointment.create({
      data: {
        details: data.details,
        userId: data.userId
      },
    })
    prisma.$disconnect()
    res.status(200).json({ msg: 'success', apoint: appointment })
  } catch (error) {
    res.status(403).json({ msg: 'no insertion made' })
    console.log(error)
  }
}
