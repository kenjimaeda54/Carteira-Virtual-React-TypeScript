import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';
import { useContextAth } from '../../hooks/auth';
import LogoImg from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn: React.FC = () => {
  const [passWord, setPassWord] = useState('');
  const [email, setEmail] = useState('');
  const { paramsLogged } = useContextAth();
  //para React reconhecer seu provider precisa
  //na raiz do projeto disponibiliza o Provider
  //App,Index..

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    paramsLogged(email, passWord);
  };

  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="logo do sign in" />
        <h2>Minha carteira</h2>
      </Logo>
      <Form onSubmit={handleFormSubmit}>
        <FormTitle>Entrar</FormTitle>
        <Input
          placeholder="E-mail"
          type="email"
          required
          onChange={handleEmail}
        />
        <Input
          placeholder="Senha"
          type="password"
          required
          onChange={handlePassWord}
        />
        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};
export default SignIn;
