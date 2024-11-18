console.log ('insane in the menbrane');
const ol = document.getElementById("grid");
for (let i = 1; i <= 25; i++) {
    console.log(i)
    const li = document.createElement('li');
    console.log(li);
    li.textContent = 'item number ${i}';
    ol.appendChild(li);
}
   