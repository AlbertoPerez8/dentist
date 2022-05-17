import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

type Data = {
  fname: string
  lname: string
  email: string
  phone: string
  plan: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body
  try {
    const newUser = await prisma.user.create({
      data: {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        password: data.password,
        phone: data.phone,
        plan: data.plan,
      },
    })
    prisma.$disconnect()
    res.status(200).json({ msg: 'success', user: newUser })
  } catch (error) {
    res.status(403).json({ msg: 'no insertion made' })
    console.log(error)
  }
}
