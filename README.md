# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Treinamento carteira virtual
 Este projeto foi de curso objetivo fortalecer conhecimentos em React,Styled Compnents e Type Script
 
## Tabelas de conteudos 
* Visão geral
  * <a href='#Desafio' >  Desafio </a>
* Meus processos
  * <a href='#Construção' >  Construção </a>   
  * <a href='#o-que-eu-aprendi' >  Aprendizado </a>
  * <a href='#Feature' >  Feature </a>
  * * <a href='#Dependencias' >  Dependencias </a>

## Visão Geral
## Desafio
-  Criar uma carteira virtual,com os valores de entrada,saida é visão geral da carteira sobre os gastos.

## Construção
  - React
  - Styled Component
  - Type Script
  - JSX
  

## O que eu aprendi
Fortaleci meus conhecimentos em React é Type Script,aprendi novas tecnicas para tipagem de componentes nativos é uso do </br> 
[Styled Component](https://styled-components.com/)</br>
Tambem algumas tenicas avançadas em CSS</br>
</br>

Toda aplicação segue principios do [desing Atomics](https://atomicdesign.bradfrost.com/chapter-2/) </br>
principio e utilizar a quimica para criação de nossa aplicação.
No codigo abaixo esta um exemplo, nosso layout seria Interfaces de acordo com  Desing Atomics.</br>
No content ficara todas as moleculas(conjunto de atomos),assim seguindo a regra de atomic

~~~javascript 
import React from 'react';
import GridAside from '../asside';
import Content from '../content';
import MainHeader from '../main-header';
import { Layout } from './style';

const GridLayout: React.FC = ({ children }) => (
  <Layout>
    <MainHeader />
    <GridAside />
    <Content>{children}</Content>
  </Layout>
);

import React from 'react';
import { Main } from './content';

const Content: React.FC = ({ children }) => <Main>{children}</Main>;
export default Content;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GridLayout from '../components/layout';
import Dashboard from '../pages/dashboard';
import List from '../pages/list';

const App: React.FC = () => {
  return (
    <GridLayout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/list/:type" component={List} />
      </Switch>
    </GridLayout>
  );
};
export default App
 ~~~

No list/:type é uma ténica que garente em apenas um arquvio possuir duas telas,uma sera renderizada de acordo com type recebido,</br>
é a outra de acordo com outro tipo recebido</br>
Type na nossa aplicação tem dois parametros /entry-balance ou exit-balannce, ambos chegam pelo match.params.type que e enviado pelas rotas</br>
 
 ```javascript
   
   const GridAside: React.FC = (): JSX.Element => {
   <MenuNavigation href="/list/entry-balance">
    <MdArrowUpward />
          Entradas
    </MenuNavigation>
   <MenuNavigation href="/list/exit-balance">

};
export defaul GridAside;

interface IListProps {
  match: {
    params: {
      type: string /*o type esta sendo enviado pelas rotas /filter/:type */;
    };
  };
}


const List: React.FC<IListProps> = ({ match }) => {
  
    const movimentBalance = match.params.type;
      const pageData = useMemo(() => {
    return movimentBalance === 'entry-balance'
      ? {
          title: 'Entradas',
          color: '#4E41F0',
          data: gains,
        }
      : {
          title: 'Saídas',
          color: '#d62c2c',
          data: expenses,
        };
  }, [movimentBalance]);

}
export default List;

 ```
 
 Usuamos contextApi para criar logica para compartilhar os temas e  logica para as rotas autenticadas é as não atennticadas.</br>
 Ela e uma dependencia que vem junto com create react app então não precisa ser instalada independente
 
  ```javascript
const Routes: React.FC = () => {
  const { logged } = useContextAth();
  return <BrowserRouter>{logged ? <App /> : <AthRoutes />}</BrowserRouter>;
};
export default Routes;

import React, { useState, useContext, createContext } from 'react';

interface IAthProps {
  logged: boolean;
  paramsLogged(email: string, passWord: string): void;
  signOut(): void;
}

const AthContextProvider = createContext<IAthProps>({} as IAthProps);

const AthContext: React.FC = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const userLogged = localStorage.getItem('@minha-carteira:logged');
    //!! se possuir conteúdo retorna true,se não return false
    return !!userLogged;
  });

  const paramsLogged = (email: string, passWord: string) => {
    if (email === 'kenji@gmail.com' && passWord === '123') {
      localStorage.setItem('@minha-carteira:logged', 'true');
      setLogged(true);
    } else {
      alert('Usuario invalido');
    }
  };

  const signOut = () => {
    localStorage.removeItem('@minha-carteira:logged');
    setLogged(false);
  };

  return (
    <AthContextProvider.Provider value={{ logged, paramsLogged, signOut }}>
      {children}
    </AthContextProvider.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useContextAth(): IAthProps {
  const context = useContext(AthContextProvider);
  return context;
}

export { useContextAth, AthContext };
  
 ```
  Com [react-countup](https://www.npmjs.com/package/react-countup ) foi possivel formatar os numeros e criar animação de forma simples 

  ```javascript
  
      <CountUp
          end={amount}
          //end={amount}
          //variável que esta armazenado o estado que desejamos converter
          separator="."
          decimal=","
          decimals={2}
        />
    
  ```
  Abaixo segue um recurso avançado do styled component facilita nas estilizações de renderização condicional.
 
 ```javascript
 import styled, { css } from 'styled-components';
 
 
 interface IContainerProps {
  openModal: boolean;
}
 
 export const Container = styled.div<IContainerProps>`
 
 ${(props) =>
      !props.openModal &&
      css`
        border: none;
        border-bottom: ${(props) => props.theme.colors.gray};
      `};
 
 languages: list.filter(value=>{if(value.languages.includes(paramsJob)) return value}),
`; 

```
Outro recurso do styled componet e animaçõoes.


```javascript

import styled, { keyframes } from 'styled-components';

const animate = keyframes`
   0%{
      transform: translateX(-100px);
      opacity:0;

   }
   50%{
     opacity: .3;

   }
   100%{
     transform: translateX(0px);
     opacity: 1;
   }
`;


export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.tertiary};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;
  animation: ${animate} 0.3s;
`;
 
 ```
Foi utilizado o [recharts](https://recharts.org/en-US/) para os graficos.
 
 ```javascript
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
 
 
 const PieCharBox: React.FC<IPieCharBoxProps> = ({ data }) => (
 <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {/*renderizar componente em map,não esquece e entre (<Cell />)  */}
            {data.map((item, index) => (
              <Cell key={index} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
 }
 
 ```
 Outra tenica bacana e o modal,ele e aberto apos clicado em um icone,esta  icoe esta apenas disponivel para mobile,por isso o media.</br>
 Overflow-y facilita sumir  o conteudo que sobra no menu de navegação quanndo e fechado,outra alternnativa e no caso seria mais verboso</br></br>
 E colocar uma renderização condicional em cada item de navegação.</br>
 Maneira que foi construido com overflo-y:hiden e simples e funcional
 
```javascript
import styled, { css } from 'styled-components';

 interface IContainerProps {
  openModal: boolean;
}

  export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 2vw;
  position: relative;

  @media (max-width: 750px) {
    padding-left: 7px;
    width: 170px;
    position: fixed;
    z-index: 2;
    height: ${(props) => (props.openModal ? '100vh' : '70px')};
    overflow-y: hidden;
    ${(props) =>
      !props.openModal &&
      css`
        border: none;
        border-bottom: ${(props) => props.theme.colors.gray};
      `};
  }
 
 
 ```
 Por fim aprendi a tipar componentes nativos do html</br>
 Com {...rest} toda propriedade dos componentes estão disponiveis</br>
 Observa a maniera de t ipagem do button para Input tem algumas diferenças.
 
 ```javascript
 import { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButton> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Button;
 
 import { InputHTMLAttributes } from 'react';
import { Container } from './style';


type IInput = InputHTMLAttributes<HTMLInputElement>;


const Input: React.FC<IInput> = ({ ...rest }) => <Container {...rest} />;
export default Input;
 
 ```
 Docs [react icons](https://github.com/react-icons/react-icons  )
 
 # Feature
  - Hooks
  - styled component
  - Atomics
  - Media Screen
  - Tipagem

## Dependencias
- [React Count Up ](https://www.npmjs.com/package/react-countup)
- [React Icons](https://github.com/react-icons/react-icons)
- [React Charts](https://recharts.org/en-US/)
- [Styled Component](https://styled-components.com) 




## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
