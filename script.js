
/*  This method will trigger user permissions
Html5Qrcode.getCameras().then(devices => {
    console.log(devices);
    if (devices && devices.length) {
      let cameraId = devices[0].id;
      console.log(cameraId);
      
      // .. use this to start scanning.
        const html5Qrcode = new Html5Qrcode("reader");
        html5Qrcode.start(
        cameraId,
        {
            fps:5,
            qrbox: {width: 250, height:100 }
        },
        (decodedText,decodedResult) =>{
            // when code is read
            console.log(decodedText, decodedResult);
        },
        (errorMessage) => {
            // error
            console.log(errorMessage);
        })
        .catch((err) => {
            // start error
        })
    }
  }).catch(err => {
    console.log(err);
  });*/

const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);




  