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
    if (artist == 'test')
    {
        $("#result").text("goed").show();
    }
    else
    {
        $("#result").text("Jammer").show();
    }
    event.preventDefault();
});