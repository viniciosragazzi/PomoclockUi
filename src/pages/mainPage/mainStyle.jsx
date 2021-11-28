import styled from 'styled-components'

export const MainPage = styled.div` 
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(${props => (`${props.contador}`% 2) === 0  ? 'to right top,#f52e48,#f73747,#f93f46,#fa4645,#fc4d44' : 'to right top, #17be2c, #23c226, #2dc71e, #36cb13, #3fcf00'  });
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-top: 1.25rem;
    transition: all .5s ease-in-out;

 .headerMain{
    width: 90%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    transition: all .5s ease-in-out;
    animation: fadein 1.4s;
    -moz-animation: fadein 1.4s; /* Firefox */
    -webkit-animation: fadein 1.4s; /* Safari and Chrome */
    -o-animation: fadein 1.4s; /* Opera */
}
 .headerMain svg{
    font-size: 24px;
}
 .mainContent{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.125rem;
    animation: fadein 1.4s;
    -moz-animation: fadein 1.4s; /* Firefox */
    -webkit-animation: fadein 1.4s; /* Safari and Chrome */
    -o-animation: fadein 1.4s; /* Opera */
}

 .mainContent h1{
    font-size: 14.6px;
    font-weight: 400;
    font-family: Roboto, 'sans-serif';
    
}
 .mainContent .boxCronometro{
    position: relative;
}
 .mainContent .boxCronometro .cronometro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 17.5rem;
    height: 17.5rem;
    margin-top: 1.875rem;
}
 .mainContent .boxCronometro .cronometro svg{
    width: 300px;
    height: 300px
}
 .mainContent .boxCronometro .cronometro svg circle{
    width: 280px;
    height: 280px;
    transform: translateY(50%)translateX(50%);
    fill: none;
    stroke-width: 8px;
    stroke-dasharray: 754;

}
 .mainContent .boxCronometro .cronometro svg circle:nth-child(1){
    stroke-dashoffset: 0;
    stroke:#0808086f ;
}

 .mainContent .boxCronometro .numTempo{
    color: white;
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: center;
    top: 43%;
    left: 0;
}
 .mainContent .boxCronometro .numTempo h2 {
    font-size: 3.5rem;
}
 .btn{
    width: 7.5rem;
    height: 2.5rem;
    border-radius: 0.9375rem;
    margin-top: 1.25rem;
    color: ${props => (`${props.contador}`% 2) === 0  ? '#F73A46' : '#17be2c'  };
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border: 0.125rem solid ${props => (`${props.contador}`% 2) === 0  ? '#F73A46' : '#17be2c'  };;
    font-size: 1.0625rem;
}
 .btn:hover{
    background-image:  linear-gradient(${props => (`${props.contador}`% 2) === 0  ? 'to right top,#f52e48,#f73747,#f93f46,#fa4645,#fc4d44' : 'to right top, #17be2c, #23c226, #2dc71e, #36cb13, #3fcf00'  });
    border: 0.125rem solid white;
    color: white;
}
 .btn:target{
    background-color: #F73A46;
    color: white;
}

@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

` 

export const Circulo = styled.circle` 
    stroke-dashoffset: calc(754 - ${props => `${props.mnt}`});
    stroke:white ;
    transition: stroke-dashoffset 0.8s;
`