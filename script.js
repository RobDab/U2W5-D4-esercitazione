

function dropMenu(){
    let droppedMenu = document.getElementById('dropped')

    console.log(droppedMenu)

    droppedMenu.classList.toggle('dropped')
    // -----------------------------------------------------------
    // LA SEGUENTE TECNICA ALLUNGAVA INUTILMENTE VERIFICANDO OGNI VOLTA LA PRESENZA DELLA CLASSE NEL className
    // 
    // let inactive = droppedMenu.className.includes('inactive')
    // let dropped = droppedMenu.className.includes('dropped')
    // if(inactive){
    //     droppedMenu.classList.remove('inactive')
    //     droppedMenu.classList.add('dropped')
    // }else if(dropped){
    //     droppedMenu.classList.remove('dropped')
    //     droppedMenu.classList.add('inactive')
    // }
    
    
}

let text = document.getElementById('text')

function setStylePoppins(){
    if(text.className.includes('robotoText')){
        text.classList.remove('robotoText')
    }
    text.classList.toggle('poppinsText')
}

function setStyleRoboto(){
    text.classList.toggle('robotoText')
}


function setStyleBold(){
    text.classList.toggle('boldText')
}

let inputField = document.getElementById('toDoList').querySelector('input')




function addListItem(){
    
    let inputValue = inputField.value
    
    if(inputValue !== ""){
        console.log(inputValue)
    let list = document.getElementById('list')
    list.innerHTML += `<li>${inputValue}<button>-</button></li>`

    inputField.value = ""   //CLEAR INPUT FIELD
    }
    
    let listItemS = document.getElementById('list').querySelectorAll('li')
    for(let i=0;i<listItemS.length;i++){
        listItemS[i].querySelector('button').addEventListener("click",remove)
        // listItemS[i].querySelector('button').id = `${i}`
        // console.log(listItemS[i].querySelector('button').id)
        }
    
}

// let i
// let buttons = document.getElementById('list').querySelectorAll('li')
//     //^^^NODES ARRAY^^^
//     for(let i=0;i<buttons.length;i++){
//     buttons[i].querySelector('button').addEventListener("click",remove)
//     }
    //AGGIUNGE ONLCICK A TUTTI 

function remove(){
    
    let listItemS = document.getElementById('list').querySelectorAll('li')
    
    // CHIEDERE A LIDIA!!!!!
    console.log(listItemS)

      
}
// COME FACCIO A SELEZIONARE SOLO IL <LI> IN CUI IL BUTTON è CONTENUTO???










