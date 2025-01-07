const generateButtonEL = document.getElementById("generateBtn");

const singleHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    return hexColor;
};

const colorPalettleGenerator = () => {
    const colorPalette = [];
    for(let i = 0; i < 4 ; i++){
        colorPalette.push(singleHexColor());
    }
    return colorPalette;
};

const renderColorPalette = () => {
    const colorsContainerEl = document.querySelector(".colors-container");
    colorsContainerEl.innerHTML = "";

    const colorPalette = colorPalettleGenerator();

    colorPalette.forEach((color,i) => {
        const colorDiv = document.createElement("div");
        colorDiv.id = `color${i+1}`;
        colorDiv.className = "colorbox";
        colorDiv.style.background = color;
        const colorTag = document.createElement("p");
        colorTag.id = `color${i+1}Tag`;
        colorTag.className = "colortag";
        colorTag.innerHTML = color;

        colorDiv.appendChild(colorTag);
        colorsContainerEl.appendChild(colorDiv);
    });
    
    const copytoClipBoard = (id) => {
        const el = document.getElementById(id);
        navigator.clipboard.writeText(el.innerText).then(() =>{
            alert("Copied to clipboard");
        }).catch((error) => {
            alert("Failed to copy to clipboard");
        });
    };
 
    const colorTag = document.querySelectorAll(".colortag");
    colorTag.forEach((colorTag,i) =>{
        colorTag.addEventListener("click", ()=> copytoClipBoard(`color${i+1}Tag`));
    });
};

renderColorPalette();
generateButtonEL.addEventListener("click", renderColorPalette);