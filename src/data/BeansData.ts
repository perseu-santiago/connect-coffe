const BeansData = [
  {
    id: 'B1',
    name: 'Grãos de Café Robusta',
    description: `Os grãos de café Robusta são maiores e mais arredondados do que as outras variedades de grãos de café. Essas plantas normalmente crescem muito maiores do que as plantas de Arábica, medindo entre 4,5 e 6 metros. Os grãos de café Robusta são normalmente considerados mais resistentes porque podem crescer em altitudes mais baixas e resistir a doenças. Mas pesquisas recentes sugerem que eles não lidam com o calor tão bem como se pensava anteriormente.`,
    roasted: 'Torra Média',
    imagelink_square: require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_portrait.png'),
    ingredients: 'Africa',
    special_ingredient: 'From Africa',
    prices: [
      {size: '250g', price: '28.00', currency: 'R$'},
      {size: '500g', price: '53.00', currency: 'R$'},
      {size: '1Kg', price: '99.00', currency: 'R$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 0,
  },
  {
    id: 'B2',
    name: 'Grãos de Café Arabica',
    description: `Os grãos de café Arábica são de longe o tipo de café mais popular, representando cerca de 60% do café mundial. Estes saborosos grãos tiveram origem há muitos séculos nas terras altas da Etiópia e podem até ser os primeiros grãos de café consumidos! O nome Arábica provavelmente vem da popularidade do feijão na Arábia do século VII (atual Iêmen).`,
    roasted: 'Torra Média',
    imagelink_square: require('../assets/coffee_assets/arabica_coffee_beans/arabica_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/arabica_coffee_beans/arabica_coffee_beans_portrait.png'),
    ingredients: 'Africa',
    special_ingredient: 'Africa',
    prices: [
      {size: '250g', price: '28.00', currency: 'R$'},
      {size: '500g', price: '53.00', currency: 'R$'},
      {size: '1Kg', price: '99.00', currency: 'R$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 1,
  },
  {
    id: 'B3',
    name: 'Grãos de Café Libérica',
    description: `Nativa da África Central e Ocidental – especificamente da Libéria, daí o seu nome – a Coffea liberica é apreciada pelo seu aroma floral picante e perfil de sabor ousado e fumado. Crescendo a partir de uma planta muito maior que o Arábica ou o Robusta, a maioria das cerejas Liberica tendem a ter formato irregular e mais próximas do Robusta em tamanho e aparência geral. Também é tolerante a climas quentes e úmidos e se dá bem em baixas altitudes. `,
    roasted: 'Torra Média',
    imagelink_square: require('../assets/coffee_assets/liberica_coffee_beans/liberica_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/liberica_coffee_beans/liberica_coffee_beans_portrait.png'),
    ingredients: 'Malásia',
    special_ingredient: 'From Malásia',
    prices: [
      {size: '250g', price: '28.00', currency: 'R$'},
      {size: '500g', price: '53.00', currency: 'R$'},
      {size: '1Kg', price: '99.00', currency: 'R$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 2,
  },
  {
    id: 'B4',
    name: 'Grãos de Café Excelsa',
    description: `Os grãos de café Excelsa crescem quase inteiramente no Sudeste Asiático e têm um formato semelhante ao dos grãos Liberica – ovais alongados. Esses grãos crescem em grandes cafezais de 6 a 9 metros em altitudes médias. Em termos de sabor, os grãos Excelsa são bastante únicos. Eles combinam características de torra leve, como notas ácidas e sabores frutados, com sabores que lembram mais torradas escuras.`,
    roasted: 'Torra Média',
    imagelink_square: require('../assets/coffee_assets/excelsa_coffee_beans/excelsa_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/excelsa_coffee_beans/excelsa_coffee_beans_portrait.png'),
    ingredients: 'Malásia',
    special_ingredient: 'Malásia',
    prices: [
      {size: '250g', price: '28.00', currency: 'R$'},
      {size: '500g', price: '53.00', currency: 'R$'},
      {size: '1Kg', price: '99.50', currency: 'R$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 3,
  },
];
export default BeansData;
