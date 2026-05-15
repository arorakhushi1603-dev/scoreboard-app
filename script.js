const form = document.getElementById("eventForm");
const title = document.getElementById("title");
const date = document.getElementById("date");
const category = document.getElementById("category");
const description = document.getElementById("description");
const events = document.getElementById("events");

function addEvent(t, d, c, ds){
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <button class="delete">×</button>
        <h3>${t}</h3>
        <div class="date">${d}</div>
        <span class="tag">${c}</span>
        <p>${ds}</p>
    `;

    events.appendChild(card);
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    addEvent(title.value, date.value, category.value, description.value);
    form.reset();
});

events.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});

document.getElementById("sample").onclick = function(){
    events.innerHTML = "";
    addEvent("Tech Conference","2026-02-15","Conference","Latest tech trends and talks");
    addEvent("JS Workshop","2026-02-20","Workshop","Hands-on JavaScript learning");
};

document.getElementById("clear").onclick = function(){
    events.innerHTML = "";
};