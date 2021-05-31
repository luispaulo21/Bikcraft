const menuDropDown = document.querySelector("div.container .cabecalho__logoEMenu nav");
const menuOpcoes = menuDropDown.querySelector("ul");

menuDropDown.addEventListener('click', () => {
	menuOpcoes.classList.toggle('menu--ativo');
});