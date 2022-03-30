import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

const Header = () => {
    const [scrollHeader, setscrollHeader] = useState(false);

    useEffect(() => {}, []);

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
        <Nav>
            <NavMenu>
                <Logo src="/images/images/logo.svg" />
                {iconsData.map((item, index) => (
                    <NavMenuItem key={index} href="#">
                        <img src={item.icon}></img>
                        <span>{item.name}</span>
                    </NavMenuItem>
                ))}
            </NavMenu>
            <UserHeader>
                <img src="#"></img>
                <span>Convidado</span>
            </UserHeader>
        </Nav>
    );
};
const Logo = styled.img`
    width: 80px;
    height: 100%;
    margin-right: 32px;
`;

const Nav = styled.nav`
    padding: 0px 36px;
    display: flex;
    justify-content: space-between;
    height: 72px;
    background: #090a0f;

`;

const NavMenuItem = styled.a`
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
`;

const NavMenu = styled.div`
    display: flex;
`;

const UserHeader = styled.a`
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    img {
        margin: 5px;
    }
    span {
        margin: 6px;
        font-size: 13px;
    }
`;
export default Header;
