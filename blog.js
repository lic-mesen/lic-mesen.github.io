const WEBAPPURL = "https://script.google.com/macros/s/AKfycbwusuJqEPNpxlqL8_R3akyInLv4LNwB0EfnQdGDcEF3lorjzsAzWKYkLXkE4I8b-mA9aA/exec";

function getId() {
    const href = location.href;
    if (href.split("?")[1] === undefined) return null;
    const params = href.split("?")[1];
    const id = params.split("=")[1];
    if (isNaN(id)) return null;
    return id;
}

function getEditorData(id) {
    // エディター情報を返す関数
    switch(id){

    }
    return "じゅんびちゅう"
}

let html = "";

const root = document.getElementById("blogRoot");
const id = getId();

fetch(WEBAPPURL + "?type=article&id=" + id).then(res => res.json).then(json => {
    const data = json.data;
    const editorInfo = getEditorData(data[2])
    html += `<h1>${data[4]}</h1>`
    html += `<div class="content">${data[1]}</div>`
    html += `<div class="editorInfo">`
    html += `<div class="name">${editorInfo.name}</div>`
    html += `<div class="iconBox"><img src="icons/${editorInfo.id}.png" class="icon"></div>`
    html += `<div class="editorContent">${editorInfo.content}</div>`
    html += `</div>`
    root.innerHTML = html;
})