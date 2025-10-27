const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
   const demoUsers = [
    { name: "Juan Perez", email: "juan@gmail.com", password: "password123", role: "USER" },
    { name: "Maria Gomez", email: "maria@gmail.com", password: "password123", role: "ADMIN" },
    { name: "Carlos Sanchez", email: "carlos@gmail.com", password: "password123", role: "USER" }
  ];

   for (const user of demoUsers) {
     await prisma.user.create({
       data: user
     });
   }

   console.log('Usuarios de demostración creados con éxito');
   
   //Descomenta la siguiente línea si deseas eliminar todos los usuarios antes de crear nuevos
   //await prisma.user.deleteMany();
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });