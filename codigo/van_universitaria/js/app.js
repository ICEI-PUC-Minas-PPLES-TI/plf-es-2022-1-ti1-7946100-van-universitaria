
var db_contatos_inicial = {
    "data": [{
        "id": 1,
        "nome": "Leanne Graham",
        "cidade": "Belo Horizonte",
        "turno": "Manhã",
        "email": "Sincere@april.biz",
        "telefone": "1-770-736-8031",
    },
    {
        "id": 2,
        "nome": "Ervin Howell",
        "cidade": "Betim",
        "turno": "Tarde",
        "email": "Shanna@melissa.tv",
        "telefone": "010-692-6593",
    },
    {
        "id": 3,
        "nome": "Clementine Bauch",
        "cidade": "Ibirité",
        "turno": "Tarde",
        "email": "Nathan@yesenia.net",
        "telefone": "1-463-123-4447",
    },
    {
        "id": 4,
        "nome": "Patricia Lebsack",
        "cidade": "Betim",
        "turno": "Manhã",
        "email": "Julianne.OConner@kory.org",
        "telefone": "493-170-9623 x156",
    },
    {
        "id": 5,
        "nome": "Chelsey Dietrich",
        "cidade": "Nova Lima",
        "turno": "Noite",
        "email": "Lucio_Hettinger@annie.ca",
        "telefone": "(254)954-1289",
    },
    {
        "id": 6,
        "nome": "Mrs. Dennis Schulist",
        "cidade": "Ibirité",
        "turno": "Manhã",
        "email": "Karley_Dach@jasper.info",
        "telefone": "1-477-935-8478",
    },
    {
        "id": 7,
        "nome": "Kurtis Weissnat",
        "cidade": "Belo Horizonte",
        "turno": "Noite",
        "email": "Telly.Hoeger@billy.biz",
        "telefone": "210.067.6132",
    },
    {
        "id": 8,
        "nome": "Nicholas Runolfsdottir V",
        "cidade": "Belo Horizonte",
        "turno": "Noite",
        "email": "Sherwood@rosamond.me",
        "telefone": "586.493.6943",
    },
    {
        "id": 9,
        "nome": "Glenna Reichert",
        "cidade": "Betim",
        "turno": "Manhã",
        "email": "Chaim_McDermott@dana.io",
        "telefone": "(775)976-6794",
    },
    {
        "id": 10,
        "nome": "Clementina DuBuque",
        "cidade": "Nova Lima",
        "turno": "Noite",
        "email": "Rey.Padberg@karina.biz",
        "telefone": "024-648-3804",
    }
    ]
}


var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};


function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {

    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email": contato.email,
        "telefone": contato.telefone,
        "cidade": contato.cidade,
        "turno": contato.turno,
    };

 
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");


    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].turno = contato.turno,

    displayMessage("Contato alterado com sucesso");

    
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) { 
    db.data = db.data.filter(function (element) { return element.id != id });
    displayMessage("Contato removido com sucesso");  
    localStorage.setItem('db_contato', JSON.stringify(db));
}

