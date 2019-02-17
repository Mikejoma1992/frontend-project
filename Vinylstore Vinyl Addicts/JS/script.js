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
    
    var objArtist = [
                        {  
                            'name': 'Vader Abraham', 
                            'value': 4
                        },
                        {
                            'name': 'BZN',
                            'value': 4
                        },
                        {
                            'name': 'Kamahl',
                            'value': 4
                        },
                        {
                            'name': 'Heintje',
                            'value': 4
                        },
                        {
                            'name': 'Supertramp',
                            'value': 6
                        },
                        {
                            'name': 'Queen',
                            'value': 6
                        },
                        {
                            'name': 'Metallica',
                            'value': 6
                        },
                        {
                            'name': 'Lionel Richie',
                            'value': 6
                        }];
    var arrayFamousArtist = ['Supertramp', 'Queen', 'Metallica', 'Lionel Richie'];

    for( var i=0; i < arrayBadArtist.length; i++ )
    {
        var rarity = 0;
        
        if ( artist == arrayBadArtist[i])
        {
           rarity = 4;
        }
        else if (artist == arrayFamousArtist[i])
        {
            rarity = 6;
            
        }
        else
        {
            rarity = 5;
        }
        
       console.log(rarity);
        
    }   
    event.preventDefault();
});