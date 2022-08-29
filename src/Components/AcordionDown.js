import React from 'react'
import download from '../image/download.png'
import downNuvem from '../image/downNuvem.png'
import livro from '../image/livro.png'
import Curso from '../image/curso.png'
import Accordion from 'react-bootstrap/Accordion';
import '../Components/CssComponents/Acordion.css'
import telegram from '../image/telegram.png'
import whats from '../image/whatsapp.png'
import discord from '../image/discord.png'
import grupos from '../image/grupos.png'






function AccordionDownload() {
  return (
    <p>
      <lu className='resp accord'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header > <img className='DownNuvem' src={livro} />Livros Semestrais</Accordion.Header>
            <Accordion.Body>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Primeiro Semestre</Accordion.Header>
                  <Accordion.Body>
                    <p><lu className='accord'>
                      <li ><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/file/d/1N1IqWUW-1Iy2Sca4kdLMvpjcTH7G6eNS/view?usp=sharing' target='Blank_'>Arquitetura e Organização de Computadores </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/file/d/1WFCKz9pkvIweuIcFI7AaZ4kleT9oxmZl/view?usp=sharing' target='Blank_'>Sociedade e Cidadania Brasileira</a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/file/d/11VYxTbsf8sqcNM-ZnGgiQEDlPe4E8oMX/view?usp=sharing' target='Blank_'>Redes de Computadores</a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/drive/folders/1WZM8I2MpQn9VkLbsrKzCdU3o_yiE92Fx?usp=sharing' target='Blank_'>Projeto de Software</a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/drive/folders/1MXZesHHxWM_Esp0nWyz5sE_pbvsED_D5?usp=sharing' target='Blank_'>Segurança e Auditoria de Sistemas</a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='' target='Blank_'> </a></li>
                    </lu></p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Segundo Semestre</Accordion.Header>
                  <Accordion.Body>
                    <p><lu className='accord'>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/file/d/1krRdOT8Qz_uf-a2YBr14V3EME3lPZKty/view?usp=sharing' target='Blank_'>Algoritmos e Programação Estruturada</a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/file/d/1taVtMomMGZoMCTKaU0SdFN6jI-bv1I1Y/view?usp=sharing' target='Blank_'> Lógica Computacional</a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/file/d/1Uljv2_RkzYuTysskUkQKY8F3KmeCZSyY/view?usp=sharing' target='Blank_'>Análise e Modelagem de Sistemas </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/file/d/17M2PggHj4NbIVr6kQl8uTw_PPR4VvRC6/view?usp=sharing' target='Blank_'>Engenharia de Software</a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/file/d/1t3KvEkHFGcDgyjT9oSB6uiZeXtear4QA/view?usp=sharing' target='Blank_'>Modelagem de Dados </a></li>
                    </lu></p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </Accordion.Body>
          </Accordion.Item>



          <Accordion.Item eventKey="1">
            <Accordion.Header><img className='DownNuvem' src={Curso} />Cursos AudioVisuais</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Cursos na Nuvem</Accordion.Header>
                  <Accordion.Body>
                    <p><lu className='accord'>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/drive/folders/180K1aUGdFvPWosWPqexCuMfNoA-IhFkR?usp=sharing' target='Blank_'>Lógica de Programação</a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/drive/folders/10uY3MStWxvcAbDkdZaTqqbB4ZTOVcJPI?usp=sharing' target='Blank_'>Curso Udemy - C e C++ </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/drive/folders/1ZkCFOm_nMwkIXjiCuFz6Jm7btd-_b6RZ?usp=sharing' target='Blank_'>Curso Udemy - Python </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/drive/folders/1ZnAX1hx-SlwLmzfALgjOMBGAABad68Xo?usp=sharing' target='Blank_'>Curso Alura - PowerBI </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/drive/folders/19aYdQE7AEgoMC7eDRvASaZ7fWXGSALaz?usp=sharing' target='Blank_'>Javascript + Estrutura de Dados </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://drive.google.com/drive/folders/1fr11zJLDx3scg1LN_qc84kCXHI4vQI7c?usp=sharing' target='Blank_'> Outros Cursos de Tecnologia</a></li>

                    </lu></p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Cursos e Tutoriais Youtube</Accordion.Header>
                  <Accordion.Body>
                    <p><lu className='accord'>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://www.youtube.com/watch?v=CgF3D90rZb4' target='Blank_'>Tutorial Padlet - Mirian Navarro </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://www.youtube.com/playlist?list=PLriY9Fzk4Hqf5MsiaxA8xVQDBh4bt3Xvt' target='Blank_'>Curso Notion - Nexo Do Saber </a></li>

                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n' target='Blank_'>Curso Html e Css - Guanabara </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://www.youtube.com/playlist?list=PLHz_AreHm4dlaTyjolzCFC6IjLzO8O0XV' target='Blank_'>Curso Segurança da Informação - Guanabara </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm' target='Blank_'>Curso Javascript - Guanabara </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA' target='Blank_'>Curso Git e Github (IMPORTANTE!) </a></li>
                      <li><img className='DownNuvem' src={downNuvem} /><a href='https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO' target='Blank_'>Curso React - Hora de Codar </a></li>
                    </lu>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header><img className='DownNuvem' src={grupos} />Grupos - Whatspp/Discord/Telegram</Accordion.Header>
            <Accordion.Body>

              <li><img className='DownNuvem' src={whats} /><a href='https://chat.whatsapp.com/GyAlRBR40of1NhnTPjvkRU' target='Blank_'>Site Resposta </a></li>
              <li><img className='DownNuvem' src={whats} /><a href='https://chat.whatsapp.com/DIvtfDTLUluBOMvCwNd51y' target='Blank_'>ADS - Estudos </a></li>
              <li><img className='DownNuvem' src={whats} /><a href='https://chat.whatsapp.com/FogfwMQE41z7EkpMWJ4Ach' target='Blank_'>ADS - Estudos 2 </a></li>
              <li><img className='DownNuvem' src={whats} /><a href='https://chat.whatsapp.com/Iexn0F6ML1o2AZENh1U2xy' target='Blank_'>ADS SOMENTE RESPOSTA </a></li>
              <li><img className='DownNuvem' src={telegram} /><a href='https://t.me/+wpgTBMn1cfxmZTZh' target='Blank_'>ADS Unopar </a></li>
              <li><img className='DownNuvem' src={telegram} /><a href='https://t.me/+8gbVnMtrLOs3NjVh' target='Blank_'>Polemic Knowledge - Cursos</a></li>
              <li><img className='DownNuvem' src={telegram} /><a href='https://t.me/LivrosEmPDF' target='Blank_'>Livros em PDF</a></li>
              <li><img className='DownNuvem' src={telegram} /><a href='https://t.me/joinchat/AAAAAE01VL-1ZotDUq3Z-g' target='Blank_'>Curso C - Estudonauta</a></li>
              <li><img className='DownNuvem' src={discord} /><a href='https://discord.com/invite/kCGDv6kTAH' target='Blank_'>ADS Kroton </a></li>


            </Accordion.Body>
          </Accordion.Item>
        </Accordion>




      </lu>
    </p>
  );
}

export default AccordionDownload;