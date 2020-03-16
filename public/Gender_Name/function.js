$("#genderLookup").submit(function(e) {
    e.preventDefault();
    let input = $("#searchedName").val();
    $.ajax({
        method: "GET",
        url: "https://www.behindthename.com/api/lookup.json",
        dataType: "json",
        data: {
            "key": "ri667485443",
            "name": input
        },
        success: function(result) {
            if (result[0].gender == "m") {
                $("#genderResult").html("Male");
                $("#genderResult").css("background", "aqua");
                $("#genderImage").html( "<img src= images/male.png >" )
            }
            else if (result[0].gender == "f") {
                $("#genderResult").html("Female");
                $("#genderResult").css("background", "HotPink");
                $("#genderImage").html( "<img src= images/female.png >" )
            }
            else {
                $("#genderResult").html("Genderless");
                $("#genderResult").css("background", "grey");
                $("#genderImage").html( "<img src= images/nuetral.png >" )
            }
        }
    });
})