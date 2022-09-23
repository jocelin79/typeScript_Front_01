window.addEventListener('load', () => {
    const list_el = document.querySelector("#tasks");

    let taskList: any[] = []

    taskList = JSON.parse(localStorage.getItem('listaDeCandidatos')!);

    let iteration = () => {

        let child = list_el?.lastElementChild;

        while (child) {
            list_el?.removeChild(child);
            child = list_el?.lastElementChild;
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

            list_el?.appendChild(task_el);

            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");
        };
    };

    iteration()
        
    let javaCount;
    let groovyCount;
    let angularCount;
    let mysqlCount;
    
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i][6] == "java") {
            javaCount++
        } else if (taskList[i][6] == "groovy") {
            groovyCount++
        }   else if (taskList[i][6] == "angular") {
            angularCount++
        }  else mysqlCount++
    }
    
    const artificio_graf_java = document.createElement("div");
    artificio_graf_java.classList.add("artificio");
    artificio_graf_java.innerText = (javaCount);
    
    const artificio_graf_groovy = document.createElement("div");
    artificio_graf_groovy.classList.add("artificio");
    artificio_graf_groovy.innerText = (groovyCount);
    
    const artificio_graf_angular = document.createElement("div");
    artificio_graf_angular.classList.add("artificio");
    artificio_graf_angular.innerText = (angularCount);
    
    const artificio_graf_mysql = document.createElement("div");
    artificio_graf_mysql.classList.add("artificio");
    artificio_graf_mysql.innerText = (mysqlCount);
})
