import bcrypt from 'bcrypt';
// import crypto from 'crypto';
import prisma from '../lib/prisma.js';

class CreateUserService {
  // Declara a funcao assincrona execute que recebe um objeto com nome, email e senha
  async execute({ name, email, password }) {
    if (!name || !email || !password) {
      throw new Error("Dados obrigatórios não informados!");
    }

    // Utiliza o metodo findUnique do prisma para encontrar um match entre o email informado e outro inscrito no banco caso exista
    const userExists = await prisma.users.findUnique({
      where: { email }
    })

    if (userExists) {
      throw new Error("Usuário já existe!")
    }

    const passwordHash = await bcrypt.hash(password, 10)

    // Cria o novo usuario no banco de dados com nome, email e senha criptografada
    await prisma.users.create({
      data: {
        user_name: name,
        email: email,
        passwordHash,
        emailVerified: false,
        emailVerificationToken: null,
        emailVerificationExpires: null
      }
    });

    //     const confirmLink = `${process.env.FRONTEND_URL}/confirm-email?token=${token}`;

    //     await sendEmail({
    //       to: email,
    //       subject: "Confirme seu e-mail!",
    //       html: `
    //         <p>Olá ${name},</p>
    //         <p>Confirme sua conta clicando no link abaixo:</p>
    //         <a href="${confirmLink}">Confirmar e-mail</a>
    //       `
    //     });

  }
}

export default CreateUserService;