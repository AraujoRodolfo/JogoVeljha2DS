$(document).ready(function(){
	//
});

var vez = 1;
var jogadas = 0;
$(document).on('click','.p', function(){
	$(this).removeClass('p');
	$(this).attr('value',vez);
	jogadas++;
	if(jogadas > 4){
		Verificar();
	}
	if(vez == 2){
		$(this).css('background-color','green');
		vez=1;
	}else{
		$(this).css('background-color','red');
		vez = 2;
	}
});

function Verificar(){
	var p1 = $('.p1').attr('value');
	var p2 = $('.p2').attr('value');
	var p3 = $('.p3').attr('value');
	var p4 = $('.p4').attr('value');
	var p5 = $('.p5').attr('value');
	var p6 = $('.p6').attr('value');
	var p7 = $('.p7').attr('value');
	var p8 = $('.p8').attr('value');
	var p9 = $('.p9').attr('value');
	win = false;
	if(p1 == p2 && p2 == p3 && p3 > 0)
			win = true
	else if(p4 == p5 && p5 == p6 && p6 > 0)	
			win = true
	else if(p7 == p8 && p8 == p9 && p9 > 0)	
			win = true
	else if(p1 == p4 && p4 == p7 && p7 > 0)
			win = true
	else if(p2 == p5 && p5 == p8 && p8 > 0)
			win = true
	else if(p3 == p6 && p6 == p9 && p9 > 0)
			win = true
	else if(p1 == p5 && p5 == p9 && p9 > 0)
			win = true
	else if(p3 == p5 && p5 == p7 && p7 > 0)
			win = true
	if(win)
		alert("Jogador Ganhou");
		//location.reload();
}	


