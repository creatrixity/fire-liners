import styled from 'styled-components';
import { Card } from 'pcln-design-system';

const AuthorCard = styled(Card)`
    position: absolute;
    width: 220px;
    top: 60px;
    left: -105px;
    z-index: 500;
    border-radius: 5px;
    transition: opacity 0.5s ease,
                transform 0.3s ease-in-out;
`;

export default AuthorCard;
