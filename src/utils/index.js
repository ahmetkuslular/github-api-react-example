import { css } from 'styled-components';
export const screenSizes = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const searchParamsFormat = ({ searchKeyword, ...searchParams }) => {
  let formatedParams = '';
  if (searchKeyword) {
    formatedParams += `${searchKeyword}+`;
  }
  Object.keys(searchParams).map(
    key => (formatedParams = `${formatedParams}${key}:${searchParams[key]}+`),
  );
  formatedParams = formatedParams.slice(0, -1);

  return formatedParams;
};

export const media = Object.keys(screenSizes).reduce((accumulator, label) => {
  const emSize = screenSizes[label] / 14;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
