let headerTextContainer = document.querySelector("#rightSection > #header > h1");

function typingEffect (textContainer) {
    let text = textContainer.innerHTML;
    textContainer.innerHTML = '';
    function update() {
        if (text.length == 0) {
            return;
        }
        textContainer.innerHTML += text[0];
        text = text.slice(1);
        setTimeout(update, 100);
    }
    setTimeout(update, 100);
}
typingEffect(headerTextContainer);