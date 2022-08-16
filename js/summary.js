function handleOnClick(){
    const changeText = document.getElementById('change-text');
    changeText.innerText = 'Yes Text Has Been Changed For You';
 }
//option-2
document.getElementById('event-listner').addEventListener('click',function(){
 const handlerStatus = document.getElementById('change-text');
 handlerStatus.innerText = 'Yeah! Changed Again';
})

document.getElementById('btn-update').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})