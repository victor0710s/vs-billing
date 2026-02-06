import { SignUpForm } from '../../components/Auth/SignUpForm'
import { AuthContainer } from '../../components/Auth/AuthContainer'


export function SignUp() {
  return (
    <AuthContainer>
      <SignUpForm />
    </AuthContainer>
  )
}