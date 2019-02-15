function submition()
{
    var artist = $('#artist').val();
    var year = $('#year').val();
    var collect = $('#collectors').val();

    $('#result').html(artist, year);
}

$("#send").submit(submition());