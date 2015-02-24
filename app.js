
var MiniPreview = {
  init: function() {
    MiniPreview.searchForm    = $('input[type=text]');
    MiniPreview.submitBtn     = $('#submitButton');
    MiniPreview.submitBtn.click(MiniPreview.search);
  },

  generateURL: function(){
    var key = 'czwq4ntdeuppgpz3r7ybwf7h';
    var baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=';
    var newUrl = baseUrl + key + '&q=' + MiniPreview.searchForm.val() + '&callback=?';
    return newUrl;
  },

  appendResults: function(response) {
    console.log('append result called');
    var newMovieList = '<div class="row">';
    $.each(response.movies, function(i){
      console.log(response.movies[i]);
      newMovieList += '<div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src="'+ response.movies[i].posters.detailed +'" /><br><p>'+ response.movies[i].title + '</p></div>'
    });
    newMovieList += '</div>';
    $('#imageHolder').append(newMovieList);
  },

  search: function () {
    var url = MiniPreview.generateURL();
    $.getJSON(url, function(response){
      console.log(response);
      MiniPreview.appendResults(response);
    }).fail(function(err) {
      console.log(err);
    });
  }

};

$(document).ready(MiniPreview.init);