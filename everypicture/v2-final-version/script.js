//make image fully load before starting anything 
window.addEventListener('load', function () {

	const posts = document.querySelectorAll('section');
	const original = this.document.querySelector('.originalImg'); 
	let postTops = [];
	let counter = 1;
	let prevCounter = 1;

	//see where each section will start
	function resetPagePosition() {
        postTops = [];
        for (let i = 0; i < posts.length; i++) {
            postTops.push(posts[i].getBoundingClientRect().top + window.pageYOffset);
        }

        // set counter based on scroll position
        let pagePosition = window.pageYOffset + 300;
        counter = 0;
        for (let i = 0; i < postTops.length; i++) {
            if (pagePosition > postTops[i]) counter++;
        }
    }

	resetPagePosition();

	window.addEventListener('scroll', function () {
		pageTop = window.pageYOffset + 300;

		// scroll down
		if (pageTop > postTops[counter]) {
			counter++;
		}
		// scrolling up
		else if (counter > 1 && pageTop < postTops[counter - 1]) {
			counter--;
		}

		// section change
		if (counter != prevCounter) {
			
			// hide overlays
			document.querySelector('.pockets').classList.remove('show');
            document.querySelector('.jugs').classList.remove('show');
            document.querySelector('.sidepulls').classList.remove('show');
            document.querySelector('.footholds').classList.remove('show');
            document.querySelector('.crimps').classList.remove('show');
			

			//showing each overlay
			  if (counter == 2) {
                document.querySelector('.pockets').classList.add('show');
            } 
            else if (counter == 3) {
                document.querySelector('.jugs').classList.add('show');
            } 
            else if (counter == 4) {
                document.querySelector('.sidepulls').classList.add('show');
            } 
            else if (counter == 5) {
                document.querySelector('.footholds').classList.add('show');
            } 
            else if (counter == 6) {
                document.querySelector('.crimps').classList.add('show');
            }

			//fade in image initially
			if (counter > 1) {
		original.style.opacity = 0.5;  // fade original when first overlay appears
			} else {
    	original.style.opacity = 1;    // fully visible at the very top
			}
		
            prevCounter = counter;
        }
	}); 

	
}); 