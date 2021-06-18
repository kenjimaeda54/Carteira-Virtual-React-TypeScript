import styled from 'styled-components';

export const MenHeader = styled.div`
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
