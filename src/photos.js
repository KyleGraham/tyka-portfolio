var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: process.env.REACT_APP_ACCESSKEY, secretAccessKey: process.env.REACT_APP_SECRETKEY, region: 'us-west-2', maxRetries: 0});
var s3 = new AWS.S3();

var allKeys = [];
var photos = [];
var bucket = 'https://tyka-portfolio.s3-us-west-2.amazonaws.com/';

export async function getPicNames(){
  var a = getNames();
  return a;
}

function getMeta(url){   
  var img = new Image();
  var item = {
    src: url,
    height: 0,
    width: 0
  };
  img.onload = function(){
      item.height = this.height;
      item.width = this.width;
  };
  img.src = url;
  return item;
}

function listObjectsCallback(err, data){
  if (err) {
    console.log(err, err.stack); // an error occurred
  } else {
    for (var i = 1; i < data.Contents.length; i++){
      allKeys.push(data.Contents[i].Key);
    }
    for (var j = 0; j < allKeys.length; j++){
      var item = getMeta(bucket + allKeys[j]);
      photos.push(item);
    }
}
}


export function getNames(){
  var params = { 
    Bucket: 'tyka-portfolio',
    Delimiter: '/',
    Prefix: 'product/' 
  }
  var a = s3.listObjectsV2(params, listObjectsCallback); 
  console.log(a, 'a');
  //function (err, data) {
  //   if (err) {
  //       console.log(err, err.stack); // an error occurred
  //   }
  //   else {
  //     for (var i = 1; i < data.Contents.length; i++){
  //         allKeys.push(data.Contents[i].Key);
  //     }
  //     for (var i = 0; i < allKeys.length; i++){
  //       var item = getMeta(bucket + allKeys[i]);
  //       photos.push(item);
  //     }
  //   }
  // });
  return photos;
}
