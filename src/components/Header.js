import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

const Header = () => {
    const [visibleHeader, setVisibleHeader] = useState(false);

    useEffect(() => {
        const scrollListner = () => {
            if (window.scrollY > 10) {
                setVisibleHeader(true);
            } else {
                setVisibleHeader(false);
            }
        };
        window.addEventListener('scroll', scrollListner);
        return () => {
            window.removeEventListener('scroll', scrollListner);
        };
    }, []);

    const iconsData = [
        {
            icon: '/images/images/home-icon.svg',
            name: 'HOME',
        },
        {
            icon: '/images/images/search-icon.svg',
            name: 'SEARCH',
        },
        {
            icon: '/images/images/watchlist-icon.svg',
            name: 'WATCHLIST',
        },
        {
            icon: '/images/images/original-icon.svg',
            name: 'ORIGINALS',
        },
        {
            icon: '/images/images/movie-icon.svg',
            name: 'MOVIES',
        },
        {
            icon: '/images/images/series-icon.svg',
            name: 'SERIES',
        },
    ];

    return (
        <Nav
            style={
                visibleHeader == true
                    ? { background: '#090a0f' }
                    : { background: 'transparent' }
            }
        >
            <NavMenu >
                <Logo src="/images/images/logo.svg" />
                {iconsData.map((item, index) => (
                    <NavMenuItem key={index} href="#">
                        <div>
                            <img src={item.icon}></img>
                        </div>
                        <span>{item.name}</span>
                    </NavMenuItem>
                ))}
            </NavMenu>
            <UserHeader>
                <img src=""></img>
                <span>Convidado</span>
            </UserHeader>
        </Nav>
    );
};
const Nav = styled.nav`
    padding: 0px 36px;
    display: flex;
    justify-content: space-between;
    height: 72px;
    position: fixed;
    z-index: 3;
    width: 100%;
    transition: all 0.4s;
    @media (max-width: 1000px) {
        padding: 0px 0px;
    }
`;

const Logo = styled.img`
    width: 80px;
    height: 100%;
    margin-right: 25px;
    margin-left: 20px;
    @media (max-width: 1000px) {
        width: 50px;
    }
`;

const NavMenuItem = styled.div`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    padding: 16px;
    width: auto;
    display: flex;
    flex-direction: row;
    color: #f9f9f9;
    align-items: center;
    font-weight: bold;
    img {
        margin: auto;
        height: 20px;
        margin-right: 10px;
    }
    span {
        position: relative;
        font-size: 13px;
        &:after {
            content: '';
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            opacity: 0;
            width: 0%;
            transition: 0.3s;
        }
    }
    &:hover {
        span:after {
            opacity: 1;
            width: 100%;
        }
    }
    @media (max-width: 1000px) {
        div {
            position: relative;
            &:after {
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                opacity: 0;
                width: 0%;
                transition: 0.3s;
            }
            &:hover {
                &:after {
                    opacity: 1;
                    width: 70%;
                }
            }
        }
        span {
            display: none;
        }
        div {
            div:after {
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                opacity: 0;
                width: 100%;
                transition: 0.3s;
            }
            &:hover {
                div:after {
                    opacity: 1;
                    width: 100%;
                }
            }
        }
        img {
            &:hover {
                div:after {
                    opacity: 1;
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 600px) {
        padding: 0;
    }
`;

const NavMenu = styled.div`
    display: flex;
`;

const UserHeader = styled(NavMenuItem)`
    height: 100%;
    color: white;
    align-items: center;
    span {
        display: flex;
        margin-right: 6px;
        font-size: 13px;
    }
`;
export default Header;
