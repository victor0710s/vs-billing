import CreateUserService from '../services/CreateUserService.js';

class AuthController {
  // Cria a funcao assincrona SignIn que recebe req e res como parametros
  async signIn(req, res) {
    // Faz unboxing dos valores name, email e password do corpo da requisicao
    const { name, email, password } = req.body;

    // Cria uma nova instancia da class CreateUserService
    const createUserService = new CreateUserService();

    try {
      // Chama o metodo execute da class CreateUserService passando name, email e password
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
}

export default AuthController;