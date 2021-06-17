import React, { useMemo, useState } from 'react';
import { MenHeader, Profile, Welcome, UserName } from './header';
import { useTheme } from '../../hooks/index';
import emojis from '../../util/emojis'; //por ser export default consigo pegar a pasta
import Toggle from '../togle';

const MainHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false,
  );

  //cuidado com os useCallback,normalmente quando componente,
  //altera bastante de comportamento não é ideal,função dele e memorizar
  //e não toggle
  const handleTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const emoji = useMemo(() => {
    const emoji = Math.floor(Math.random() * emojis.length);
    return emojis[emoji];
  }, []);

  return (
    <MenHeader>
      <Toggle
        labelLeft="light"
        labelRight="dark"
        checked={darkTheme}
        onChange={handleTheme}
      />
      <Profile>
        <Welcome>Ola {emoji} </Welcome>
        <UserName>Ricardo Kenji </UserName>
      </Profile>
    </MenHeader>
  );
};
export default MainHeader;
