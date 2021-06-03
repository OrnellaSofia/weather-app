import styled from 'styled-components';

const StyledFooterContainer = styled.footer`
    margin: 0px;
    text-align: left;
    padding: none;
    color: #fefbd8;
    font-size: 36px;
    margin-top: 150px;
`;

const StyledFooterText = styled.p`
    font-size: 14px;
    text-align: center;
    a{
        text-decoration: none;
        color: inherit
    }
`;

const AppFooter = () => {
    return(
        <StyledFooterContainer>
            <StyledFooterText>
                Created by <a href="https://github.com/OrnellaSofia" target="_blank">Ornella Acerbi</a>
            </StyledFooterText>
        </StyledFooterContainer>
    )
};

export default AppFooter;