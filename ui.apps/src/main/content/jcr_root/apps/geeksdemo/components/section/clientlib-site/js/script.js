let sectionLeft = document.getElementById('section_left');
let sectionRight = document.getElementById('section_right');


window.addEventListener('load', () => {
  console.log(sectionLeft)
  console.log(sectionRight)
  if(sectionLeft === null) {
    sectionRight.style.width = "100%";
    sectionRight.style.paddingLeft = "0";
    sectionRight.style.display = "flex";
    sectionRight.style.flexDirection = "column";
    sectionRight.style.justifyContent = "center";
    sectionRight.style.alignItems = "center";
  }else{
    console.log('nao entrou')
  }
})