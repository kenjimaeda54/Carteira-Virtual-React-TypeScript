import React from 'react';
import { Container, TitleContent, Controllers } from './styles';

interface IContentHeader {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeader> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleContent lineColor={lineColor}>
        <h1>{title}</h1>
        {/*preciso de uma tag para referenciar a constate  estilo */}
      </TitleContent>
      {/*quem esta envolvendo o select é o controles ou seja
           todo estilo relacionado ao pai do select e aqui. 
        Exemplo alinhar os select em row    */}
      <Controllers>{children}</Controllers>
    </Container>
  );
};
export default ContentHeader;
