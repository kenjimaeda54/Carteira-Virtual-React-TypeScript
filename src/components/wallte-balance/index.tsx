import React, { useMemo } from 'react';
import { Container } from './styles';
import CountUp from 'react-countup';
import dollar from '../../assets/dollar.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-up.svg';

interface IWallteBalanceProps {
  color: string;
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
}

const WallteBalance: React.FC<IWallteBalanceProps> = ({
  color,
  title,
  amount,
  footerLabel,
  icon,
}) => {
  //aqui usou usenemo na intenção de resolver o problema de tipagem
  //nosso src não pode receber undefined ou null
  const IconSelected = useMemo(() => {
    switch (icon) {
      case 'dollar':
        return dollar;
      case 'arrowUp':
        return arrowUp;
      case 'arrowDown':
        return arrowDown;
      default:
        return dollar;
    }
  }, [icon]);

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <strong> R$ </strong>
        <CountUp
          end={amount}
          //end={amount}
          //variável que esta armazenado o estado que desejamos converter
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={IconSelected} alt={title} />
    </Container>
  );
};
export default WallteBalance;
