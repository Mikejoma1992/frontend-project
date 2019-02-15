function submition()
{
    var artist = $('#artist').val();
    var year = $('#year').val();
    var collect = $('#collectors').val();

    $('#result').html(artist, year);
}
$( "#checkRarity" ).submit(function( event ) {
    
      $( "h1" ).text( "yeet" ).show();
      event.preventDefault();
});
    