/* $('.box1').click(function() {
	$(this).toggleClass('active')
}); */

var count = 0;//박스를 클릭한 횟수를 셈
var seconds = 0;//흐른 시간(초)

$('.box1').click(function(){
	count = count + 1;
	$(this).css('animation-play-state', 'paused')
	console.log(count)
	if(count == 7) {
		$('.modal-wrapper').css('display', 'table')
		$('.score-wrap > span').text(seconds/1000)
	}
})

$('#second').change(function(){
	$('.box1').css('animation-duration', $(this).val())
	$('.box1').css('animation-play-state', 'running')
	setInterval(function() {//정해진 시간마다 함수 실행(1초마다 카운트)
		seconds = seconds + 1;
	}, 1)
})