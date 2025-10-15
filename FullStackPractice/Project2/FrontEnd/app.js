const main = document.getElementById('main');
console.log(main)

function addLIstItem(text){
    const li = document.createElement('li');
    li.innerText = text;
    main.appendChild(li);
}

fetch('http://localhost:4000/anime')
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(item => addLIstItem(item.name));
})
.catch(err => console.log(err));
