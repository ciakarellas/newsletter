$('#form').submit(function (event) {
    event.preventDefault();
    if ($('#form')[0].checkValidity() === false) {
        event.stopPropagation();
        console.log("nie")
    
    } else {
        var userEmail = document.getElementById('inputEmail').value;
        var userName = document.getElementById('inputName').value;

        var request = {
            "url": "https://api.mailerlite.com/api/v2/subscribers",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
              "X-MailerLite-ApiKey": "e1948ef8407a0e01ee89bb758753135b",
              "Cookie": "__cfduid=d7243adbed2c3fae1d7ef42b0c926bcee1609412932"
            },
            "data": JSON.stringify({"email": userEmail,"name": userName}),
          };
          
         /* $.ajax(request).done(function (response) {
            console.log(response);
          });*/
        console.log(request)
        clearInputs('inputEmail', 'inputName');
        
        
        $('#newsletterForm').modal('hide')
        
    }
    $('#form').addClass('was-validated');
});

function clearInputs(firstInpuId, secondInputId){
    document.getElementById(firstInpuId).value=null;
    document.getElementById(secondInputId).value='';

}