const drag_item = document.querySelectorAll('.drag-item');
const drag_list = document.querySelectorAll('.drag-item-list');

let selectItem;

drag_item.forEach((item)=>{
    item.addEventListener('dragstart',onDragStart);
});

drag_list.forEach((list)=>{
    list.addEventListener('dragover',onDragOver);
    list.addEventListener('dragenter',onDragEnter);
    list.addEventListener('drop',onDrop);
});

function onDrop() {
    this.append(selectItem);
    selectItem = null;
}

function onDragStart() {
    selectItem = this;
    console.log(selectItem);
}

function onDragOver(e) {
    e.preventDefault();
}

function onDragEnter(e) {
    e.preventDefault();
}