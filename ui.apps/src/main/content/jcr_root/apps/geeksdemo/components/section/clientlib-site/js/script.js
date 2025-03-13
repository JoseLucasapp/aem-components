window.addEventListener('load', () => {
  let sectionLeft = document.getElementById('section_left');
  let sectionRight = document.getElementById('section_right');
  let centerContent = document.getElementById('center').value;
  let border = document.getElementById('border').value;

  if (sectionLeft === null) {
    sectionRight.style.width = 100 + "%";
    sectionRight.style.paddingLeft = "0";
  }

  if(centerContent === "true"){
    sectionRight.style.display = "flex";
    sectionRight.style.flexDirection = "column";
    sectionRight.style.justifyContent = "center";
    sectionRight.style.alignItems = "center";
  }

  if(border === "true"){
    sectionLeft.style.borderRight = "1px solid black";
  }
})