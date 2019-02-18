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
    var checkBoxs = $('#collectors');
  
    
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
                        }];
    var arrayFamousArtist = ['Supertramp', 'Queen', 'Metallica', 'Lionel Richie'];
    var artistValue = 5;
    var yearCalculate = (thisYear - year) * 0.1;
    
    $(document).ready(function () {
        var ckbox = $('#checkbox');
        var checkedValue = '';
        var x = $('#collectors').checked;
           
            objArtist.forEach(function(item){
                if(item.name != artist)
                {
                    var notKnownRarity = artistValue + yearCalculate;
                    $('#result').text(notKnownRarity).show();
                }
                else
                {
                    objArtist.forEach(function(item){
                        if(item.name === artist){
                            
                            if(item.name === artist)
                            {
                                artistValue = item.value;
                            }
                        
                            var rarity = artistValue + yearCalculate;
                            $('#result').text(artistValue).show();
                        }
                    });
                }
             });
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