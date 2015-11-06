/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */	
$(document).foundation();


function visualEditor(md) {
	var octoCounter = 0;
	var octoMark = md.val();
	for (var i = 0; i < octoMark.length; i++) {
		// console.log(octoMark[i]);

		if (octoMark[i] === '#' ) {
			octoCounter += 1;
			console.log('Octothorpes: '+ octoCounter);
		}
	}
	if (octoCounter+1 >= 6) {
		return 'p';
	}

	return 'h' + (octoCounter+1);
}

function transferMarkDown(md, lb) {
	var style = visualEditor(md);
	$('#output').html('<'+style+'>'+md.val()+'</'+style+'>');
	console.log('Linebreaks: '+lb.length);
}




$('#markdown').keyup(function() {
   var markDown = $(this);
   var lineBreaks = markDown.val().match(/\n/g) || [];
   transferMarkDown(markDown, lineBreaks);
});


