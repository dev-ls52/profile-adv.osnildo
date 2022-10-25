import { FooterStyled, WhatsLogo, EndButton } from "./styles";
import { BsWhatsapp } from 'react-icons/bs'
import { IoMdArrowRoundUp } from 'react-icons/io'

export function Footer() {

    window.addEventListener("scroll", changeEndButtonStyle);

    function changeEndButtonStyle() {
        const hdr = document.querySelector(".endBtn");

        if (window.scrollY < 100 && hdr?.classList.contains("showBtn")) {
            hdr?.classList.remove("showBtn");
            hdr?.classList.add("hideBtn");
        } else if (window.scrollY >= 100 && hdr?.classList.contains("hideBtn")) {
            hdr?.classList.remove("hideBtn");
            hdr?.classList.add("showBtn");
        }
    }

    return (
        <FooterStyled>
            <WhatsLogo href="http://api.whatsapp.com/send?phone=5519997021486" target="_blank">
                <BsWhatsapp className="icon" /> QUERO AJUDA
            </WhatsLogo>

            <EndButton href="#home" className="endBtn hideBtn" >
                <IoMdArrowRoundUp />
            </EndButton>
        </FooterStyled>
    );
}