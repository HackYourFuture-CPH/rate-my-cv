import { storage } from './../firebase/configure';

export function FileUploader(cv) {
  cv.preventDefault();

  const uploadTask = storage.ref(`/CVs/${cv.name}`).put(cv);
  //initiates the firebase side uploading
  uploadTask.on(
    'state_changed',
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot);
    },
    (err) => {
      //catches the errors
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
