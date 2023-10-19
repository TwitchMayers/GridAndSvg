function initIntIcon(i) {
    if (i.classList.contains("js-nc-int-icon-loaded"))
        return;
    i.classList.add("js-nc-int-icon-loaded");
    i.closest("svg").addEventListener("click", function (n) {
        i.classList.toggle("nc-int-icon-state-b")
    });
};
let intIcons = document.getElementsByClassName("js-nc-int-icon");
for (let i = 0; intIcons.length > i; i++) {
    initIntIcon(intIcons[i]);
}

document.getElementById("map-layer").addEventListener("click", names);

function names(event) {
    if (event.target.tagName == "rect") {
        let span = document.querySelector('.info')
        span.innerHTML = `${event.target.getAttribute("name")}`
        event.target.style.fill = 'grey'

        const elements = document.querySelectorAll('[name]');
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].getAttribute('name') == event.target.getAttribute("name")) {
                elements[i].style.fill = 'grey'
            }
            else {
                elements[i].style.fill = ''
            }
        }
    }
}