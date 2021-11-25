const write = document.querySelector('#write');
const revise = document.querySelector("#revise");
const del = document.querySelector('#delete');
const modal = document.querySelector('#modal');
const post = document.querySelector('.post');

function open() {
    modal.style.display = 'flex';
    write.style.display = 'flex';
    revise.style.display = 'none';
    del.style.display = 'none';
}
function close() {
    modal.style.display = 'none';
}
function change() {
    modal.style.display = 'flex';
    write.style.display = 'none';
    revise.style.display = 'flex';
    del.style.display = 'flex';
}
function remove() {
    modal.style.display = 'none';
}

document.querySelector("#pWrite").addEventListener("click", open)
document.querySelector('#writeBox').addEventListener("click", function(e){
  e.stopPropagation();
});
modal.addEventListener("click", close)
revise.addEventListener("click", close)
del.addEventListener("click", close)
post.addEventListener("click", change)

write.onclick = function () {
    close();
}
revise.onclick = function () {
    alert('수정되었습니다.');
}
del.onclick = function () {
    alert('삭제되었습니다.');
}