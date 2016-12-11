$('#confirm_password').on('keyup', function () {
    if ($(this).val() == $('#password').val()) {
        $('#message').html('Passwords match').css('color', 'green');
        $("#regButton").removeAttr("disabled");
        ("#regButton").prop("disabled", false);
    } else $('#message').html('Passwords do not match').css('color', 'red');
        $("#regButton").prop("disabled", true);
});