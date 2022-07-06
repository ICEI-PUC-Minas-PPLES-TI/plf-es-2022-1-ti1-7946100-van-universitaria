const LOGIN_URL = "login.html";



var db_usuarios = {};

var usuarioCorrente = {};

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

const dadosIniciais = {
    usuarios: [
        { "id": generateUUID(), "login": "lucas", "senha": "123", "nome": "Lucas Mattos Rodrigues", "email": "lucas@gmail.com", "endereco": "Rua X" },
        { "id": generateUUID(), "login": "caio", "senha": "123", "nome": "Caio Henrique Miranda dos Reis", "email": "caio@gmail.com", "endereco": "Rua X" },
    ]
};


function initLoginApp() {

    var usuariosJSON = localStorage.getItem('db_usuarios');

    if (!usuariosJSON) {
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');
        db_usuarios = dadosIniciais;
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
    } else {
        db_usuarios = JSON.parse(usuariosJSON);
    }
};



function loginUser(login, senha) {
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente = usuario;
            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

            return true;
        }
    }
    return false;
}


function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    window.location = LOGIN_URL;
}

function addUser(nome, login, senha, email, endereco,telefone) {
    let usuario = {
   "id":  generateUUID(),
   "login": login,
   "senha": senha,
   "nome": nome,
   "email": email,
   "endereco": endereco,
   "telefone":telefone,
   "solicitacoes": [],
   "vanCadastrada": {
    "solicitado": false,
    "aprovado":false,
    "dadosVan":"",
    },
 };
    db_usuarios.usuarios.push(usuario);
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuario));
}


function addCaronaUser(user){
    var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios'));   
    user = JSON.parse(user)
    db_usuarios.usuarios = db_usuarios.usuarios.filter((usuario) => usuario.id !== user.id)

    var usuarioCorrenteJSON = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
    user.vanCadastrada = {
        "solicitado": true,
        "aprovado":true,
        "dadosVan":usuarioCorrenteJSON,
    }
    db_usuarios.usuarios.push(user)
   localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
}

function awaitMorotista(van){
    var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios'));   
    var usuarioCorrenteJSON = JSON.parse(sessionStorage.getItem('usuarioCorrente'));

    db_usuarios.usuarios = db_usuarios.usuarios.filter((usuario) => usuario.id !== usuarioCorrenteJSON.id)

    usuarioCorrenteJSON.vanCadastrada = {
        "solicitado": true,
        "aprovado":false,
        "dadosVan":van,
    }


    db_usuarios.usuarios.push(usuarioCorrenteJSON)
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
    sessionStorage.setItem('usuarioCorrente',JSON.stringify(usuarioCorrenteJSON));
    window.location = "editar_perfil.html"
}

function removeCaronaUser(user){
    var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios'));   
    user = JSON.parse(user)
    db_usuarios.usuarios = db_usuarios.usuarios.filter((usuario) => usuario.id !== user.id)

    user.vanCadastrada = {        
        "solicitado": false,
        "aprovado":false,
        "dadosVan":{},
    }

    db_usuarios.usuarios.push(user)
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
}
initLoginApp();
