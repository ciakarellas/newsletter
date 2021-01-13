$('#form').submit(function (event) {
    event.preventDefault();
    if ($('#form')[0].checkValidity() === false) {
        event.stopPropagation();
        console.log("nie")
    
    } else {
        console.log("jest")
        $('#newsletterForm').modal('hide')
    }
    $('#form').addClass('was-validated');
});