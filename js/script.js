
// Other scroll down method using timers
document.getElementById('scrollDownBtn').addEventListener('click', function(){
    let timeout = setInterval(function(){
        window.scrollBy(0,5);
    }, 1);
    setTimeout(function(){
        clearInterval(timeout);
    }, 700);
});
