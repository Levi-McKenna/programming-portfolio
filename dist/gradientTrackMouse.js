"use strict";
function alterGradient() {
    document.addEventListener("mousemove", (event) => {
        const header = document.getElementById("landing-page--intro--dyn-grad");
        const headerPosition = header === null || header === void 0 ? void 0 : header.getBoundingClientRect();
        // find angle of gradient
        if (header && headerPosition) {
            let deltaX = event.x - headerPosition.x;
            let deltaY = event.y - headerPosition.y;
            // tangent of right angle
            let angle = deltaY / deltaX;
            header.style.background = `linear-gradient(${angle}deg, var(--fg-text-default) 40%, var(--fg-text-special))`;
        }
    });
}
