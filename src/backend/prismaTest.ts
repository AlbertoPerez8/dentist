import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function newUser ()  {
 await prisma.user.create({
     data: {
        fname: 'asdas',
        lname: 'asczxvzd',
        email: 'as;kjalskjdd',        
        password: 'asdasdv',     
        phone: 'asdklvlv',        
        plan: 'asdvasdvlkj',         
     }
  
 })

 prisma.$disconnect()
}

newUser()