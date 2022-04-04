import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainerItems>
            <FooterItemContent>
                <FooterItemCredits>
                    <h2>Credits</h2>
                    <ul>
                        <li>
                            <p>App desenvolvido por Gabriel Lisboa</p>
                        </li>
                        <li>
                            <p href="https://www.themoviedb.org/">
                                Dados Retirados de https://www.themoviedb.org/
                            </p>
                        </li>
                        <li>
                            <p>Direitos de Imagem para Walt Disney</p>
                        </li>
                    </ul>
                </FooterItemCredits>
                <FooterItemDevInfo>
                    <h2>App Dev</h2>

                    <div>
                        <div>
                            <a
                                target="_blank"
                                href="https://github.com/gabriellisboa08"
                            >
                                <span>
                                    <GitHubIcon />
                                </span>
                                <span> GitHub</span>
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/gabriel-lisb%C3%B4a/"
                            >
                                <span>
                                    <LinkedInIcon />
                                </span>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/99lisboa/"
                            >
                                <span>
                                    <InstagramIcon />
                                </span>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </FooterItemDevInfo>
            </FooterItemContent>

            <hr />

            <CopyrightContainer>
                <CopyrightIcon />
                <span>Gabriel developer</span>
            </CopyrightContainer>
        </FooterContainerItems>
    );
};

const FooterContainerItems = styled.footer`
    display: flex;
    flex-direction: column;
    color: #f9f9f9;
    background: #090a0f;
    @media (max-width: 630px) {
        
        font-size: 13px;
    }
    @media (max-width: 400px) {
        font-size: 10px;
    }
`;
const FooterItemContent = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 40px;
    div {
        /* DIV que SEPARA OS ITEMS DO CONTEÙDO DO FOOTER */
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const FooterItemCredits = styled.div`
    ul {
        padding-top: 10px;
        padding-left: 20px;
    }
   
`;

const FooterItemDevInfo = styled.div`
    display: flex;
    div {
        display: flex;
        padding-top: 10px;
        a {
            span {
                padding: 0 5px;
            }
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
            color: white;
        }
    }
`;
const CopyrightContainer = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`;

export default Footer;
