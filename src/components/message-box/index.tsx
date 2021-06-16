import React from 'react';
import { Container } from './style';

interface IMessageBoxProps {
  title: string;
  icon: string;
  description: string;
  footerText: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  icon,
  description,
  footerText,
}) => (
  <Container>
    <header>
      <h1>
        {title}
        <img src={icon} alt={title} />
      </h1>
      <p>{description}</p>
    </header>
    <footer>
      <small>{footerText}</small>
    </footer>
  </Container>
);
export default MessageBox;
