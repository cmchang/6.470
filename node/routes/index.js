/*
 * GET home page.
 */

// Use Firebase
var Firebase = require('firebase');

exports.index = function(req, res){
  // Connect to Firebase 
  var dataRef = new Firebase('https://6470.firebaseio.com');

  // Once dataRef retrieves a value...
  dataRef.once('value', function(snapshot) {
  
    i = snapshot.val().counter + 1;
    dataRef.child('counter').set(i);
    
    res.render('index', { 
      title: 'Express', 
      counter: snapshot.val().counter 
    });
  });
};