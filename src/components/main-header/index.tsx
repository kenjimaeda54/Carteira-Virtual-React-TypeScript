import React, { useMemo } from 'react';
import { MenHeader, Profile, Welcome, UserName } from './header';
import emojis from '../../util/emojis'; //por ser export default consigo pegar a pasta
import Toggle from '../togle';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const emoji = Math.floor(Math.random() * emojis.length);
    return emojis[emoji];
  }, []);

  return (
    <MenHeader>
      <Toggle />
      <Profile>
        <Welcome>Ola {emoji} </Welcome>
        <UserName>Ricardo Kenji </UserName>
      </Profile>
    </MenHeader>
  );
};
export default MainHeader;
