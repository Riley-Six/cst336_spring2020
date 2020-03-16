let retrieveBookInfo = function(){
    //var url = "https://dog.ceo/api/breeds/image/random/" + $("#isbn").val();
    var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#isbn").val() + "&format=json&jscmd=data";
    $.ajax({
        url: url,
		type: "GET",
		dataType: "json",
		success: function(result, status){

			$("#cover").html("<img src="+result["ISBN:"+$('#number-books').val()].cover.large+">");
			$("#titleResult").html("Title: " + result["ISBN:"+$('#isbn').val()].title);
			$("authorResult").html("Author: " + result["ISBN:"+$('#isbn').val()].authors.name);
			$("publishYearResult").html("Publish Year: " + result["ISBN:"+$('#isbn').val()].publish_date);
			$("publisherResult").html("Publisher: " + result["ISBN:"+$('#isbn').val()].publishers);
			$("isbnResult").html("ISBN: " + $("#isbn").val());
			$("pagesResult").html("Pages: " + result["ISBN:"+$('#isbn').val()].number_of_pages);

		},
		error: function(err){
			console.log(err);
		}

    });
}