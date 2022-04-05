let xBola = 250;
let yBola = 200;
let diametroBola = 20;
let raio = diametroBola - 15
let velocidadeXBola = 6;
let velocidadeYBola = -6;
let xRetangulo = 5;
let yRetangulo = 150;
let alturaRetan = 90;
let larguraRetan = 10;
let colidiuBiblioteca = false;
let xRaqueteOponente = 485;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let meusPontos = 0;
let pontosDoOponente = 0;
let raquetada;
let pontosdojogo;
let trilha;
  
function preload(){
  raquetada = loadSound("raquetada.mp3")
  pontosdojogo = loadSound("ponto.mp3")
  trilha = loadSound("trilha.mp3")
}


function setup() {
  createCanvas(500, 400);
  trilha.loop()
}

function draw() {
  background(0);
  bolinha();
  movimentobola();
  bordacampo();
  raquete(xRetangulo, yRetangulo);
  movimentoMinhaRaquete();
  //colisaoraquete();
  colisaoraquetebiblioteca(xRetangulo, yRetangulo);
  colisaoraquetebiblioteca(xRaqueteOponente, yRaqueteOponente);
  raquete(xRaqueteOponente, yRaqueteOponente)
  movimentoRaqueteOponente();
  placar();
  pontos();
  //movimentamultiplayer();
} 
  
  function bolinha(){
  circle(xBola, yBola, diametroBola)
  
}

function movimentobola(){
  
  xBola += velocidadeXBola;              
  yBola += velocidadeYBola;
  
}

function bordacampo(){
  
  if (xBola + raio> width || xBola - raio< 0){
    velocidadeXBola *= -1;
  }

  if (yBola + raio> height || yBola - raio< 0){velocidadeYBola *= -1;}
  
}

function raquete(x, y){
  rect(x, y, larguraRetan, alturaRetan)
}

function movimentoMinhaRaquete(){
  
  if (keyIsDown(UP_ARROW)){
    yRetangulo -= 10;
}
  if (keyIsDown(DOWN_ARROW)){
    yRetangulo += 10;
  }
}

function colisaoraquete(){
  
  if (xBola - raio < xRetangulo + larguraRetan && yBola - raio < yRetangulo + alturaRetan && yBola + raio > yRetangulo){
  velocidadeXBola *= -1 
  raquetada.play()
  }
  
}

function colisaoraquetebiblioteca(x,y){
  colidiuBiblioteca = collideRectCircle(x, y,larguraRetan ,alturaRetan, xBola, yBola, diametroBola)
    if (colidiuBiblioteca){
  velocidadeXBola *= -1
    raquetada.play()} 
}
 
function movimentoRaqueteOponente(){
  velocidadeYOponente = yBola - yRaqueteOponente - larguraRetan / 2 - 70;
  yRaqueteOponente += velocidadeYOponente
}
  function movimentamultiplayer(){
    if (keyIsDown(87)){
    yRaqueteOponente -= 10;
}
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
      }
  
}

function placar(){
  textAlign(CENTER)
  textSize(16)
  fill(color(0,0,128))
  rect(150, 5, 40, 20)
  fill(200)
  text(meusPontos, 170, 20)
  fill(color(0,0,128))
  rect(320, 5, 40, 20)
  fill(200)
  text(pontosDoOponente, 340, 20)
  
}
function pontos(){
  if (xBola > 490){
    meusPontos += 1;
    pontosdojogo.play()
  }
  if (xBola < 10){
    pontosDoOponente += 1;
    pontosdojogo.play()
  }
}


