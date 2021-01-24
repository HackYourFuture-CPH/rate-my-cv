import { storage } from '../firebase/configure';

function FileUploader(cv) {
  cv.preventDefault();

  const uploadTask = storage.ref(`/CVs/${cv.name}`).put(cv);
  uploadTask.on(
    'state_changed',
    (snapShot) => {
      console.log(snapShot);
    },
    (err) => {
      console.log(err);
    },
    () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage
        .ref('CVs')
        .child(cv.name)
        .getDownloadURL()
        .then((cvUrl) => {
          return cvUrl;
        });
    },
  );
}

const fileUrl = await FileUploader();

export default fileUrl;
