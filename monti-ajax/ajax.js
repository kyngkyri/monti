var YOUR_ID = "11ccfc61"
var YOUR_KEY = "32cd7941b91c78f9fb4f5ffb3eb6ebff"


var bigMacURL = "https://api.nutritionix.com/v1_1/search/Big%20Mac?results=0:5&fields=item_name,nf_calories&appId=" + YOUR_ID + "&appKey=" + YOUR_KEY;

$.ajax({
    url:bigMacURL,
    success:function(data){
       // console.log(data);
       var food = data.hits[0];
       var name = food.fields.item_name;
       var cals = food.fields.nf_calories;
       $("body").append("<h2> This " + name + " has " + cals + "kcal !!!</h2>");
    }
})
