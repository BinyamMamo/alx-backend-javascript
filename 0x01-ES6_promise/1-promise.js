function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
