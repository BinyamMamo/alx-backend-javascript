function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('The fake API is not working currently');
    }
  });
}

export default getFullResponseFromAPI;
