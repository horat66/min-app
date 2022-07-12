import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { NavLink, useNavigate, Outlet } from "react-router-dom";

const Header = () => {
    const history = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/page-cta");
    };

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? '700' : '400',
            textDecoration: isActive ? 'underline' : 'none',
        }
    }


    return (
        <>
        <header className={classes.header}>
            <div className={classes.header__content}>
                <NavLink to="/" className={classes.header__content__logo}>
                    <img 
                        src="/ministerio-brand.svg"
                        width="200"
                        height="200"
                        alt="ministerio de minas y energias logo"
                    />
                </NavLink>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <NavLink style={navLinkStyles} to="/energia/generacion" onClick={menuToggleHandler}>
                                Energía
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={navLinkStyles} to="/mineria/extraccion" onClick={menuToggleHandler}>
                                Minería
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={navLinkStyles} to="/hidrocarburos/upstream" onClick={menuToggleHandler}>
                                Hidrocarburos
                            </NavLink>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>Jugar</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
        <section>
            <Outlet/>
        </section>
      </>
    );
};

export default Header;
