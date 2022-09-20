"use strict";
window.addEventListener('load', () => {
    const from = document.querySelector("#new-task-form");
    const inputNome = document.querySelector("#input-name");
    const inputEmail = document.querySelector("#input-email");
    const inputCnpj = document.querySelector("#input-cnpj");
    const inputPais = document.querySelector("#input-pais");
    const inputEstado = document.querySelector("#input-estado");
    const inputCep = document.querySelector("#input-cep");
    const inputComp = document.querySelector("#input-comp");
    const inputDescription = document.querySelector("#input-description");
    let taskList;
    if (JSON.parse(localStorage.getItem('listaDeCandidatos')) != null) {
        taskList = JSON.parse(localStorage.getItem('listaDeCandidatos'));
    }
    else {
        taskList = [];
    }
    from === null || from === void 0 ? void 0 : from.addEventListener('submit', (e) => {
        e.preventDefault();
        let id = taskList.length + 1;
        let task = [];
        task[0] = inputNome === null || inputNome === void 0 ? void 0 : inputNome.value;
        task[1] = inputEmail === null || inputEmail === void 0 ? void 0 : inputEmail.value;
        task[2] = inputCnpj === null || inputCnpj === void 0 ? void 0 : inputCnpj.value;
        task[3] = inputPais === null || inputPais === void 0 ? void 0 : inputPais.value;
        task[4] = inputEstado === null || inputEstado === void 0 ? void 0 : inputEstado.value;
        task[5] = inputCep === null || inputCep === void 0 ? void 0 : inputCep.value;
        task[6] = inputComp === null || inputComp === void 0 ? void 0 : inputComp.value;
        task[7] = inputDescription === null || inputDescription === void 0 ? void 0 : inputDescription.value;
        task[8] = id;
        if (!task[0]) {
            alert("Please fill out the task");
            return;
        }
        taskList.push(task);
        localStorage.setItem("listaDeEmpresas", JSON.stringify(taskList));
        if (inputNome) {
            inputNome.value = "";
        }
        ;
        if (inputEmail) {
            inputEmail.value = "";
        }
        ;
        if (inputCnpj) {
            inputCnpj.value = "";
        }
        ;
        if (inputPais) {
            inputPais.value = "";
        }
        ;
        if (inputEstado) {
            inputEstado.value = "";
        }
        ;
        if (inputEstado) {
            inputCep.value = "";
        }
        ;
        if (inputEstado) {
            inputComp.value = "";
        }
        ;
        if (inputDescription) {
            inputDescription.value = "";
        }
        ;
    });
});
