const section = document.querySelector(".container");
const container = document.querySelector('.text');
const correct = () => {
    container.style.display = "none";
    const correct = document.createElement('h1');
    correct.classList.add("result");
    correct.textContent = "✅";
    section.appendChild(correct);
    setTimeout(() => {
        section.removeChild(correct);
        container.style.display = "block";
        run();
    }, 3000)
}
const wrong = () => {
    container.style.display = "none";
    const wrong = document.createElement('h1');
    wrong.classList.add("result");
    wrong.textContent = "❌";
    section.appendChild(wrong);
   setTimeout(() => {
    section.removeChild(wrong)
    container.style.display = "block";
   }, 3000)
}
const table = [
['氢', 'H'],
['氦', 'He'],
['锂', 'Li'],
['铍', 'Be'],
['硼', 'B'],
['碳', 'C'],
['氮', 'N'],
['氧', 'O'],
['氟', 'F'],
['氖', 'Ne'],
['钠', 'Na'],
['镁', 'Mg'],
['铝', 'Ai'],
['硅', 'Si'],
['磷', 'P'],
['硫', 'Si'],
['氯', 'Cl'],
['氩', 'Ar'],
['钾', 'K'],
['鈣', 'Ca']
]

function run() {
var randomElement = Math.floor(Math.random() * table.length);
var randomItem = Math.floor(Math.random() * 2);
container.innerHTML = ``;
if(randomItem == 1){
    const h1 = document.createElement('h1');
    h1.textContent = `${table[randomElement][randomItem]}`;
    const p = document.createElement('p');
    p.textContent = `${randomElement}`;
    const input = document.createElement('input');
    input.id = "chinese";
    input.maxLength = 1;
    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(input);
    document.getElementById('chinese').addEventListener('keyup', (e) => {
        e.preventDefault();
        if(e.keyCode == 13) {
            if(e.target.value == table[randomElement][randomItem - 1]){
                correct();
            }else{
                wrong();
            }
        }
    })
}else if(randomItem == 0){
    const input = document.createElement('input');
    input.maxLength = 2;
    const h2 = document.createElement('h2');
    h2.textContent = `${table[randomElement][randomItem]}`;
    const p = document.createElement('p');
    p.textContent = `${randomElement}`;
    input.id = 'name';
    container.appendChild(input);
    container.appendChild(p);
    container.appendChild(h2);
    document.getElementById('name').addEventListener('keyup', (e) => {
        e.preventDefault();
        if(e.keyCode == 13) {
            if(e.target.value == table[randomElement][randomItem + 1]){
                correct();
            }else{
                wrong();
            }
        }
    })
}

section.style.display = "block";
}

document.onload = run();
