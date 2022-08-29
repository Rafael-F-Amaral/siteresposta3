import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LogicaAdgimage from '../../../../../../image/logica-tarefa-adg3.jpg'
import Chaveta from '../../../../../../image/C.png'
import Figura1 from '../../../../../../image/adg2-logica-questao4-imagem1.jpg'



const ADG1q1 = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-md-center">
        <Tab eventKey="adg1" title="Questão 1">
          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>

              <p>A lógica de programação é um tipo de linguagem usada para programar no computador. Ela é fundamental no desenvolvimento de programas e sistemas de informática, já que dela surge um encadeamento lógico de desenvolvimento. Esse desenvolvimento acontece em função do algoritmo, que nada mais é que uma sequência lógica de instruções que faz com que a função seja executada.</p>


              <p>Dentro desse contexto, preencha corretamente as lacunas.</p>



              <p>A lógica está relacionada a __________, pois é a base para a construção e desenvolvimento de __________ e para a __________.</p>
              <p> Assinale a alternativa que completa corretamente as lacunas:</p>
            </article>
            Alternativas:
            <article className='correto'>
              a)
              Ciências da Computação, Tecnologia da Informação e programação / algoritmos / análise de sistemas.
            </article>

            <article>
              b)
              Matemática e Ciências / raciocínios / criação de problemas.
            </article>

            <article>
              c)
              Ciências da Computação e informática / Matemática / análise de sistemas.
            </article>

            <article>
              d)
              Tecnologia de Informação e programação / relatórios / atividades racionais.
            </article>

            <article>
              e)
              Matemática / argumentos / construção de falácias.
            </article>
          </div>
        </Tab>
        <Tab eventKey="adg2" title="Questão 2">

          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p> No entendimento de lógica, alguns termos são muito utilizados e devem ser conhecidos para facilitar o raciocínio. A tabela 1, a seguir, apresenta alguns destes termos e suas definições:</p>
              <p>Tabela 1 – Termos lógicos </p>
              <p>Analise a tabela 1 e assinale a alternativa que contém a associação correta entre as colunas:</p>
              <p><article>Termos / Definição </article>
                <article>1 – Proposição ////  A – Possibilita a dedução de uma conclusão a partir das premissas. </article>
                <article>2 – Premissa ////  B – Conjunto de enunciados que se relacionam uns com os outros </article>
                <article>3 – Argumento ////  C – Frase declarativa </article>
                <article>4 – Silogismo ////  D – Argumentos incorretos </article>
                <article>5 – Falácia ////  E – Proposições para um raciocínio </article></p>
              <p>Analise a tabela 1 e assinale a alternativa que contém a associação correta entre as colunas:</p>
            </article>


            Alternativas:
            <article>
              a)
              1-A / 2-E / 3-B / 4-D / 5-C.
            </article>

            <article className='correto'>
              b)
              1-C / 2-E / 3-B / 4-A / 5-D.
            </article>

            <article>
              c)
              1-C / 2-B / 3-A / 4-E / 5-D.
            </article>

            <article>
              d)
              1-A / 2-C / 3-E / 4-D / 5-B.
            </article>

            <article>
              e)
              1-E / 2-D / 3-C / 4-B / 5-A.
            </article>
          </div>

        </Tab>
        <Tab eventKey="adg3" title="Questão 3">

          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p>A lógica utiliza argumentos para que seja possível desenvolver um raciocínio.<br /> Seguindo algumas regras e um raciocínio correto, a probabilidade de se alcançar conclusões verdadeiras é muito grande.<br /> Nesse sentido, observe a figura 1, a seguir:</p>
              <p>Figura 1 – Atividades dos corretores</p>
              <p className='LogicaImg1'><img className='LogicaImg' src={LogicaAdgimage} />Fonte: elaborada pelo autor.</p>
              <p>Analisando a figura 1, assinale a alternativa que apresenta a afirmação correta:</p>
            </article>
            Alternativas:
            <article>
              a)
              O corretor 1 elabora, digita e fecha contratos do corretor 2.
            </article>

            <article>
              b)
              O corretor 2 elabora, digita e fecha contratos do corretor 1.
            </article>


            <article className='correto'>
              c)
              Elaborar, digitar e fechar contrato são atividades dos dois corretores.
            </article>

            <article>
              d)
              O corretor 1 elabora, digita e fecha contratos de venda de imóveis.
            </article>

            <article>
              e)
              O corretor 2 elabora, digita e fecha contratos de compra de imóveis.
            </article>
          </div>

        </Tab>
        <Tab eventKey="adg4" title="Questão 4">
          <h2>Lógica Computacional</h2>
          <div className='respostas1'>

            <article>
              <p>O argumento lógico é deduzido a partir daquilo que é colocado como verdade, e a nossa opinião sobre a validade das premissas não pode interferir na elaboração da conclusão.</p>
              <p>Considere as premissas:</p>
              <p> A) Todo número par é escrito na forma 2n, onde n é um número natural.<br />
                B) O número 5 é escrito como 5 equals 2 times 2.</p>

              <p>Assinale a alternativa que apresenta a conclusão segundo as premissas A e B.</p>
            </article>
            Alternativas:
            <article>
              a)
              5 não é um número par.
            </article>

            <article>
              b)
              Todo número par não é ímpar.
            </article>

            <article>
              c)
              5 é um número ímpar.
            </article>

            <article className='correto'>
              d)
              5 é um número par.
            </article>

            <article>
              e)
              Todo número ímpar é par.
            </article>
          </div>

        </Tab>
      </Tabs>
    </div>
  )
}

const ADG2q1 = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-md-center">
        <Tab eventKey="adg1" title="Questão 1">
          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p className='Italic'>"Conjuntos podem ser definidos como coleções não-ordenadas de objetos que podem ser, de alguma forma, relacionados" (FERREIRA, 2001).</p>
              <p>Com base na teoria dos conjuntos, analise o excerto a seguir, completando suas lacunas.<br />
                <li>Um conjunto é chamado de finito quando sua ____________ é um número ____________. Caso contrário, é chamado de infinito. Um conjunto é chamado de conjunto ____________ quando sua cardinalidade é igual a zero, ou seja, é um conjunto desprovido de elementos.</li></p>


              <p>Assinale a alternativa que preenche corretamente as lacunas.</p>

            </article>
            Alternativas:
            <article className='correto'>
              a)
              cardinalidade / inteiro / vazio
            </article>

            <article>
              b)
              ordem / real / inteiro
            </article>

            <article>
              c)
              ordem / inteiro / simbólico
            </article>

            <article>
              d)
              cardinalidade / natural / interno
            </article>

            <article>
              e)
              ordem / natural / vazio
            </article>
          </div>
        </Tab>
        <Tab eventKey="adg2" title="Questão 2">

          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p> Conjuntos podem ser definidos como coleções não-ordenadas de objetos que podem ser, de alguma forma, relacionados. Com base nas propriedades básicas da teoria dos conjuntos, analise as afirmativas a seguir.</p>
              <p>I. Geralmente utiliza-se letras maiúsculas do nosso alfabeto para representar os conjuntos.<br />
                <li>I. Um objeto pertencente a um conjunto é chamado de elemento do conjunto. A relação de pertinência é indicada pelo símbolo <img className='Chaveta' src={Chaveta} />.</li></p>
              <p>Considerando o contexto apresentado, é correto o que se afirma em:</p>

            </article>


            Alternativas:
            <article>
              a)
              I, apenas.
            </article>

            <article>
              b)
              I e II, apenas.
            </article>

            <article className='correto'>
              c)
              I e III, apenas.
            </article>

            <article>
              d)
              II e III, apenas.
            </article>

            <article>
              e)
              I, II e III.
            </article>
          </div>

        </Tab>
        <Tab eventKey="adg3" title="Questão 3">

          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p>Para descrevermos determinado conjunto, é necessário identificar seus elementos. Para tanto, pode-se proceder de algumas maneiras distintas. Sendo assim, analise as afirmativas a seguir e identifique quais são opções válidas para a identificação de elementos de um conjunto.</p>
              <p>I. Listando todos os elementos do conjunto.<br />
                II. Indicando os primeiros elementos do conjunto.<br />
                III. Escrevendo uma propriedade que caracterize os elementos que constituem o conjunto.</p>
              <p>Considerando o contexto apresentado, é correto o que se afirma em:</p>
            </article>

            Alternativas:
            <article>
              a)
              I, apenas.
            </article>

            <article>
              b)
              I e II, apenas.
            </article>

            <article className='correto'>
              c)
              I e III, apenas.
            </article>

            <article>
              d)
              II e III, apenas.
            </article>

            <article>
              e)
              I, II e III.
            </article>
          </div>

        </Tab>
        <Tab eventKey="adg4" title="Questão 4">
          <h2>Lógica Computacional</h2>
          <div className='respostas1'>

            <article>
              <p>Os diagramas de Venn podem ser utilizados para ilustrar as operações binárias de conjuntos. Considere as figuras a seguir.</p>
              <p><img className='LogicaImg' src={Figura1} /></p>
              <p>Assinale a alternativa que representa as regiões sombreadas das figuras (a) e (b), respectivamente.<br /></p>

            </article>
            Alternativas:
            <article>
              <p><span className='red'>Alternativa Bugada, o site da faculdade não corrigiu até o momento da publicação desse site.<br />
              Todas as alternativas sinalizavam como corretas.</span>
              </p>

            </article>
          </div>

        </Tab>
      </Tabs>
    </div>
  )
}

const ADG3q1 = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-md-center">
        <Tab eventKey="adg1" title="Questão 1">
          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>

              <p>A lógica de programação é um tipo de linguagem usada para programar no computador. Ela é fundamental no desenvolvimento de programas e sistemas de informática, já que dela surge um encadeamento lógico de desenvolvimento. Esse desenvolvimento acontece em função do algoritmo, que nada mais é que uma sequência lógica de instruções que faz com que a função seja executada.</p>


              <p>Dentro desse contexto, preencha corretamente as lacunas.</p>



              <p>A lógica está relacionada a __________, pois é a base para a construção e desenvolvimento de __________ e para a __________.</p>
              <p> Assinale a alternativa que completa corretamente as lacunas:</p>
            </article>
            Alternativas:
            <article className='correto'>
              a)
              Ciências da Computação, Tecnologia da Informação e programação / algoritmos / análise de sistemas.
            </article>

            <article>
              b)
              Matemática e Ciências / raciocínios / criação de problemas.
            </article>

            <article>
              c)
              Ciências da Computação e informática / Matemática / análise de sistemas.
            </article>

            <article>
              d)
              Tecnologia de Informação e programação / relatórios / atividades racionais.
            </article>

            <article>
              e)
              Matemática / argumentos / construção de falácias.
            </article>
          </div>
        </Tab>
        <Tab eventKey="adg2" title="Questão 2">

          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p> No entendimento de lógica, alguns termos são muito utilizados e devem ser conhecidos para facilitar o raciocínio. A tabela 1, a seguir, apresenta alguns destes termos e suas definições:</p>
              <p>Tabela 1 – Termos lógicos </p>
              <p>Analise a tabela 1 e assinale a alternativa que contém a associação correta entre as colunas:</p>
              <p><article>Termos / Definição </article>
                <article>1 – Proposição ////  A – Possibilita a dedução de uma conclusão a partir das premissas. </article>
                <article>2 – Premissa ////  B – Conjunto de enunciados que se relacionam uns com os outros </article>
                <article>3 – Argumento ////  C – Frase declarativa </article>
                <article>4 – Silogismo ////  D – Argumentos incorretos </article>
                <article>5 – Falácia ////  E – Proposições para um raciocínio </article></p>
              <p>Analise a tabela 1 e assinale a alternativa que contém a associação correta entre as colunas:</p>
            </article>


            Alternativas:
            <article>
              a)
              1-A / 2-E / 3-B / 4-D / 5-C.
            </article>

            <article className='correto'>
              b)
              1-C / 2-E / 3-B / 4-A / 5-D.
            </article>

            <article>
              c)
              1-C / 2-B / 3-A / 4-E / 5-D.
            </article>

            <article>
              d)
              1-A / 2-C / 3-E / 4-D / 5-B.
            </article>

            <article>
              e)
              1-E / 2-D / 3-C / 4-B / 5-A.
            </article>
          </div>

        </Tab>
        <Tab eventKey="adg3" title="Questão 3">

          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p>A lógica utiliza argumentos para que seja possível desenvolver um raciocínio.<br /> Seguindo algumas regras e um raciocínio correto, a probabilidade de se alcançar conclusões verdadeiras é muito grande.<br /> Nesse sentido, observe a figura 1, a seguir:</p>
              <p>Figura 1 – Atividades dos corretores</p>
              <p className='LogicaImg1'><img className='LogicaImg' src={LogicaAdgimage} />Fonte: elaborada pelo autor.</p>
              <p>Analisando a figura 1, assinale a alternativa que apresenta a afirmação correta:</p>
            </article>
            Alternativas:
            <article>
              a)
              O corretor 1 elabora, digita e fecha contratos do corretor 2.
            </article>

            <article>
              b)
              O corretor 2 elabora, digita e fecha contratos do corretor 1.
            </article>


            <article className='correto'>
              c)
              Elaborar, digitar e fechar contrato são atividades dos dois corretores.
            </article>

            <article>
              d)
              O corretor 1 elabora, digita e fecha contratos de venda de imóveis.
            </article>

            <article>
              e)
              O corretor 2 elabora, digita e fecha contratos de compra de imóveis.
            </article>
          </div>

        </Tab>
        <Tab eventKey="adg4" title="Questão 4">
          <h2>Lógica Computacional</h2>
          <div className='respostas1'>

            <article>
              <p>O argumento lógico é deduzido a partir daquilo que é colocado como verdade, e a nossa opinião sobre a validade das premissas não pode interferir na elaboração da conclusão.</p>
              <p>Considere as premissas:</p>
              <p> A) Todo número par é escrito na forma 2n, onde n é um número natural.<br />
                B) O número 5 é escrito como 5 equals 2 times 2.</p>

              <p>Assinale a alternativa que apresenta a conclusão segundo as premissas A e B.</p>
            </article>
            Alternativas:
            <article>
              a)
              5 não é um número par.
            </article>

            <article>
              b)
              Todo número par não é ímpar.
            </article>

            <article>
              c)
              5 é um número ímpar.
            </article>

            <article className='correto'>
              d)
              5 é um número par.
            </article>

            <article>
              e)
              Todo número ímpar é par.
            </article>
          </div>

        </Tab>
      </Tabs>
    </div>
  )
}

const ADG4q1 = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-md-center">
        <Tab eventKey="adg1" title="Questão 1">
          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>

              <p>A lógica de programação é um tipo de linguagem usada para programar no computador. Ela é fundamental no desenvolvimento de programas e sistemas de informática, já que dela surge um encadeamento lógico de desenvolvimento. Esse desenvolvimento acontece em função do algoritmo, que nada mais é que uma sequência lógica de instruções que faz com que a função seja executada.</p>


              <p>Dentro desse contexto, preencha corretamente as lacunas.</p>



              <p>A lógica está relacionada a __________, pois é a base para a construção e desenvolvimento de __________ e para a __________.</p>
              <p> Assinale a alternativa que completa corretamente as lacunas:</p>
            </article>
            Alternativas:
            <article className='correto'>
              a)
              Ciências da Computação, Tecnologia da Informação e programação / algoritmos / análise de sistemas.
            </article>

            <article>
              b)
              Matemática e Ciências / raciocínios / criação de problemas.
            </article>

            <article>
              c)
              Ciências da Computação e informática / Matemática / análise de sistemas.
            </article>

            <article>
              d)
              Tecnologia de Informação e programação / relatórios / atividades racionais.
            </article>

            <article>
              e)
              Matemática / argumentos / construção de falácias.
            </article>
          </div>
        </Tab>
        <Tab eventKey="adg2" title="Questão 2">

          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p> No entendimento de lógica, alguns termos são muito utilizados e devem ser conhecidos para facilitar o raciocínio. A tabela 1, a seguir, apresenta alguns destes termos e suas definições:</p>
              <p>Tabela 1 – Termos lógicos </p>
              <p>Analise a tabela 1 e assinale a alternativa que contém a associação correta entre as colunas:</p>
              <p><article>Termos / Definição </article>
                <article>1 – Proposição ////  A – Possibilita a dedução de uma conclusão a partir das premissas. </article>
                <article>2 – Premissa ////  B – Conjunto de enunciados que se relacionam uns com os outros </article>
                <article>3 – Argumento ////  C – Frase declarativa </article>
                <article>4 – Silogismo ////  D – Argumentos incorretos </article>
                <article>5 – Falácia ////  E – Proposições para um raciocínio </article></p>
              <p>Analise a tabela 1 e assinale a alternativa que contém a associação correta entre as colunas:</p>
            </article>


            Alternativas:
            <article>
              a)
              1-A / 2-E / 3-B / 4-D / 5-C.
            </article>

            <article className='correto'>
              b)
              1-C / 2-E / 3-B / 4-A / 5-D.
            </article>

            <article>
              c)
              1-C / 2-B / 3-A / 4-E / 5-D.
            </article>

            <article>
              d)
              1-A / 2-C / 3-E / 4-D / 5-B.
            </article>

            <article>
              e)
              1-E / 2-D / 3-C / 4-B / 5-A.
            </article>
          </div>

        </Tab>
        <Tab eventKey="adg3" title="Questão 3">

          <div className='respostas1'>
            <h2>Lógica Computacional</h2>
            <article>
              <p>A lógica utiliza argumentos para que seja possível desenvolver um raciocínio.<br /> Seguindo algumas regras e um raciocínio correto, a probabilidade de se alcançar conclusões verdadeiras é muito grande.<br /> Nesse sentido, observe a figura 1, a seguir:</p>
              <p>Figura 1 – Atividades dos corretores</p>
              <p className='LogicaImg1'><img className='LogicaImg' src={LogicaAdgimage} />Fonte: elaborada pelo autor.</p>
              <p>Analisando a figura 1, assinale a alternativa que apresenta a afirmação correta:</p>
            </article>
            Alternativas:
            <article>
              a)
              O corretor 1 elabora, digita e fecha contratos do corretor 2.
            </article>

            <article>
              b)
              O corretor 2 elabora, digita e fecha contratos do corretor 1.
            </article>


            <article className='correto'>
              c)
              Elaborar, digitar e fechar contrato são atividades dos dois corretores.
            </article>

            <article>
              d)
              O corretor 1 elabora, digita e fecha contratos de venda de imóveis.
            </article>

            <article>
              e)
              O corretor 2 elabora, digita e fecha contratos de compra de imóveis.
            </article>
          </div>

        </Tab>
        <Tab eventKey="adg4" title="Questão 4">
          <h2>Lógica Computacional</h2>
          <div className='respostas1'>

            <article>
              <p>O argumento lógico é deduzido a partir daquilo que é colocado como verdade, e a nossa opinião sobre a validade das premissas não pode interferir na elaboração da conclusão.</p>
              <p>Considere as premissas:</p>
              <p> A) Todo número par é escrito na forma 2n, onde n é um número natural.<br />
                B) O número 5 é escrito como 5 equals 2 times 2.</p>

              <p>Assinale a alternativa que apresenta a conclusão segundo as premissas A e B.</p>
            </article>
            Alternativas:
            <article>
              a)
              5 não é um número par.
            </article>

            <article>
              b)
              Todo número par não é ímpar.
            </article>

            <article>
              c)
              5 é um número ímpar.
            </article>

            <article className='correto'>
              d)
              5 é um número par.
            </article>

            <article>
              e)
              Todo número ímpar é par.
            </article>
          </div>

        </Tab>
      </Tabs>
    </div>
  )
}

export { ADG1q1, ADG2q1, ADG3q1, ADG4q1 };