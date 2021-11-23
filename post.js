function open() {
    document.querySelector('#modal').style.display = 'flex';
}
function close() {
    document.querySelector('#modal').style.display = 'none'
}

document.querySelector("#pWrite").addEventListener("click", open)
document.querySelector("#modal").addEventListener("click", close)