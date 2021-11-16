// Il software deve chiedere all'utente il suo nome e il sesso
// con due prompt diversi. 
// Sulla pagina html deve apparire "Ciao <nome>", il colore del nome 
// deve essere azzurro o rosa a seconda del sesso selezionato

// const userName = prompt(`Qual è il suo nome?`);
// const userGender = prompt(`Qual è il suo sesso?`);

// let resultSpan = document.getElementById('result');

// if(userGender === 'maschio'){
//     resultSpan.classList.add('male');
// } else if(userGender === 'femmina'){
//     resultSpan.classList.add('female');
// }

// resultSpan.innerHTML = `${userName}`;

// CREATE ELEMENT

// const userName = prompt(`Qual è il suo nome?`);
// const userGender = prompt(`Qual è il suo sesso?`);

// let results = document.createElement('span');
// results.append(userName);

// if(userGender === 'maschio'){
//     results.classList.add('male');
// } else if(userGender === 'femmina'){
//     results.classList.add('female');
// }
// document.querySelector('.title').append(results);

// Scrivere in console i numeri da 0 a 1000
// for(let i = 0; i <= 1000; i++){
//     console.log(i);
// }
// Scrivere in console i numeri da 1000 a 0
// for(let i = 1000; i >= 0; i--){
//     console.log(i);
// }


// FOR CHE INTERAGISCONO CON HTML RIEMPIENDOLO

// const mainList = document.querySelector('ul.list');

// for(let i = 0; i <= 1000; i++){
    // METODO BACKTICK
    //  const newLi = `
    //      <li class="box box-${i}">Element ${i}</li>
    //  `;
    //  mainList.innerHTML += newLi;

    // METODO CREATE ELEMENT
    // const newLi = document.createElement('li');
    // newLi.innerHTML = `Elemento ${i}`;
    // mainList.append(newLi);
// }



// 1- scriviamo in console tutti i numeri da 1 a 1000 specificando se ogni numero è pari o dispari
// 2- scriviamo nell'html tutti i numeri da 1 a 1000
// 3- scriviamo i numeri di colore diverso in basi a pari o dispari

for(let i = 1; i <= 1000; i++){
    if(i % 2 === 0){
        console.log(`${i} pari`);
    } else{
        console.log(`${i} dispari`)
    }
}

for(let i = 1; i <= 1000; i++){
    const mainList = document.querySelector('.list')
    let newLi;
    if(i % 2 === 0){
        newLi = `<span class="p_10 red size">${i}</span>`;
    } else{
        newLi = `<span class="p_10 green size">${i}</span>`;
    }
    mainList.innerHTML += newLi;
}


// DATA E ORA
// const myDate = new Date();
// myDate.getMinutes();  
// myDate.getHours();   
// myDate.getDay();   
// myDate.getFullYear();
// const toLunchMinutes = 60 - myDate.getMinutes();