

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
    text.classList.toggle('poppinsText')
}

function setStyleRoboto(){
    text.classList.toggle('robotoText')
}


function setStyleBold(){
    text.classList.toggle('boldText')
}