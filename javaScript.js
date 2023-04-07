  function checkForm(){
    var email = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPass").value;
    var c = true;
    if(email == ""){
      c = false;
      document.getElementById("message1").style.display = "block";
    }else{
      document.getElementById("message1").style.display = "none";
    }
    if(password == ""){
      c = false;
      document.getElementById("message2").style.display = "block";
    }else{
      document.getElementById("message2").style.display = "none";
    }

    if(c == false){
      return false;
    }else{
      return true;
    }
  }
  function checkForm2(){
    var companyName = document.getElementById("companyName").value;
    var contactName = document.getElementById("contactName").value;
    var contactTitle = document.getElementById("contactTitle").value;
    var address = document.getElementById("addressTxt").value;
    var email = document.getElementById("emailTxt").value;
    var password = document.getElementById("pass").value;
    var re_password = document.getElementById("re_pass").value;
    var c = true;
    
    if(companyName == ""){
        c = false;
        revealMessage();
      }else{
        hideMessage();
      }
    if(contactName == ""){
        c = false;
        revealMessage();
      }else{
        hideMessage();
    }
    if(contactTitle == ""){
        c = false;
        revealMessage();
      }else{
        hideMessage();
    }
    if(address == ""){
        c = false;
        revealMessage();
      }else{
        hideMessage();
    }
    if(email == ""){
        c = false;
        revealMessage();
      }else{
        hideMessage();
      }
    if(password == ""){
        c = false;
        revealMessage();
      }else{
        hideMessage();
      }
    if(re_password == ""){
        c = false;
        revealMessage();
      }else{
        hideMessage();
    }
    if(c == false){
        return false;
      }else{
        return true;
      }
  }
  function revealMessage(){
    const messages = document.querySelectorAll(".notification");
    messages.forEach(message=> {
      message.style.display = "block";
    });
  }
  function hideMessage(){
    const messages = document.querySelectorAll(".notification");
    messages.forEach(message=> {
      message.style.display = "none";
    });
  }