import dogs from './pieski.json' assert {type: 'json'};

const answer = [];
const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', () => {
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        setAnswers();
        appStart();
    });
});

function appStart(){
    matchDogs();
    sortDogs();
    printDogList();
}

function setAnswers() {
    document.querySelectorAll('input:checked').forEach(element => {
        answer.push(element.value);
    });
}

function matchDogs(){
    dogs.forEach(element => {
        for(let j=0; j<element.matchCode.length; j++){
            if(j == 2 && 1 == answer[j] ){
                element.score += 4;
            }
            else if(element.matchCode[j] == answer[j]){
                element.score++;
            }
        }
    });
}

function printDogList(){
    const countResult = 2;

    for(let i=0; i<countResult;i++){
        const container = document.getElementById('container');

        const name = document.createElement("h1");
        const desc = document.createElement("h3");
        
        name.innerHTML = dogs[i].name;
        desc.innerHTML = dogs[i].description;

        container.append(name);
        name.classList.add('text-xl', 'font-bold');
        container.append(desc);
    }
    console.log(dogs);
    
}

function sortDogs(){
    return dogs.sort((a,b) => {
        return b.score - a.score;
    });
}

