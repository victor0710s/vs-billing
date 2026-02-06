import CreateUserService from '../services/CreateUserService.js';
import bcrypt from 'bcrypt';

class AuthController {
  // Cria a funcao assincrona SignUp que recebe req e res como parametros
  async signUp(req, res) {
    // Faz unboxing dos valores name, email e password do corpo da requisicao
    const { name, email, password } = req.body;

    // Cria uma nova instancia da class CreateUserService

    try {
      // Chama o metodo execute da class CreateUserService passando name, email e password
      const createUserService = new CreateUserService();

      await createUserService.execute({
        name,
        email,
        password
      });

      // Retorna uma resposta de sucesso com status 201 (Created)
      return res.status(201).json({
        message: "User created successfully"
      });
    } catch (error) {
      // Em caso de erro, retorna uma resposta com status 400 (Bad Request) e a mensagem de erro
      return res.status(400).json({
        error: error.message
      });
    }
  }

  // async login(req, res) {
  //   const { email, password } = req.body;

  //   try {
  //     // Lógica de autenticação aqui
  //     const user = await User.findByEmail(email);
  //     if (!user.emailVerified) {
  //       throw new Error("Confirme seu e-mail antes de realizar o login!");
  //     }

  //     if (!user) {
  //       return res.status(401).json({ error: "Email ou senha inválidos" });
  //     }

  //     const passwordMatch = await bcrypt.compare(password, user.passwordHash);
  //     if (!passwordMatch) {
  //       return res.status(401).json({ error: "Email ou senha inválidos" });
  //     }

  //     return res.status(200).json({ message: `Login bem-sucedido. Seja bem-vindo ${user.name}` });
  //   } catch (error) {
  //     return res.status(400).json({ error: error.message });
  //   }
  // }

  // async forgotPass(req, res) {
  //   const { email } = req.body;

  //   try {
  //     // Lógica de recuperação de senha aqui
  //     // Por enquanto, apenas retornamos uma mensagem de sucesso
  //     const user = await User.findByEmail(email);
  //     if (!user) {
  //       return res.status(404).json({ error: "Email não encontrado" });
  //     }
  //     return res.status(200).json({ message: `Instruções para recuperação de senha enviadas para ${email}` });
  //   } catch (error) {
  //     return res.status(400).json({ error: error.message });
  //   }
  // }
}

export default AuthController;