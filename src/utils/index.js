export const queryFormat = queryObject => {
  let formatedParams = '';

  if (queryObject) {
    Object.keys(queryObject).map(key => {
      if (key === 'searchKeyword') {
        if (queryObject.searchKeyword !== '') {
          formatedParams += `${queryObject[key]}+`;
        }
        return formatedParams;
      }
      return (formatedParams = `${formatedParams}${key}:${queryObject[key]}+`);
    });
    formatedParams = formatedParams.slice(0, -1);
  }

  return formatedParams;
};


