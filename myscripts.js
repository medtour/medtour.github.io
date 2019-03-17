document.getElementById("head").innerHTML = 

"<title>MedForte</title>" +
"<meta charset='UTF-8'>" +
"<meta name='viewport' content='width=device-width, initial-scale=1'>" +
"<link rel='stylesheet' href='purecss.css'>" +
"<link rel='stylesheet' href='style.css'>" +
"<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.6.1/css/all.css'>";


document.getElementById("headercontent").innerHTML = 
"<img style='float:left; height:80px;'src='img/logom.jpg'><div class='companyname'>MEDFORTE<br><div style='color:#a6221c;'>Healthcare Services</div></div>" +

"<div class='headcontact'>" +
"<ul>" +
"<li><div id='google_translate_element'></div></li>" +
"<li><i style='color:#077982;' class='fas fa-phone'></i><a style='color:#077982;' href='tel:+919113249026'>+91-9113249026</a></li>" +
"<li><i style='color:#3eb72b;' class='fab fa-whatsapp'></i><a style='color:#3eb72b;' href='tel:+919900489007'>+91-9900489007</a></li>" +
"<li><i style='color:blue;' class='far fa-envelope'></i><a style='color:blue;' href='mailto:info@medforte.org'>info@medforte.org</a></li>" +
"</ul>" +
"</div>" +

"<div class='menuholder xs-visible'>" +

"<div class='menu' id='menubars'>" +

"<div class='linebar'></div>" +
"<div class='linebar'></div>" +
"<div class='linebar'></div>" +

"</div>" +

"</div>";


document.getElementById("menutoggle").innerHTML = 

"<ul>" +

"<li>" +
"<a id='index' href='index.html'>Home</a>" +
"</li>" +

"<li>" +
"<a  id='about' href='about.html'>About-us</a>" +
"</li>" +

"<!-- <li class='dropdown'> -->" +
"<!-- <div id='toggle' class='xs-visible' style='float:right;'><img id='arrowtoggle' class='arrowimg1' src='img/arrow.png'></div> -->" +
"<!-- <a id='service' href='services.html'>Services</a> -->" +
"<!-- <div id='togglee' class='a dropdown-content'> -->" +
"<!-- <a href='s1.html'>Service one</a> -->" +
"<!-- <a href='s2.html'>Service two</a> -->" +
"<!-- <a href='s3.html'>Service three</a> -->" +
"<!-- <a href='s4.html'>Service Four</a> -->" +
"<!-- <a href='#'></a> -->" +
"<!-- </div> -->" +
"<!-- </li> -->" +

"<li>" +
"<a id='service' href='services.html'>Services</a>" +
"</li>" +

"<li>" +
"<a id='work' href='work.html'>How MedForte Works</a>" +
"</li>" +

"<li>" +
"<a id='location' href='location.html'>Location</a>" +
"</li>" +

"<!-- <li> -->" +
"<!-- <a id='hospitals' href='hospitals.html'>Our Hospitals</a> -->" +
"<!-- </li> -->" +

"<li>" +
"<a id='visa' href='visa.html'>Visa Process</a>" +
"</li>" +

"<li>" +
"<a id='testimonial' href='testimonial.html'>Testimonials</a>" +
"</li>" +

"<li>" +
"<a id='contact' href='contact.html'>Contact</a>" +
"</li>" +

"</ul>";


document.getElementById("smedia").innerHTML = 

"<a href='https://www.facebook.com/Medforte-395683864540938/' class='fab fa-facebook-f'></a>" +
"<a href='https://twitter.com/Medforte1' class='fab fa-twitter'></a>" +
"<a href='https://www.youtube.com/channel/UCLAeZifl4hvRes8Kv8Il2Ug' class='fab fa-youtube'></a>" ;


document.getElementById("footer").innerHTML = 

"<div class='col-sm-4'>" +
"<h3>LOCATION</h3>" +
"<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.898636259301!2d77.63539211384365!3d12.978334618244345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a30d631f93%3A0x908a5ca987d63664!2sChinmaya+Mission+Hospital+Rd%2C+Indiranagar%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1545304360561' width='90%' height='210px' frameborder='0' style='border:0' allowfullscreen></iframe>" +

"</div>" +
"<div class='col-sm-4'>" +
"<h3>CONTACT US</h3>" +
"<p>Mobile : +91-9113249026</p>" +
"<p>Office : +91-9900489007</p>" +
"<p>Email : info@medforte.org</p>" +
"<p>Website : www.medforte.org</p>" +
"<p>Address : No 34, 1st floor, 11th cross,<br>1st stage, Indranagar,<br>Bangalore-560038</p>" +

"</div>" +
"<div class='col-sm-4'>" +
"<h3>GET A CALL</h3>" +
"<div class=''>Enter your number to get a call from us." +
"<form action='https://secure.mailjol.net/allforms/u/22755afd.php' method='post'>" +
"<input type='text' name='country' style='width: 95%; padding: 1px 2px' placeholder='Your Country' value='' id='subscribe-field'>" +
"<input type='text' name='email' style='width: 95%; padding: 1px 2px' placeholder='Enter your Contact number' value='' id='subscribe-field'>" +
"<button class='button'>SUBMIT</button>" +
"</form>" +
"<h3>SOCIAL</h3>" +
"<div class='smedia2' style='color:red!improtant;'>" +
"<a href='https://www.facebook.com/Medforte-395683864540938/' class='fab fa-facebook-square'></a>" +
"<a href='https://twitter.com/Medforte1' class='fab fa-twitter'></a>" +
"<a href='https://www.youtube.com/channel/UCLAeZifl4hvRes8Kv8Il2Ug'><i class='fab fa-youtube'></i></a>" +
"</div>" +
"</div>" +

"</div>" ;

document.getElementById("sidepanel").innerHTML = 

"<div class='container'>" +
"<h3>MAKE AN APPOINTMENT</h3>" +
"<form action='https://secure.mailjol.net/allforms/u/22755afd.php' method='post'>" +
"<label for='fname'>First Name</label><br>" +
"<input type='text' id='fname' name='firstname' placeholder='Your name..'>" +
"<br>" +
"<label for='lname'>Email Address</label><br>" +
"<input type='text' id='lname' name='lastname' placeholder='Email Address..' >" +
"<br>" +
"<label for='lname'>Contact No.</label><br>" +
"<input type='text' id='lname' name='lastname' placeholder='Contact Number..' >" +
"<br>" +
"<label for='country'>Country</label><br>" +
"<select id='country' name='country'>" +
"<option value='Bahrain'>Bahrain</option>" +
"<option value='UAE'>UAE</option>" +
"<option value='Saudi Arabia'>Saudi Arabia</option>" +
"<option value='Oman'>Oman</option>" +
"<option value='Africa'>Africa</option>" +
"<option value='Egypt'>Egypt</option>" +
"<option value='Algeria'>Algeria</option>" +
"<option value='Qatar'>Qatar</option>" +
"<option value='Palestine'>Palestine</option>" +
"<option value='Iraq'>Iraq</option>" +
"<option value='Jordan'>Jordan</option>" +
"<option value='Kuwait'>Kuwait</option>" +
"<option value='Lebanon'>Lebanon</option>" +
"<option value='Libya'>Libya</option>" +
"<option value='Morocco'>Morocco</option>" +
"<option value='Somalia'>Somalia</option>" +
"<option value='Sudan'>Sudan</option>" +
"<option value='Yemen'>Yemen</option>" +
"<option value='Others'>Others</option>" +
"</select>" +
"<br>" +
"<label for='subject'>Subject</label><br>" +
"<textarea id='subject' name='subject' placeholder='Your Query..'></textarea>" +
"<br>" +
"<input type='submit' name='submit' value='Submit'>" +
"</form>" +
"</div>" +


"<div class='container smedia2'>" +
"<h3>SOCIAL</h3>" +
"<a href='https://www.facebook.com/Medforte-395683864540938/' class='fab fa-facebook-square'></a>" +
"<a href='https://twitter.com/Medforte1' class='fab fa-twitter'></a>" +
"<a href='https://www.youtube.com/channel/UCLAeZifl4hvRes8Kv8Il2Ug'><i class='fab fa-youtube'></i></a>" +

"</div>" ;



$(document).ready(function(){

	$("#toggle").click(function(){
		$("#togglee").toggleClass("a b");
	});
	
	$("#toggle").click(function(){
		$("#arrowtoggle").toggleClass("arrowimg1 arrowimg2");
	});
	
	$("#menubars").click(function(){
		
		$("#menutoggle").toggleClass("hide show");
	});
	
	$("#menubars").click(function(){
		
		$("#menubars").toggleClass("menu menuon");
	});
	

});


var coll = document.getElementsByClassName("collapsible");
var clicked;
var used = 0;
var previous;
for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
clicked = this;
changecoll();
});
}

function changecoll() {
if (used == 0) {add(); used = 1;} else if (previous == clicked) {remove(); used = 0;} else {remove(); add(); used = 1;}
previous = clicked;
console.log(previous , clicked);
}

function add() {clicked.classList.add("activecoll");clicked.nextElementSibling.style.maxHeight = clicked.nextElementSibling.scrollHeight + "px";}
function remove() {previous.classList.remove("activecoll"); previous.nextElementSibling.style.maxHeight = null;}





function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {pageLanguage: 'en'},
    'google_translate_element'
  );
}

