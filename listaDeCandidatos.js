window.addEventListener('load', function () {
    var list_el = document.querySelector("#tasks");
    var taskList = [];
    taskList = JSON.parse(localStorage.getItem('listaDeCandidatos'));
    var iteration = function () {
        var child = list_el === null || list_el === void 0 ? void 0 : list_el.lastElementChild;
        while (child) {
            list_el === null || list_el === void 0 ? void 0 : list_el.removeChild(child);
            child = list_el === null || list_el === void 0 ? void 0 : list_el.lastElementChild;
        }
        for (var i = 0; i < taskList.length; i++) {
            var task_el = document.createElement("div");
            task_el.classList.add("task");
            var task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
            task_content_el.innerText = ("Número: " + taskList[i][8] + "\n Nom: " + taskList[i][0]
                + "\n Email: " + taskList[i][1] + "\n CPF: " + taskList[i][2] + "\n Idade: "
                + taskList[i][3] + "\n Estado: " + taskList[i][4] + "\n CEP: " + taskList[i][5] +
                "\n Competência: " + taskList[i][6] + "\n Descrição: " + taskList[i][7]);
            task_el.appendChild(task_content_el);
            list_el === null || list_el === void 0 ? void 0 : list_el.appendChild(task_el);
            var task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");
        }
        ;
    };
    iteration();
    var javaCount;
    var groovyCount;
    var angularCount;
    var mysqlCount;
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i][6] == "java") {
            javaCount++;
        }
        else if (taskList[i][6] == "groovy") {
            groovyCount++;
        }
        else if (taskList[i][6] == "angular") {
            angularCount++;
        }
        else
            mysqlCount++;
    }
    var artificio_graf_java = document.createElement("div");
    artificio_graf_java.classList.add("artificio");
    artificio_graf_java.innerText = (javaCount);
    var artificio_graf_groovy = document.createElement("div");
    artificio_graf_groovy.classList.add("artificio");
    artificio_graf_groovy.innerText = (groovyCount);
    var artificio_graf_angular = document.createElement("div");
    artificio_graf_angular.classList.add("artificio");
    artificio_graf_angular.innerText = (angularCount);
    var artificio_graf_mysql = document.createElement("div");
    artificio_graf_mysql.classList.add("artificio");
    artificio_graf_mysql.innerText = (mysqlCount);
});
