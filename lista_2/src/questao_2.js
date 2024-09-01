const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,
    genero: "Ficção"
};

let propertyExists = false;
for(const property in livro){
    if(property == 'editora'){
        propertyExists = true;
        break;
    }
}

if(!propertyExists){
    livro.editora = 'Editora X'
}
console.log(livro)