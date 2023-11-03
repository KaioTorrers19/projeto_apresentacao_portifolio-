const light =  document.documentElement
const img = document.querySelector("#profile img")
// Função ao clicar  verificar se tem light na class se tiver ele remove se não ele adiciona 
function active(){
// Se for verdadeiro  a classe light ele remove a classe se for falso ele adiciona a light  
// if(light.classList.contains("light")){
// light.classList.remove("light");
// }else{
//   light.classList.add("light");
light.classList.toggle('light')
if(light.classList.contains("light")){
  img.setAttribute("src", "assets/avatar-light.png")
  img.setAttribute("alt", "Kaio com blusa preta e com colar com pingente de ouro com a cara mostrada de frente")
}else{
img.setAttribute("src", "assets/avatar.png")
img.setAttribute("alt", "Foto de Kaio Torres com mão perto  da boca com um relógio com óculos escuro e rosto de perfil com fono de ouvido na orelha" )
}
};
