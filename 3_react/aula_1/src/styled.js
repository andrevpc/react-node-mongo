import styled from 'styled-components';

export const Header = styled.div`
display: flex;
justify-content: space-around;
background-color: #555;
`;

export const Item = styled.div`
color: ${props => props.color};
font-size: 20px;
font-weight: bold;
`;