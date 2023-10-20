'use strict';

const cepInput = document.getElementById('cep');
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

async function pegarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const cepInfo = await response.json();
    return cepInfo;
}

async function preencherCampos() {
    const endereco = document.getElementById('endereco');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const estado = document.getElementById('estado');
    const cep = cepInput.value;

    if (cep === '') {
        alert('DIGITE UM VALOR VÁLIDO NO CAMPO CEP!!');
    } else {
        const cepInfo = await pegarCep(cep);
        endereco.value = cepInfo.logradouro;
        bairro.value = cepInfo.bairro;
        cidade.value = cepInfo.localidade;
        estado.value = cepInfo.uf;
        // document.body.style.backgroundImage = `url("${apiUnsplash + cepInfo.localidade}")`;
    }
}

cepInput.addEventListener('keyup', preencherCampos);

