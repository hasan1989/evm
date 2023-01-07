const enterButton = document.getElementById('btnenter');

// enterButton.addEventListener('click', function(){
    
//     const fieldOne = document.getElementById('userid');
//     fieldOne.value = '';
// })

enterButton.addEventListener('click', function(){
    const userId = document.getElementById('userid').value;
    const userPw = document.getElementById('pw').value;

    if(userId === 'hasan' && userPw === 'psw') {
        window.location.href = 'vote.html'
    } else {
        alert('Wrong Password or Userid');
    }

    const fieldOne = document.getElementById('userid');
    fieldOne.value = '';

    const fieldTwo = document.getElementById('pw');
    fieldTwo.value = '';
    
})