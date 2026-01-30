export async function dashboardController(req, res) {
  // req.userId veio do middleware de autenticação
  const userId = req.userId;


  // exemplo: buscar dados do usuário
  const user = await User.findById(userId);


  // exemplo: buscar dados do sistema
  const stats = {
    totalUsers: 120,
    totalTransactions: 350
  };


  return res.json({
    user,
    stats
  });
}