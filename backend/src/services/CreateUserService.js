import bcrypt from 'bcrypt';
import User from '../models/User.js';

class CreateUserService {
  // Declara a funcao assincrona execute que recebe um objeto com nome, email e senha
  async execute({ name, email, password }) {
    // Verifica se o usuario ja existe no banco de dados
    const userExists = await User.findByEmail(email);
    //Se existir lança um erro
    if (userExists) {
      throw new Error("Usuário ja existe!");
    }

    // Criptografa a senha usando bcrypt
    // usa 10 rounds de salting para uma segurança adequada (10 é o padrao recomendado)
    const passwordHash = await bcrypt.hash(password, 10);

    // Cria o novo usuario no banco de dados com nome, email e senha criptografada
    await User.create({
      name,
      email,
      passwordHash
    });
  }
}

export default CreateUserService;