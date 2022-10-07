import React, { useState } from "react";
import { IoMdMenu, IoMdClose, IoMdHome, IoMdChatboxes, IoMdRibbon, IoMdPerson, IoMdListBox } from 'react-icons/io'

import { HbgMenuArea, HbgMenuContent, HbgMenuIcon, HbgMenuOverlay, HeaderArea, HeaderContent, HeaderLogo, HeaderNav } from "./styles";

export function Header() {

    const [hbgOpen, setHbgOpen] = useState(false);

    return (
        <>
            <HeaderArea className="bgGreen">
                <HeaderContent>
                    <HeaderLogo>
                        <a href="/" >Osnildo Reis Advocacia</a>
                    </HeaderLogo>
                    <HeaderNav>
                        <nav>
                            <ul>
                                <li><a href="#home">Início</a></li>
                                <li><a href="#about">Sobre</a></li>
                                <li><a href="#atuacao">Atuação</a></li>
                                <li><a href="#profile">Dr. Osnildo</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                        </nav>
                    </HeaderNav>


                    {/* HamburgerMenu */}
                    <HbgMenuArea>
                        <HbgMenuIcon onClick={() => setHbgOpen(!hbgOpen)}>
                            {
                                !hbgOpen ?
                                    <IoMdMenu size="1.5rem" />
                                    :
                                    <IoMdClose size="1.5rem" />
                            }
                        </HbgMenuIcon>
                        {
                            !hbgOpen ?
                                null :
                                <>
                                    <HbgMenuOverlay onClick={() => { setHbgOpen(false) }} />
                                    <HbgMenuContent>
                                        <nav>
                                            <ul >
                                                <li onClick={() => { setHbgOpen(false) }}><a href="#home"> <span><IoMdHome size="1.5rem" /></span> Início</a></li>
                                                <li onClick={() => { setHbgOpen(false) }}><a href="#about"> <span><IoMdListBox size="1.5rem" /></span> Sobre</a></li>
                                                <li onClick={() => { setHbgOpen(false) }}><a href="#atuacao"> <span><IoMdRibbon size="1.5rem" /></span> Atuação</a></li>
                                                <li onClick={() => { setHbgOpen(false) }}><a href="#profile"><span><IoMdPerson size="1.5rem" /></span> Dr. Osnildo</a></li>
                                                <li onClick={() => { setHbgOpen(false) }}><a href="#contact"> <span><IoMdChatboxes size="1.5rem" /></span> Contato</a></li>
                                            </ul>
                                        </nav>
                                    </HbgMenuContent>
                                </>
                        }
                    </HbgMenuArea>
                </HeaderContent>
            </HeaderArea>
        </>
    );
}