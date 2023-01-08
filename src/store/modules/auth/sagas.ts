interface Teste {
  name: string
}
// Sempre que formos usar as funções call e put devemos usar yield

// Definições

// call => usamos o call sempre que formos executar uma promise ou um generator  o primeiro parametro é a funcão que queremos executar o segundo e caminho
// put =>  usamos o put para usarmos um dispatch dentro do saga
// takeLastest => vai executar a única requisição
// takeEvery => vai pegar todas as requisições um ótimo cénario seria para chats
