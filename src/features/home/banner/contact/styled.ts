import styled from "styled-components";

export const ContactWrapper = styled.div`
  height: 300px;
  width: 300px;
  position: relative;
  :hover .social {
    transform: scale(1);
    animation: rotate 20s linear infinite;
  }
  :hover .social:hover {
    animation-play-state: paused;
  }
  :hover .profile {
    transform: translate(50%, -50%) scale(0.8);
  }
`;
export const Social = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, auto);
  place-items: center;
  gap: 150px;
  transform: scale(0.5);
  transform-origin: center;
  transform-box: fill-box;
  a {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    place-items: center;
    display: grid;
    fill: #fff;
    transition: all 0.1s ease-in-out;
    position: relative;
    :hover,
    :focus {
      background-color: #aab8c2;
    }
  }
  a:hover > svg,
  a:focus > svg {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
  .twitter {
    background-color: #1da1f2;
  }
  .facebook {
    background-color: #4267b2;
  }
  .linkdin {
    background-color: #0072b1;
    clip-path: circle(50% at 50% 50%);
  }
  .instagram {
    background-color: #e1306c;
  }
`;

export const Profile = styled.div`
  background-image: url(../images/github-integration.svg);
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  border-radius: 50%;
  transition: transform 0.4s ease-in-out;
  /* ::before {
    content: "Contact Me";
    font-family: poppins;
    font-weight: bold;
    color: #fff;
    padding: 5px 8px;
    position: absolute;
    bottom: -4%;
    right: 50%;
    transform: translateX(50%);
    border-radius: 9999px;
    background-color: #008da0;
  } */
  @keyframes rotate {
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
`;
