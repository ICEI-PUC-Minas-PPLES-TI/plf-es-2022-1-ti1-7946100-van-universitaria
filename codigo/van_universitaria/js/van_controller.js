var usuarioCorrente = {};
var db_van = {}
var db_van_incial = {
    "data": [{
        "id": 1,
        "nome": "Leanne Graham",
        "cidade": "Belo Horizonte",
        "turno": "Manhã",
        "email": "Sincere@gmail.com",
        "telefone": "(47) 98947-6123",
        "cpf": "81629423009",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 2,
        "nome": "Ervin Howell",
        "cidade": "Betim",
        "turno": "Tarde",
        "email": "Shanna@gmail.com",
        "telefone": "(84) 99274-8838",
        "cpf": "09685083088",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 3,
        "nome": "Clementine Bauch",
        "cidade": "Ibirité",
        "turno": "Tarde",
        "email": "Nathan@gmail.com",
        "telefone": "(82) 99953-2460",
        "cpf": "13890816053",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 4,
        "nome": "Patricia Lebsack",
        "cidade": "Betim",
        "turno": "Manhã",
        "email": "Julianne.OConner@gmail.com",
        "telefone": "(27) 98134-6265",
        "cpf": "27132728075",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 5,
        "nome": "Chelsey Dietrich",
        "cidade": "Nova Lima",
        "turno": "Noite",
        "email": "Lucio_Hettinger@gmail.com",
        "telefone": "(69) 98445-0707",
        "cpf": "78553040020",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 6,
        "nome": "Mrs. Dennis Schulist",
        "cidade": "Ibirité",
        "turno": "Manhã",
        "email": "Karley_Dach@gmail.com",
        "telefone": "(98) 96897-8337",
        "cpf": "22990493042",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 7,
        "nome": "Kurtis Weissnat",
        "cidade": "Belo Horizonte",
        "turno": "Noite",
        "email": "Telly.Hoeger@gmail.com",
        "telefone": "(75) 98734-3245",
        "cpf": "02900045002",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 8,
        "nome": "Nicholas Runolfsdottir V",
        "cidade": "Belo Horizonte",
        "turno": "Noite",
        "email": "Sherwood@gmail.com",
        "telefone": "(48) 99632-6581",
        "cpf": "46329480044",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 9,
        "nome": "Glenna Reichert",
        "cidade": "Betim",
        "turno": "Manhã",
        "email": "Chaim_McDermott@gmail.com",
        "telefone": "(69) 98823-9669",
        "cpf": "41588938018",
        "solicitacoes": "[]",
        "caronas": "[]",
    },
    {
        "id": 10,
        "nome": "Clementina DuBuque",
        "cidade": "Nova Lima",
        "turno": "Noite",
        "email": "rey.padberg@gmail.com",
        "telefone": "(81) 98783-5176",
        "cpf": "96359265028",
        "solicitacoes": "[]",
        "caronas": "[]",
    }
    ]
}

function getUserVans() {
    db_van = JSON.parse(localStorage.getItem('db_van'));
    if (db_van == null) {
        db_van = db_van_incial;
       localStorage.setItem('db_van', JSON.stringify(db_van))
    };
}
function generateUUID() {
    var d = new Date().getTime();

    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function inserir_van(van) {

    let nova_van = {
        "id": generateUUID(),
        "nome": van.nome,
        "email": van.email,
        "telefone": van.telefone,
        "cidade": van.cidade,
        "turno": van.turno,
        'cpf': van.cpf,
        "solicitacoes": "[]",
        "caronas": "[]",
    };

    db_van.data.push(nova_van);
    alert("Van inserido com sucesso");

    localStorage.setItem('db_van', JSON.stringify(db_van));
}


function sendSolicitacao(idVan) {
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    var listaVans = JSON.parse(localStorage.getItem('db_van'));

    listaVans.data.forEach((van, index) => {
        if (idVan == van.id) {
            var newSolicitacao = van;
            if (typeof newSolicitacao.solicitacoes === 'string') {
                var solicitacaoVan = JSON.parse(newSolicitacao.solicitacoes)
            } else {
                var solicitacaoVan = newSolicitacao.solicitacoes
            }
            var canSolis = true;
            solicitacaoVan.forEach((solis) => {
                if (JSON.parse(solis).email == JSON.parse(usuarioCorrenteJSON).email) {

                    canSolis = false;
                    return false;
                }
            })
            if (canSolis) {
                solicitacaoVan.push(usuarioCorrenteJSON);
                newSolicitacao.solicitacoes = solicitacaoVan;
                listaVans.data[index] = newSolicitacao;
                localStorage.setItem('db_van', JSON.stringify(listaVans));
                alert("Solicitação enviada com sucesso");
            } else {
                alert("Solicitação aguardando resposta, espere pelo motorista");
            }


        }

    });

}

function aceitarCorrida(usuario) {
    var usuarioCorrenteJSON = JSON.parse(sessionStorage.getItem('usuarioCorrente'));

    usuario = JSON.parse(usuario)
    var caronas = usuarioCorrenteJSON.caronas;
    var solicitacoes = usuarioCorrenteJSON.solicitacoes;   
    if (typeof caronas === 'string') {
        var caronas = JSON.parse(caronas)
    }
    caronas.push(usuario);
    solicitacoes = solicitacoes.filter((solici) => JSON.parse(solici).id !== usuario.id); 
    usuarioCorrenteJSON.caronas = caronas;
    usuarioCorrenteJSON.solicitacoes = solicitacoes;  

    var listaVans = JSON.parse(localStorage.getItem('db_van'));
    listaVans.data = listaVans.data.filter((data) => data.id !== usuarioCorrenteJSON.id);
    listaVans.data.push(usuarioCorrenteJSON);
    localStorage.setItem('db_van', JSON.stringify(listaVans));  

   sessionStorage.setItem('usuarioCorrente',JSON.stringify(usuarioCorrenteJSON));
   
}

function recusarCorrida(usuario) {
    var usuarioCorrenteJSON = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
    usuario = JSON.parse(usuario)

    var solicitacoes = usuarioCorrenteJSON.solicitacoes;  
    solicitacoes = solicitacoes.filter((solici) => JSON.parse(solici).id !== usuario.id); 
    usuarioCorrenteJSON.solicitacoes = solicitacoes;  

    var listaVans = JSON.parse(localStorage.getItem('db_van'));
    listaVans.data = listaVans.data.filter((data) => data.id !== usuarioCorrenteJSON.id);
    listaVans.data.push(usuarioCorrenteJSON);
    localStorage.setItem('db_van', JSON.stringify(listaVans));  

   sessionStorage.setItem('usuarioCorrente',JSON.stringify(usuarioCorrenteJSON));   
}

function removeCorrida(usuario) {
    var usuarioCorrenteJSON = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
  
   var caronas = usuarioCorrenteJSON.caronas;
    if (typeof caronas === 'string') {
        var caronas = JSON.parse(caronas)
    }
   
    caronas = caronas.filter((carona) => carona.id !== usuario.id); 
    usuarioCorrenteJSON.caronas = caronas;

    var listaVans = JSON.parse(localStorage.getItem('db_van'));
    listaVans.data = listaVans.data.filter((data) => data.id !== usuarioCorrenteJSON.id);
    listaVans.data.push(usuarioCorrenteJSON);
    localStorage.setItem('db_van', JSON.stringify(listaVans));

    sessionStorage.setItem('usuarioCorrente',JSON.stringify(usuarioCorrenteJSON));   
}

function loginVan(email, cpf) {
    for (var i = 0; i < db_van.data.length; i++) {
        var usuario = db_van.data[i];
        if (email == usuario.email && cpf == usuario.cpf) {

            usuarioCorrente = usuario;

            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

            return true;
        }
    }
    return false;
}

