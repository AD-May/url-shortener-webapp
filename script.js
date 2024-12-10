const aboutSection = document.getElementById("about");
const header = document.getElementById("head");

const renderImage = () => {
    const imageContainer = document.createElement("div");
    const imageElement = document.createElement("img");
    imageContainer.className = "imageContainerMobile container-fluid";
    imageElement.id = "clipart";
    imageElement.src = "styles/images/illustration-working.svg"
    imageElement.alt = "Desk worker clipart";
    imageElement.ariaLabel = "A clipart image of a desk-worker";
    imageContainer.appendChild(imageElement)

    if (window.innerWidth > 376) {
        aboutSection.appendChild(imageContainer);
    } else {
        aboutSection.insertAdjacentElement("beforebegin", imageContainer);
    }
}

renderImage();

