/* 
        Anotações do projeto dtmoney 

    1- É mais vantajoso usar apenas o export nos componetes ao invés de export default
    pois permite maior controle na hora de importar o componente quando exportamos com 
    default não existe tanto controle ou seja podemos colocar qualquer nome na importação 
    e isso pode ser complicado na hora de reaproveitar o mesmo componente. Ou seja em alguns 
    casos mais complexos o default pode acabar se perdendo.

    2- formato loegal para usar no favicon é o PNG. O nossa favicon ele não fica dentro de 
    issets mas fica dentro junto ao index.html.

    3- nesse projeto baixei os ícones e coloquei em assets.

            Instalando o Styled Components 

    1- Uma estratégia muito usada é utilizar o css in js e uma das mais utilizadas é o 
    styled components para instalar ao projeto rode o comando abaixo:
            npm add styled-components

    com typeScript rodar o seguinte comando também:
        npm add @types/styled-components -D

    2- vou importar o styled ao meu componente:
        import styled from "styled-components";

    3- Uma das grande vantagens de usar o styled é que as minhas estilizações ficam 
    restritas apenas dentro do meu componente.

    4- eu crio minhas estilizações dessa forma:

        const Title = styled.h1 `
            font-size: 64px;
            color: #8257e6;
        `
    Ps- Vou colocar meu favicon indo ao arquivo index.html  e vou utilizar a tag link 
        <link rel="shortcut icon" type="image/png" href="favicon.png" />

            
            Criando estilos Globais

    Podemos utilizar o styled-component para fazer estilos globais em nossa aplicação
    Dentro da pasta assets eu criei uma pasta chamada styles e dentro de styles eu criei 
    um arquivo chamado global.ts por não se tratar de um componente eu não preciso usar a 
    extensão tsx.

    Para definir meus estilos globais eu vou importar o seguinte:
            import { createGlobalStyle } from "styled-components";
    após isso eu vou criar utiizando o styled component todos os meus estilos globais.
        Ps- -webkit-font-smoothing: antialiased; vai deixar a fonte mais nitida

    Vou importar como um componente meu GlobalStyle dentro do meu App component.

    Ps- uma boa técnica para adaptar a interface a vario tamanhos de tela diferente é utilizar o 
    REM - 1 rem = 16px

    PS- quando configuramos a fonte para varios tamanhos de tela, utilizamos o % por que facilita 
    na adaptação de tela para o usuario caso ele queira aumentar ou diminuir o tamanho da fonte.

    PS- configurações para tudo que tiver desabilitado:
        [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    PS - importei a fonte Popins do google fontes via link e coloquei no meu index.html
    deixei o trecho abaixo em cima por que vai ser carregado antes e vai aumentar a velocidade 
    de carregamento em cerca de 25%.
    depois eu definir minha fonte dentro do meu global.ts

                COMPONENTE HEADER 

    Aqui vou optar por criar uma pasta chamada Header e criar meu componente header
    dentro de um arquivo index.jsx.

    Eu posso importar arquivos de imagem dentro do meu componente como import normalmente 
    e depois chamar como variavel.
            import logoImg from "../../assets/logo.svg";

            <img src={logoImg} alt="dt money" /> 

    Para utilizar o styled component eu vou criar um arquivo chamado styles.ts e foi por 
    isso que eu criei uma pasta para o meu componente. 
    Criei dois container um deles vou chamar de content(conteudo) e nesse ultimo eu vou centralizar 
    as coisas independente da tela.

    PS- 1rem equivale ao tamanho do fonte-size do root do style global.

    PS- quando utilizamos um hover e colocamos o filter podemos optar por varios tipos de animações css.


                COMPONENTE: SUMMARY

    1- Crie um componente Dashboard dentro desse compomente eu vou ter minha área de 
    resumo financeiro e também tenho minha tabela de transação.

    2- Sempre coloco meu Container em volta de tudo que eu criei com o styled component

    3- vou utilizar a tag header para fizar meu titulo.


                COMPONENTE: TransactionsTable 

        Quando o td é o primeiro vou colocar a cor de fundo seguinte.
            &:first-child {
                color: var(--text-title);
            }
    PS- withdraw = retirada /  deposit = deposito


                
                CONSUMINDO API

        Existem algumas ferramentas que conseguem utilizar no front end para simular API's 
        criam api´s que são ficticias até o back end ficar pronto. 
        Essas ferramentas são utilizadas em ambientes de desenvolvimento e para testes, em 
        ambiente de produção essas ferramentas jamais serão utilizadas.
        
        Em ambiente de produção é necssário realmente um back end funcionando para servir os  
        dasos. 

        São 3 ferramentas que são usadas:
                Json server 
            permite que ao criar um arquivo Json com estrutura de um objeto cada 
            chave do objeto ele vai converter numa rota da aplicação. porém para usar é necessário
            executar fora da aplicação ou seja uma execução a parte. 

                MirageJs 
            Com isso dá para contruir uma api fake dentro do front-end, ele tem banco de dados 
            integrado, da para fazer relacionamento, tem varias outras coisas legais também.
            
                MSW 
            Ele vao mocar os dados, é semelhante ao mirageJs porém faz menas coisas.



        Configurando o MirageJS

    Vou utilizar o useEffect passando um fetch para a rota,nesse caso vou utilizar a rota da minha 
    propria aplicação http://localhost:3000/ , passei na rota também api e transactions, vou pegar
    a resposta dessa requisição e vou converter para json, vou  pegar os dados e dá um console.

                useEffect(() => {
                    fetch('http://http://localhost:3000/api/transactions')
                    .then(response => response.json())
                    .then(data => console.log(data))
                }, [])


    Instalei o miragejs com o seguinte comando abaixo:
        npm add miragejs

    Após isso dentro do meu main.tsx principal da minha aplicaçao eu vou importar o createServer 
        import { createServer } from 'miragejs';

    Vou chamar a função createServer e depois vou definir as rotas que vou ter na api ficticia 
    veja abaixo:

                createServer({
                routes() {
                    this.namespace = 'api';

                    this.get('/transactions', () => {
                    return [
                        {
                        id: 1,
                        title: 'Transaction 1',
                        amount: 400,
                        type: 'deposit',
                        category: 'Food',
                        createdAt: new Date()
                        }
                    ]
                    })
                }
                })


Isso é uma boa estratégia para simular um falso back end e poder desenvolver o front antes mesmo
do back verdadeiro está pronto, isso ajuda muito no desenvolvimento.


        CONFIGURANDO CLIENTE DO AXIOS


    Vou utilizar outra biblioteca ao invés do fetch em minhas requisições por alguns motivos
    o fecth precisa que coloque todo o endereço da aplicação em cada requisição que for feita 
    outro fator é que toda vez que for feita uma requisição temos que transformar nossa resposta 
    em json.

    Com  o axios dá para interceptar requisições e respostas para a nossa api, conseguimos adicionar
    uma regra no axios que a cada requisição enviada seja interceptada antes de chegar ao back end 
    e mudar algum dado, também consigo interceptar todas as respostas também desssa maneira.

    Instalando o axios:
       npm add axios

    Após instalado eu crio uma pasta para colocar o axios dentro, vou chamar de services
    vou criar um arquivo api.ts, essa pasta tem a finalidade de ser o servicos de dados ou seja 
    todos os lugares onde posso buscar dados, enviar dados, banco de dados, api externa, eu vou 
    colocar dentro dessa pasta.

    Dentro desse arquivo eu importo o axios, em seguida eu crio uma constante chamada api e vou 
    passar axios.create ou seja eu crio uma instancia do axios, assim eu vou setar umas informações 
    padrão para todas as requisições que eu for fazer para a api, vou setar o baseUrl e vou passar 
    o endereço que se repete em todas as minhas requisições. 

                import axios from "axios";

                export const api = axios.create({
                    baseURL: 'http://http://localhost:3000/api',
                })
    
    Após isso eu troco o fetch por api.get e importo lá onde estou consumindo, também 
    posso remover a conversão da resposta para json pois eu não preciso mais. 

                import { api } from "../../services/api";

                export function TransactionsTable() {
                    useEffect(() => {
                        api.get('transactions')
                        .then(response => console.log(response.data))
                    }, []);
                    
    

        CONFIGURANDO MODAL DE CRIAÇÃO  E UTILIZANDO PROPS

    Para isso vamos utilizar uma biblioteca do React chamada react-modal ela traz algumas funcionalidades
    de modal já prontas.
    para instalar a biblioteca: 
                npm add react-modal

    Como o botão que vai abrir o modal está no header vou criar meu modal dentro do header.
    para utilizar essa biblioteca eu vou ter que criar um estado para definir se o meu modal está 
    aberto ou fechado, tem uma função para abbrir o modal e uma para fechar o modal, e um botão que 
    executa a abertura do modal, e o componente modal que vem diretamente da lib instalada.
    mais detalhes em   github.com/reactjs/react-modal

    PS- quando criar uma função para ser executada a partir da ação do usuario sempre vou iniciar
    essa função com handle.

    Preciso importar o Modal: 
                    import Modal from "react-modal";

    Se ele der problema por causa do typeScript basta instalar o comando:
            npm add @types/react-modal -D

    Depois importamos nosso modal como se fosse um componente, pode ser em qualquer local.
    Dentro do modal eu devo passar a propriedade isOpen com o meu estado para o modal poder abir.
    Também é necessário passar a propriedade onRequestClose passando a função que fecha meu modal.

    Dica legal: 
        vou pegal o meu modal e vou coplocar dentro de App.tsx, também vou fazer isso 
        com o estado e as funções. Vou utilizar o props para passar os dados do meu onClick 
        dentro da minha interface eu defino uma propriedade chamada onOpenNewTransactionModal
        que vai retornar um void.
        e dentro do paprametro do meu componente ao invés de utilizar props posso desestructurar 
        e passar apenas minha propriedade especifica.

                    interface HeaderProps {
                        onOpenNewTransactionModal: () => void;
                    }

                    export function Header( {onOpenNewTransactionModal }: HeaderProps)

       Depois eu vou exatamente onde eu estou chamando o componente Header e vou passar como 
       proriedade onOpenNewTransactionModal passando exatamente a função que eu quero executar 

       <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

        Para finalizar e recomendavel definir que o modal seja carregado no root da aplicação 
                        Modal.setAppElement('#root');

        

                        COMPONENTE: NewTransactionModal

    
        Vou criar um componente chamado NewTransactionModal em forma de pasta.
        Dentro desse meu novo componente eu trouxe o meu modal que estava em app.tsx e passei 
        via props isOpen e onRequestClose.


                        ESTRUTURA DO FIRMULÁRIO 

        Vou criar meu formulário dentro de  NewTransactionModal e no style eu vou criar um 
        container como fiz nos outros componentes e nesse container eu já passo meu form, 
        com isso eu não preciso criar a tag form no meu código tsx, quando eu passar o container 
        ele já vai trazer o form.

        Para estilizar o modal existem duas propriedades tem na documentação e vamos utilizar 
        vou passar essas propriedades para meu modal.
                    
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"

        Vou estilizar meu modal dentro da estilização global do meu projeto, pois 
        todos os modais dessa aplicação são semelhantes.
        Dentro do meu global.ts eu vou estilizar essas duas propriedades que são 
        classes do html.

        Todo input anterior vai ter um margim-top de 1rem, vai dar um distanciamento.

                      & + input {
                            margin-top: 1rem;
                        }

        quando passar o mouse por cima vai dá um leve efeito de transparencia.

                            &:hover {
                                filter: brightness(0.9);
                            }
        
            
                        

                    BOTÕES DE TIPO 

        
        Dentro do meu componente NewTransactionModal eu vou criar um novo container dentro do 
        meu styles e vou chamar de TransactionTypeContainer. Vou colocar esse container entre 
        os meus inputs. Esa container será uma div.

        Dentro desse Container eu criei dois botões.

        PS- Existe um pacote chamado polished esse pacote tem um monte de função helpes que conseguimos 
        modificar as cores, eu instalo o pacote rodando o comando abaixo e depois eu importo 
        dentro do meu styles e utilizo a função desejada; nesse caso usei a função chamda darken que 
        escurece uma cor.
                npm add polished

        ${darken(0.1, '#d7d7d7')};  eu quero escurecer em 10% a cor mensionada.


                            FUNCIONALIDADES DOS BORTÕES DE TIPO 

        
      Eu vou criar um estado em NewTransactionModal e vou chamar de type, verificando em nossa api 
      o type pode ser deposit ou withdraw.
      No meu useState eu vou passar deposit no meu estado inicial,  dentro do meu button de entrada 
      eu vou definir um onClick que vai mudar o type, como se trata de uma função bem pequena eu posso 
      colocar ela dentro do onClick como uma arow passando o deposit e no botão de saída eu passo o withdraw.
    
      Eu vou substituir o meu button html por um componente no styled chamado RadioBox.
      Feito isso eu posso criar propriedades para esse meu componente, vou criar uma propriedade 
      chamada isActive, como estamos dentro do typeScript teremos que criar uma interface dentro de
      styles.ts.v depois eu passo essa interface dentro do componente do proprio styled component 
                    export const RadioBox = styled.button<RadioBoxProps>`

    Um dos recursos mais interessantes do styled component, no trecho de código abaixo eu vou mudar 
    a cor do bacground toda vez que a  função isActive for true, eu faço uma interpolação, eu vou passar 
    uma função dentro dessa interpolação, e automaticamente o styled faz com que eu possa passar todas as 
    propriedades desejadas via props, no cósido abaixo eu definir que se a propriedade isActive for true 
    eu mudo a cor do background para a mensionada se não eu deixo como transparent.

                            background: ${(props) => props.isActive ? '#eee' : 'transparent'};
                            
                            

                        CORES DO BOTÕES 

    Posso passar propeedades dentro do meu componente styled e nessas propriedades eu posso definir cores.
    lembrando que nesse componente styled eu utilizei uma interface typeScript e por isso eu preciso definir 
    essa propriedade.

                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >


                interface RadioBoxProps {
                    isActive: boolean;
                    activeColor: 'green' | 'red';

    Eu posso criar uma variavel para essas cores: 

                        const colors = {
                            green: '#33CC95',
                            red: '#E52E40'
                        };

    Vou ter que adaptar meu background para ele buscar uma dessas duas cores na variavel:

                        background: ${(props) => props.isActive
                            ? colors[props.activeColor] 
                            : 'transparent'
                        };  
}

Dentro do polished eu posso importar o transparentize e aplicar deixando minhas cores mais transparentes
eu aplico e passo a porcentagem de transparencia abaixo eu definir 90%.

        transparentize(0.9,colors[props.activeColor])

PS- a vantegem de utilizar o transparentize ao invez do opacity no proprio css é que dessa forma eu vou aplicar 
apenas no meu bacground.  


                SALVANDO DADOS NO FORM 

    Agora veremos como salvar os estados dos inputs no componente, eu criei uma função chamada 
    handleCreateNewTransaction , o handle na função é um pattern que significa que a função virá 
    através da ação de um usuario. 

    Essa função é disparada através do subimit do formulário.
        onSubmit={handleCreateNewTransaction}
    Eu criei a função dentro de NewTransactionModal.

    PS- Toda vez que eu der enter no input essa função será executada.

    PS- Por padrão todo formulário no html quando o sumit é feito ele recarrega toda a página 
    podemos previnir esse funcionamento padrão do html, para isso eu posso passar como parametro 
    na minha função o event que é padrão e vou tipar ele passando o FormEvent, feito isso eu consigo 
    chamar o event na minha função e passar o preventDefault que vai previnir a função padrão.
            event.preventDefault();  

    
    Vamos ver aqui uma das formas mais tradicionais de anotar os inputs aqui dentro do React:
    Eu crio um valor no estado ou seja um useSate para cada input que for feito.
    Os inputs de texto iniciam com uma string vazia e os inputs numéricos iniciam com 0;
    Também vou ter category que será um texto.

                        const [title, setTitle] = useState('');
                        const [value, setValue] = useState(0);
                        const [category, setCategory] = useState('');

    Após isso eu vou em cada input e vou passar a propriedade value passando exatamente o valor 
    para aquele input e em seguida vou chamar um evento onChange passando um event que vai chamar 
    uma função passando o set do meu estado que pega o evento e captura o valor com o target.
        ex: 
                    value={title} 
                    onChange={event => setTitle(event.target.value)} 

    Por padrão meu event.target vai retornar uma string e quando eu for usar em um campo numerico 
    vai dá erro. por isso eu preciso converter para Number:
            onChange={event => setValue(Number(event.target.value))} 
                   ou assim 
            onChange={event => setValue(+event.target.value)}

    FEito isso eu posso testar no console do Browser para ver se está passando os valores digitados 
    para testar eu posso dar um console dentro da minha função passando as propriedades:

                                console.log({
                                    title,
                                    value, 
                                    category, 
                                    type,
                                })




*/