/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

//creare un array di oggetti per rappresentare i membri del team

const dati_membri = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },
]

//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

console.log(dati_membri);

const container_ul = document.querySelector('.row')

for (let i = 0; i < dati_membri.length; i++) {
    const ogniMembro = dati_membri[i];
    console.log(ogniMembro);

    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    //Trasformare la stringa foto in una immagine effettiva
    const membriList = `
    <div class="memb col-6 card m-3 bg-secondary text-light">     
        <div class="card-body justify-content-center align-items-center">
            <img src="./img/${ogniMembro.foto}" class="w-50 card-img">
            <h2 class="card-title">${ogniMembro.nome}</h2>
            <p class="card-text">${ogniMembro.ruolo}</p>
        </div>
    </div>`

    container_ul.insertAdjacentHTML('beforeend', membriList)
}

//Organizzare i singoli membri in card/schede
