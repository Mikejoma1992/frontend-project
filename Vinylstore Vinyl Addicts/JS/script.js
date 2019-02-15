function submition()
{
    var artist = $('#artist').val();
    var year = $('#year').val();
    var collect = $('#collectors').val();

    $('#result').html(artist, year);
}

$("#checkRarity").submit(function(event)
{
    var artist = $('#artist').val();
    var year = $('#year').val();
    var collect = $('#collectors').val();
    var arrayBadArtist = ['Vader Abraham', 'BZN', 'Kamahl', 'Heintje']
    
    for( var i=0; i < arrayBadArtist.length; i++ )
    {
        
        var badArtist = arrayBadArtist[i];
        if ( artist == arrayBadArtist[i])
        {
            $("#result").text("goed").show();
            break;
        }
        else
        {
            
            $("#result").text("jammer").show();
        }
        
    }   
    event.preventDefault();
});