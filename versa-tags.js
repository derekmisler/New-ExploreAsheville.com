			//Place on Add to Trip Planner button on events
			$('body').on('click', 'a.tripAdd', function() {
				setTimeout(function() {
					versaTagObj.generateRequest('http://www.exploreasheville.com/itineraryholiday');
				}, 1000);
			});


			//book now button on listing details
			$('body').on('click', '.listingDetailContainer .buttons a.theme-small', function() {
				setTimeout(function() {
					versaTagObj.generateRequest('http://www.exploreasheville.com/contactpropertybutton');
				}, 1000);
			});


<script type="text/javascript">
	require(["jquery", "domReady!"], function(validator) {
		//place on weddings pages
		$('body').on('click', '.contact a', function() {
			if(window.location.href.indexOf('weddings') > -1) {
				setTimeout(function() {
					versaTagObj.generateRequest('http://www.exploreasheville.com/weddingsemailbutton');
				}, 1000);
			}
		});
	});
</script>


		//place on ares sidebar
		$('body').on('click', '#lodging form button, .listingFilterContainer form button#filterSubmit', function() {
			setTimeout(function() {
				versaTagObj.generateRequest('http://www.exploreasheville.com/searchbookingsbutton');
			}, 1000);
		});


		//place on social icons in footer
		$('body').on('click', '.social-footer a.social-icon', function() {
			setTimeout(function() {
				versaTagObj.generateRequest('http://www.exploreasheville.com/socialfollowbutton');
			}, 1000);
		});


			//place on newsletter signup
			$('body').on('click', '.newsletter-signup form button', function() {
				setTimeout(function() {
					versaTagObj.generateRequest('http://www.exploreasheville.com/enewssignupbutton');
				}, 1000);
			});