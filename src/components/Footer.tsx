"use client";
import { Footer as FooterContainer, Icons } from "@/styles/GlobalStyles";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterContainer>
      <p>2022 JSM Headphones All rights reserverd</p>
      <Icons>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </Icons>
    </FooterContainer>
  );
};

export default Footer;
