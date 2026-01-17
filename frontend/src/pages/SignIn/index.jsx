import { SignInForm } from '../../components/Auth/SignInForm'
import { AuthContainer } from '../../components/Auth/AuthContainer'


export function SignIn() {
  return (
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
  )
}