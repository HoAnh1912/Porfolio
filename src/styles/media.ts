export const breakpoints = {
  xxs: 576,
  xs: 767,
  md: 991,
  lg: 1024,
};

export const size = {
  xxs: `${breakpoints.xxs}px`,
  xs: `${breakpoints.xs}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
};

export const device = {
  smallMobile: `@media (max-width: ${breakpoints.xxs}px)`,
  mobile: `@media (max-width: ${breakpoints.xs}px)`,
  tablet: `@media (min-width: ${breakpoints.xs + 1}px) and (max-width: ${
    breakpoints.md + 1
  }px)`,
  desktop: `@media (min-width: ${breakpoints.md + 1}px)`,
  noMobile: `@media (min-width: ${breakpoints.xs + 1}px)`,
  noDesktop: `@media (max-width: ${breakpoints.md}px)`,
};
