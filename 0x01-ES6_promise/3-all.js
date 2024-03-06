import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let photo;
  let user;

  uploadPhoto().then((obj) => {
    photo = obj.body;
    return createUser();
  }).then((obj) => {
    user = obj;
  }).finally(() => console.log(photo, user.firstName, user.lastName));
}
