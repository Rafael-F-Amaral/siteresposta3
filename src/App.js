import React from 'react'
import './App.css';
import Menu from '../src/Components/Body/Menu/Menu'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pix from './Components/Pix/Pix';
import Error from './Components/Error/Error'
import Respostas from './Components/Respostas/Respostas';



/* Análise Orientado a Objeto */
import AtvAprendizagemAnalise from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/AtvAprendizagemAnalise';
import AtvDiagnosticaAnalise from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/AtvDiagnosticaAnalise';
import AvVirtualAnalise from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/AvVirtualAnalise';
/* Análise Orientado a Objeto */

/* Análise Orientado a Objeto */
import Aap1AnaliseAprend from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap1/Aap1';
import Aap2AnaliseAprend from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap2/Aap2';
import Aap3AnaliseAprend from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/App3/App3';
import Aap4AnaliseAprend from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap4/Aap4';

import Adg1AnaliseDiagnostic from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap1/Aap1';
import Adg2AnaliseDiagnostic from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap2/Aap2';
import Adg3AnaliseDiagnostic from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/App3/App3';
import Adg4AnaliseDiagnostic from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap4/Aap4';

import Av1AnaliseVirtual1 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av1/Av1';
import Av1AnaliseVirtual2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av2/Av2';
/* Análise Orientado a Objeto */



/* Análise Orientado a Objeto */
/* Atividade Aprendizagem */
/* APP1 */
import Questao1Analise from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap1/Questao1Analise';
import Questao2Analise from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap1/Questao2Analise';
import Questao3Analise from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap1/Questao3Analise';
import Questao4Analise from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap1/Questao4Analise';
/* APP2 */
import Questao1Analise2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap2/Questao1Analise';
import Questao2Analise2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap2/Questao2Analise';
import Questao3Analise2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap2/Questao3Analise';
import Questao4Analise2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap2/Questao4Analise';
/* APP3 */
import Questao1Analise3 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/App3/Questao1Analise';
import Questao2Analise3 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/App3/Questao2Analise';
import Questao3Analise3 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/App3/Questao3Analise';
import Questao4Analise3 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/App3/Questao4Analise';
/* APP4 */
import Questao1Analise4 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap4/Questao1Analise';
import Questao2Analise4 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap4/Questao2Analise';
import Questao3Analise4 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap4/Questao3Analise';
import Questao4Analise4 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvAprendizagem/Aap4/Questao4Analise';
/* Atividade Aprendizagem */


/* Atividade Diagnóstica */
/* ADG1 */
import Questao1Diagnostic from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap1/Questao1Analise';
import Questao2Diagnostic from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap1/Questao2Analise';
import Questao3Diagnostic from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap1/Questao3Analise';
import Questao4Diagnostic from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap1/Questao4Analise';
/* ADG2 */
import Questao1Diagnostic2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap2/Questao1Analise';
import Questao2Diagnostic2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap2/Questao2Analise';
import Questao3Diagnostic2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap2/Questao3Analise';
import Questao4Diagnostic2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap2/Questao4Analise';
/* ADG3 */
import Questao1Diagnostic3 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/App3/Questao1Analise';
import Questao2Diagnostic3 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/App3/Questao2Analise';
import Questao3Diagnostic3 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/App3/Questao3Analise';
import Questao4Diagnostic3 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/App3/Questao4Analise';
/* ADG4 */
import Questao1Diagnostic4 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap4/Questao1Analise';
import Questao2Diagnostic4 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap4/Questao2Analise';
import Questao3Diagnostic4 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap4/Questao3Analise';
import Questao4Diagnostic4 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AtvDiagnostica/Aap4/Questao4Analise';/* ADG4 */ /* Atividade Diagnóstica */

/* Avaliação Virtual*/
/* Avaliação Virtual 1 */
import Questao1AnaliseVirtual from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av1/Questao1Analise';
import Questao2AnaliseVirtual from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av1/Questao2Analise';
import Questao3AnaliseVirtual from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av1/Questao3Analise';
import Questao4AnaliseVirtual from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av1/Questao4Analise';
import Questao5AnaliseVirtual from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av1/Questao5Analise';
/* Avaliação Virtual 2 */
import Questao1AnaliseVirtual2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av2/Questao1Analise';
import Questao2AnaliseVirtual2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av2/Questao2Analise';
import Questao3AnaliseVirtual2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av2/Questao3Analise';
import Questao4AnaliseVirtual2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av2/Questao4Analise';
import Questao5AnaliseVirtual2 from './Components/Respostas/ComponentsResposta/AnáliseOrientadaAoObjeto/AvVirtual/Av2/Questao5Analise';
/* Avaliação Virtual*/
/* Análise Orientado a Objeto */



/* 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */


/* Linguagem Orientado a Objeto */
import AtvAprendizagemLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/AtvAprendizagemLinguagem';
import AtvDiagnosticaLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/AtvDiagnosticaLinguagem';
import AvVirtualLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/AvVirtualLinguagem';
/* Linguagem Orientado a Objeto */

/* Linguagem Orientado a Objeto */
import Aap1LinguagemAprend from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap1/Aap1';
import Aap2LinguagemAprend from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap2/Aap2';
import Aap3LinguagemAprend from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/App3/App3';
import Aap4LinguagemAprend from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap4/Aap4';

import Adg1LinguagemDiagnostic from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap1/Aap1';
import Adg2LinguagemDiagnostic from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap2/Aap2';
import Adg3LinguagemDiagnostic from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/App3/App3';
import Adg4LinguagemDiagnostic from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap4/Aap4';

import Av1LinguagemVirtual1 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av1/Av1';
import Av2LinguagemVirtual2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av2/Av2';
/* Linguagem Orientado a Objeto */

/* Atividade Aprendizagem */
/* APP1 */
import Questao1AprendizagemLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap1/Questao1Linguagem';
import Questao2AprendizagemLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap1/Questao2Linguagem';
import Questao3AprendizagemLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap1/Questao3Linguagem';
import Questao4AprendizagemLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap1/Questao4Linguagem';
/* APP2 */
import Questao1AprendizagemLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap2/Questao1Linguagem';
import Questao2AprendizagemLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap2/Questao2Linguagem';
import Questao3AprendizagemLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap2/Questao3Linguagem';
import Questao4AprendizagemLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap2/Questao4Linguagem';
/* APP3 */
import Questao1AprendizagemLinguagem3 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/App3/Questao1Linguagem';
import Questao2AprendizagemLinguagem3 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/App3/Questao2Linguagem';
import Questao3AprendizagemLinguagem3 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/App3/Questao3Linguagem';
import Questao4AprendizagemLinguagem3 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/App3/Questao4Linguagem';
/* APP4 */
import Questao1AprendizagemLinguagem4 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap4/Questao1Linguagem';
import Questao2AprendizagemLinguagem4 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap4/Questao2Linguagem';
import Questao3AprendizagemLinguagem4 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap4/Questao3Linguagem';
import Questao4AprendizagemLinguagem4 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvAprendizagem/Aap4/Questao4Linguagem';
/* Atividade Aprendizagem */


/* Atividade Diagnóstica */
/* APP1 */
import Questao1DiagnosticLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap1/Questao1Linguagem';
import Questao2DiagnosticLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap1/Questao2Linguagem';
import Questao3DiagnosticLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap1/Questao3Linguagem';
import Questao4DiagnosticLinguagem from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap1/Questao4Linguagem';
/* APP2 */
import Questao1DiagnosticLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap2/Questao1Linguagem';
import Questao2DiagnosticLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap2/Questao2Linguagem';
import Questao3DiagnosticLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap2/Questao3Linguagem';
import Questao4DiagnosticLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap2/Questao4Linguagem';
/* APP3 */
import Questao1DiagnosticLinguagem3 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/App3/Questao1Linguagem';
import Questao2DiagnosticLinguagem3 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/App3/Questao2Linguagem';
import Questao3DiagnosticLinguagem3 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/App3/Questao3Linguagem';
import Questao4DiagnosticLinguagem3 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/App3/Questao4Linguagem';
/* APP4 */
import Questao1DiagnosticLinguagem4 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap4/Questao1Linguagem';
import Questao2DiagnosticLinguagem4 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap4/Questao2Linguagem';
import Questao3DiagnosticLinguagem4 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap4/Questao3Linguagem';
import Questao4DiagnosticLinguagem4 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AtvDiagnostica/Aap4/Questao4Linguagem';/* APP4 */ /* Atividade Diagnóstica */

/* Avaliação Virtual*/
/* Avaliação Virtual 1 */
import Questao1VirtualLinguagem1 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av1/Questao1Linguagem';
import Questao2VirtualLinguagem1 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av1/Questao2Linguagem';
import Questao3VirtualLinguagem1 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av1/Questao3Linguagem';
import Questao4VirtualLinguagem1 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av1/Questao4Linguagem';
import Questao5VirtualLinguagem1 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av1/Questao5Linguagem';
/* Avaliação Virtual 2 */
import Questao1VirtualLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av2/Questao1Linguagem';
import Questao2VirtualLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av2/Questao2Linguagem';
import Questao3VirtualLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av2/Questao3Linguagem';
import Questao4VirtualLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av2/Questao4Linguagem';
import Questao5VirtualLinguagem2 from './Components/Respostas/ComponentsResposta/LinguagemOrientadaAoObjeto/AvVirtual/Av2/Questao5Linguagem';
/* Avaliação Virtual*/


/* 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */



/* Linguagem Orientado a Objeto */
import AtvAprendizagemBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/AtvAprendizagemBancoDados';
import AtvDiagnosticaBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/AtvDiagnosticaBancoDados';
import AvVirtualBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/AvVirtualBancoDados';
/* Linguagem Orientado a Objeto */

/* Linguagem Orientado a Objeto */
import Aap1BancoDadosAprend from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap1/Aap1';
import Aap2BancoDadosAprend from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap2/Aap2';
import Aap3BancoDadosAprend from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/App3/App3';
import Aap4BancoDadosAprend from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap4/Aap4';

import Adg1BancoDadosDiagnostic from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap1/Aap1';
import Adg2BancoDadosDiagnostic from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap2/Aap2';
import Adg3BancoDadosDiagnostic from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/App3/App3';
import Adg4BancoDadosDiagnostic from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap4/Aap4';

import Av1BancoDadosVirtual1 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av1/Av1';
import Av2BancoDadosVirtual2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av2/Av2';
/* Linguagem Orientado a Objeto */

/* Atividade Aprendizagem */
/* APP1 */
import Questao1AprendizagemBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap1/Questao1BancoDados';
import Questao2AprendizagemBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap1/Questao2BancoDados';
import Questao3AprendizagemBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap1/Questao3BancoDados';
import Questao4AprendizagemBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap1/Questao4BancoDados';
/* APP2 */
import Questao1AprendizagemBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap2/Questao1BancoDados';
import Questao2AprendizagemBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap2/Questao2BancoDados';
import Questao3AprendizagemBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap2/Questao3BancoDados';
import Questao4AprendizagemBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap2/Questao4BancoDados';
/* APP3 */
import Questao1AprendizagemBancoDados3 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/App3/Questao1BancoDados';
import Questao2AprendizagemBancoDados3 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/App3/Questao2BancoDados';
import Questao3AprendizagemBancoDados3 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/App3/Questao3BancoDados';
import Questao4AprendizagemBancoDados3 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/App3/Questao4BancoDados';
/* APP4 */
import Questao1AprendizagemBancoDados4 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap4/Questao1BancoDados';
import Questao2AprendizagemBancoDados4 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap4/Questao2BancoDados';
import Questao3AprendizagemBancoDados4 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap4/Questao3BancoDados';
import Questao4AprendizagemBancoDados4 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvAprendizagem/Aap4/Questao4BancoDados';
/* Atividade Aprendizagem */


/* Atividade Diagnóstica */
/* APP1 */
import Questao1DiagnosticBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap1/Questao1BancoDados';
import Questao2DiagnosticBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap1/Questao2BancoDados';
import Questao3DiagnosticBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap1/Questao3BancoDados';
import Questao4DiagnosticBancoDados from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap1/Questao4BancoDados';
/* APP2 */
import Questao1DiagnosticBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap2/Questao1BancoDados';
import Questao2DiagnosticBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap2/Questao2BancoDados';
import Questao3DiagnosticBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap2/Questao3BancoDados';
import Questao4DiagnosticBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap2/Questao4BancoDados';
/* APP3 */
import Questao1DiagnosticBancoDados3 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/App3/Questao1BancoDados';
import Questao2DiagnosticBancoDados3 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/App3/Questao2BancoDados';
import Questao3DiagnosticBancoDados3 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/App3/Questao3BancoDados';
import Questao4DiagnosticBancoDados3 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/App3/Questao4BancoDados';
/* APP4 */
import Questao1DiagnosticBancoDados4 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap4/Questao1BancoDados';
import Questao2DiagnosticBancoDados4 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap4/Questao2BancoDados';
import Questao3DiagnosticBancoDados4 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap4/Questao3BancoDados';
import Questao4DiagnosticBancoDados4 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AtvDiagnostica/Aap4/Questao4BancoDados';/* APP4 */ /* Atividade Diagnóstica */

/* Avaliação Virtual*/
/* Avaliação Virtual 1 */
import Questao1VirtualBancoDados1 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av1/Questao1BancoDados';
import Questao2VirtualBancoDados1 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av1/Questao2BancoDados';
import Questao3VirtualBancoDados1 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av1/Questao3BancoDados';
import Questao4VirtualBancoDados1 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av1/Questao4BancoDados';
import Questao5VirtualBancoDados1 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av1/Questao5BancoDados';
/* Avaliação Virtual 2 */
import Questao1VirtualBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av2/Questao1BancoDados';
import Questao2VirtualBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av2/Questao2BancoDados';
import Questao3VirtualBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av2/Questao3BancoDados';
import Questao4VirtualBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av2/Questao4BancoDados';
import Questao5VirtualBancoDados2 from './Components/Respostas/ComponentsResposta/ProgramacaoDesenvolvimentoBancoDados/AvVirtual/Av2/Questao5BancoDados';
/* Avaliação Virtual*/


/* 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444 */



/* Linguagem de Programação */
import AtvAprendizagemProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/AtvAprendizagemProgramacao';
import AtvDiagnosticaProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/AtvDiagnosticaProgramacao';
import AvVirtualProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/AvVirtualProgramacao';
/* Linguagem de Programação */

/* Linguagem de Programação */
import Aap1ProgramacaoAprend from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap1/Aap1';
import Aap2ProgramacaoAprend from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap2/Aap2';
import Aap3ProgramacaoAprend from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/App3/App3';
import Aap4ProgramacaoAprend from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap4/Aap4';

import Adg1ProgramacaoDiagnostic from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap1/Aap1';
import Adg2ProgramacaoDiagnostic from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap2/Aap2';
import Adg3ProgramacaoDiagnostic from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/App3/App3';
import Adg4ProgramacaoDiagnostic from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap4/Aap4';

import Av1ProgramacaoVirtual1 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av1/Av1';
import Av2ProgramacaoVirtual2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av2/Av2';
/* Linguagem de Programação */

/* Atividade Aprendizagem */
/* APP1 */
import Questao1AprendizagemProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap1/Questao1Programacao';
import Questao2AprendizagemProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap1/Questao2Programacao';
import Questao3AprendizagemProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap1/Questao3Programacao';
import Questao4AprendizagemProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap1/Questao4Programacao';
/* APP2 */
import Questao1AprendizagemProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap2/Questao1Programacao';
import Questao2AprendizagemProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap2/Questao2Programacao';
import Questao3AprendizagemProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap2/Questao3Programacao';
import Questao4AprendizagemProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap2/Questao4Programacao';
/* APP3 */
import Questao1AprendizagemProgramacao3 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/App3/Questao1Programacao';
import Questao2AprendizagemProgramacao3 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/App3/Questao2Programacao';
import Questao3AprendizagemProgramacao3 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/App3/Questao3Programacao';
import Questao4AprendizagemProgramacao3 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/App3/Questao4Programacao';
/* APP4 */
import Questao1AprendizagemProgramacao4 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap4/Questao1Programacao';
import Questao2AprendizagemProgramacao4 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap4/Questao2Programacao';
import Questao3AprendizagemProgramacao4 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap4/Questao3Programacao';
import Questao4AprendizagemProgramacao4 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvAprendizagem/Aap4/Questao4Programacao';
/* Atividade Aprendizagem */


/* Atividade Diagnóstica */
/* APP1 */
import Questao1DiagnosticProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap1/Questao1Programacao';
import Questao2DiagnosticProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap1/Questao2Programacao';
import Questao3DiagnosticProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap1/Questao3Programacao';
import Questao4DiagnosticProgramacao from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap1/Questao4Programacao';
/* APP2 */
import Questao1DiagnosticProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap2/Questao1Programacao';
import Questao2DiagnosticProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap2/Questao2Programacao';
import Questao3DiagnosticProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap2/Questao3Programacao';
import Questao4DiagnosticProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap2/Questao4Programacao';
/* APP3 */
import Questao1DiagnosticProgramacao3 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/App3/Questao1Programacao';
import Questao2DiagnosticProgramacao3 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/App3/Questao2Programacao';
import Questao3DiagnosticProgramacao3 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/App3/Questao3Programacao';
import Questao4DiagnosticProgramacao3 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/App3/Questao4Programacao';
/* APP4 */
import Questao1DiagnosticProgramacao4 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap4/Questao1Programacao';
import Questao2DiagnosticProgramacao4 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap4/Questao2Programacao';
import Questao3DiagnosticProgramacao4 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap4/Questao3Programacao';
import Questao4DiagnosticProgramacao4 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AtvDiagnostica/Aap4/Questao4Programacao';/* APP4 */ /* Atividade Diagnóstica */

/* Avaliação Virtual*/
/* Avaliação Virtual 1 */
import Questao1VirtualProgramacao1 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av1/Questao1Programacao';
import Questao2VirtualProgramacao1 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av1/Questao2Programacao';
import Questao3VirtualProgramacao1 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av1/Questao3Programacao';
import Questao4VirtualProgramacao1 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av1/Questao4Programacao';
import Questao5VirtualProgramacao1 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av1/Questao5Programacao';
/* Avaliação Virtual 2 */
import Questao1VirtualProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av2/Questao1Programacao';
import Questao2VirtualProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av2/Questao2Programacao';
import Questao3VirtualProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av2/Questao3Programacao';
import Questao4VirtualProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av2/Questao4Programacao';
import Questao5VirtualProgramacao2 from './Components/Respostas/ComponentsResposta/LinguagemDeProgramacao/AvVirtual/Av2/Questao5Programacao';
/* Avaliação Virtual*/


/*5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555 */


/* Interface e Usabilidade */
import AtvAprendizagemUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/AtvAprendizagemUi';
import AtvDiagnosticaUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/AtvDiagnosticaUi';
import AvVirtualUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/AvVirtualUi';
/* Interface e Usabilidade */

/* Interface e Usabilidade */
import Aap1UiAprend from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap1/Aap1';
import Aap2UiAprend from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap2/Aap2';
import Aap3UiAprend from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/App3/App3';
import Aap4UiAprend from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap4/Aap4';

import Adg1UiDiagnostic from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap1/Aap1';
import Adg2UiDiagnostic from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap2/Aap2';
import Adg3UiDiagnostic from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/App3/App3';
import Adg4UiDiagnostic from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap4/Aap4';

import Av1UiVirtual1 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av1/Av1';
import Av2UiVirtual2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av2/Av2';
/* Interface e Usabilidade */

/* Atividade Aprendizagem */
/* APP1 */
import Questao1AprendizagemUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap1/Questao1Ui';
import Questao2AprendizagemUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap1/Questao2Ui';
import Questao3AprendizagemUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap1/Questao3Ui';
import Questao4AprendizagemUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap1/Questao4Ui';
/* APP2 */
import Questao1AprendizagemUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap2/Questao1Ui';
import Questao2AprendizagemUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap2/Questao2Ui';
import Questao3AprendizagemUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap2/Questao3Ui';
import Questao4AprendizagemUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap2/Questao4Ui';
/* APP3 */
import Questao1AprendizagemUi3 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/App3/Questao1Ui';
import Questao2AprendizagemUi3 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/App3/Questao2Ui';
import Questao3AprendizagemUi3 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/App3/Questao3Ui';
import Questao4AprendizagemUi3 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/App3/Questao4Ui';
/* APP4 */
import Questao1AprendizagemUi4 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap4/Questao1Ui';
import Questao2AprendizagemUi4 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap4/Questao2Ui';
import Questao3AprendizagemUi4 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap4/Questao3Ui';
import Questao4AprendizagemUi4 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvAprendizagem/Aap4/Questao4Ui';
/* Atividade Aprendizagem */


/* Atividade Diagnóstica */
/* APP1 */
import Questao1DiagnosticUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap1/Questao1Ui';
import Questao2DiagnosticUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap1/Questao2Ui';
import Questao3DiagnosticUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap1/Questao3Ui';
import Questao4DiagnosticUi from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap1/Questao4Ui';
/* APP2 */
import Questao1DiagnosticUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap2/Questao1Ui';
import Questao2DiagnosticUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap2/Questao2Ui';
import Questao3DiagnosticUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap2/Questao3Ui';
import Questao4DiagnosticUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap2/Questao4Ui';
/* APP3 */
import Questao1DiagnosticUi3 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/App3/Questao1Ui';
import Questao2DiagnosticUi3 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/App3/Questao2Ui';
import Questao3DiagnosticUi3 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/App3/Questao3Ui';
import Questao4DiagnosticUi3 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/App3/Questao4Ui';
/* APP4 */
import Questao1DiagnosticUi4 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap4/Questao1Ui';
import Questao2DiagnosticUi4 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap4/Questao2Ui';
import Questao3DiagnosticUi4 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap4/Questao3Ui';
import Questao4DiagnosticUi4 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AtvDiagnostica/Aap4/Questao4Ui';/* APP4 */ /* Atividade Diagnóstica */

/* Avaliação Virtual*/
/* Avaliação Virtual 1 */
import Questao1VirtualUi1 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av1/Questao1Ui';
import Questao2VirtualUi1 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av1/Questao2Ui';
import Questao3VirtualUi1 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av1/Questao3Ui';
import Questao4VirtualUi1 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av1/Questao4Ui';
import Questao5VirtualUi1 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av1/Questao5Ui';
/* Avaliação Virtual 2 */
import Questao1VirtualUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av2/Questao1Ui';
import Questao2VirtualUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av2/Questao2Ui';
import Questao3VirtualUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av2/Questao3Ui';
import Questao4VirtualUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av2/Questao4Ui';
import Questao5VirtualUi2 from './Components/Respostas/ComponentsResposta/InterfaceUsabilidade/AvVirtual/Av2/Questao5Ui';
/* Avaliação Virtual*/


/*6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666 */




/* Ed Design Think */
import AtvAprendizagemDesign from './Components/Respostas/ComponentsResposta/EdDesignThink//AtvAprendizagem/AtvAprendizagemDesign';
import AtvDiagnosticaDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/AtvDiagnosticaDesign';
import AvVirtualDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/AvVirtualDesign';
/* Ed Design Think */

/* Ed Design Think */
import Aap1DesignAprend from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap1/Aap1';
import Aap2DesignAprend from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap2/Aap2';
import Aap3DesignAprend from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/App3/App3';
import Aap4DesignAprend from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap4/Aap4';

import Adg1DesignDiagnostic from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap1/Aap1';
import Adg2DesignDiagnostic from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap2/Aap2';
import Adg3DesignDiagnostic from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/App3/App3';
import Adg4DesignDiagnostic from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap4/Aap4';

import Av1DesignVirtual1 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av1/Av1';
import Av2DesignVirtual2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av2/Av2';
/* Ed Design Think */

/* Atividade Aprendizagem */
/* APP1 */
import Questao1AprendizagemDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap1/Questao1Design';
import Questao2AprendizagemDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap1/Questao2Design';
import Questao3AprendizagemDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap1/Questao3Design';
import Questao4AprendizagemDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap1/Questao4Design';
/* APP2 */
import Questao1AprendizagemDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap2/Questao1Design';
import Questao2AprendizagemDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap2/Questao2Design';
import Questao3AprendizagemDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap2/Questao3Design';
import Questao4AprendizagemDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap2/Questao4Design';
/* APP3 */
import Questao1AprendizagemDesign3 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/App3/Questao1Design';
import Questao2AprendizagemDesign3 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/App3/Questao2Design';
import Questao3AprendizagemDesign3 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/App3/Questao3Design';
import Questao4AprendizagemDesign3 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/App3/Questao4Design';
/* APP4 */
import Questao1AprendizagemDesign4 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap4/Questao1Design';
import Questao2AprendizagemDesign4 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap4/Questao2Design';
import Questao3AprendizagemDesign4 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap4/Questao3Design';
import Questao4AprendizagemDesign4 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvAprendizagem/Aap4/Questao4Design';
/* Atividade Aprendizagem */


/* Atividade Diagnóstica */
/* APP1 */
import Questao1DiagnosticDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap1/Questao1Design';
import Questao2DiagnosticDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap1/Questao2Design';
import Questao3DiagnosticDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap1/Questao3Design';
import Questao4DiagnosticDesign from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap1/Questao4Design';
/* APP2 */
import Questao1DiagnosticDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap2/Questao1Design';
import Questao2DiagnosticDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap2/Questao2Design';
import Questao3DiagnosticDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap2/Questao3Design';
import Questao4DiagnosticDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap2/Questao4Design';
/* APP3 */
import Questao1DiagnosticDesign3 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/App3/Questao1Design';
import Questao2DiagnosticDesign3 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/App3/Questao2Design';
import Questao3DiagnosticDesign3 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/App3/Questao3Design';
import Questao4DiagnosticDesign3 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/App3/Questao4Design';
/* APP4 */
import Questao1DiagnosticDesign4 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap4/Questao1Design';
import Questao2DiagnosticDesign4 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap4/Questao2Design';
import Questao3DiagnosticDesign4 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap4/Questao3Design';
import Questao4DiagnosticDesign4 from './Components/Respostas/ComponentsResposta/EdDesignThink/AtvDiagnostica/Aap4/Questao4Design';/* APP4 */ /* Atividade Diagnóstica */

/* Avaliação Virtual*/
/* Avaliação Virtual 1 */
import Questao1VirtualDesign1 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av1/Questao1Design';
import Questao2VirtualDesign1 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av1/Questao2Design';
import Questao3VirtualDesign1 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av1/Questao3Design';
import Questao4VirtualDesign1 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av1/Questao4Design';
import Questao5VirtualDesign1 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av1/Questao5Design';
/* Avaliação Virtual 2 */
import Questao1VirtualDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av2/Questao1Design';
import Questao2VirtualDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av2/Questao2Design';
import Questao3VirtualDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av2/Questao3Design';
import Questao4VirtualDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av2/Questao4Design';
import Questao5VirtualDesign2 from './Components/Respostas/ComponentsResposta/EdDesignThink/AvVirtual/Av2/Questao5Design';
/* Avaliação Virtual*/




const App = () => {
  return (
    <div>
      <BrowserRouter>

        {/* Global */}
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='pix' element={<Pix />} />
          <Route path='*' element={<Error />} />

          <>
            <Route path='resposta/atvaprendizagemanalise/analiseaap1' element={<Error />} />
            <Route path='resposta/atvaprendizagemanalise/analiseaap2' element={<Error />} />
            <Route path='resposta/atvaprendizagemanalise/analiseaap3' element={<Error />} />
            <Route path='resposta/atvaprendizagemanalise/analiseaap4' element={<Error />} />
            <Route path='resposta/atvaprendizagemanalise/' element={<Error />} />
            <Route path='resposta' element={<Error />} />

            <Route path='resposta/atvdiagnosticaanalise/adg1analisediagnostic' element={<Error />} />
            <Route path='resposta/atvdiagnosticaanalise/adg2analisediagnostic2' element={<Error />} />
            <Route path='resposta/atvdiagnosticaanalise/adg3analisediagnostic3' element={<Error />} />
            <Route path='resposta/atvdiagnosticaanalise/adg4analisediagnostic4' element={<Error />} />
            <Route path='resposta/atvdiagnosticaanalise/' element={<Error />} />

            <Route path='resposta/av1analisevirtual1/av1analisevirtual' element={<Error />} />
            <Route path='resposta/av1analisevirtual1/av2analisevirtual2' element={<Error />} />
            <Route path='resposta/av1analisevirtual1/' element={<Error />} />
          </>

          {/* Global */}

          {/* Análise Orientada a Objetvo */}
          {/* Atividade Aprendizagem */}
          <Route path='resposta' element={<Respostas />} >
            <Route path='atvaprendizagemanalise' element={<AtvAprendizagemAnalise />}>
              <Route path='analiseaap1' element={<Aap1AnaliseAprend />} >
                <Route path='questao1analise' element={<Questao1Analise />} />
                <Route path='questao2analise' element={<Questao2Analise />} />
                <Route path='questao3analise' element={<Questao3Analise />} />
                <Route path='questao4analise' element={<Questao4Analise />} />
              </Route>
              <Route path='analiseaap2' element={<Aap2AnaliseAprend />} >
                <Route path='questao1analise2' element={<Questao1Analise2 />} />
                <Route path='questao2analise2' element={<Questao2Analise2 />} />
                <Route path='questao3analise2' element={<Questao3Analise2 />} />
                <Route path='questao4analise2' element={<Questao4Analise2 />} />
              </Route>
              <Route path='analiseaap3' element={<Aap3AnaliseAprend />} >
                <Route path='questao1analise3' element={<Questao1Analise3 />} />
                <Route path='questao2analise3' element={<Questao2Analise3 />} />
                <Route path='questao3analise3' element={<Questao3Analise3 />} />
                <Route path='questao4analise3' element={<Questao4Analise3 />} />
              </Route>
              <Route path='analiseaap4' element={<Aap4AnaliseAprend />} >
                <Route path='questao1analise4' element={<Questao1Analise4 />} />
                <Route path='questao2analise4' element={<Questao2Analise4 />} />
                <Route path='questao3analise4' element={<Questao3Analise4 />} />
                <Route path='questao4analise4' element={<Questao4Analise4 />} />
              </Route>
            </Route>{/* Atividade Aprendizagem */}

            {/* Atividade Diagnóstica */}
            <Route path='atvdiagnosticaanalise' element={<AtvDiagnosticaAnalise />}>
              <Route path='adg1analisediagnostic' element={<Adg1AnaliseDiagnostic />} >
                <Route path='questao1diagnostic' element={<Questao1Diagnostic />} />
                <Route path='questao2diagnostic' element={<Questao2Diagnostic />} />
                <Route path='questao3diagnostic' element={<Questao3Diagnostic />} />
                <Route path='questao4diagnostic' element={<Questao4Diagnostic />} />
              </Route>
              <Route path='adg2analisediagnostic2' element={<Adg2AnaliseDiagnostic />} >
                <Route path='questao1diagnostic2' element={<Questao1Diagnostic2 />} />
                <Route path='questao2diagnostic2' element={<Questao2Diagnostic2 />} />
                <Route path='questao3diagnostic2' element={<Questao3Diagnostic2 />} />
                <Route path='questao4diagnostic2' element={<Questao4Diagnostic2 />} />
              </Route>
              <Route path='adg3analisediagnostic3' element={<Adg3AnaliseDiagnostic />} >
                <Route path='questao1diagnostic3' element={<Questao1Diagnostic3 />} />
                <Route path='questao2diagnostic3' element={<Questao2Diagnostic3 />} />
                <Route path='questao3diagnostic3' element={<Questao3Diagnostic3 />} />
                <Route path='questao4diagnostic3' element={<Questao4Diagnostic3 />} />
              </Route>
              <Route path='adg4analisediagnostic4' element={<Adg4AnaliseDiagnostic />} >
                <Route path='questao1diagnostic4' element={<Questao1Diagnostic4 />} />
                <Route path='questao2diagnostic4' element={<Questao2Diagnostic4 />} />
                <Route path='questao3diagnostic4' element={<Questao3Diagnostic4 />} />
                <Route path='questao4diagnostic4' element={<Questao4Diagnostic4 />} />
              </Route>
            </Route>{/* Atividade Diagnóstica */}

            {/* Avaliação Virtual */}
            <Route path='av1analisevirtual1' element={<AvVirtualAnalise />}>
              <Route path='av1analisevirtual' element={<Av1AnaliseVirtual1 />} >
                <Route path='questao1virtual' element={<Questao1AnaliseVirtual />} />
                <Route path='questao2virtual' element={<Questao2AnaliseVirtual />} />
                <Route path='questao3virtual' element={<Questao3AnaliseVirtual />} />
                <Route path='questao4virtual' element={<Questao4AnaliseVirtual />} />
                <Route path='questao5virtual' element={<Questao5AnaliseVirtual />} />
              </Route>

              <Route path='av2analisevirtual2' element={<Av1AnaliseVirtual2 />} >
                <Route path='questao1virtual2' element={<Questao1AnaliseVirtual2 />} />
                <Route path='questao2virtual2' element={<Questao2AnaliseVirtual2 />} />
                <Route path='questao3virtual2' element={<Questao3AnaliseVirtual2 />} />
                <Route path='questao4virtual2' element={<Questao4AnaliseVirtual2 />} />
                <Route path='questao5virtual2' element={<Questao5AnaliseVirtual2 />} />
              </Route>
            </Route>
            {/* Avaliação Virtual */}
          </Route>
          {/* Análise Orientada a Objetvo */}


          {/* ------------------------------------------------------------------------------------------ */}


          <>
            <Route path='resposta/av1linguagemvirtual1/linguagemapp1' element={<Error />} />
            <Route path='resposta/av1linguagemvirtual1/linguagemapp2' element={<Error />} />
            <Route path='resposta/av1linguagemvirtual1/linguagemapp3' element={<Error />} />
            <Route path='resposta/av1linguagemvirtual1/linguagemapp4' element={<Error />} />
            <Route path='resposta/av1linguagemvirtual1/' element={<Error />} />
            <Route path='resposta' element={<Error />} />

            <Route path='resposta/atvdiagnosticalinguagem/adg1diagnosticlinguagem' element={<Error />} />
            <Route path='resposta/atvdiagnosticalinguagem/adg2diagnosticlinguagem2' element={<Error />} />
            <Route path='resposta/atvdiagnosticalinguagem/adg3diagnosticlinguagem3' element={<Error />} />
            <Route path='resposta/atvdiagnosticalinguagem/adg4diagnosticlinguagem4' element={<Error />} />
            <Route path='resposta/atvdiagnosticalinguagem/' element={<Error />} />

            <Route path='resposta/av1linguagemvirtual1/av1linguagemvirtual2' element={<Error />} />
            <Route path='resposta/av1linguagemvirtual1/av2analisevirtual2' element={<Error />} />
            <Route path='resposta/av1linguagemvirtual1/' element={<Error />} />
          </>

          {/* Linguagem Orientada a Objetvo */}
          {/* Atividade Aprendizagem */}
          <Route path='resposta' element={<Respostas />} >
            <Route path='atvaprendizlinguagem' element={<AtvAprendizagemLinguagem />}>
              <Route path='linguagemapp1' element={<Aap1LinguagemAprend />} >
                <Route path='questao1aprendizagemlinguagem' element={<Questao1AprendizagemLinguagem />} />
                <Route path='questao2aprendizagemlinguagem' element={<Questao2AprendizagemLinguagem />} />
                <Route path='questao3aprendizagemlinguagem' element={<Questao3AprendizagemLinguagem />} />
                <Route path='questao4aprendizagemlinguagem' element={<Questao4AprendizagemLinguagem />} />
              </Route>
              <Route path='linguagemapp2' element={<Aap2LinguagemAprend />} >
                <Route path='questao1aprendizagemlinguagem2' element={<Questao1AprendizagemLinguagem2 />} />
                <Route path='questao2aprendizagemlinguagem2' element={<Questao2AprendizagemLinguagem2 />} />
                <Route path='questao3aprendizagemlinguagem2' element={<Questao3AprendizagemLinguagem2 />} />
                <Route path='questao4aprendizagemlinguagem2' element={<Questao4AprendizagemLinguagem2 />} />
              </Route>
              <Route path='linguagemapp3' element={<Aap3LinguagemAprend />} >
                <Route path='questao1aprendizagemlinguagem3' element={<Questao1AprendizagemLinguagem3 />} />
                <Route path='questao2aprendizagemlinguagem3' element={<Questao2AprendizagemLinguagem3 />} />
                <Route path='questao3aprendizagemlinguagem3' element={<Questao3AprendizagemLinguagem3 />} />
                <Route path='questao4aprendizagemlinguagem3' element={<Questao4AprendizagemLinguagem3 />} />
              </Route>
              <Route path='linguagemapp4' element={<Aap4LinguagemAprend />} >
                <Route path='questao1aprendizagemlinguagem4' element={<Questao1AprendizagemLinguagem4 />} />
                <Route path='questao2aprendizagemlinguagem4' element={<Questao2AprendizagemLinguagem4 />} />
                <Route path='questao3aprendizagemlinguagem4' element={<Questao3AprendizagemLinguagem4 />} />
                <Route path='questao4aprendizagemlinguagem4' element={<Questao4AprendizagemLinguagem4 />} />
              </Route>
            </Route>{/* Atividade Aprendizagem */}

            {/* Atividade Diagnóstica */}
            <Route path='atvdiagnosticalinguagem' element={<AtvDiagnosticaLinguagem />}>
              <Route path='adg1diagnosticlinguagem' element={<Adg1LinguagemDiagnostic />} >
                <Route path='questao1diagnosticlinguagem' element={<Questao1DiagnosticLinguagem />} />
                <Route path='questao2diagnosticlinguagem' element={<Questao2DiagnosticLinguagem />} />
                <Route path='questao3diagnosticlinguagem' element={<Questao3DiagnosticLinguagem />} />
                <Route path='questao4diagnosticlinguagem' element={<Questao4DiagnosticLinguagem />} />
              </Route>
              <Route path='adg2diagnosticlinguagem2' element={<Adg2LinguagemDiagnostic />} >
                <Route path='questao1diagnosticlinguagem2' element={<Questao1DiagnosticLinguagem2 />} />
                <Route path='questao2diagnosticlinguagem2' element={<Questao2DiagnosticLinguagem2 />} />
                <Route path='questao3diagnosticlinguagem2' element={<Questao3DiagnosticLinguagem2 />} />
                <Route path='questao4diagnosticlinguagem2' element={<Questao4DiagnosticLinguagem2 />} />
              </Route>
              <Route path='adg3diagnosticlinguagem3' element={<Adg3LinguagemDiagnostic />} >
                <Route path='questao1diagnosticlinguagem3' element={<Questao1DiagnosticLinguagem3 />} />
                <Route path='questao2diagnosticlinguagem3' element={<Questao2DiagnosticLinguagem3 />} />
                <Route path='questao3diagnosticlinguagem3' element={<Questao3DiagnosticLinguagem3 />} />
                <Route path='questao4diagnosticlinguagem3' element={<Questao4DiagnosticLinguagem3 />} />
              </Route>
              <Route path='adg4diagnosticlinguagem4' element={<Adg4LinguagemDiagnostic />} >
                <Route path='questao1diagnosticlinguagem4' element={<Questao1DiagnosticLinguagem4 />} />
                <Route path='questao2diagnosticlinguagem4' element={<Questao2DiagnosticLinguagem4 />} />
                <Route path='questao3diagnosticlinguagem4' element={<Questao3DiagnosticLinguagem4 />} />
                <Route path='questao4diagnosticlinguagem4' element={<Questao4DiagnosticLinguagem4 />} />
              </Route>
            </Route>{/* Atividade Diagnóstica */}

            {/* Avaliação Virtual */}
            <Route path='av1linguagemvirtual1' element={<AvVirtualLinguagem />}>
              <Route path='av1linguagemvirtual2' element={<Av1LinguagemVirtual1 />} >
                <Route path='questao1virtuallinguagem' element={<Questao1VirtualLinguagem1 />} />
                <Route path='questao2virtuallinguagem' element={<Questao2VirtualLinguagem1 />} />
                <Route path='questao3virtuallinguagem' element={<Questao3VirtualLinguagem1 />} />
                <Route path='questao4virtuallinguagem' element={<Questao4VirtualLinguagem1 />} />
                <Route path='questao5virtuallinguagem' element={<Questao5VirtualLinguagem1 />} />
              </Route>

              <Route path='av2analisevirtual2' element={<Av2LinguagemVirtual2 />} >
                <Route path='questao1virtuallinguagem2' element={<Questao1VirtualLinguagem2 />} />
                <Route path='questao2virtuallinguagem2' element={<Questao2VirtualLinguagem2 />} />
                <Route path='questao3virtuallinguagem2' element={<Questao3VirtualLinguagem2 />} />
                <Route path='questao4virtuallinguagem2' element={<Questao4VirtualLinguagem2 />} />
                <Route path='questao5virtuallinguagem2' element={<Questao5VirtualLinguagem2 />} />
              </Route>
            </Route>
            {/* Avaliação Virtual */}
          </Route>
          {/* Linguagem Orientada a Objetvo */}

          {/* ------------------------------------------------------------------------------------------ */}
          <>

            <Route path='resposta/atvaprendizbancodados/bancodadosapp1' element={<Error />} />
            <Route path='resposta/atvaprendizbancodados/bancodadosapp2' element={<Error />} />
            <Route path='resposta/atvaprendizbancodados/bancodadosapp3' element={<Error />} />
            <Route path='resposta/atvaprendizbancodados/bancodadosapp4' element={<Error />} />
            <Route path='resposta/atvaprendizbancodados/' element={<Error />} />
            <Route path='resposta' element={<Error />} />

            <Route path='resposta/atvdiagnosticaprogramacao/adg1diagnosticprogramacao' element={<Error />} />
            <Route path='resposta/atvdiagnosticaprogramacao/adg2diagnosticprogramacao2' element={<Error />} />
            <Route path='resposta/atvdiagnosticaprogramacao/adg3diagnosticprogramacao3' element={<Error />} />
            <Route path='resposta/atvdiagnosticaprogramacao/adg4diagnosticprogramacao4' element={<Error />} />
            <Route path='resposta/atvdiagnosticaprogramacao/' element={<Error />} />

            <Route path='resposta/av1programacaovirtual1/av1programacaovirtual2' element={<Error />} />
            <Route path='resposta/av1programacaovirtual1/av2programacaovirtual2' element={<Error />} />
            <Route path='resposta/av1programacaovirtual1/' element={<Error />} />
          </>


          {/* Programação e Desenvolvimento de Banco de Dados */}
          {/* Atividade Aprendizagem */}
          <Route path='resposta' element={<Respostas />} >
            <Route path='atvaprendizbancodados' element={<AtvAprendizagemBancoDados />}>
              <Route path='bancodadosapp1' element={<Aap1BancoDadosAprend />} >
                <Route path='questao1aprendizagembancodados' element={<Questao1AprendizagemBancoDados />} />
                <Route path='questao2aprendizagembancodados' element={<Questao2AprendizagemBancoDados />} />
                <Route path='questao3aprendizagembancodados' element={<Questao3AprendizagemBancoDados />} />
                <Route path='questao4aprendizagembancodados' element={<Questao4AprendizagemBancoDados />} />
              </Route>
              <Route path='bancodadosapp2' element={<Aap2BancoDadosAprend />} >
                <Route path='questao1aprendizagembancodados2' element={<Questao1AprendizagemBancoDados2 />} />
                <Route path='questao2aprendizagembancodados2' element={<Questao2AprendizagemBancoDados2 />} />
                <Route path='questao3aprendizagembancodados2' element={<Questao3AprendizagemBancoDados2 />} />
                <Route path='questao4aprendizagembancodados2' element={<Questao4AprendizagemBancoDados2 />} />
              </Route>
              <Route path='bancodadosapp3' element={<Aap3BancoDadosAprend />} >
                <Route path='questao1aprendizagembancodados3' element={<Questao1AprendizagemBancoDados3 />} />
                <Route path='questao2aprendizagembancodados3' element={<Questao2AprendizagemBancoDados3 />} />
                <Route path='questao3aprendizagembancodados3' element={<Questao3AprendizagemBancoDados3 />} />
                <Route path='questao4aprendizagembancodados3' element={<Questao4AprendizagemBancoDados3 />} />
              </Route>
              <Route path='bancodadosapp4' element={<Aap4BancoDadosAprend />} >
                <Route path='questao1aprendizagembancodados4' element={<Questao1AprendizagemBancoDados4 />} />
                <Route path='questao2aprendizagembancodados4' element={<Questao2AprendizagemBancoDados4 />} />
                <Route path='questao3aprendizagembancodados4' element={<Questao3AprendizagemBancoDados4 />} />
                <Route path='questao4aprendizagembancodados4' element={<Questao4AprendizagemBancoDados4 />} />
              </Route>
            </Route>{/* Atividade Aprendizagem */}

            {/* Atividade Diagnóstica */}
            <Route path='atvdiagnosticabancodados' element={<AtvDiagnosticaBancoDados />}>
              <Route path='adg1diagnosticbancodados' element={<Adg1BancoDadosDiagnostic />} >
                <Route path='questao1diagnosticbancodados' element={<Questao1DiagnosticBancoDados />} />
                <Route path='questao2diagnosticbancodados' element={<Questao2DiagnosticBancoDados />} />
                <Route path='questao3diagnosticbancodados' element={<Questao3DiagnosticBancoDados />} />
                <Route path='questao4diagnosticbancodados' element={<Questao4DiagnosticBancoDados />} />
              </Route>
              <Route path='adg2diagnosticbancodados2' element={<Adg2BancoDadosDiagnostic />} >
                <Route path='questao1diagnosticbancodados2' element={<Questao1DiagnosticBancoDados2 />} />
                <Route path='questao2diagnosticbancodados2' element={<Questao2DiagnosticBancoDados2 />} />
                <Route path='questao3diagnosticbancodados2' element={<Questao3DiagnosticBancoDados2 />} />
                <Route path='questao4diagnosticbancodados2' element={<Questao4DiagnosticBancoDados2 />} />
              </Route>
              <Route path='adg3diagnosticbancodados3' element={<Adg3BancoDadosDiagnostic />} >
                <Route path='questao1diagnosticbancodados3' element={<Questao1DiagnosticBancoDados3 />} />
                <Route path='questao2diagnosticbancodados3' element={<Questao2DiagnosticBancoDados3 />} />
                <Route path='questao3diagnosticbancodados3' element={<Questao3DiagnosticBancoDados3 />} />
                <Route path='questao4diagnosticbancodados3' element={<Questao4DiagnosticBancoDados3 />} />
              </Route>
              <Route path='adg4diagnosticbancodados4' element={<Adg4BancoDadosDiagnostic />} >
                <Route path='questao1diagnosticbancodados4' element={<Questao1DiagnosticBancoDados4 />} />
                <Route path='questao2diagnosticbancodados4' element={<Questao2DiagnosticBancoDados4 />} />
                <Route path='questao3diagnosticbancodados4' element={<Questao3DiagnosticBancoDados4 />} />
                <Route path='questao4diagnosticbancodados4' element={<Questao4DiagnosticBancoDados4 />} />
              </Route>
            </Route>{/* Atividade Diagnóstica */}

            {/* Avaliação Virtual */}
            <Route path='av1bancodadosvirtual1' element={<AvVirtualBancoDados />}>
              <Route path='av1bancodadosvirtual2' element={<Av1BancoDadosVirtual1 />} >
                <Route path='questao1virtualbancodados' element={<Questao1VirtualBancoDados1 />} />
                <Route path='questao2virtualbancodados' element={<Questao2VirtualBancoDados1 />} />
                <Route path='questao3virtualbancodados' element={<Questao3VirtualBancoDados1 />} />
                <Route path='questao4virtualbancodados' element={<Questao4VirtualBancoDados1 />} />
                <Route path='questao5virtualbancodados' element={<Questao5VirtualBancoDados1 />} />
              </Route>

              <Route path='av2bancodadosvirtual2' element={<Av2BancoDadosVirtual2 />} >
                <Route path='questao1virtualbancodados2' element={<Questao1VirtualBancoDados2 />} />
                <Route path='questao2virtualbancodados2' element={<Questao2VirtualBancoDados2 />} />
                <Route path='questao3virtualbancodados2' element={<Questao3VirtualBancoDados2 />} />
                <Route path='questao4virtualbancodados2' element={<Questao4VirtualBancoDados2 />} />
                <Route path='questao5virtualbancodados2' element={<Questao5VirtualBancoDados2 />} />
              </Route>
            </Route>
            {/* Avaliação Virtual */}
          </Route>
          {/* Programação e Desenvolvimento de Banco de Dados */}

          {/* ------------------------------------------------------------------------------------------ */}

          <>

            <Route path='resposta/atvaprendizprogramacao/programacaoapp1' element={<Error />} />
            <Route path='resposta/atvaprendizprogramacao/programacaoapp2' element={<Error />} />
            <Route path='resposta/atvaprendizprogramacao/programacaoapp3' element={<Error />} />
            <Route path='resposta/atvaprendizprogramacao/programacaoapp4' element={<Error />} />
            <Route path='resposta/atvaprendizprogramacao/' element={<Error />} />
            <Route path='resposta' element={<Error />} />

            <Route path='resposta/atvdiagnosticaprogramacao/adg1diagnosticprogramacao' element={<Error />} />
            <Route path='resposta/atvdiagnosticaprogramacao/adg2diagnosticprogramacao2' element={<Error />} />
            <Route path='resposta/atvdiagnosticaprogramacao/adg3diagnosticprogramacao3' element={<Error />} />
            <Route path='resposta/atvdiagnosticaprogramacao/adg4diagnosticprogramacao4' element={<Error />} />
            <Route path='resposta/atvdiagnosticaprogramacao/' element={<Error />} />

            <Route path='resposta/av1programacaovirtual1/av1programacaovirtual2' element={<Error />} />
            <Route path='resposta/av1programacaovirtual1/av2programacaovirtual2' element={<Error />} />
            <Route path='resposta/av1programacaovirtual1/' element={<Error />} />
          </>



          {/* Linguagem de Programação */}
          {/* Atividade Aprendizagem */}
          <Route path='resposta' element={<Respostas />} >
            <Route path='atvaprendizprogramacao' element={<AtvAprendizagemProgramacao />}>
              <Route path='programacaoapp1' element={<Aap1ProgramacaoAprend />} >
                <Route path='questao1aprendizagemprogramacao' element={<Questao1AprendizagemProgramacao />} />
                <Route path='questao2aprendizagemprogramacao' element={<Questao2AprendizagemProgramacao />} />
                <Route path='questao3aprendizagemprogramacao' element={<Questao3AprendizagemProgramacao />} />
                <Route path='questao4aprendizagemprogramacao' element={<Questao4AprendizagemProgramacao />} />
              </Route>
              <Route path='programacaoapp2' element={<Aap2ProgramacaoAprend />} >
                <Route path='questao1aprendizagemprogramacao2' element={<Questao1AprendizagemProgramacao2 />} />
                <Route path='questao2aprendizagemprogramacao2' element={<Questao2AprendizagemProgramacao2 />} />
                <Route path='questao3aprendizagemprogramacao2' element={<Questao3AprendizagemProgramacao2 />} />
                <Route path='questao4aprendizagemprogramacao2' element={<Questao4AprendizagemProgramacao2 />} />
              </Route>
              <Route path='programacaoapp3' element={<Aap3ProgramacaoAprend />} >
                <Route path='questao1aprendizagemprogramacao3' element={<Questao1AprendizagemProgramacao3 />} />
                <Route path='questao2aprendizagemprogramacao3' element={<Questao2AprendizagemProgramacao3 />} />
                <Route path='questao3aprendizagemprogramacao3' element={<Questao3AprendizagemProgramacao3 />} />
                <Route path='questao4aprendizagemprogramacao3' element={<Questao4AprendizagemProgramacao3 />} />
              </Route>
              <Route path='programacaoapp4' element={<Aap4ProgramacaoAprend />} >
                <Route path='questao1aprendizagemprogramacao4' element={<Questao1AprendizagemProgramacao4 />} />
                <Route path='questao2aprendizagemprogramacao4' element={<Questao2AprendizagemProgramacao4 />} />
                <Route path='questao3aprendizagemprogramacao4' element={<Questao3AprendizagemProgramacao4 />} />
                <Route path='questao4aprendizagemprogramacao4' element={<Questao4AprendizagemProgramacao4 />} />
              </Route>
            </Route>{/* Atividade Aprendizagem */}

            {/* Atividade Diagnóstica */}
            <Route path='atvdiagnosticaprogramacao' element={<AtvDiagnosticaProgramacao />}>
              <Route path='adg1diagnosticprogramacao' element={<Adg1ProgramacaoDiagnostic />} >
                <Route path='questao1diagnosticprogramacao' element={<Questao1DiagnosticProgramacao />} />
                <Route path='questao2diagnosticprogramacao' element={<Questao2DiagnosticProgramacao />} />
                <Route path='questao3diagnosticprogramacao' element={<Questao3DiagnosticProgramacao />} />
                <Route path='questao4diagnosticprogramacao' element={<Questao4DiagnosticProgramacao />} />
              </Route>
              <Route path='adg2diagnosticprogramacao2' element={<Adg2ProgramacaoDiagnostic />} >
                <Route path='questao1diagnosticprogramacao2' element={<Questao1DiagnosticProgramacao2 />} />
                <Route path='questao2diagnosticprogramacao2' element={<Questao2DiagnosticProgramacao2 />} />
                <Route path='questao3diagnosticprogramacao2' element={<Questao3DiagnosticProgramacao2 />} />
                <Route path='questao4diagnosticprogramacao2' element={<Questao4DiagnosticProgramacao2 />} />
              </Route>
              <Route path='adg3diagnosticprogramacao3' element={<Adg3ProgramacaoDiagnostic />} >
                <Route path='questao1diagnosticprogramacao3' element={<Questao1DiagnosticProgramacao3 />} />
                <Route path='questao2diagnosticprogramacao3' element={<Questao2DiagnosticProgramacao3 />} />
                <Route path='questao3diagnosticprogramacao3' element={<Questao3DiagnosticProgramacao3 />} />
                <Route path='questao4diagnosticprogramacao3' element={<Questao4DiagnosticProgramacao3 />} />
              </Route>
              <Route path='adg4diagnosticprogramacao4' element={<Adg4ProgramacaoDiagnostic />} >
                <Route path='questao1diagnosticprogramacao4' element={<Questao1DiagnosticProgramacao4 />} />
                <Route path='questao2diagnosticprogramacao4' element={<Questao2DiagnosticProgramacao4 />} />
                <Route path='questao3diagnosticprogramacao4' element={<Questao3DiagnosticProgramacao4 />} />
                <Route path='questao4diagnosticprogramacao4' element={<Questao4DiagnosticProgramacao4 />} />
              </Route>
            </Route>{/* Atividade Diagnóstica */}

            {/* Avaliação Virtual */}
            <Route path='av1programacaovirtual1' element={<AvVirtualProgramacao />}>
              <Route path='av1programacaovirtual2' element={<Av1ProgramacaoVirtual1 />} >
                <Route path='questao1virtualprogramacao' element={<Questao1VirtualProgramacao1 />} />
                <Route path='questao2virtualprogramacao' element={<Questao2VirtualProgramacao1 />} />
                <Route path='questao3virtualprogramacao' element={<Questao3VirtualProgramacao1 />} />
                <Route path='questao4virtualprogramacao' element={<Questao4VirtualProgramacao1 />} />
                <Route path='questao5virtualprogramacao' element={<Questao5VirtualProgramacao1 />} />
              </Route>

              <Route path='av2programacaovirtual2' element={<Av2ProgramacaoVirtual2 />} >
                <Route path='questao1virtualprogramacao2' element={<Questao1VirtualProgramacao2 />} />
                <Route path='questao2virtualprogramacao2' element={<Questao2VirtualProgramacao2 />} />
                <Route path='questao3virtualprogramacao2' element={<Questao3VirtualProgramacao2 />} />
                <Route path='questao4virtualprogramacao2' element={<Questao4VirtualProgramacao2 />} />
                <Route path='questao5virtualprogramacao2' element={<Questao5VirtualProgramacao2 />} />
              </Route>
            </Route>
            {/* Avaliação Virtual */}
          </Route>
          {/* Linguagem de Programação */}


          {/* ------------------------------------------------------------------------------------------ */}


          <>

            <Route path='resposta/atvaprendizui/uiapp1' element={<Error />} />
            <Route path='resposta/atvaprendizui/uiapp2' element={<Error />} />
            <Route path='resposta/atvaprendizui/uiapp3' element={<Error />} />
            <Route path='resposta/atvaprendizui/uiapp4' element={<Error />} />
            <Route path='resposta/atvaprendizui/' element={<Error />} />
            <Route path='resposta' element={<Error />} />

            <Route path='resposta/atvdiagnosticaui/adg1diagnosticui' element={<Error />} />
            <Route path='resposta/atvdiagnosticaui/adg2diagnosticui2' element={<Error />} />
            <Route path='resposta/atvdiagnosticaui/adg3diagnosticui3' element={<Error />} />
            <Route path='resposta/atvdiagnosticaui/adg4diagnosticui4' element={<Error />} />
            <Route path='resposta/atvdiagnosticaui/' element={<Error />} />

            <Route path='resposta/adg3diagnosticui3/av1uivirtual2' element={<Error />} />
            <Route path='resposta/adg4diagnosticui4/av2uivirtual2' element={<Error />} />
            <Route path='resposta/av1uivirtual1/' element={<Error />} />
          </>


          {/* Interface e Usabilidade */}
          {/* Atividade Aprendizagem */}
          <Route path='resposta' element={<Respostas />} >
            <Route path='atvaprendizui' element={<AtvAprendizagemUi />}>
              <Route path='uiapp1' element={<Aap1UiAprend />} >
                <Route path='questao1aprendizagemui' element={<Questao1AprendizagemUi />} />
                <Route path='questao2aprendizagemui' element={<Questao2AprendizagemUi />} />
                <Route path='questao3aprendizagemui' element={<Questao3AprendizagemUi />} />
                <Route path='questao4aprendizagemui' element={<Questao4AprendizagemUi />} />
              </Route>
              <Route path='uiapp2' element={<Aap2UiAprend />} >
                <Route path='questao1aprendizagemui2' element={<Questao1AprendizagemUi2 />} />
                <Route path='questao2aprendizagemui2' element={<Questao2AprendizagemUi2 />} />
                <Route path='questao3aprendizagemui2' element={<Questao3AprendizagemUi2 />} />
                <Route path='questao4aprendizagemui2' element={<Questao4AprendizagemUi2 />} />
              </Route>
              <Route path='uiapp3' element={<Aap3UiAprend />} >
                <Route path='questao1aprendizagemui3' element={<Questao1AprendizagemUi3 />} />
                <Route path='questao2aprendizagemui3' element={<Questao2AprendizagemUi3 />} />
                <Route path='questao3aprendizagemui3' element={<Questao3AprendizagemUi3 />} />
                <Route path='questao4aprendizagemui3' element={<Questao4AprendizagemUi3 />} />
              </Route>
              <Route path='uiapp4' element={<Aap4UiAprend />} >
                <Route path='questao1aprendizagemui4' element={<Questao1AprendizagemUi4 />} />
                <Route path='questao2aprendizagemui4' element={<Questao2AprendizagemUi4 />} />
                <Route path='questao3aprendizagemui4' element={<Questao3AprendizagemUi4 />} />
                <Route path='questao4aprendizagemui4' element={<Questao4AprendizagemUi4 />} />
              </Route>
            </Route>{/* Atividade Aprendizagem */}

            {/* Atividade Diagnóstica */}
            <Route path='atvdiagnosticaui' element={<AtvDiagnosticaUi />}>
              <Route path='adg1diagnosticui' element={<Adg1UiDiagnostic />} >
                <Route path='questao1diagnosticui' element={<Questao1DiagnosticUi />} />
                <Route path='questao2diagnosticui' element={<Questao2DiagnosticUi />} />
                <Route path='questao3diagnosticui' element={<Questao3DiagnosticUi />} />
                <Route path='questao4diagnosticui' element={<Questao4DiagnosticUi />} />
              </Route>
              <Route path='adg2diagnosticui2' element={<Adg2UiDiagnostic />} >
                <Route path='questao1diagnosticui2' element={<Questao1DiagnosticUi2 />} />
                <Route path='questao2diagnosticui2' element={<Questao2DiagnosticUi2 />} />
                <Route path='questao3diagnosticui2' element={<Questao3DiagnosticUi2 />} />
                <Route path='questao4diagnosticui2' element={<Questao4DiagnosticUi2 />} />
              </Route>
              <Route path='adg3diagnosticui3' element={<Adg3UiDiagnostic />} >
                <Route path='questao1diagnosticui3' element={<Questao1DiagnosticUi3 />} />
                <Route path='questao2diagnosticui3' element={<Questao2DiagnosticUi3 />} />
                <Route path='questao3diagnosticui3' element={<Questao3DiagnosticUi3 />} />
                <Route path='questao4diagnosticui3' element={<Questao4DiagnosticUi3 />} />
              </Route>
              <Route path='adg4diagnosticui4' element={<Adg4UiDiagnostic />} >
                <Route path='questao1diagnosticui4' element={<Questao1DiagnosticUi4 />} />
                <Route path='questao2diagnosticui4' element={<Questao2DiagnosticUi4 />} />
                <Route path='questao3diagnosticui4' element={<Questao3DiagnosticUi4 />} />
                <Route path='questao4diagnosticui4' element={<Questao4DiagnosticUi4 />} />
              </Route>
            </Route>{/* Atividade Diagnóstica */}

            {/* Avaliação Virtual */}
            <Route path='av1uivirtual1' element={<AvVirtualUi />}>
              <Route path='av1uivirtual2' element={<Av1UiVirtual1 />} >
                <Route path='questao1virtualui' element={<Questao1VirtualUi1 />} />
                <Route path='questao2virtualui' element={<Questao2VirtualUi1 />} />
                <Route path='questao3virtualui' element={<Questao3VirtualUi1 />} />
                <Route path='questao4virtualui' element={<Questao4VirtualUi1 />} />
                <Route path='questao5virtualui' element={<Questao5VirtualUi1 />} />
              </Route>

              <Route path='av2uivirtual2' element={<Av2UiVirtual2 />} >
                <Route path='questao1virtualui2' element={<Questao1VirtualUi2 />} />
                <Route path='questao2virtualui2' element={<Questao2VirtualUi2 />} />
                <Route path='questao3virtualui2' element={<Questao3VirtualUi2 />} />
                <Route path='questao4virtualui2' element={<Questao4VirtualUi2 />} />
                <Route path='questao5virtualui2' element={<Questao5VirtualUi2 />} />
              </Route>
            </Route>
            {/* Avaliação Virtual */}
          </Route>
          {/* Interface e Usabilidade */}

          {/* ------------------------------------------------------------------------------------------ */}


          <>
            <Route path='resposta/atvaprendizdesign/designapp1' element={<Error />} />
            <Route path='resposta/atvaprendizdesign/designapp2' element={<Error />} />
            <Route path='resposta/atvaprendizdesign/designapp3' element={<Error />} />
            <Route path='resposta/atvaprendizdesign/designapp4' element={<Error />} />
            <Route path='resposta/atvaprendizdesign/' element={<Error />} />

            <Route path='resposta/atvdiagnosticadesign/adg1diagnosticdesign' element={<Error />} />
            <Route path='resposta/atvdiagnosticadesign/adg2diagnosticdesign2' element={<Error />} />
            <Route path='resposta/atvdiagnosticadesign/adg3diagnosticdesign3' element={<Error />} />
            <Route path='resposta/atvdiagnosticadesign/adg4diagnosticdesign4' element={<Error />} />
            <Route path='resposta/atvdiagnosticadesign/' element={<Error />} />

            <Route path='resposta/av1designvirtual1/av1designvirtual2' element={<Error />} />
            <Route path='resposta/av1designvirtual1/av2designvirtual2' element={<Error />} />
            <Route path='resposta/av1designvirtual1/' element={<Error />} />
            <Route path='resposta' element={<Error />} />
          </>


          {/* Ed Design Think */}
          {/* Atividade Aprendizagem */}
          <Route path='resposta' element={<Respostas />} >
            <Route path='atvaprendizdesign' element={<AtvAprendizagemDesign />}>
              <Route path='designapp1' element={<Aap1DesignAprend />} >
                <Route path='questao1aprendizagemdesign' element={<Questao1AprendizagemDesign />} />
                <Route path='questao2aprendizagemdesign' element={<Questao2AprendizagemDesign />} />
                <Route path='questao3aprendizagemdesign' element={<Questao3AprendizagemDesign />} />
                <Route path='questao4aprendizagemdesign' element={<Questao4AprendizagemDesign />} />
              </Route>
              <Route path='designapp2' element={<Aap2DesignAprend />} >
                <Route path='questao1aprendizagemdesign2' element={<Questao1AprendizagemDesign2 />} />
                <Route path='questao2aprendizagemdesign2' element={<Questao2AprendizagemDesign2 />} />
                <Route path='questao3aprendizagemdesign2' element={<Questao3AprendizagemDesign2 />} />
                <Route path='questao4aprendizagemdesign2' element={<Questao4AprendizagemDesign2 />} />
              </Route>
              <Route path='designapp3' element={<Aap3DesignAprend />} >
                <Route path='questao1aprendizagemdesign3' element={<Questao1AprendizagemDesign3 />} />
                <Route path='questao2aprendizagemdesign3' element={<Questao2AprendizagemDesign3 />} />
                <Route path='questao3aprendizagemdesign3' element={<Questao3AprendizagemDesign3 />} />
                <Route path='questao4aprendizagemdesign3' element={<Questao4AprendizagemDesign3 />} />
              </Route>
              <Route path='designapp4' element={<Aap4DesignAprend />} >
                <Route path='questao1aprendizagemdesign4' element={<Questao1AprendizagemDesign4 />} />
                <Route path='questao2aprendizagemdesign4' element={<Questao2AprendizagemDesign4 />} />
                <Route path='questao3aprendizagemdesign4' element={<Questao3AprendizagemDesign4 />} />
                <Route path='questao4aprendizagemdesign4' element={<Questao4AprendizagemDesign4 />} />
              </Route>
            </Route>{/* Atividade Aprendizagem */}

            {/* Atividade Diagnóstica */}
            <Route path='atvdiagnosticadesign' element={<AtvDiagnosticaDesign />}>
              <Route path='adg1diagnosticdesign' element={<Adg1DesignDiagnostic />} >
                <Route path='questao1diagnosticdesign' element={<Questao1DiagnosticDesign />} />
                <Route path='questao2diagnosticdesign' element={<Questao2DiagnosticDesign />} />
                <Route path='questao3diagnosticdesign' element={<Questao3DiagnosticDesign />} />
                <Route path='questao4diagnosticdesign' element={<Questao4DiagnosticDesign />} />
              </Route>
              <Route path='adg2diagnosticdesign2' element={<Adg2DesignDiagnostic />} >
                <Route path='questao1diagnosticdesign2' element={<Questao1DiagnosticDesign2 />} />
                <Route path='questao2diagnosticdesign2' element={<Questao2DiagnosticDesign2 />} />
                <Route path='questao3diagnosticdesign2' element={<Questao3DiagnosticDesign2 />} />
                <Route path='questao4diagnosticdesign2' element={<Questao4DiagnosticDesign2 />} />
              </Route>
              <Route path='adg3diagnosticdesign3' element={<Adg3DesignDiagnostic />} >
                <Route path='questao1diagnosticdesign3' element={<Questao1DiagnosticDesign3 />} />
                <Route path='questao2diagnosticdesign3' element={<Questao2DiagnosticDesign3 />} />
                <Route path='questao3diagnosticdesign3' element={<Questao3DiagnosticDesign3 />} />
                <Route path='questao4diagnosticdesign3' element={<Questao4DiagnosticDesign3 />} />
              </Route>
              <Route path='adg4diagnosticdesign4' element={<Adg4DesignDiagnostic />} >
                <Route path='questao1diagnosticdesign4' element={<Questao1DiagnosticDesign4 />} />
                <Route path='questao2diagnosticdesign4' element={<Questao2DiagnosticDesign4 />} />
                <Route path='questao3diagnosticdesign4' element={<Questao3DiagnosticDesign4 />} />
                <Route path='questao4diagnosticdesign4' element={<Questao4DiagnosticDesign4 />} />
              </Route>
            </Route>{/* Atividade Diagnóstica */}

            {/* Avaliação Virtual */}
            <Route path='av1designvirtual1' element={<AvVirtualDesign />}>
              <Route path='av1designvirtual2' element={<Av1DesignVirtual1 />} >
                <Route path='questao1virtualdesign' element={<Questao1VirtualDesign1 />} />
                <Route path='questao2virtualdesign' element={<Questao2VirtualDesign1 />} />
                <Route path='questao3virtualdesign' element={<Questao3VirtualDesign1 />} />
                <Route path='questao4virtualdesign' element={<Questao4VirtualDesign1 />} />
                <Route path='questao5virtualdesign' element={<Questao5VirtualDesign1 />} />
              </Route>

              <Route path='av2designvirtual2' element={<Av2DesignVirtual2 />} >
                <Route path='questao1virtualdesign2' element={<Questao1VirtualDesign2 />} />
                <Route path='questao2virtualdesign2' element={<Questao2VirtualDesign2 />} />
                <Route path='questao3virtualdesign2' element={<Questao3VirtualDesign2 />} />
                <Route path='questao4virtualdesign2' element={<Questao4VirtualDesign2 />} />
                <Route path='questao5virtualdesign2' element={<Questao5VirtualDesign2 />} />
              </Route>
            </Route>
            {/* Avaliação Virtual */}
          </Route>
          {/* Ed Design Think */}






        </Routes>
        {/* Global */}
        <Footer />
        {/* Global */}
      </BrowserRouter >

    </div >
  )
}

export default App

