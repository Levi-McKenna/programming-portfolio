function alterGradient() {
    document.addEventListener("mousemove", (event: MouseEvent) => {
        const header = document.getElementById("landing-page--intro--dyn-grad");
        const headerPosition = header?.getBoundingClientRect();

        // find angle of gradient
        if (header && headerPosition) {
            let deltaX : number = event.x - headerPosition.x;
            let deltaY : number = event.y - headerPosition.y;
            
            // tangent of right angle
            let angle : number = deltaY / deltaX;

            header.style.background = "linear-gradient(${angle}deg, var(--fg-text-default) 40%, var(--fg-text-special))";
            console.info(angle);
        }

    })
}
