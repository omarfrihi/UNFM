import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const HistoryWrapper = styled.div`
  background: linear-gradient(180deg, #f2f2f2 0%, rgba(255, 255, 255, 0) 100%),
    #fff;
  padding: 1rem 3rem;
  ${responsive.xl`
  padding: 1rem 0rem;

  `}
  & .tl-slide {
    background: linear-gradient(
      180deg,
      #f2f2f2 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  & .tl-media .tl-media-content-container .tl-media-content img {
    height: 370px;
    max-width: 500px;
    ${responsive.xl`
    height: 270px;
    max-width: 350px;
    `}
  }
  & .tl-timemarker .tl-timemarker-content-container {
    height: fit-content !important;
    width: fit-content !important;
    border-radius: 50%;
    transform: translateX(-21px);
    border-color: #144056;
  }

  & .tl-timemarker.tl-timemarker-active .tl-timemarker-content-container {
    border-color: #31dc84;
  }

  &
    .tl-timemarker
    .tl-timemarker-content-container
    .tl-timemarker-content
    .tl-timemarker-text {
    display: none;
  }

  &
    .tl-timemarker
    .tl-timemarker-content-container
    .tl-timemarker-content
    .tl-timemarker-media-container {
    margin: 0;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: unset;
    max-height: unset;
  }

  & .tl-timemarker .tl-timemarker-content-container .tl-timemarker-content {
    padding: 0;
  }
  & .tl-timemarker .tl-timemarker-line-left {
    border-color: #144056;
  }
  & .tl-timemarker.tl-timemarker-active .tl-timemarker-line-left {
    border-color: #31dc84;
  }
  &
    .tl-timemarker
    .tl-timemarker-content-container
    .tl-timemarker-content
    .tl-timemarker-media-container
    .tl-timemarker-media {
    max-width: unset;
    opacity: 1;
  }
  & .tl-timemarker.tl-timemarker-active .tl-timemarker-line-left:after {
    background-color: #31dc84;
  }

  & .tl-timemarker .tl-timemarker-line-left:after {
    background-color: #144056;
  }
  & .tl-timeline .tl-headline-date,
  & .tl-timeline h3.tl-headline-date {
    color: #31dc84;
    font-family: Red Hat Display;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    ${responsive.lg`
    font-size: 0.9rem;
  
    `}
  }
  & .tl-timeline h1,
  .tl-timeline h2,
  .tl-timeline h3,
  .tl-timeline h4,
  .tl-timeline h5,
  .tl-timeline h6 {
    color: #144056;
    font-family: Red Hat Display;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.03563rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
    ${responsive.lg`
    font-size: 1.3rem;
  
    `}
  }

  & .tl-timeline p {
    color: #144056;
    text-align: justify;
    font-family: Red Hat Display;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    ${responsive.lg`
    font-size: 0.7rem;
  
    `}
  }
  & .tl-slide .tl-slide-content-container .tl-slide-content {
    display: flex;
    justify-content: center;
    gap: 3rem;

    ${responsive.xl`
    gap: 2rem;
  
    `}

    ${responsive.md`
flex-direction:column-reverse; 
    `}
    align-items: center;
  }
  & .tl-slide .tl-slide-content-container .tl-slide-content .tl-media {
    min-width: unset;
    max-width: unset;
    width: fit-content;
  }
  & .tl-slidenav-next .tl-slidenav-content-container .tl-slidenav-description {
    display: none;
  }

  &
    .tl-slidenav-previous
    .tl-slidenav-content-container
    .tl-slidenav-description {
    display: none;
  }
  & .tl-timeline b {
    color: #144056;
    font-family: Red Hat Display;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.02625rem;
    ${responsive.lg`
    font-size: 1.1rem;
  
    `}
  }
  & .tl-timeline a {
    text-decoration: none;
  }
  & .tl-timeline button {
    background-color: ${({ theme }) => theme.colors.blue[100]};
    border-radius: 6.5rem;
    padding: 0.7rem 1.3rem;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: ${({ theme }) => theme.colors.white[200]};
    cursor: pointer;
    width: fit-content !important;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
    ${responsive.lg`
    font-size: 0.6rem;
  
    `}
  }

  & .tl-slide .tl-slide-scrollable-container {
    width: 100%;
  }
  & .tl-slide .tl-slide-content-container .tl-slide-content {
    width: 100% !important;
    padding: 0rem 1rem !important;
  }

  & .tl-slide .tl-slide-content-container .tl-slide-content .tl-text {
    max-width: 100% !important;
    width: 100%;
    padding: 0rem 7rem 0rem 0rem;

    ${responsive.md`
    padding: 0rem 3rem;

        `}
  }
`;

export const ShowMore = styled.div`
  position: absolute;
  top: 378px;
  right: 300px;
  z-index: 8;
`;

export const PopupWrapper = styled.div`
  display: flex;
  min-height: 35rem;
  ${responsive.xs`
  flex-direction:column;
  align-items:center;
  padding-top:2rem;
  `}
`;
export const Wrapper = styled.div`
flex:3;


  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: ${({ theme }) => `url("/assets/popup.png") ;`}

  background-size: cover;
  padding: 4rem 10%;
  ${responsive.xs`
  padding: 2rem 10%;

  `}
  background-repeat: no-repeat;
  background-blend-mode: luminosity;

`;

export const ImagerWrapper = styled.div`
  position: relative;
  flex: 2;
  ${responsive.xs`
  
  display:none;
  `}
`;

export const ImagerWrapperResponsive = styled.div`
  display: none;

  ${responsive.xs`
  
  display:block;
  `}
`;
