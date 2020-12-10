// TO DO


document.addEventListener("DOMContentLoaded",function(){

  //create a listBtn
    const creatBtn = document.querySelector(".addBtn")
    creatBtn.addEventListener("click",addList)

   //add a list
   const addBtn = document.querySelectorAll("li")

   addBtn.forEach(checked)

   //delete list

   const delBtn = document.querySelectorAll('.close')

   delBtn.forEach(deleted)
   
  })

  
  
  function addList(){
  
    // console.log("click")

  
    let content = document.getElementById('input').value
    document.getElementById('input').value=""
  

    if(content!=""){

      let listBox = document.querySelector('ul')
    
      let li = document.createElement("li")

      let span = document.createElement("span")

      span.appendChild(document.createTextNode('x'))

      span.classList.toggle('close')

      li.appendChild(document.createTextNode(content))

      li.appendChild(span)
     
      console.log(li)

      li.addEventListener("click",function(e){

        e.target.classList.toggle('checked')

      })

      span.addEventListener("click",function(e){

        e.target.parentNode.remove()

      })

      listBox.appendChild(li)
     

    return (li)

    }else {
      alert( "請輸入文字！");
    }

  
  }


  function checked (all){

    // console.log(all)

    all.addEventListener('click',function(e){

      // console.log(e)
      e.target.classList.toggle('checked')

    })

   }


   function deleted (allDel){

    // console.log(allDel)

    allDel.addEventListener('click',function(ev){

      console.log(ev)

      ev.target.parentNode.remove()

     })


   }


  //draggable set Attribute

  //nextSibling  Drag

  