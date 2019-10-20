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
  Object.keys(searchParams).map(
    key => (formatedParams = `${formatedParams}${key}:${searchParams[key]}+`),
  );
  formatedParams = formatedParams.slice(0, -1);
  if (searchKeyword) {
    formatedParams += `+${searchKeyword}`;
  }
  return formatedParams;
};

export const media = Object.keys(screenSizes).reduce((accumulator, label) => {
  const emSize = screenSizes[label] / 14;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  /* eslint-enable no-param-reassign*/
  return accumulator;
}, {});
