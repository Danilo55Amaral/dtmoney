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
            
            
*/