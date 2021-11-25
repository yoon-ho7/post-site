const write = document.querySelector('write');

function open() {
    document.querySelector('#modal').style.display = 'flex';
}
function close() {
    document.querySelector('#modal').style.display = 'none';
}

function change() {
    document.querySelector('#modal').style.display = 'none';
}
function remove() {
    document.querySelector('#modal').style.display = 'none';
}

document.querySelector("#pWrite").addEventListener("click", open)
document.querySelector("#modal").addEventListener("click", close)
document.querySelector('#writeBox').addEventListener("click", function(e){
  e.stopPropagation();
});
document.querySelector('#write').addEventListener("click", close)
document.querySelector('#revise').addEventListener("click", change)
document.querySelector('#delete').addEventListener("click", remove)