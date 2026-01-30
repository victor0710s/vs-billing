import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // Checa se o token está presente para permitir acesso a rotas protegidas
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" })
  }

  // Extrai o token do cabeçalho Authorization
  const [, token] = authHeader.split(' ');

  try {
    // Verifica o token usando a chave secreta, se válido, permite o acesso
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id
    next();

  } catch {
    return res.status(401).json({ message: "Token invalid" });
  }
}