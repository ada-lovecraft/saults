$(function() {

	$('#startMultiples').click(doMultiples);
	$('#startFibonacci').click(doFibonacci);

});

function doMultiples(e) {
	var $countdownDisplay = $('#countdown');
	var $multiplesDisplay = $('#multiples');
	var $sumDisplay = $('#sum');
	var total = 0;
	for(var i = 1000; i>= 0;  i-- ) {
		if ( i % 3 == 0 || i % 5 == 0) {
			$multiplesDisplay.append(' ' + i);
			total += Number(i);
		}
		$countdownDisplay.find('p').text(i);

	}
	$sumDisplay.append(total);

	
}

function doFibonacci(e) {
	var $currentSequenceDisplay = $('#currentSequence');
	var $evensDisplay = $('#evens');
	var $sumDisplay = $('#fibonacciSum');
	var total = 0;
	var current = 1;
	var prev = 1;
	var seq = current + prev
	while(seq < 4000000) {
		$currentSequenceDisplay.find('p').text(seq);
		if (seq % 2 == 0) {
			$evensDisplay.append( ' ' + seq);
			total += seq;
		}
		prev = current;
		current = seq;
		seq = prev + current;
	}
	$sumDisplay.append(total);
}