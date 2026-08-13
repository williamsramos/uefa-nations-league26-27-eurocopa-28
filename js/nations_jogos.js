/* =======================================================================
   NATIONS_JOGOS.JS
   Calendário de jogos (Jornadas 1 a 6) da fase de grupos da Nations
   League 2026/2027 + campos de input para os placares.
   Fonte: https://pt.uefa.com/uefanationsleague/fixtures-results/
   ======================================================================= */

/* Cada jogo: { grupo, casa, fora, hora (opcional) } */
const FIXTURES = [
  {
    jornada: 1,
    dias: [
      { data:"Quinta-feira, 24 de Setembro", jogos:[
        {grupo:"A2", casa:"Países Baixos", fora:"Alemanha"},
        {grupo:"A2", casa:"Sérvia", fora:"Grécia"},
        {grupo:"A4", casa:"Noruega", fora:"Dinamarca"},
        {grupo:"A4", casa:"Portugal", fora:"País de Gales"},
        {grupo:"B3", casa:"Áustria", fora:"Israel"},
        {grupo:"B3", casa:"Kosovo", fora:"República da Irlanda"},
        {grupo:"D1", casa:"Andorra", fora:"Malta"},
        {grupo:"D2", casa:"Liechtenstein", fora:"Lituânia"}
      ]},
      { data:"Sexta-feira, 25 de Setembro", jogos:[
        {grupo:"B2", casa:"Geórgia", fora:"Irlanda do Norte", hora:"17h00"},
        {grupo:"C2", casa:"Arménia", fora:"Letónia", hora:"17h00"},
        {grupo:"A1", casa:"Itália", fora:"Bélgica"},
        {grupo:"A1", casa:"Turquia", fora:"França"},
        {grupo:"B2", casa:"Hungria", fora:"Ucrânia"},
        {grupo:"B4", casa:"Polónia", fora:"Bósnia e Herzegovina"},
        {grupo:"B4", casa:"Suécia", fora:"Roménia"},
        {grupo:"C2", casa:"Montenegro", fora:"Chipre"}
      ]},
      { data:"Sábado, 26 de Setembro", jogos:[
        {grupo:"B1", casa:"Eslovénia", fora:"Escócia", hora:"14h00"},
        {grupo:"C1", casa:"San Marino", fora:"Finlândia", hora:"17h00"},
        {grupo:"C3", casa:"Ilhas Faroé", fora:"Cazaquistão", hora:"17h00"},
        {grupo:"C4", casa:"Bulgária", fora:"Luxemburgo", hora:"17h00"},
        {grupo:"C4", casa:"Islândia", fora:"Estónia", hora:"17h00"},
        {grupo:"A3", casa:"Chéquia", fora:"Croácia"},
        {grupo:"A3", casa:"Inglaterra", fora:"Espanha"},
        {grupo:"B1", casa:"Macedónia do Norte", fora:"Suíça"},
        {grupo:"C1", casa:"Albânia", fora:"Bielorrússia"},
        {grupo:"C3", casa:"Eslováquia", fora:"República da Moldávia"}
      ]}
    ]
  },
  {
    jornada: 2,
    dias: [
      { data:"Domingo, 27 de Setembro", jogos:[
        {grupo:"D2", casa:"Lituânia", fora:"Azerbaijão", hora:"14h00"},
        {grupo:"A2", casa:"Sérvia", fora:"Países Baixos", hora:"17h00"},
        {grupo:"A4", casa:"Dinamarca", fora:"País de Gales", hora:"17h00"},
        {grupo:"B3", casa:"Áustria", fora:"Kosovo", hora:"17h00"},
        {grupo:"D1", casa:"Gibraltar", fora:"Andorra", hora:"17h00"},
        {grupo:"A2", casa:"Alemanha", fora:"Grécia"},
        {grupo:"A4", casa:"Noruega", fora:"Portugal"},
        {grupo:"B3", casa:"Israel", fora:"República da Irlanda"}
      ]},
      { data:"Segunda-feira, 28 de Setembro", jogos:[
        {grupo:"B2", casa:"Geórgia", fora:"Ucrânia", hora:"17h00"},
        {grupo:"C2", casa:"Arménia", fora:"Montenegro", hora:"17h00"},
        {grupo:"A1", casa:"Bélgica", fora:"França"},
        {grupo:"A1", casa:"Turquia", fora:"Itália"},
        {grupo:"B2", casa:"Irlanda do Norte", fora:"Hungria"},
        {grupo:"B4", casa:"Roménia", fora:"Bósnia e Herzegovina"},
        {grupo:"B4", casa:"Suécia", fora:"Polónia"},
        {grupo:"C2", casa:"Letónia", fora:"Chipre", hora:"17h00"}
      ]},
      { data:"Terça-feira, 29 de Setembro", jogos:[
        {grupo:"C1", casa:"Finlândia", fora:"Bielorrússia", hora:"17h00"},
        {grupo:"C3", casa:"República da Moldávia", fora:"Ilhas Faroé", hora:"17h00"},
        {grupo:"A3", casa:"Chéquia", fora:"Inglaterra"},
        {grupo:"A3", casa:"Espanha", fora:"Croácia"},
        {grupo:"B1", casa:"Escócia", fora:"Suíça"},
        {grupo:"B1", casa:"Eslovénia", fora:"Macedónia do Norte"},
        {grupo:"C1", casa:"San Marino", fora:"Albânia"},
        {grupo:"C3", casa:"Eslováquia", fora:"Cazaquistão"},
        {grupo:"C4", casa:"Bulgária", fora:"Estónia"},
        {grupo:"C4", casa:"Luxemburgo", fora:"Islândia"}
      ]}
    ]
  },
  {
    jornada: 3,
    dias: [
      { data:"Quinta-feira, 1 de Outubro", jogos:[
        {grupo:"D2", casa:"Azerbaijão", fora:"Liechtenstein", hora:"17h00"},
        {grupo:"A2", casa:"Alemanha", fora:"Sérvia"},
        {grupo:"A2", casa:"Grécia", fora:"Países Baixos"},
        {grupo:"A4", casa:"Dinamarca", fora:"Portugal"},
        {grupo:"A4", casa:"País de Gales", fora:"Noruega"},
        {grupo:"B3", casa:"Israel", fora:"Kosovo"},
        {grupo:"B3", casa:"República da Irlanda", fora:"Áustria"},
        {grupo:"D1", casa:"Malta", fora:"Gibraltar"}
      ]},
      { data:"Sexta-feira, 2 de Outubro", jogos:[
        {grupo:"C3", casa:"Cazaquistão", fora:"República da Moldávia", hora:"15h00"},
        {grupo:"C2", casa:"Chipre", fora:"Arménia", hora:"17h00"},
        {grupo:"A1", casa:"Bélgica", fora:"Turquia"},
        {grupo:"A1", casa:"França", fora:"Itália"},
        {grupo:"B2", casa:"Hungria", fora:"Geórgia"},
        {grupo:"B2", casa:"Ucrânia", fora:"Irlanda do Norte"},
        {grupo:"B4", casa:"Bósnia e Herzegovina", fora:"Suécia"},
        {grupo:"B4", casa:"Polónia", fora:"Roménia"},
        {grupo:"C2", casa:"Letónia", fora:"Montenegro", hora:"17h00"},
        {grupo:"C3", casa:"Ilhas Faroé", fora:"Eslováquia"}
      ]},
      { data:"Sábado, 3 de Outubro", jogos:[
        {grupo:"C1", casa:"Finlândia", fora:"Albânia", hora:"14h00"},
        {grupo:"A3", casa:"Croácia", fora:"Inglaterra", hora:"17h00"},
        {grupo:"C1", casa:"Bielorrússia", fora:"San Marino", hora:"17h00"},
        {grupo:"C4", casa:"Estónia", fora:"Luxemburgo", hora:"17h00"},
        {grupo:"C4", casa:"Islândia", fora:"Bulgária", hora:"17h00"},
        {grupo:"A3", casa:"Espanha", fora:"Chéquia"},
        {grupo:"B1", casa:"Macedónia do Norte", fora:"Escócia"},
        {grupo:"B1", casa:"Suíça", fora:"Eslovénia"}
      ]}
    ]
  },
  {
    jornada: 4,
    dias: [
      { data:"Domingo, 4 de Outubro", jogos:[
        {grupo:"D2", casa:"Azerbaijão", fora:"Lituânia", hora:"14h00"},
        {grupo:"B3", casa:"Kosovo", fora:"Áustria", hora:"17h00"},
        {grupo:"D1", casa:"Malta", fora:"Andorra", hora:"17h00"},
        {grupo:"A2", casa:"Grécia", fora:"Alemanha"},
        {grupo:"A2", casa:"Países Baixos", fora:"Sérvia"},
        {grupo:"A4", casa:"Portugal", fora:"Noruega"},
        {grupo:"A4", casa:"País de Gales", fora:"Dinamarca"},
        {grupo:"B3", casa:"República da Irlanda", fora:"Israel"}
      ]},
      { data:"Segunda-feira, 5 de Outubro", jogos:[
        {grupo:"A1", casa:"França", fora:"Bélgica"},
        {grupo:"A1", casa:"Itália", fora:"Turquia"},
        {grupo:"B2", casa:"Irlanda do Norte", fora:"Geórgia"},
        {grupo:"B2", casa:"Ucrânia", fora:"Hungria"},
        {grupo:"B4", casa:"Bósnia e Herzegovina", fora:"Polónia"},
        {grupo:"B4", casa:"Roménia", fora:"Suécia"},
        {grupo:"C2", casa:"Chipre", fora:"Letónia", hora:"17h00"},
        {grupo:"C2", casa:"Montenegro", fora:"Arménia"}
      ]},
      { data:"Terça-feira, 6 de Outubro", jogos:[
        {grupo:"C3", casa:"Cazaquistão", fora:"Ilhas Faroé", hora:"15h00"},
        {grupo:"A3", casa:"Croácia", fora:"Espanha"},
        {grupo:"A3", casa:"Inglaterra", fora:"Chéquia"},
        {grupo:"B1", casa:"Escócia", fora:"Eslovénia"},
        {grupo:"B1", casa:"Suíça", fora:"Macedónia do Norte"},
        {grupo:"C1", casa:"Albânia", fora:"San Marino"},
        {grupo:"C1", casa:"Bielorrússia", fora:"Finlândia"},
        {grupo:"C3", casa:"República da Moldávia", fora:"Eslováquia"},
        {grupo:"C4", casa:"Estónia", fora:"Islândia"},
        {grupo:"C4", casa:"Luxemburgo", fora:"Bulgária"}
      ]}
    ]
  },
  {
    jornada: 5,
    dias: [
      { data:"Quinta-feira, 12 de Novembro", jogos:[
        {grupo:"A1", casa:"Turquia", fora:"Bélgica", hora:"17h00"},
        {grupo:"C2", casa:"Arménia", fora:"Chipre", hora:"17h00"},
        {grupo:"A1", casa:"Itália", fora:"França"},
        {grupo:"A3", casa:"Chéquia", fora:"Espanha"},
        {grupo:"A3", casa:"Inglaterra", fora:"Croácia"},
        {grupo:"C1", casa:"Albânia", fora:"Finlândia"},
        {grupo:"C1", casa:"San Marino", fora:"Bielorrússia"},
        {grupo:"C2", casa:"Montenegro", fora:"Letónia"}
      ]},
      { data:"Sexta-feira, 13 de Novembro", jogos:[
        {grupo:"A2", casa:"Países Baixos", fora:"Grécia"},
        {grupo:"A2", casa:"Sérvia", fora:"Alemanha"},
        {grupo:"B1", casa:"Escócia", fora:"Macedónia do Norte"},
        {grupo:"B1", casa:"Eslovénia", fora:"Suíça"},
        {grupo:"C3", casa:"República da Moldávia", fora:"Cazaquistão", hora:"17h00"},
        {grupo:"C3", casa:"Eslováquia", fora:"Ilhas Faroé"},
        {grupo:"C4", casa:"Bulgária", fora:"Islândia"},
        {grupo:"C4", casa:"Luxemburgo", fora:"Estónia"},
        {grupo:"D1", casa:"Andorra", fora:"Gibraltar"},
        {grupo:"D2", casa:"Liechtenstein", fora:"Azerbaijão"}
      ]},
      { data:"Sábado, 14 de Novembro", jogos:[
        {grupo:"B3", casa:"Kosovo", fora:"Israel", hora:"14h00"},
        {grupo:"A4", casa:"Noruega", fora:"País de Gales", hora:"17h00"},
        {grupo:"B2", casa:"Geórgia", fora:"Hungria", hora:"17h00"},
        {grupo:"A4", casa:"Portugal", fora:"Dinamarca"},
        {grupo:"B2", casa:"Irlanda do Norte", fora:"Ucrânia"},
        {grupo:"B3", casa:"Áustria", fora:"República da Irlanda"},
        {grupo:"B4", casa:"Roménia", fora:"Polónia"},
        {grupo:"B4", casa:"Suécia", fora:"Bósnia e Herzegovina"}
      ]}
    ]
  },
  {
    jornada: 6,
    dias: [
      { data:"Domingo, 15 de Novembro", jogos:[
        {grupo:"C2", casa:"Chipre", fora:"Montenegro", hora:"14h00"},
        {grupo:"C2", casa:"Letónia", fora:"Arménia", hora:"14h00"},
        {grupo:"C1", casa:"Bielorrússia", fora:"Albânia", hora:"17h00"},
        {grupo:"C1", casa:"Finlândia", fora:"San Marino", hora:"17h00"},
        {grupo:"A1", casa:"Bélgica", fora:"Itália"},
        {grupo:"A1", casa:"França", fora:"Turquia"},
        {grupo:"A3", casa:"Croácia", fora:"Chéquia"},
        {grupo:"A3", casa:"Espanha", fora:"Inglaterra"}
      ]},
      { data:"Segunda-feira, 16 de Novembro", jogos:[
        {grupo:"C3", casa:"Ilhas Faroé", fora:"República da Moldávia", hora:"15h00"},
        {grupo:"C3", casa:"Cazaquistão", fora:"Eslováquia", hora:"15h00"},
        {grupo:"C4", casa:"Estónia", fora:"Bulgária", hora:"17h00"},
        {grupo:"C4", casa:"Islândia", fora:"Luxemburgo", hora:"17h00"},
        {grupo:"D2", casa:"Lituânia", fora:"Liechtenstein", hora:"17h00"},
        {grupo:"A2", casa:"Alemanha", fora:"Países Baixos"},
        {grupo:"A2", casa:"Grécia", fora:"Sérvia"},
        {grupo:"B1", casa:"Macedónia do Norte", fora:"Eslovénia"},
        {grupo:"B1", casa:"Suíça", fora:"Escócia"},
        {grupo:"D1", casa:"Gibraltar", fora:"Malta"}
      ]},
      { data:"Terça-feira, 17 de Novembro", jogos:[
        {grupo:"A4", casa:"Dinamarca", fora:"Noruega"},
        {grupo:"A4", casa:"País de Gales", fora:"Portugal"},
        {grupo:"B2", casa:"Hungria", fora:"Irlanda do Norte"},
        {grupo:"B2", casa:"Ucrânia", fora:"Geórgia"},
        {grupo:"B3", casa:"Israel", fora:"Áustria"},
        {grupo:"B3", casa:"República da Irlanda", fora:"Kosovo"},
        {grupo:"B4", casa:"Bósnia e Herzegovina", fora:"Roménia"},
        {grupo:"B4", casa:"Polónia", fora:"Suécia"}
      ]}
    ]
  }
];

function matchKey(jornada, grupo, casa, fora){
  return `${grupo}::${casa}::${fora}::J${jornada}`;
}

/* Nota: computeStandings (em nations.js) lê a chave no formato
   "grupo::casa::fora" — ignoramos o sufixo da jornada ao separar. */

let jornadaAtual = 1;

function renderJornadaTabs(){
  const container = document.getElementById("jornadaTabs");
  if(!container) return;
  let html = "";
  FIXTURES.forEach(j=>{
    html += `<button class="jornada-btn ${jornadaAtual===j.jornada?'active':''}" data-jornada="${j.jornada}">Jornada ${j.jornada}</button>`;
  });
  container.innerHTML = html;
}

const jornadaTabsEl = document.getElementById("jornadaTabs");
if(jornadaTabsEl){
  jornadaTabsEl.addEventListener("click",(e)=>{
    const btn = e.target.closest(".jornada-btn");
    if(!btn) return;
    jornadaAtual = parseInt(btn.dataset.jornada);
    document.querySelectorAll(".jornada-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderJogos();
  });
}

const TOTAL_JOGOS = 156;

function jogoDisputado(key){
  const r = matchResults[key];
  if(!r) return false;
  if(r.golsCasa === "" || r.golsFora === "" || r.golsCasa === undefined || r.golsFora === undefined) return false;
  return !isNaN(parseInt(r.golsCasa)) && !isNaN(parseInt(r.golsFora));
}

function contarJogosDisputados(){
  let count = 0;
  FIXTURES.forEach(j=>{
    j.dias.forEach(dia=>{
      dia.jogos.forEach(m=>{
        const key = matchKey(j.jornada, m.grupo, m.casa, m.fora);
        if(jogoDisputado(key)) count++;
      });
    });
  });
  return count;
}

function updateProgressoJogos(){
  const el = document.getElementById("progressoJogos");
  if(!el) return;
  const disputados = contarJogosDisputados();
  const pct = Math.round((disputados / TOTAL_JOGOS) * 100);
  el.innerHTML = `
    <div class="texto">${disputados} de ${TOTAL_JOGOS} jogos disputados (${pct}%)</div>
    <div class="barra"><div class="barra-interna" style="width:${pct}%"></div></div>
  `;
}

function statusIconHtml(key){
  return jogoDisputado(key)
    ? `<span class="status-icon disputado" title="Jogo disputado">✔</span>`
    : `<span class="status-icon pendente" title="Ainda por disputar">⏳</span>`;
}

function renderJogos(){
  const container = document.getElementById("jogosContainer");
  if(!container) return; // HTML sem a aba Jogos atualizada — nada a fazer
  const aviso = document.getElementById("buscaJogosAviso");
  const jornadaNav = document.getElementById("jornadaTabs");

  updateProgressoJogos();

  /* ---- Modo busca: lista todos os jogos da seleção pesquisada,
     de todas as jornadas, ignorando a jornada selecionada ---- */
  if(buscaAtual){
    if(jornadaNav) jornadaNav.style.display = "none";
    const q = normaliza(buscaAtual);
    let encontrados = [];
    FIXTURES.forEach(j=>{
      j.dias.forEach(dia=>{
        dia.jogos.forEach(m=>{
          if(normaliza(m.casa).includes(q) || normaliza(m.fora).includes(q)){
            encontrados.push({ jornada:j.jornada, data:dia.data, ...m });
          }
        });
      });
    });

    if(encontrados.length === 0){
      if(aviso){ aviso.style.display = "block"; aviso.textContent = `Nenhum jogo encontrado para "${buscaAtual}".`; }
      container.innerHTML = "";
      return;
    }

    if(aviso){ aviso.style.display = "block"; aviso.textContent = `${encontrados.length} jogo(s) encontrado(s) para "${buscaAtual}"`; }

    let html = `<div class="date-block">`;
    encontrados.forEach(m=>{
      const key = matchKey(m.jornada, m.grupo, m.casa, m.fora);
      const saved = matchResults[key] || {};
      const buscaCasa = timeCorrespondeBusca(m.casa);
      const buscaFora = timeCorrespondeBusca(m.fora);
      html += `
        <div class="match-row ${(buscaCasa||buscaFora)?'row-buscada':''}" data-key="${key}">
          <div class="group-badge">${m.grupo}</div>
          <div class="team home">${flagImg(m.casa)} <span>${m.casa}</span></div>
          <div class="score-inputs">
            <input type="number" min="0" max="99" class="gol-casa" value="${saved.golsCasa ?? ""}" aria-label="Golos ${m.casa}">
            <span>-</span>
            <input type="number" min="0" max="99" class="gol-fora" value="${saved.golsFora ?? ""}" aria-label="Golos ${m.fora}">
          </div>
          <div class="team away"><span>${m.fora}</span> ${flagImg(m.fora)}</div>
          <div class="match-time">Jornada ${m.jornada}<br>${m.hora ?? ""}${statusIconHtml(key)}</div>
        </div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
    return;
  }

  /* ---- Modo normal: jogos da jornada selecionada ---- */
  if(jornadaNav) jornadaNav.style.display = "";
  if(aviso) aviso.style.display = "none";

  const jornadaObj = FIXTURES.find(j=>j.jornada === jornadaAtual);
  if(!jornadaObj){ container.innerHTML = ""; return; }

  let html = "";
  jornadaObj.dias.forEach(dia=>{
    html += `<div class="date-block"><h4>${dia.data}</h4>`;
    dia.jogos.forEach(m=>{
      const key = matchKey(jornadaAtual, m.grupo, m.casa, m.fora);
      const saved = matchResults[key] || {};
      html += `
        <div class="match-row" data-key="${key}">
          <div class="group-badge">${m.grupo}</div>
          <div class="team home">${flagImg(m.casa)} <span>${m.casa}</span></div>
          <div class="score-inputs">
            <input type="number" min="0" max="99" class="gol-casa" value="${saved.golsCasa ?? ""}" aria-label="Golos ${m.casa}">
            <span>-</span>
            <input type="number" min="0" max="99" class="gol-fora" value="${saved.golsFora ?? ""}" aria-label="Golos ${m.fora}">
          </div>
          <div class="team away"><span>${m.fora}</span> ${flagImg(m.fora)}</div>
          <div class="match-time">${m.hora ? m.hora : ""}${statusIconHtml(key)}</div>
        </div>`;
    });
    html += `</div>`;
  });

  container.innerHTML = html;
}

/* Escuta alterações nos inputs de placar (delegação de eventos) */
safeOn("jogosContainer", "input", (e)=>{
  const input = e.target;
  if(!input.matches(".gol-casa, .gol-fora")) return;
  const row = input.closest(".match-row");
  const key = row.dataset.key;
  const golsCasa = row.querySelector(".gol-casa").value;
  const golsFora = row.querySelector(".gol-fora").value;

  matchResults[key] = { golsCasa, golsFora };

  updateProgressoJogos();

  // Atualiza só o ícone de status desta linha, sem re-renderizar tudo
  const timeCell = row.querySelector(".match-time");
  if(timeCell){
    const statusEl = timeCell.querySelector(".status-icon");
    const novoIcon = jogoDisputado(key)
      ? `<span class="status-icon disputado" title="Jogo disputado">✔</span>`
      : `<span class="status-icon pendente" title="Ainda por disputar">⏳</span>`;
    if(statusEl) statusEl.outerHTML = novoIcon;
  }

  // Atualiza a classificação em tempo real, se a aba estiver visível
  if(document.getElementById("classificacao")?.classList.contains("active")){
    renderStandings();
  }

  // Se a Final Four já estiver a usar dados de standings, atualiza-a também
  if(typeof renderFinal4 === "function" &&
     document.getElementById("final4") &&
     document.getElementById("final4").classList.contains("active")){
    renderFinal4();
  }
});

document.addEventListener("DOMContentLoaded", ()=>{
  renderJornadaTabs();
  renderJogos();
});
