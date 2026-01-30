import bcrypt from 'bcrypt';
import crypto from 'crypto';
import User from '../models/User.js';

class CreateUserService {
  // Declara a funcao assincrona execute que recebe um objeto com nome, email e senha
  async execute({ name, email, password }) {
    // Verifica se o usuario ja existe no banco de dados
    const userExists = await User.findOne({ email });
    //Se existir lança um erro
    if (userExists) {
      throw new Error("E-mail já cadastrado!");
    }

    // Criptografa a senha usando bcrypt
    // usa 10 rounds de salting para uma segurança adequada (10 é o padrao recomendado)
    const passwordHash = await bcrypt.hash(password, 10);

    const token = crypto.randomBytes(32).toString("hex");

    // Cria o novo usuario no banco de dados com nome, email e senha criptografada
    await User.create({
      name,
      email,
      password: passwordHash,
      emailVerified: false,
      emailVerificationToken: token,
      emailVerificationExpires: Date.now() + 1000 * 60 * 60 * 24
    });

    const confirmLink = `${process.env.FRONTEND_URL}/confirm-email?token=${token}`;

    await sendEmail({
      to: email,
      subject: "Confirme seu e-mail!",
      html: `
        <p>Olá ${name},</p>
        <p>Confirme sua conta clicando no link abaixo:</p>
        <a href="${confirmLink}">Confirmar e-mail</a>
      `
    });

  }
}

export default CreateUserService;