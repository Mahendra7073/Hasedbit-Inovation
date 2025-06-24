// Change text color based on input valueMore actions
document.getElementById("colorchange").addEventListener("click", function () {
    let colorValue = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = colorValue;
});

// Change font size based on range slider
document.getElementById("fontsize").addEventListener("input", function () {
    let fontSizeValue = document.getElementById("fontsize").value;
    document.getElementById("text-container").style.fontSize = fontSizeValue + "px";
});

// Toggle Italics
document.getElementById("italic").addEventListener("click", function () {
    let textContainer = document.getElementById("text-container");
    textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
});

// Toggle Underline
document.getElementById("underline").addEventListener("click", function () {
    let textContainer = document.getElementById("text-container");
    textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
});

// Toggle Bold
document.getElementById("bold").addEventListener("click", function () {
    let textContainer = document.getElementById("text-container");
    textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";
});

// Change font family based on dropdown selection
document.getElementById("list").addEventListener("change", function () {
    let selectedFont = document.getElementById("list").value;
    document.getElementById("text-container").style.fontFamily = selectedFont;
});

// Get CSS properties and display them
document.getElementById("getstyle").addEventListener("click", function () {
    let textContainer = document.getElementById("text-container");
    let computedStyle = window.getComputedStyle(textContainer);
    
    let cssProperties = `color: ${computedStyle.color}; 
        font-size: ${computedStyle.fontSize}; 
        font-family: ${computedStyle.fontFamily}; 
        font-style: ${computedStyle.fontStyle}; 
        font-weight: ${computedStyle.fontWeight}; 
        text-decoration: ${computedStyle.textDecoration};`;

    document.getElementById("css-props").textContent = cssProperties;
});