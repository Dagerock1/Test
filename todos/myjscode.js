/**
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function pow2() {
    alert(document.getElementById("todos").value * document.getElementById("todos").value);
}

document.querySelector('button#sort-asc').onclick = function () {
    sortList('data-price');
}
document.querySelector('button#sort-desc').onclick = function () {
    sortListDesc('data-price');
}
document.querySelector('button#sort-rating').onclick = function () {
    sortListDesc('data-rating');
}

function sortList(sortType) {
    let items = document.querySelector('.goods-wrap');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.goods-wrap');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
 */
(function main() {
    document.querySelector('input').addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            li.setAttribute("class", "todoListItem");
            console.log(this.value);
            let parent = document.getElementById('parent');
            let li = document.createElement('li');
            li.innerHTML = event;
            parent.appendChild(event);
        }
    });
}());

function Run() {

    const todoList = document.getElementById('newNote')
    todoList.addEventListener("keypress", this.addNewField);

}
/*
(function addNewField (event) {

        if (event.keyCode == 13) {
        // создаем то что надо для добавления
        let li = document.createElement("li");
        /// добавляем классы в элемет чтобы красиво выглядело
        li.setAttribute("class", "todoListItem");
        // получаем значение с event которое хотим добавить в список (сам подумаешь как это делать)
        console.log(event)
        
        // реализуем добавление с помощью appendChild
        
        // какой-то код
        //////////////................................
        }
        }
        */
/*(function addNewField(event) {
    document.querySelector('input').addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            li.setAttribute("class", "todoListItem");
            console.log(this.value);
            let parent = document.getElementById('parent');
            let li = document.createElement('li');
            li.innerHTML = event;
            parent.appendChild(event);
        }
    });
})(); */