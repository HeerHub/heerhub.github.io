	$("#includedContent2").load("b.html", function(){
	  /// new html exists now
	  $('#myTable').DataTable(/*options*/)
	});
	
    $("#includedContent").load("b.html", function(){
	  /// new html exists now
	  $('#myTable').DataTable(/*options*/)
	});
	
	// Get card element
	const card = document.querySelectorAll('.card');

	// Loop through cards. 
	// This is so you can have multiple cards on a page.
	for (let i = 0; i < card.length; i++) {
	   // Add a click event listener to each card.
	   card[i].addEventListener("click", function() {
		 // Toggle active class on card
		 card[i].classList.toggle("active");
	   });
	}
	
	



	$(document).ready(function(){
	// Should cache elements here for continuous access
	const footer = $(".footer");
	const scrollBtn = $("#back-to-top"); 
	const padding = 25; // So you can change this is one value (scroll to top button bottom padding)
		$(window).scroll(function () {
			
			// Where we're gonna set the button's height
			var distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
			// Check to see if we're within the footer range
			if ( distanceFromBottom <= footer.height() ) {
					console.log(distanceFromBottom);
					scrollBtn.css("bottom", (footer.height() - distanceFromBottom) + padding);
				} else {
					scrollBtn.css("bottom", padding);
				}
				if ($(this).scrollTop() > 50) { 
					$('#back-to-top').fadeIn();
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			// scroll body to 0px on click
			$('#back-to-top').click(function () {
				$('body,html').animate({
					scrollTop: 0 
				}, 10);  //set time delay before it scrolls up here
				return false;
			});
	});