export const searchParamsFormat = searchParams => {
  let formatedParams = '';
  Object.keys(searchParams).map(
    key => (formatedParams = `${formatedParams}${key}:${searchParams[key]}+`),
  );
  formatedParams = formatedParams.slice(0, -1);
  return formatedParams;
};
