import React, {
  Component
} from 'react';
import Firebase from './Firebase';
import Card from './Card'
import firebase from 'firebase';
import firestore from 'firebase/storage';

const config = {
  apiKey: "AIzaSyD4SLzryCFnzAaSfCzsTReeNSyIwICYwPA",
  authDomain: "image-460d4.firebaseapp.com",
  databaseURL: "https://image-460d4.firebaseio.com",
  projectId: "image-460d4",
  storageBucket: "image-460d4.appspot.com",
  messagingSenderId: "967359454205",
  appId: "1:967359454205:web:63bbfa4c9b6c6c1d379794"
}

firebase.initializeApp(config);

        export class App extends Component {

          constructor(props) {
            super(props);
            this.state = {
              files: null
            }
          }

          stat = {
            curTime: new Date().toLocaleString(),
          }

          handleChange = (files) => {
            this.setState({
              files: files
            })
          }

          handleSave = () => {
            let bucketName = 'images';
            let file = this.state.files[0];
            let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
            let uploadTask = storageRef.put(file);
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
              () => {
                let downloadURL = uploadTask.snapshot.downloadURL;
              })
          }

          showImage = () => {
            let storageRef = firebase.storage().ref();
            let spaceRef = storageRef.child('images/' + this.state.files[0].name);
            storageRef.child('images/').getDownloadURL().then((url) => {
              //console.log(url);
              document.getElementById('new-img').src = url;
            })
          }

          componentDidMount() {
            let storage = firebase.storage();
            let storageRef = storage.ref();
            let imageList = [""];
            let listRef = storageRef.child('images/');
            listRef.getDownloadURL().then((url) =>{
              document.getElementById('new-img').src = url;
            })
            // listRef.listAll().then(function (res) {
            //       res.items.forEach(function (imageRef) {
            //           imageRef.getDownloadURL().then(function (url) {
            //               console.log(url);
            //               // imageList.push( < Card url = {
            //               //     url
            //               //   }
            //               //   />);
            //               // this.state.files.push(url);
            //               })
            //           })
            //       }) 
                  // imageList.push( < Card url = {
                  //   "https://firebasestorage.googleapis.com/v0/b/image-460d4.appspot.com/o/images%2F1.jpg?alt=media&token=53687e29-aa24-4a83-b1d0-e49f6765d2a7"
                  // }
                  // />);
          
                  // imageList.push( < Card url = {
                  //     "https://firebasestorage.googleapis.com/v0/b/image-460d4.appspot.com/o/images%2F2.jpg?alt=media&token=3efb99b2-5a6c-4fb6-958d-3a32d747c4bc"
                  //   }
                  //   />)
                  // console.log(imageList);
                  
                  }

                  simpleCall = () =>{
                    return(
                  <Card url= {"https://firebasestorage.googleapis.com/v0/b/image-460d4.appspot.com/o/images%2F1.jpg?alt=media&token=53687e29-aa24-4a83-b1d0-e49f6765d2a7"}/>)

                  }


          render() {
            return ( 
              <React.StrictMode> 
                  <div id = 'new-img'>
                    {this.componentDidMount()}
                  </div> 
              
              {
                /* <Card url="https://firebasestorage.googleapis.com/v0/b/image-460d4.appspot.com/o/images%2F1.jpg?alt=media&token=53687e29-aa24-4a83-b1d0-e49f6765d2a7"/> */ }
              </React.StrictMode>
            );
          }

        }

        export default App;