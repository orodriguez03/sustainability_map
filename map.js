window.onload = function(){ 

    var mapCenter= new google.maps.LatLng(44.966646, -93.166183);
    var mapDiv = document.getElementsByClassName("map")[0];
    var mapOptions = {zoom: 15, center: mapCenter};
    var map= new google.maps.Map ( mapDiv , mapOptions);


    var compactors = new google.maps.LatLng(44.968261, -93.163582);
    var compactorsMarker = new google.maps.Marker({
       position: compactors,
       map: map
    });
    var compactorsinfowindow = new google.maps.InfoWindow({
      content: '<strong>Trash & Recycling Compactors</strong><br>Click for more info',
      map: map,
      position: compactors
   });
    compactorsinfowindow.close();

    var newellpark = new google.maps.LatLng(44.96738, -93.17592);
    var newellparkMarker = new google.maps.Marker({
       position: newellpark,
       map: map
    });
    var newellparkinfowindow = new google.maps.InfoWindow({
      content: '<strong>Newell Park</strong><br>Click for more info',
      map: map,
      position: newellpark
   });
   newellparkinfowindow.close();
      
    var cgee = new google.maps.LatLng(44.967060, -93.166126);
    var cgeeMarker = new google.maps.Marker({
       position: cgee,
       map: map
    });
    var cgeeinfowindow = new google.maps.InfoWindow({
      content: '<strong>Center for Global Environmental Education</strong><br>Click for more info',
      map: map,
      position: cgee
   });
    cgeeinfowindow.close();
    
    var landscaping = new google.maps.LatLng(44.965679, -93.164699);
    var landscapingMarker = new google.maps.Marker({
       position: landscaping,
       map: map
    });
    var landscapinginfowindow = new google.maps.InfoWindow({
      content: '<strong>Landscaping</strong><br>Click for more info',
      map: map,
      position: landscaping
   });
    landscapinginfowindow.close();
    
    var dsci = new google.maps.LatLng(44.965442, -93.165444);
    var dsciMarker = new google.maps.Marker({
       position: dsci,
       map: map
    });
    var dsciinfowindow = new google.maps.InfoWindow({
      content: '<strong>Sustainability Office & Environmental Studies Program</strong><br>Click for more info',
      map: map,
      position: dsci
    });
    dsciinfowindow.close();
    
    var steam = new google.maps.LatLng(44.965305, -93.164726);
    var steamMarker = new google.maps.Marker({
       position: steam,
       map: map
    });
    var steaminfowindow = new google.maps.InfoWindow({
      content: '<strong>Steam Plant</strong><br>Click for more info',
      map: map,
      position: steam
   });
    steaminfowindow.close();
    
    var andc = new google.maps.LatLng(44.964661, -93.166545);
    var andcMarker = new google.maps.Marker({
       position: andc,
       map: map
    });
    var andcinfowindow = new google.maps.InfoWindow({
      content: '<strong>Anderson Center</strong><br>Click for more info',
      map: map,
      position: andc
   });
    andcinfowindow.close();
    
    var bikes = new google.maps.LatLng(44.964169, -93.165839);
    var bikesMarker = new google.maps.Marker({
       position: bikes,
       map: map
    });
    var bikesinfowindow = new google.maps.InfoWindow({
      content: '<strong>Biking on Campus</strong><br>Click for more info',
      map: map,
      position: bikes
   });
    bikesinfowindow.close();
    
    var church = new google.maps.LatLng(44.963672, -93.164649);
    var churchMarker = new google.maps.Marker({
       position: church,
       map: map,
    });
    var churchinfowindow = new google.maps.InfoWindow({
      content: '<strong>Hamline Church & Sprout Garden</strong><br>Click for more info',
      map: map,
      position: church
   });
    churchinfowindow.close();
    
    var library = new google.maps.LatLng(44.966242, -93.164437);
    var libraryMarker = new google.maps.Marker({
       position: library,
       map: map,
    });
    var libraryinfowindow = new google.maps.InfoWindow({
      content: '<strong>Bush Memorial Library</strong><br>Click for more info',
      map: map,
      position: library
   });
    libraryinfowindow.close();
    
    var garden = new google.maps.LatLng(44.966109, -93.163096);
    var gardenMarker = new google.maps.Marker({
       position: garden,
       map: map,
    });
    var gardeninfowindow = new google.maps.InfoWindow({
      content: '<strong>Hamline Garden & Learning Lawn</strong><br>Click for more info',
      map: map,
      position: garden
   });
    gardeninfowindow.close();

    var outdoorclassroom = new google.maps.LatLng(44.969076, -93.168443);
    var outdoorclassroomMarker = new google.maps.Marker({
       position: outdoorclassroom,
       map: map,
    });
    var outdoorclassroominfowindow = new google.maps.InfoWindow({
      content: '<strong>Pierce Butler Stormwater Prairie Restoration</strong><br>Click for more info',
      map: map,
      position: outdoorclassroom
   });
    outdoorclassroominfowindow.close();

//
    var foodresourcecenter = new google.maps.LatLng(44.96554, -93.16402);
    var foodresourcecenterMarker = new google.maps.Marker({
       position: foodresourcecenter,
       map: map,
    });
    var foodresourcecenterinfowindow = new google.maps.InfoWindow({
      content: '<strong>Food Resource Center</strong><br>Click for more info',
      map: map,
      position: foodresourcecenter
   });
   foodresourcecenterinfowindow.close();
//
    var hortonpark = new google.maps.LatLng(44.96359, -93.15787);
    var hortonparkMarker = new google.maps.Marker({
       position: hortonpark,
       map: map,
    });
    var hortonparkinfowindow = new google.maps.InfoWindow({
      content: '<strong>Horton Park</strong><br>Click for more info',
      map: map,
      position: hortonpark
   });
   hortonparkinfowindow.close();

   var griggspark = new google.maps.LatLng(44.96535, -93.15057);
    var griggsparkMarker = new google.maps.Marker({
       position: griggspark,
       map: map,
    });
    var griggsparkinfowindow = new google.maps.InfoWindow({
      content: '<strong>Griggs Park</strong><br>Click for more info',
      map: map,
      position: griggspark
   });
   griggsparkinfowindow.close();


//hover labels

compactorsMarker.addListener('mouseover', function() {
compactorsinfowindow.open(map, this);
});

compactorsMarker.addListener('mouseout', function() {
compactorsinfowindow.close();
});

newellparkMarker.addListener('mouseover', function() {
newellparkinfowindow.open(map, this);
});

newellparkMarker.addListener('mouseout', function() {
newellparkinfowindow.close();
});

cgeeMarker.addListener('mouseover', function() {
cgeeinfowindow.open(map, this);
});

cgeeMarker.addListener('mouseout', function() {
cgeeinfowindow.close();
});

landscapingMarker.addListener('mouseover', function() {
landscapinginfowindow.open(map, this);
});

landscapingMarker.addListener('mouseout', function() {
landscapinginfowindow.close();
});

dsciMarker.addListener('mouseover', function() {
dsciinfowindow.open(map, this);
});

dsciMarker.addListener('mouseout', function() {
dsciinfowindow.close();
});

steamMarker.addListener('mouseover', function() {
steaminfowindow.open(map, this);
});

steamMarker.addListener('mouseout', function() {
steaminfowindow.close();
});

andcMarker.addListener('mouseover', function() {
andcinfowindow.open(map, this);
});

andcMarker.addListener('mouseout', function() {
andcinfowindow.close();
});

bikesMarker.addListener('mouseover', function() {
bikesinfowindow.open(map, this);
});

bikesMarker.addListener('mouseout', function() {
bikesinfowindow.close();
});

churchMarker.addListener('mouseover', function() {
churchinfowindow.open(map, this);
});

churchMarker.addListener('mouseout', function() {
churchinfowindow.close();
});

libraryMarker.addListener('mouseover', function() {
libraryinfowindow.open(map, this);
});

libraryMarker.addListener('mouseout', function() {
libraryinfowindow.close();
});

gardenMarker.addListener('mouseover', function() {
gardeninfowindow.open(map, this);
});

gardenMarker.addListener('mouseout', function() {
gardeninfowindow.close();
});

outdoorclassroomMarker.addListener('mouseover', function() {
outdoorclassroominfowindow.open(map, this);
});

outdoorclassroomMarker.addListener('mouseout', function() {
outdoorclassroominfowindow.close();
});
//
foodresourcecenterMarker.addListener('mouseover', function() {
foodresourcecenterinfowindow.open(map, this);
});
    
foodresourcecenterMarker.addListener('mouseout', function() {
foodresourcecenterinfowindow.close();
});
//
hortonparkMarker.addListener('mouseover', function() {
hortonparkinfowindow.open(map, this);
});

hortonparkMarker.addListener('mouseout', function() {
hortonparkinfowindow.close();
});

griggsparkMarker.addListener('mouseover', function() {
griggsparkinfowindow.open(map, this);
});

griggsparkMarker.addListener('mouseout', function() {
griggsparkinfowindow.close();
});


    
$(".flyoverbutton").css("backgroundColor", "#95021e");
$(".aboutbutton").css("backgroundColor", "#95021e");
    
    compactorsMarker.setVisible(true);
    newellparkMarker.setVisible(true);
    cgeeMarker.setVisible(true);
    landscapingMarker.setVisible(true);
    dsciMarker.setVisible(true);
    steamMarker.setVisible(true);
    andcMarker.setVisible(true);
    bikesMarker.setVisible(true);
    churchMarker.setVisible(true);
    libraryMarker.setVisible(true);
    gardenMarker.setVisible(true);
    outdoorclassroomMarker.setVisible(true);
    foodresourcecenterMarker.setVisible(true);//
    hortonparkMarker.setVisible(true);
    griggsparkMarker.setVisible(true);


$(".aboutbutton").click(function(){

    var modal = document.getElementById("about-modal");
    modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        
        });
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
                
            }
        }
});
    
    $(".flyoverbutton").click(function(){

    var modal = document.getElementById("flyover-modal");
    modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";

        });
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
                
            }
        }
    
    
}); 


    compactorsMarker.addListener("click", function() {
        var modal = document.getElementById("compactors-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });

    newellparkMarker.addListener("click", function() {
        var modal = document.getElementById("newellpark-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    cgeeMarker.addListener("click", function() {
        var modal = document.getElementById("cgee-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    landscapingMarker.addListener("click", function() {
        var modal = document.getElementById("landscaping-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    dsciMarker.addListener("click", function() {
        var modal = document.getElementById("dsci-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    steamMarker.addListener("click", function() {
        var modal = document.getElementById("steam-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    andcMarker.addListener("click", function() {
        var modal = document.getElementById("andc-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    bikesMarker.addListener("click", function() {
        var modal = document.getElementById("bikes-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    churchMarker.addListener("click", function() {
        var modal = document.getElementById("church-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    libraryMarker.addListener("click", function() {
        var modal = document.getElementById("library-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
    
    gardenMarker.addListener("click", function() {
        var modal = document.getElementById("garden-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });


    outdoorclassroomMarker.addListener("click", function() {
        var modal = document.getElementById("outdoorclassroom-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
//
    foodresourcecenterMarker.addListener("click", function() {
        var modal = document.getElementById("foodresourcecenter-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });
//
    hortonparkMarker.addListener("click", function() {
        var modal = document.getElementById("hortonpark-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });

    griggsparkMarker.addListener("click", function() {
        var modal = document.getElementById("griggspark-modal");
        
        modal.style.display = "block";
        $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    });

$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true
});

var collapse = "off";

$("#collapse-button").click(function(){
    $("#button-wrapper").toggleClass("collapsed");
    
    if (collapse == "off") {
        $("#collapse-button").html("&rsaquo;");
        collapse = "on";
        
    } 
    else {
        $("#collapse-button").html("&lsaquo;");
        collapse = "off";
    }
    
});


//    Next and previous arrows through modals

$("#next1").click(function(){
    document.getElementById("andc-modal").style.display = "none";
    var modal = document.getElementById("bikes-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next2").click(function(){
    document.getElementById("bikes-modal").style.display = "none";
    var modal = document.getElementById("church-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next3").click(function(){
    document.getElementById("church-modal").style.display = "none";
    var modal = document.getElementById("steam-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next4").click(function(){
    document.getElementById("steam-modal").style.display = "none";
    var modal = document.getElementById("foodresourcecenter-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next5").click(function(){
    document.getElementById("foodresourcecenter-modal").style.display = "none";
    var modal = document.getElementById("garden-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next6").click(function(){
    document.getElementById("garden-modal").style.display = "none";
    var modal = document.getElementById("library-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next7").click(function(){
    document.getElementById("library-modal").style.display = "none";
    var modal = document.getElementById("landscaping-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next8").click(function(){
    document.getElementById("landscaping-modal").style.display = "none";
    var modal = document.getElementById("dsci-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next9").click(function(){
    document.getElementById("dsci-modal").style.display = "none";
    var modal = document.getElementById("cgee-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next10").click(function(){
    document.getElementById("cgee-modal").style.display = "none";
    var modal = document.getElementById("compactors-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});


$("#next11").click(function(){
    document.getElementById("compactors-modal").style.display = "none";
    var modal = document.getElementById("outdoorclassroom-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#next12").click(function(){
    document.getElementById("outdoorclassroom-modal").style.display = "none";
    var modal = document.getElementById("andc-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev12").click(function(){
    document.getElementById("outdoorclassroom-modal").style.display = "none";
    var modal = document.getElementById("compactors-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev11").click(function(){
    document.getElementById("compactors-modal").style.display = "none";
    var modal = document.getElementById("cgee-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev10").click(function(){
    document.getElementById("cgee-modal").style.display = "none";
    var modal = document.getElementById("dsci-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev9").click(function(){
    document.getElementById("dsci-modal").style.display = "none";
    var modal = document.getElementById("landscaping-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev8").click(function(){
    document.getElementById("landscaping-modal").style.display = "none";
    var modal = document.getElementById("library-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev7").click(function(){
    document.getElementById("library-modal").style.display = "none";
    var modal = document.getElementById("garden-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev6").click(function(){
    document.getElementById("garden-modal").style.display = "none";
    var modal = document.getElementById("foodresourcecenter-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev5").click(function(){
    document.getElementById("foodresourcecenter-modal").style.display = "none";
    var modal = document.getElementById("steam-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev4").click(function(){
    document.getElementById("steam-modal").style.display = "none";
    var modal = document.getElementById("church-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});  

$("#prev3").click(function(){
    document.getElementById("church-modal").style.display = "none";
    var modal = document.getElementById("bikes-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev2").click(function(){
    document.getElementById("bikes-modal").style.display = "none";
    var modal = document.getElementById("andc-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

$("#prev1").click(function(){
    document.getElementById("andc-modal").style.display = "none";
    var modal = document.getElementById("outdoorclassroom-modal");
    modal.style.display = "block";
    $(".close").click(function(){
            modal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
});

}