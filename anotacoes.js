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
    

*/