$(document).ready(function () {
    $("#sub").click(function () {
        
        $("#fName-error").text("")
        $("#lName-error").text("")
        $("#email-error").text("")
        $("#password-error").text("")
        $("#check-error").text("")

        var firstName = $("#first-name").val()
        var lastName = $("#last-name").val()
        var mail = $("#inputEmail").val()
        var password = $("#inputPassword").val()
        var checkBox = $("#checkBox").prop('checked');
       
        if (firstName == null || firstName == "") {
            $("#fName-error").text("Please enter your First Name")
            $("#fName-error").css("color", "red")
            return false
        }

        else if (lastName == null || lastName == "") {
            $("#lName-error").text("Please enter your Last Name")
            $("#lName-error").css("color", "red")
            return false
        }
        else if (mail == null || mail == "") {
            $("#email-error").text("Please enter your E-mail")
            $("#email-error").css("color", "red")
            return false
        }
        else if (password.length <= 8) {
            $("#password-error").text("Please enter your 8 Digit Password")
            $("#password-error").css("color", "red")
            return false
        }
        else if (checkBox == false) {
            $("#check-error").text("Please Check this box")
            $("#check-error").css("color", "red")
            return false
        }
        else {
            firstName.val("")
            lastName.val("")
            mail.val("")
            password.val("")
            checkBox.prop("false")

            return true
        }
    })
})