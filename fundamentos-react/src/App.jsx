import './App.css'
import React from 'react'

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import DesafioUm from "./components/basicos/DesafioUm";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default () => (
     <div className="App">
        <h1>Fundamentos de React</h1>
        <div className="Cards">
            <Card titulo="#13- Deasafio MegaSena" color="#F3A043">
                <Mega qtd={7} />
            </Card>

            <Card titulo="#12- Contador" color="#E1B61D">
              <Contador numeroInicial={10} />
            </Card>

            <Card titulo="#11- Component Controlado" color="#E11D48">
                <Input />
            </Card>

            <Card titulo="#10- Comunicação de componentes - Indireta" color="#1D83E1">
                <IndiretaPai />
            </Card>

            <Card titulo="#09- Comunicação de componentes - Direta" color="#21E11D">
               <DiretaPai />
            </Card>

            <Card titulo="#08- Componente Condiconal" color="#6B6E76">
               <ParOuImpar numero={20}/>
                <UsuarioInfo usuario={{ id:1, nome:'Fernando' }} />
                <UsuarioInfo usuario={{ id:1, email:'Fernando' }} />
            </Card>

            <Card titulo="#07- Desafio de repetição" color="#F3BBAE">
              <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06- Repetição" color="#BBAEF3">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05- Componente com filhos" color="#F3AEE6">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Milena"/>
                    <FamiliaMembro nome="Eliana"/>
                    <FamiliaMembro nome="Aldemi"/>
                    <FamiliaMembro nome="Alef"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#E76F25">
                <DesafioUm min={2} max={15}/>
            </Card>
            <Card titulo="#03 - Exemplo de Fragmento" color="#F4E52C">
                <Fragmento/>
            </Card>
            <Card titulo="#02 - Exemplo com parâmetros" color="#D7BDE2">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Situação do aluno"
                    aluno="Milena Nobre"
                    nota={9.9}
                />
            </Card>
            <Card titulo="#01 - Primeiro Component" color="#85C1E9">
                <Primeiro/>
            </Card>
        </div>
    </div>
)