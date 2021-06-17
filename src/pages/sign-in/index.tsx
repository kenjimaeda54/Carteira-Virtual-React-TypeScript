import React from 'react';
import { Container, Logo, Form, FormTitle } from './styles';
import LogoImg from '../../assets/logo.svg';
import Input from '../../components/input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="logo do sign in" />
        <h2>Minha carteira</h2>
      </Logo>
      <Form onSubmit={() => console.log()}>
        <FormTitle>Entrar</FormTitle>
        <Input placeholder="Coloque seu email" type="email" required />
        <Input placeholder="Coloque seu email" type="password" required />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};
export default SignIn;
