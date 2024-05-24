function isbnInTable(value){
    const rows = document.querySelectorAll("tbody tr");
    for (let row of rows){
        console.log(row.cells[1].textContent)
        if(row.cells[1].textContent === value){
            
            return true;
        }
    }
    return false;
}


const html5Qrcode = new Html5Qrcode("reader");
        html5Qrcode.start(
        { facingMode: "environment" },
        {
            fps:5,
            qrbox: {width: 210, height:100 }
        },
        (decodedText,decodedResult) =>{
            // when code is read
            console.log(decodedText, decodedResult);
            if(!isbnInTable(decodedText)){
            let element =  document.createElement('tr');
            let Buch = document.createElement("td")
            Buch.textContent= "ABCD";
            let ISBN =document.createElement("td")
            ISBN.textContent =decodedText;
            let Preis =document.createElement("td")
            Preis.textContent= "/";
            element.appendChild(Buch);
            element.appendChild(ISBN);
            element.appendChild(Preis);
            document.querySelector("tbody").appendChild(element);
            }
        },
        (errorMessage) => {
            // error
            console.log(errorMessage);
        })
        .catch((err) => {
            // start error
        })



  