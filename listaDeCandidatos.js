"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chart_js_1 = require("chart.js");
window.addEventListener('load', () => {
    const list_el = document.querySelector("#tasks");
    let taskList = [];
    taskList = JSON.parse(localStorage.getItem('listaDeCandidatos'));
    let iteration = () => {
        let child = list_el === null || list_el === void 0 ? void 0 : list_el.lastElementChild;
        while (child) {
            list_el === null || list_el === void 0 ? void 0 : list_el.removeChild(child);
            child = list_el === null || list_el === void 0 ? void 0 : list_el.lastElementChild;
        }
        for (let i = 0; i < taskList.length; i++) {
            const task_el = document.createElement("div");
            task_el.classList.add("task");
            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
            task_content_el.innerText = ("Número: " + taskList[i][8] + "\n Nom: " + taskList[i][0]
                + "\n Email: " + taskList[i][1] + "\n CPF: " + taskList[i][2] + "\n Idade: "
                + taskList[i][3] + "\n Estado: " + taskList[i][4] + "\n CEP: " + taskList[i][5] +
                "\n Competência: " + taskList[i][6] + "\n Descrição: " + taskList[i][7]);
            task_el.appendChild(task_content_el);
            list_el === null || list_el === void 0 ? void 0 : list_el.appendChild(task_el);
            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");
        }
        ;
    };
    iteration();
    let java;
    let groovy;
    let angular;
    let mysql;
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i][6] == "java") {
            java++;
        }
        else if (taskList[i][6] == "groovy") {
            groovy++;
        }
        else if (taskList[i][6] == "angular") {
            angular++;
        }
        else
            mysql++;
    }
    let ctx = document.getElementById(".line-chart");
    const labels = ["Java", "Groovy", "Angular", "MySQL"];
    const data = {
        labels: labels,
        datasets: [{
                label: 'Gráfico de Candidatos por Competência',
                data: [3, 1, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                borderWidth: 1
            }]
    };
    let chartGraph = new chart_js_1.Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
