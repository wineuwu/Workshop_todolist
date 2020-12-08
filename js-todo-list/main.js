// TO DO


document.addEventListener("DOMContentLoaded",function(){

  //create a listbtn
    const creatBtn = document.querySelector(".addBtn")
  
    creatBtn.addEventListener("click",addList)

  
  })
  
  
  function addList(){
  
    // console.log("click")

  
    let addElement = document.getElementById('input').value
    document.getElementById('input').value=""
  

    if(addElement!=""){

      let listBox = document.querySelector('ul')
    
      let li = document.createElement("li")

      li.innerHTML = addElement + '<span class="close">x</span>'

      
    
      listBox.appendChild(li)
     

      return (li)

    }else {
      alert( "請輸入文字！");
    }

    
  
  }