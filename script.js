alert("aaa")

// This method will trigger user permissions
Html5Qrcode.getCameras().then(devices => {
    console.log(devices);
    /**
     * devices would be an array of objects of type:
     * { id: "id", label: "label" }
     */
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
  });




  