// Custom js for Video Player

$(function() {

	// A variable for the video player
	var $videoPlayer = $('#videoPlayer');

	// Hook up the video player and activate the play button
	// $('.btnPlay').click(function() {
	// console.log('In the function');
	// 	$videoPlayer[0].play();				//gets the first video in the document
	// 	return false;
	// });
	
	// Create a play and pause effect that swaps the icons
	$('.btnPlay').click(function(){
		if($videoPlayer[0].paused){
			//If the video is paused when we click now we will make it play
			$videoPlayer[0].play();
			//This will change the play button to a pause button
			$('.glyphicon-play').attr('class', 'glyphicon glyphicon-pause');
		} else { 
			$videoPlayer[0].pause();
			$('.glyphicon-pause').attr('class', 'glyphicon glyphicon-play');
		}
		return false;
		});
	
	// // muting and unmuting the sound
	
	// //Muting and unmuting the sound
	// 		$('.btnMute').click(function(){
	// 			if ($videoPlayer[0].muted == false){
	// 				$videoPlayer[0].muted = true;
	// 				$('.glyphicon-volume-up').attr('class', 'glyphicon glyphicon-volume-off');
	// 			} else {
	// 				$videoPlayer[0].muted = false;
	// 				$('.glyphicon-volume-off').attr('class', 'glyphicon glyphicon-volume-up');
	// 			}
	// 		});
		
		// Time Display 
		$videoPlayer.on('timeupdate', function(){
			$('.current').text(Math.round10($videoPlayer[0].currentTime, -2));

	});
			

		
});	