function setup(){
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
      var person = data.results[0]
    // console.log(person.name.title);
   var fullName = person.name.title + " " + person.name.first +" " + person.name.last
   var state = person.location.state
   var image = person.picture.thumbnail
   console.log(image)
   console.log(state)
   console.log(fullName);
   $('body').append(`<h2><center> My name is ${fullName} and the state that I live in is ${state}. </center></h2>`)
   $('body').append(`<center><img src = "${image}"></center> `)
  }
});

// $('body').append(`<h2> ${fullName} </h2>`)
 //var userFirstName = $.getJSON()
}

$(document).ready(setup)