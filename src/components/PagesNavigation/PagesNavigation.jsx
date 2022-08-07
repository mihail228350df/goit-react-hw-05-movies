import { Conteiner } from 'components/GlobalStyle';
import { Box } from '../Box/Box';
import { StyledLink } from './PagesNavigation.styled';

export default function PagesNavigation() {
  return (
    <Conteiner>
      <Box as="nav" p={4}>
        <StyledLink to="/"> Home </StyledLink>
        <StyledLink to="/movies"> Movies </StyledLink>
      </Box>
    </Conteiner>
  );
}