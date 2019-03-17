$("#checkRarity").submit(function(event)
{
    // variables
    var artist = $('#artist').val();
    var thisYear = new Date().getFullYear();
    var year = $('#year').val();
    var checked = document.getElementById("collectors").checked;
    var artistValue = 5;
    var yearCalculate = (thisYear - year) * 0.1;
    var rarity = 0;
    // object
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
    // when submit use this function
    $(document).ready(function () {
        var checkboxValue = 0;
        // if checkbox is checked give value
        if (checked == true)
        {
            checkboxValue = 5;
        }
        // loop tru object
        objArtist.forEach(function(item){
            // if object doesnt have input do this value
            if(item.name != artist)
            {
                // calculate
                rarity = artistValue * yearCalculate + checkboxValue;
            }
        });
        
        objArtist.forEach(function(item){
            // if name is known 
            if(item.name === artist){
                // give value
                if(item.name === artist)
                {
                    artistValue = item.value;
                }
                // calculate
                rarity = artistValue * yearCalculate + checkboxValue;
                
            }
        });
        // check value
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
    }); 
    event.preventDefault();
});
