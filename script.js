document.addEventListener("DOMContentLoaded", () => {
    let rd = document.querySelector(".presentation");
    let styles = {
        "position": "relative",
        "top": "5%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
        "transition-duration": "3s"
    }
    Object.assign(rd.style, styles);
});

