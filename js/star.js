$(function(){
	$('.st1').hover(function(){
		$(this).css('background', 'yellow');
	}, function(){
		$(this).css('background', '#fff');
	})
	$('.st2').hover(function(){
		$(this).css('background', 'yellow');
		$('.st1').css('background', 'yellow');
	}, function(){
		$(this).css('background', '#fff');
		$('.st1').css('background', '#fff');
	})
	$('.st3').hover(function(){
		$(this).css('background', 'yellow');
		$('.st1').css('background', 'yellow');
		$('.st2').css('background', 'yellow');
	}, function(){
		$(this).css('background', '#fff');
		$('.st1').css('background', '#fff');
		$('.st2').css('background', '#fff');
	})
	$('.st4').hover(function(){
		$(this).css('background', 'yellow');
		$('.st1').css('background', 'yellow');
		$('.st2').css('background', 'yellow');
		$('.st3').css('background', 'yellow');
	}, function(){
		$(this).css('background', '#fff');
		$('.st1').css('background', '#fff');
		$('.st2').css('background', '#fff');
		$('.st3').css('background', '#fff');
	})
	$('.st5').hover(function(){
		$(this).css('background', 'yellow');
		$('.st1').css('background', 'yellow');
		$('.st2').css('background', 'yellow');
		$('.st3').css('background', 'yellow');
		$('.st4').css('background', 'yellow');
	}, function(){
		$(this).css('background', '#fff');
		$('.st1').css('background', '#fff');
		$('.st2').css('background', '#fff');
		$('.st3').css('background', '#fff');
		$('.st4').css('background', '#fff');				
	})	
	$('.st1').click(function(){
		$(this).css('background', 'yellow');
		$('.st2').css('background', '#fff');		
		$('.st3').css('background', '#fff');
		$('.st4').css('background', '#fff');
		$('.st5').css('background', '#fff');		
	})
	$('.st2').click(function(){
		$(this).css('background', 'yellow');
		$('.st1').css('background', 'yellow');
		$('.st3').css('background', '#fff');
		$('.st4').css('background', '#fff');
		$('.st5').css('background', '#fff');		
	})
	$('.st3').click(function(){
		$(this).css('background', 'yellow');
		$('.st1').css('background', 'yellow');
		$('.st2').css('background', 'yellow');		
		$('.st4').css('background', '#fff');
		$('.st5').css('background', '#fff');		
	})
	$('.st4').click(function(){
		$(this).css('background', 'yellow');
		$('.st1').css('background', 'yellow');
		$('.st2').css('background', 'yellow');
		$('.st3').css('background', 'yellow');
		$('.st5').css('background', '#fff');	
	})	
});