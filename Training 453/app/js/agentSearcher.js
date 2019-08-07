function search(inputId) {
    var input, filter, h1, container, txtValue;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    container = document.getElementById("agent-container");
    blocks = container.getElementsByClassName("block");
    for (i = 0; i < blocks.length; i++) {
        h1 = blocks[i].getElementsByTagName("h1")[0];
        txtValue = h1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            blocks[i].style.display = "";
        } else {
            blocks[i].style.display = "none";
        }
    }
}
$("#search-banner__input").on('keydown', function (e) {
    if (e.keyCode == 13) {
        search('search-banner__input');
    }
});

$("#search-mobile__input").on('keydown', function (e) {
    if (e.keyCode == 13) {
        search('search-mobile__input');
    }
});
