



function setup(){
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
        var person = data.results[0]
        var fullName = person.name.title + " " + person.name.first +" " + person.name.last
        var state = person.location.state
        var image = person.picture.large      
        var country = data.name


        $('body').append(`<h2><center> My name is ${fullName} and the state that I live in is ${state}. </center></h2>`)
        $('body').append(`<center><img src = "${image}"></center> `)
        // $('body').append(`The country that I live in is ${country}`)
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/alpha?codes=' + data.results[0].nat,
            dataType:'json',
        })
        // var country = data.name
        // $('body').append(`The country that I live in is ${country}`)
  }
})

    
 
}

$(document).ready(setup)

