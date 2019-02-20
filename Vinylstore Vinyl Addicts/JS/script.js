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
    var thisYear = new Date().getFullYear();
    var year = $('#year').val();
    var checked = document.getElementById("collectors").checked;

    var objArtist = [
                        {  
                            name: 'Vader Abraham', 
                            value: 4
                        },
                        {
                            name: 'BZN',
                            value: 4
                        },
                        {
                            name: 'Kamahl',
                            value: 4
                        },
                        {
                            name: 'Heintje',
                            value: 4
                        },
                        {
                            name: 'Supertramp',
                            value: 6
                        },
                        {
                            name: 'Queen',
                            value: 6
                        },
                        {
                            name: 'Metallica',
                            value: 6
                        },
                        {
                            name: 'Lionel Richie',
                            value: 6
                        },
                        {
                            name: 'The Beatles',
                            value: 7
                        },
                        {
                            name: 'Rolling Stones',
                            value: 7
                        },
                        {
                            name: 'Madonna',
                            value: 7
                        },
                    ];
    var artistValue = 5;
    var yearCalculate = (thisYear - year) * 0.1;
    var rarity = 0;
    $(document).ready(function () {
        var checkboxValue = 0;
        if (checked == true)
        {
            checkboxValue = 5;
        }
        
           
        objArtist.forEach(function(item){
            if(item.name != artist)
            {
                rarity = artistValue * yearCalculate + checkboxValue;
                
                
            }
        });
                
        objArtist.forEach(function(item){
            if(item.name === artist){
                
                if(item.name === artist)
                {
                    artistValue = item.value;
                }
            
                rarity = artistValue * yearCalculate + checkboxValue;
                
            }
        });

       if(rarity <= 10)
       {   
            $('#result').text('Geen waarde').show();
       }
       else if(rarity > 10, rarity <= 25)
       {
            $('#result').text('Gewoon').show();
       }
       else if (rarity > 25, rarity <= 35)
       {
            $('#result').text('Zeldzaam').show();
       }
       else if (rarity > 35)
       {
            $('#result').text('Zeer zeldzaam').show();
       }
             console.log(rarity);
    });
    
    
    //$('#result').text(yearCalculate).show();
    
    /*for( var i=0; i < objArtist.length; i++ )
    {
       
        
        if ( objArtist.name === artist)
        {
            console.log(objArtist.value);
            
        }
        else if (artist == objArtist[i])
        {
            
            
        }
        else
        {
            
            
        }
        $('#result').text(objArtist).show();
       console.log(objArtist);
        
    }  */ 
    event.preventDefault();
});