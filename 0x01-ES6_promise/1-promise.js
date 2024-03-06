function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const obj = {
        status: 200,
        body: 'Success',
      };
      resolve(obj);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('The fake API is not working currently');
    }
  });
}

export default getFullResponseFromAPI;
