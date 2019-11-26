$("form").submit(function(){
    if($('input[name="standing"]:checked').val()){
      if($('input[name="fruit"]:checked').val()){
        return true
      } 
      else
        alert("Select a fruit")
      return false
    }
    else
      if($('input[name="fruit"]:checked').val()){
        alert("Select class standing")
        return false 
      }
      else{
        alert("Select your year and favorite fruit")
        return false 
  }
})