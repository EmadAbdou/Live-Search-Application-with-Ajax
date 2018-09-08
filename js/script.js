$('#search').keyup(function (e) {
    var searchField = $('#search').val();
    //console.log(searchField);
    var Exp = new RegExp(searchField , "i");
    $.getJSON('data.json',
        function (data) {
            //console.log(data);
            var output = '<ul class="searchresult col-lg-10 col-md-7 col-sm-12">';
            $.each(data, function (key, val) {
                if(val.name.search(Exp) != -1 || val.bio.search(Exp) != -1){
                    output += '<li>';
                    output += '<h3>' + val.name +'</h3>';
                    output += '<img src="images/' + val.shortname + '_tn.jpg " + alt = " ' + val.name + '" />';
                    output += '<p>' + val.bio + '</p>';
                    output += '</li>';
                }
            });
            output += '</ul';
            $('.update').html(output);
        }
    );
});