import photo1 from './photos/bear1.jpg';
import photo2 from './photos/bear2.jpg';
import photo3 from './photos/bear3.jpg';

var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: '', secretAccessKey: '', region: 'us-west-2', maxRetries: 0});
var s3 = new AWS.S3();

var allKeys = [];
var bucket = 'https://tyka-portfolio.s3-us-west-2.amazonaws.com/product/';

export function getPicNames(buck){
  // if (allKeys.length > 0){
  //   return;
  // }
  e.preventDefault();
  var params = { 
    Bucket: 'tyka-portfolio',
    Delimiter: '/',
    Prefix: 'product/' 
  }

  s3.listObjectsV2(params, function (err, data) {
    
    if (err) {
        console.log(err, err.stack); // an error occurred
    } else {
        for (var i = 1; i < data.Contents.length; i++){
          allKeys.push(data.Contents[i].Key);
        }
      console.log(allKeys);
    }
  });

  // var request = s3.listObjects(params);
  // request.on('build', function() { request.httpRequest.headers['Access-Control-Allow-Origin'] = '*'; });
  // request.send(function(err, data) {
  //   if (err) console.log(err, err.stack);
  //   else{
  //     for (var i = 1; i < data.Contents.length; i++){
  //       allKeys.push(data.Contents[i].Key);
  //     }
  //     console.log(allKeys);
  //   } 
  // });

}

const fileNames = ['bear1.jpg', 'bear2.jpg', 'bear3.jpg', 'bear4.jpg', 'bear5.jpg', 'bear6.jpg', 'bear7.jpg', 'bear8.jpg', 'bear9.jpg', 'bear10.jpg'];

const photos = [];
for (var i = 0; i < fileNames.length; i++){
  var item = {
    src: bucket + fileNames[i],
    height: 1600,
    width: 1067
  }
  photos.push(item);
}

export default photos;