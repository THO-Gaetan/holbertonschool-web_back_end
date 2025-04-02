import signeUpUser from './5-photo-reject';
import uploadPhoto from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    uploadPhoto(fileName),
    signeUpUser(firstName, lastName),
  ])
    .then((values) => {
      const photo = values[0];
      const user = values[1];
      console.log(`${user.firstName} ${user.lastName} ${photo.body}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
