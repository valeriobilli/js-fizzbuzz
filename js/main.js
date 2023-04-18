for(i=1; i<101; i++){
    console.count()
}

const ul = document.querySelector("ul.list");

for (let index = 1; index < 101; index++) {
    const element = `<li class="box box--${index}">${index}</li>`;
    ul.innerHTML += element;
}





