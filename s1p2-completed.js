/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype in JavaScript sono i formati che posso assegnare a una variabile.  
 I principali tipi di dato sono: stringhe, numeri, booleani, date, null e undefined. 
 Le stringhe sono sequenze di caratteri alfanumerici, i numeri possono essere interi o decimali, 
 i booleani possono assumere solo i valori true o false, le date servono per memorizzare le date e l'ora, 
 null lo rilevo nelle variabili che ho dichiarato ma a cui non ho ancora assegnato un valore 
 e undefined lo rilevo quando qualcosa non é stato ben definito in una variabile a cui ho assegnato un valore 1  */

 let stringa = "Lidia";
let numero = 3.14;
let booleano = true;
let data = new Date();
let nullo = null;
let indefinito = undefined;

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Gli oggetti in  JavaScript sono una struttura dati flessibile e dinamica che consente di catalogare  diverse porzioni di dati e altri elementi piu complessi.  
 In JavaScript gli oggetti sono  composti da proprieta , cioe caratterizzati da un nome e da un valore. 
 Possiamo definire  un oggetto come una sorta di oggetto associativo che puo essere costruito e modificato dinamicamente. 
 
 Per creare un oggetto  in JavaScript, possiamo usare le parentesi graffe {...} con un elenco di proprieta opzionale.  
 Una proprieta  a una coppia  "chiave:valore", dove "chiave" é una stringa, mentre  "valore" puo essere qualsiasi cosa. 
 Ad esempio, possiamo  creare un oggetto vuoto utilizzando la sintassi objectliteral : let user {}; 
*/

let user = {
    name: "Giampiero",
    age: 49,
    email: "giampiero.silingardi@gmail.com"
  };

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
let sum = number1 + number2;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Giampiero";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let x = 12;
let risultato = 4 - x;
console.log(risultato);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
