const pupils = document.querySelectorAll(".googly-pupil");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    pupils.forEach((pupil) => {
        const pupilRect = pupil.getBoundingClientRect();
        const centerX = pupilRect.left + pupilRect.width / 2;
        const centerY = pupilRect.top + pupilRect.height / 2;
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.min(pupilRect.width, pupilRect.height) / 2;
        const moveDistance = Math.min(distance, maxDistance);

        const angle = Math.atan2(deltaY, deltaX);
        const newX = centerX + moveDistance * Math.cos(angle);
        const newY = centerY + moveDistance * Math.sin(angle);

        pupil.style.transform = `translate(-50%, -50%) translate(${newX - centerX}px, ${newY - centerY}px)`;
    });
});