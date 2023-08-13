import { css } from "@emotion/react";

export const breakpoints = {
  xxs: 420.98,
  xs: 575.98,
  sm: 767,
  md: 992,
  lg: 1200,
  xl: 1600,
};

export const responsive = {
  xxs: (...args: any) => css`
    @media (max-width: ${breakpoints.xxs}px) {
      ${css(...args)};
    }
  `,
  xs: (...args: any) => css`
    @media (max-width: ${breakpoints.xs}px) {
      ${css(...args)};
    }
  `,
  sm: (...args: any) => css`
    @media (max-width: ${breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  md: (...args: any) => css`
    @media (max-width: ${breakpoints.md}px) {
      ${css(...args)};
    }
  `,
  lg: (...args: any) => css`
    @media (max-width: ${breakpoints.lg}px) {
      ${css(...args)};
    }
  `,
  xl: (...args: any) => css`
    @media (max-width: ${breakpoints.xl}px) {
      ${css(...args)};
    }
  `,
  xxl: (...args: any) => css`
    @media (min-width: ${breakpoints.xl + 1}px) {
      ${css(...args)};
    }
  `,
};
