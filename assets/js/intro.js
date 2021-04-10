const spanDo = document.getElementById('span-do');
const spanTask = document.getElementById('span-task');
const t = 1000;
const delayAtEnd = 1000;
let i = 0;
const tasks = [
    {
        do: 'write',
        task: 'code'
    }, 
    {
        do: 'work with',
        task: 'NodeJS, Angular, Python, etc.'
    },
    {
        do: 'fix',
        task: 'bugs'
    }, 
    {
        do: 'also create bugs',
        task: '(only sometimes, 😬)'
    }, 
    {
        do: 'like to think about',
        task: 'system design',
    }, 
    {
        do: 'write',
        task: 'documentation',
    }, 
    {
        do: 'like to',
        task: 'work on server side',
    }, 
];

function showText(idx) {
    const taskCount = tasks.length;
    i = (idx % taskCount);
    const task = tasks[i];

    // console.log('Task, ', task);

    const doText = task.do;
    const taskText = task.task;

    if (!spanDo || !spanTask) return;

    const doPromise =  modifyText(spanDo, doText, true);
    const taskPromise = modifyText(spanTask, taskText, true);

    Promise.all([doPromise, taskPromise])
    .then(([doResult, taskResult]) => {
        setTimeout(() => {
            // Add a delay so the text can be read
            const doRemovePromise = modifyText(spanDo, doText, false);
            const taskRemovePromise = modifyText(spanTask, taskText, false);

            Promise.all([doRemovePromise, taskRemovePromise])
            .then(() => {
                showText(i + 1);
            });
        }, delayAtEnd);
    })
}

function modifyText(node, text, add = false) {
    // console.log('Node: ', node);
    // console.log('Text: ', text, add);
    // const text = node.innerText;
    const len = text.length;
    let cursor, direction;
    if (add) {
        cursor = 0;
        direction = 1;
    } else {
        cursor = len;
        direction = -1;
    }
    const interval = t / len;
    const promise = new Promise((resolve, reject) => {
        let it = setInterval(() => {
            const cond = add? cursor <= len: cursor >= 0;
            if (cond) {
                node.innerText = text.substr(0, cursor);
                cursor = cursor + direction;
            } else {
                clearInterval(it);
                resolve('finished');
                // setTimeout(() => {
                // }, delayAtEnd);
            }
        }, interval)
    });
    return promise;
}

function skillClicked(event) {
    console.log(event);
    console.log(event.target);
    const target = event.target;

    if (target.nodeName === "SPAN" && target.classList.contains("skill-title")) {
        console.log("title clicked")
        const skillDescDiv = target.nextElementSibling;
        console.log('skillDsecDiv', skillDescDiv);
        skillDescDiv.classList.toggle('opened');
    }
    // const display = document.getElementById("html1").style.display;
    // if (display == 'none') {
    //     document.getElementById('html1').style.display = 'block';
    // } else {
    //     document.getElementById('html1').style.display = 'none';
    // }
}

function oneSkillClicked(event) {
    console.log(event);
    console.log(event.target);
    const target = event.target;

    collapseAll();

    if (target.nodeName === "DIV" && target.classList.contains("one-skill")) {
        const skillDescDiv = target.nextElementSibling.children[0];
        console.log('skillDsecDiv', skillDescDiv);
        skillDescDiv.classList.toggle('opened');
    }

    if (target.nodeName === "SPAN" && target.classList.contains("skill-title")) {
        console.log("title clicked")
        // temp1.parentElement.nextElementSibling.children[0].classList.toggle('opened')
        const skillDescDiv = target.parentNode.nextElementSibling.children[0];
        console.log('skillDsecDiv', skillDescDiv);
        skillDescDiv.classList.toggle('opened');
    }
    // const display = document.getElementById("html1").style.display;
    // if (display == 'none') {
    //     document.getElementById('html1').style.display = 'block';
    // } else {
    //     document.getElementById('html1').style.display = 'none';
    // }
}

function collapseAll() {
    const skillDescDiv = document.getElementsByClassName('skill-description');
    for (const desc of skillDescDiv) {
        desc.classList.remove('opened');
    }
}


showText(0);