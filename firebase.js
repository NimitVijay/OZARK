// // import firebase from 'firebase';
// var firebase = require('firebase');
// const config = {
//     apiKey: "AIzaSyD4SLzryCFnzAaSfCzsTReeNSyIwICYwPA",
//     authDomain: "image-460d4.firebaseapp.com",
//     databaseURL: "https://image-460d4.firebaseio.com",
//     projectId: "image-460d4",
//     storageBucket: "image-460d4.appspot.com",
//     messagingSenderId: "967359454205",
//     appId: "1:967359454205:web:63bbfa4c9b6c6c1d379794"
// }

// var storage = firebase.storage();
// var storageRef = storage.ref();
// console.log("Hello");

// //$('List').find('tbody').html('');
// // //var i = 0;
// storageRef.child('images/').listAll().then(function(result){
//     result.items.forEach(function(imageRef){
//         console.log("Image Ref" + imageRef.toString());
//     })
// });

// // Create a reference under which you want to list
// //var listRef = storageRef.child('images/');

// // Find all the prefixes and items.
// // listRef.listAll().then(function(res) {
// //     res.items.forEach(function(imageRef) {
// //     // All the prefixes under listRef.
// //     // You may call listAll() recursively on them.
// //     });
// //   res.items.forEach(function(itemRef) {
// //     // All the items under listRef.
// //     console.log(itemRef.toString());
// //   });
// // }).catch(function(error) {
// //   // Uh-oh, an error occurred!
// // });

// firebase.initializeApp(config);
// //export default firebase;