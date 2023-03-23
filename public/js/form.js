  var first = $("#fname");
  var last = $("#lname");
  var e_mail = $("#email");
  var subject = $("#subject");
  var frm = document.getElementsByName('formtest')[0]


$("#subbtn").on("click", function(){
    
    
    if(Modernizr.formvalidation){
        if(!$("#fname")[0].checkValidity()){
            $("#name_error").text("Please enter first name.");
        
    
        }
        else{
            $("#name_error").text("");
        }
        if(!$("#lname")[0].checkValidity()){
            $("#last_error").text("Please enter last name.");
    
        }
        else{
            $("#last_error").text("");
        }
        if(!$("#email")[0].checkValidity()){
            $("#email_error").text("Please enter email.");
        }
        else{
            $("#email_error").text("");
        }
        if(!$("#subject")[0].checkValidity()){
            $("#sub_error").text("Please fill out form below...");
        }
        else{
            $("#sub_error").text("");
        }
        if((first[0].checkValidity()!="") &&(last[0].checkValidity() !="")&&    (e_mail[0].checkValidity() !="")&&(subject[0].checkValidity() !="")){
            alert("Thanks for your feedback! :)");
            
            
        
        }
       
      frm.reset();  // Reset all form data
      return false; 
      
        
    }
    
 
  
  
});

$("#test").prepend('<a href="404"><img id="theImg" src="images/pinkflicker.gif" ></a>');
