import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Uploaded from './components/Uploaded';
import Uploading from './components/Uploading';
import storage from './firebase_config';


function App() {
  // 0 - not uploaded 1 - inProgress 2 - upLoaded
  const [status, setStatus] = useState(0);
  const [downloadUrl, setdownloadUrl] = useState(null)
  let uploadImage = (event) => {
    setStatus(1);
    const image = event.target.files[0];
    let imgStr = image.name;
    if (!['.jpeg', '.jpg', '.png'].some((imgExt) => imgStr.endsWith(imgExt))) {
      // validate image
      alert('file extension should be .jpeg, .jpg and .png');
      event.target.value = null;
      setStatus(0);
      return false;
    }


    // Create a storage reference from our storage service
    const storageRef = ref(storage, '/images/' + nanoid());
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        setStatus(2);
        console.log('Uploaded a blob or file!');
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setdownloadUrl(downloadURL);
        });
      });

  }

  let uploadDraggedImg = (image) => {
    setStatus(1);
    // Create a storage reference from our storage service
    const storageRef = ref(storage, '/images/' + nanoid());
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        setStatus(2);
        console.log('Uploaded a blob or file!');
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setdownloadUrl(downloadURL);
        });
      });
  }
  if (status === 0)
    return (
      <div className="h-screen flex justify-center items-center">
        <Upload uploadImage={uploadImage} uploadDraggedImg={uploadDraggedImg} />
        <Footer />
      </div>
    );
  else if (status === 1)
    return (
      <div className="h-screen flex justify-center items-center">
        <Uploading />
        <Footer />
      </div>
    )
  else
    return (
      <div className="h-screen flex justify-center items-center">
        <Uploaded downloadUrl={downloadUrl} />
        <Footer />
      </div>
    )
}

export default App;
