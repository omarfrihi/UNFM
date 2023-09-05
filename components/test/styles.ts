import styled from "@emotion/styled";

export const HistoryWrapper = styled.div`
  & .tl-slide {
    background: linear-gradient(180deg, #f2f2f2 0%, rgba(255, 255, 255, 0) 100%),
      #fff;
  }
  & .tl-media .tl-media-content-container .tl-media-content img {
    height: 370px;
    max-width: 500px;
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
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }
  & .tl-timeline h1,
  .tl-timeline h2,
  .tl-timeline h3,
  .tl-timeline h4,
  .tl-timeline h5,
  .tl-timeline h6 {
    color: #144056;
    font-family: Red Hat Display;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.03563rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  & .tl-timeline p {
    color: #144056;
    text-align: justify;
    font-family: Red Hat Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & .tl-slide .tl-slide-content-container .tl-slide-content {
    display: flex;
    justify-content: center;
    gap: 5rem;
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
`;
