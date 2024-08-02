console.log("hello world");

document.getElementById('btn-generate-key').addEventListener('click', function(event){
    var numberStr = '';
    for (var i = 0; i < 6; i++) {
      numberStr += Math.floor(Math.random() * 10);
    }
    document.getElementsByClassName('secret-number')[0].innerHTML = numberStr;
    clearAll();
});

let gridItems = document.getElementsByClassName('grid-item');
for(let i=0; i<gridItems.length; i++){
    gridItems[i].addEventListener('click', function(event){
        let inputNode = document.getElementsByClassName('pin-input')[0];
        let inputNumber = inputNode.textContent;
        if(inputNumber.length < 6){
            inputNumber += event.target.textContent
            inputNode.innerHTML = inputNumber;
        }
    });
}

document.getElementById('btn-delete-lsb').addEventListener('click', function(event){
    removeInfo();
    let inputNode = document.getElementsByClassName('pin-input')[0];
    let inputNumber = inputNode.textContent;
    if(inputNumber.length > 0){
        inputNumber = inputNumber.substring(0, inputNumber.length - 1);
        console.log("after delete one:" + inputNumber)
        inputNode.innerHTML = inputNumber;
    }else{
        console.log("Nothing to delete");
    }
});

document.getElementById('btm-clear').addEventListener('click', function(event){
    clearAll();
});

document.getElementById('btn-submit').addEventListener('click', function(event){
    removeInfo();
    let inputNode = document.getElementsByClassName('pin-input')[0];
    let inputNumber = inputNode.textContent;
    let secretKey = document.getElementsByClassName('secret-number')[0].textContent;
    if(secretKey === inputNumber){
        document.getElementById('info').children[0].removeAttribute('hidden');
        console.log(document.getElementById('info').children[0].textContent)
    }else{
        document.getElementById('info').children[1].removeAttribute('hidden');
        console.log(document.getElementById('info').children[1].textContent)
    }
});

function removeInfo() {
    document.getElementById('info').children[0].setAttribute('hidden', true);
    document.getElementById('info').children[1].setAttribute('hidden', true);
}

function clearAll(){
    document.getElementsByClassName('pin-input')[0].innerHTML = '';
    removeInfo();
}