import { MovieType } from '../types';
import test from '../assets/Oppenheimer.jpeg';
import AnatomiaDeUmaQueda from '../assets/Anatomia-de-uma-Queda.jpeg';
import ZonaDeInteresse from '../assets/Zona-de-Interesse.jpeg';
import PobresCriaturas from '../assets/Pobres-Criaturas.jpeg';
import VidasPassadas from '../assets/Vidas-Passadas.jpeg';
import FiccaoAmericana from '../assets/Ficcao-Americana.jpeg';
import TodosMenosVoce from '../assets/Todos-Menos-Voce.jpeg';
import MatadorDeAluguel from '../assets/Matador-de-Aluguel.jpeg';
import Duna from '../assets/Duna.jpeg';
import Pearl from '../assets/Pearl.jpeg';

const movies: MovieType[] = [
  {
    id: 1,
    title: 'Oppenheimer',
    storyline: "Oppenheimer é um filme histórico de drama dirigido por Christopher Nolan e baseado no livro biográfico vencedor do Prêmio Pulitzer, Prometeu Americano: O Triunfo e a Tragédia de J. Robert Oppenheimer, escrito por Kai Bird e Martin J. Sherwin. Ambientado na Segunda Guerra Mundial, o longa acompanha a vida de J. Robert Oppenheimer (Cillian Murphy), físico teórico da Universidade da Califórnia e diretor do Laboratório de Los Alamos durante o Projeto Manhattan - que tinha a missão de projetar e construir as primeiras bombas atômicas. A trama acompanha o físico e um grupo formado por outros cientistas ao longo do processo de desenvolvimento da arma nuclear que foi responsável pelas tragédias nas cidades de Hiroshima e Nagasaki, no Japão, em 1945. Além de Cillian, o elenco também traz nomes como Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Gary Oldman, Jack Quaid, Gustaf Skarsgård, Rami Malek e Kenneth Branagh.",
    rating: 4.5,
    image: test,
    bookmarked: true,
    genre: ['Histórico', 'Suspense'],
  },
  {
    id: 2,
    title: 'Anatomia de uma Queda',
    storyline: 'Anatomia de uma Queda é um suspense dramático dirigido por Justine Triet, que conta a história de um homem que é encontrado morto na neve do lado de fora do chalé isolado onde morava com sua esposa Sandra (Sandra Hüller), uma escritora alemã, e seu filho de 11 anos com deficiência visual. A investigação conclui se tratar de uma "morte suspeita": é impossível saber ao certo se ele tirou a própria vida ou se foi assassinado. A viúva é indiciada, tendo seu próprio filho no meio do conflito: entre o julgamento e a vida familiar, as dúvidas pesam na relação mãe-filho, pois o menino é a única testemunha do acontecido. Com estreia mundial no Festival de Cannes 2023 e Festival Varilux de Cinema Francês no Brasil, o longa venceu o prêmio Palma de Ouro.',
    rating: 4.5,
    image: AnatomiaDeUmaQueda,
    bookmarked: false,
    genre: ['Policial', 'Drama', 'Suspense', 'Crime'],
  },
  {
    id: 3,
    title: 'Zona de Interesse',
    storyline: 'Zona de Interesse, longa-metragem britânico dirigido pelo cineasta Jonathan Glazer, é um drama histórico que se passa durante a Segunda Guerra Mundial. Adaptado do romance homônimo escrito pelo autor Martin Amis, no ano de 2014, em Zona de Interesse, Rudolf Höss (Christian Friedel), o comandante de Auschwitz, e sua esposa Hedwig (Sandra Hüller), desfrutam de uma vida aparentemente comum e bucólica, em uma casa com jardim. Mas, por trás da fachada de tranquilidade, a família feliz vive, na verdade, ao lado do campo de concentração de Auschwitz. O dia-a dia destes personagens se desenrola entre os gritos abafados de desespero, de um genocídio em curso, do qual, eles também são diretamente responsáveis. O longa ficcional, premiado em Cannes e indicado ao Oscar em cinco categorias, entre elas a de Melhor Filme, mistura drama, guerra e história, abordando o horror do nazismo, a partir de uma perspectiva singular e perturbadora.',
    rating: 5,
    image: ZonaDeInteresse,
    bookmarked: false,
    genre: ['Drama', 'Histórico', 'Guerra'],
  },
  {
    id: 4,
    title: 'Pobres Criaturas',
    storyline: "Pobres Criaturas é um filme de romance e ficção científica dirigido por Yorgos Lanthimos e produzido por Emma Stone, que também atua no longa. Baseada no livro homônimo de Alasdair Grey e referenciando o clássico Frankenstein, a história se passa na Era Vitoriana e acompanha Bella Baxter (interpretada por Stone), trazida de volta à vida após seu cérebro ser substituído pelo do filho que ainda não nasceu. O experimento é realizado pelo doutor Godwin Baxter (Willem Dafoe), um cientista brilhante, porém nada ortodoxo. Querendo conhecer mais do mundo, a jovem foge com um advogado e viaja pelos continentes, exigindo igualdade e libertação. Além de Stone e Dafoe, o elenco também conta com Mark Ruffalo, Jerrod Carmichael, Ramy Youssef, Christopher Abbott, Margaret Qualley, Kathryn Hunter, Suzy Bemba e Wayne Brett.",
    rating: 4.8,
    image: PobresCriaturas,
    bookmarked: true,
    genre: ['Comédia', 'Drama', 'Fantasia', 'Romance', 'Ficção Científica'],
  },
  {
    id: 5,
    title: 'Vidas Passadas',
    storyline: 'Escrito e dirigido por Celine Song, Vidas Passadas é um drama que conta a história de Nora (Greta Lee) e Hae Sung (Teo Yoo), dois amigos de infância com uma conexão profunda, mas que acabam se separando quando a família de Nora decide sair da Coréia do Sul e se mudar para a cidade de Toronto. Vinte anos depois, os dois amigos se reencontram em Nova York e vivenciam uma semana fatídica enquanto confrontam as noções de destino, amor e as escolhas que compõem uma vida.',
    rating: 4.2,
    image: VidasPassadas,
    bookmarked: true,
    genre: ['Drama'],
  },
  {
    id: 6,
    title: 'Ficção Americana',
    storyline: "Em American Fiction, o autor Thelonious \"Monk\" Ellison (Jeffrey Wright) fica irritado depois que um de seus trabalhos não foi aceito pelas editoras e sua carreira parece estar estagnada pois sua obra não é considerada \"negra o suficiente\". Enquanto isso o livro We's Lives in Da Ghetto, de Sinatra Golden (Issa Rae), chega a lista de mais vendidos, deixando o autor em crise ainda mais frustrado. Ao perceber o tipo de conteúdo que o público estar interessado, Thelonious  decide escrever um romance satírico sob pseudônimo na intenção de expor as hipocrisias do mundo editorial.",
    rating: 4.0,
    image: FiccaoAmericana,
    bookmarked: true,
    genre: ['Comédia', 'Drama'],
  },
  {
    id: 7,
    title: 'Todos Menos Você',
    storyline: 'Em Todos Menos Você Bea (Sydney Sweeney) e Ben (Glen Powell), combinam um encontro após se esbarrar nos corredores da faculdade em que estudam. Em uma noite quase perfeita, o jovem casal possui tudo para manter o contato: química, uma boa conversa e um incrível desejo um pelo outro. Mas o encontro acaba ficando de escanteio, e a relação dos dois esfriando. Anos depois, eles são convidados para o mesmo casamento na Austrália e fazem um trato de fingir ser um casal para todos, mas a tarefa se torna difícil quando a antipatia que nutrem um pelo outro fica nítida.',
    rating: 3.7,
    image: TodosMenosVoce,
    bookmarked: false,
    genre: ['Comédia', 'Romance'],
  },
  {
    id: 8,
    title: 'Matador de Aluguel',
    storyline: 'Remake do filme Matador de Aluguel que foi lançado em 1989 e estrelado por Patrick Swayze no papel de um segurança em um turbulento bar. No remake, um ex-lutador de UFC (Jake Gyllenhaal) aceita um emprego como segurança em uma estalagem em Florida Keys, mas logo descobre que nem tudo é o que parece neste paraíso tropical.',
    rating: 3.8,
    image: MatadorDeAluguel,
    bookmarked: false,
    genre: ['Ação', 'Drama', 'Suspense'],
  },
  {
    id: 9,
    title: 'Duna',
    storyline: "Inspirado na série de livros de Frank Herbert, Duna se passa em um futuro longínquo. O Duque Leto Atreides administra o planeta desértico Arrakis, também conhecido como Duna, lugar de única fonte da substância rara chamada de \"melange\", usada para estender a vida humana, chegar a velocidade da luz e garantir poderes sobrehumanos. Para isso ele manda seu filho, Paul Atreides (Timothée Chalamet), um jovem brilhante e talentoso que nasceu para ter um grande destino além de sua imaginação, e seus servos e concubina Lady Jessica (Rebecca Fergunson), que também é uma Bene Gesserit. Eles vão para Duna, afim de garantir o futuro de sua família e seu povo. Porém, uma traição amarga pela posse da melange faz com que Paul e Jessica fujam para os Fremen, nativos do planeta que vivem nos cantos mais longes do deserto.",
    rating: 4.5,
    image: Duna,
    bookmarked: true,
    genre: ['Drama', 'Ficção Científica'],
  },
  {
    id: 10,
    title: 'Pearl',
    storyline: 'Pearl é mais um capítulo do mundo distorcido de X do cineasta Ti West. O ano é 1918, e a jovem Pearl (Mia Goth) está obcecada em se tornar famosa. Presa na fazenda isolada de sua família, Pearl se vê obrigada a cuidar de seu pai doente, e viver sob a vigilância constante de sua amarga e autoritária mãe devota. Desejando uma vida glamourosa como ela viu nos filmes, Pearl encontra suas ambições, tentações e repressões entrando em conflito. Nesta história da origem da icônica vilã de X, quando o sonho de ser finalmente uma estrela é negado a ela, ela começa a assassinar, até alcançar o que deseja. Filmado secretamente e simultaneamente com X: A Marca da Morte (2022). Pearl serve como prequela do filme, mostrando o início da vida da personagem-título décadas antes dos eventos de X.',
    rating: 3.1,
    image: Pearl,
    bookmarked: false,
    genre: ['Terror'],
  },
];

export default movies;
