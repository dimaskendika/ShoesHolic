button.addEventListener("click",function () {
        popup.classList.add("show");
    }
);

buy.addEventListener(
    "click",
    function () {
        myPopup.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target ==popup) {
            myPopup.classList.remove(
                "show"
            );
        }
    }
);