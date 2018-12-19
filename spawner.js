function spawnCall() {
document.getElementById("headercontent").innerHTML = 

"<div class='menuholder xs-visible'>" +

"<div class='menu' id='menubars'>" +

"<div class='linebar'></div>" +
"<div class='linebar'></div>" +
"<div class='linebar'></div>" +

"</div>" +

"</div>";


document.getElementById("menutoggle").innerHTML = 


"<div class='companyname'>MEDCARE<br><div>Wellcare Centre</div></div>" +


"<ul>" +

"<li>" +
"<a id='index' href='index.html'>Home</a>" +
"</li>" +

"<li>" +
"<a  id='about' href='about-us.html'>About-us</a>" +
"</li>" +

"<li class='dropdown'>" +
"<div id='toggle' class='xs-visible' style='float:right;'><img id='arrowtoggle' class='arrowimg1' src='img/arrow.png'></div>" +
"<a id='event' href='services.html'>Services</a>" +
"<div id='togglee' class='a dropdown-content'>" +
"<a href='s1.html'>Service one</a>" +
"<a href='s2.html'>Service two</a>" +
"<a href='s3.html'>Service three</a>" +
"<a href='s4.html'>Service Four</a>" +
"<a href='#'></a>" +
"</div>" +
"</li>" +

"<li>" +
"<a id='gallery' href='gallery.html'>Gallery</a>" +
"</li>" +

"<li>" +
"<a id='contact' href='testimonials.html'>Testimonials</a>" +
"</li>" +

"<li>" +
"<a id='contact' href='contact.html'>Contact</a>" +
"</li>" +

"</ul>";


document.getElementById("smedia").innerHTML = 

"<a href='#' class='fab fa-facebook-f'></a>" +
"<a href='#' class='fab fa-twitter'></a>" +
"<a href='#' class='fab fa-youtube'></a>" +
"<a href='#' class='fab fa-instagram'></a>" ;


}
