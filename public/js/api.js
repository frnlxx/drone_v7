var elloc = document.getElementById('api');
var msg='.....';


if (window.sessionstorage){
    var txtUser= document.getElementById('fname');
    var txtAnswer = document.getElementById('lname');
    
    txtUser.value =sessionStorage.getItem('fname');
    txtAnswer.value = sessionStorage.getItem('lname');
    
    txtUser.addEventListener('input', function(){
      sessionStorage.setItem('fname',txtUser.value );
    }, false);
    
    txtAnswer.addEventListener('input', function(){
      sessionStorage.setItem('lname',txtAnswer.value );
    }, false);
    
    msg = '<h2> We have saved your responses!</h2>';
	
	elloc.innerHTML = msg;

}



