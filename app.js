
import dogs from './pieski.json' assert {type: 'json'};

let answer =[];

const start = (params) => {
    // nie przeładowuje strony 
    params.preventDefault();

    setAnswers();
    console.log(answer);
    
    appStart();


}

const form = document.getElementById('form');
form.addEventListener('submit', start );


function setAnswers() {
    document.querySelectorAll('input:checked').forEach(element => {
        answer.push(element.value);

    });
    
}

function matchDogs(){
    dogs.forEach(element => {
        for(let j=0; j<element.matchCode.length; j++){
            if(element.matchCode[j] == answer[j]){
                element.score++;
            }
        }
    });
}


function appStart(){

    matchDogs();
    console.log(dogs);
    sortDogs();
    printDogList();

}




function printDogList(){
    //ile ma sie wystelitic dopasowan 
    let countResult = 2;

    for(let i=0; i<countResult;i++){
        console.log(dogs[i]);

        const h1 = document.createElement("h1");
        const h3 = document.createElement("h3");
        h1.innerHTML = dogs[i].name;
        h3.innerHTML = dogs[i].descpirtion;
        document.body.append(h1);
        document.body.append(h3);
    }

    
    // document.getElementById("result").innerHTML = answer;

}

function sortDogs(){
    return dogs.sort((a,b) => {
        return b.score - a.score;
    });
}

