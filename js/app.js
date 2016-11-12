$(document).ready(function() {

 $('form').submit(function (event) {
    event.preventDefault();

    var searchText = $('#search').val();

   $('#search').prop("disabled", true);
   $('#submit').attr("disabled", true).val("searching...");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = searchText;
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $('#search').prop("disabled", false);
      $('submit').attr("disabled", false).val("search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  });


});
