import styled from 'styled-components';
import { Box } from 'pcln-design-system';

const AuthorCardArrow = styled(Box)`
    position: absolute;
    top: -10px;
    left: 105px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;

    border-bottom: 15px solid white;
`;

export default AuthorCardArrow;
