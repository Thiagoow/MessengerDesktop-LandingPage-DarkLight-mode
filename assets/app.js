/* ----------Fazendo o scroll suave da página 
com os links e id no HTML:*/

/* Selecionando os links do header pela classe e elementos "a" 
que tem o href com id: */
const links = document.querySelectorAll(".navBarList a[href^='#']");
/* Testando pra ver se deu certo a seleção 
console.log(links);*/

/*Pra cada link com id: */
links.forEach((item) => {
  /* Testando pra ver se deu certo:
  console.log(item);*/

  //Executa a função sempre que eu clicar no link:
  item.addEventListener("click", scrollToId);
});

function scrollToId(event) {
  /* Testando pra ver se deu certo:
  console.log(event);*/

  /* Retira o comportamento padrão dessa função
  que add o #id na url da página quando o link
  for clicado. Isso também remove a função padrão
  do scroll, mas definimos ela dnv no *¹ */
  event.preventDefault();

  //Pega o elemento/link no que eu cliquei:
  const element = event.target;
  //Pega o id do elemento/link que eu cliquei
  const id = element.getAttribute("href");
  /* Testando pra ver se deu certo:
  console.log(id);*/

  //Retorna a div a partir do id presente no link:
  const pageDivLink = document.querySelector(id).offsetTop;
  /* Retorna a distância da div até o topo:
  console.log(pageDivLink.offsetTop);*/

  //*¹ Desce a página até o:
  window.scroll({
    top: pageDivLink - 90,
    /* Como nesse projeto nosso header é fixo,
    diminuímos a distância do scroll pela altura
    do header (em Px), fazendo com que ele não cubra 
    o início da div que fizemos o scroll 😉*/
    behavior: "smooth"
  });
}
