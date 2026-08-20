const WPP = "https://api.whatsapp.com/send?phone=551236531346&text=";

const routes = {
  home: "/",
  mastologia: "/mastologia/",
  ginecologia: "/ginecologia/",
  radio: "/radiofrequencia-ginecologica/",
  privacy: "/politica-de-privacidade/",
  terms: "/termos-de-uso/",
};

const socialLinks = {
  facebook: "https://www.facebook.com/clinicaraujozamboni",
  instagram: "https://www.instagram.com/clinicaraujozamboni",
};

const messages = {
  agendar:
    "Olá, gostaria de agendar uma consulta na Clínica Araújo Zamboni em Caçapava/SP.",
  recepcao:
    "Olá, gostaria de falar com a recepção da Clínica Araújo Zamboni sobre atendimentos, horários e convênios.",
  ginecologia:
    "Olá, gostaria de informações para agendar uma consulta de ginecologia na Clínica Araújo Zamboni.",
  mastologia:
    "Olá, gostaria de informações para agendar uma consulta de mastologia com o Dr. Bruno Goia na Clínica Araújo Zamboni.",
  radio:
    "Olá, gostaria de informações para agendar uma avaliação sobre radiofrequência ginecológica na Clínica Araújo Zamboni.",
};

const wa = (key) => WPP + encodeURIComponent(messages[key] || messages.agendar);

const services = [
  {
    title: "Ginecologia",
    tag: "Saúde da mulher",
    copy:
      "Atendimento ginecológico em Caçapava para consultas de rotina, prevenção, saúde íntima, ciclo menstrual, anticoncepcional e menopausa.",
    href: routes.ginecologia,
    cta: "Ver ginecologia",
    intent: "ginecologia",
  },
  {
    title: "Mastologia",
    tag: "Dr. Bruno Goia",
    copy:
      "Consulta com mastologista em Caçapava para prevenção, avaliação de nódulo na mama, dor nas mamas e alterações mamárias.",
    href: routes.mastologia,
    cta: "Ver mastologia",
    intent: "mastologia",
  },
  {
    title: "Radiofrequência Ginecológica",
    tag: "Saúde íntima feminina",
    copy:
      "Avaliação ginecológica individualizada para queixas íntimas femininas, menopausa, ressecamento vaginal e conforto íntimo.",
    href: routes.radio,
    cta: "Entender o atendimento",
    intent: "radio",
  },
  {
    title: "Dermatologia",
    tag: "Pele e prevenção",
    copy:
      "Atendimento dermatológico para avaliação da pele, orientação preventiva e acompanhamento conforme a necessidade do paciente.",
    href: wa("recepcao"),
    cta: "Consultar horários",
    intent: "recepcao",
  },
  {
    title: "Endocrinologia",
    tag: "Hormônios e metabolismo",
    copy:
      "Acompanhamento médico para tireoide, diabetes, alterações hormonais, metabolismo e cuidado contínuo com a saúde.",
    href: wa("recepcao"),
    cta: "Consultar horários",
    intent: "recepcao",
  },
  {
    title: "Nutrição e Psicologia",
    tag: "Cuidado complementar",
    copy:
      "Apoio profissional para rotina, qualidade de vida, saúde emocional, alimentação e acompanhamento integrado.",
    href: wa("recepcao"),
    cta: "Falar com a recepção",
    intent: "recepcao",
  },
];

const decisionCards = [
  {
    title: "Agendar consulta",
    copy: "Fale com a recepção para consultar horários e disponibilidade.",
    action: "Agendar pelo WhatsApp",
    href: wa("agendar"),
  },
  {
    title: "Escolher especialidade",
    copy: "Veja os atendimentos da clínica e encontre o cuidado que procura.",
    action: "Ver especialidades",
    href: "#especialidades",
  },
  {
    title: "Tirar dúvidas",
    copy: "Confirme endereço, convênios, horários e orientações para atendimento.",
    action: "Falar com a recepção",
    href: wa("recepcao"),
  },
];

const homeFaq = [
  [
    "A Clínica Araújo Zamboni fica em Caçapava?",
    "Sim. A clínica fica na R. Nações Unidas, 92, Jardim Santo Antonio, em Caçapava/SP.",
  ],
  [
    "Como faço para agendar uma consulta?",
    "Você pode falar com a recepção pelo WhatsApp para consultar horários, especialidades disponíveis e orientações para agendamento.",
  ],
  [
    "Quais especialidades a clínica atende?",
    `A Clínica Araújo Zamboni conta com atendimento em <a class="text-link" href="${routes.ginecologia}">ginecologia</a>, <a class="text-link" href="${routes.mastologia}">mastologia</a>, <a class="text-link" href="${routes.radio}">radiofrequência ginecológica</a>, dermatologia, endocrinologia, nutrição, psicologia e outras áreas da saúde.`,
  ],
  [
    "A clínica atende saúde da mulher?",
    `Sim. A clínica oferece atendimento voltado à saúde da mulher, incluindo <a class="text-link" href="${routes.ginecologia}">ginecologia</a>, <a class="text-link" href="${routes.mastologia}">mastologia</a>, prevenção, menopausa, <a class="text-link" href="${routes.radio}">saúde íntima feminina</a> e acompanhamento individualizado.`,
  ],
  [
    "Posso tirar dúvidas sobre convênios antes de marcar?",
    "Sim. A recepção pode orientar sobre convênios, formas de atendimento e disponibilidade de agenda.",
  ],
];

const mastologiaFaq = [
  [
    "Quando devo procurar um mastologista?",
    "A avaliação com mastologista é indicada quando há nódulo na mama, dor nas mamas, secreção pelo mamilo, alterações na pele ou formato das mamas, histórico familiar ou necessidade de acompanhamento preventivo.",
  ],
  [
    "Mastologista atende apenas casos de câncer de mama?",
    `Não. A mastologia também acompanha alterações benignas, cistos, dor nas mamas, prevenção e orientação sobre a saúde das mamas. Quando necessário, esse cuidado pode se integrar à <a class="text-link" href="${routes.ginecologia}">ginecologia</a>.`,
  ],
  [
    "Dor na mama é sempre sinal de algo grave?",
    "Nem sempre. A dor nas mamas pode ter diferentes causas, mas merece avaliação médica quando é persistente, localizada, intensa ou associada a outros sinais.",
  ],
  [
    "Tenho um nódulo na mama. O que devo fazer?",
    "O ideal é agendar uma consulta com mastologista para avaliação clínica e, se necessário, solicitação de exames complementares. Evite conclusões antes da avaliação médica.",
  ],
  [
    "Com que frequência devo fazer acompanhamento das mamas?",
    "A frequência depende da idade, histórico familiar, sintomas e exames anteriores. O mastologista orienta o melhor acompanhamento para cada paciente.",
  ],
  [
    "Preciso de encaminhamento para marcar consulta com mastologista?",
    "Isso pode variar conforme o convênio ou forma de atendimento. A recepção pode orientar sobre o agendamento.",
  ],
];

const ginecologiaFaq = [
  [
    "Quando devo procurar uma ginecologista?",
    "A consulta ginecológica é indicada para prevenção, exame preventivo, alterações no ciclo menstrual, dores pélvicas, corrimentos, desconfortos íntimos, orientação contraceptiva, menopausa e acompanhamento da saúde da mulher.",
  ],
  [
    "Com que frequência devo fazer consulta ginecológica?",
    "A frequência depende da idade, histórico, sintomas e necessidades individuais. A ginecologista orienta o intervalo mais adequado para cada paciente.",
  ],
  [
    "A consulta ginecológica é apenas para quem tem sintomas?",
    "Não. A consulta também é importante para prevenção ginecológica, orientação e acompanhamento da saúde feminina em diferentes fases da vida.",
  ],
  [
    "A ginecologista pode orientar sobre anticoncepcional?",
    "Sim. A escolha de anticoncepcional deve considerar histórico de saúde, preferências, riscos e objetivos de cada paciente.",
  ],
  [
    "A ginecologista acompanha menopausa?",
    `Sim. O acompanhamento pode ajudar na orientação sobre sintomas, saúde íntima, prevenção e qualidade de vida durante essa fase. Em alguns casos, queixas íntimas também podem ser avaliadas na página de <a class="text-link" href="${routes.radio}">radiofrequência ginecológica</a>.`,
  ],
  [
    "Preciso de encaminhamento para marcar consulta com ginecologista?",
    "Isso pode variar conforme o convênio ou forma de atendimento. A recepção pode orientar sobre o agendamento.",
  ],
  [
    "Quais exames podem ser solicitados em uma consulta ginecológica?",
    "Depende da avaliação médica. Podem ser indicados exame preventivo, exames laboratoriais, ultrassonografia ou outros exames conforme cada caso.",
  ],
];

const radioFaq = [
  [
    "O que é radiofrequência ginecológica?",
    "É um recurso utilizado em consultório para auxiliar no cuidado da região íntima feminina, sempre após avaliação médica individualizada.",
  ],
  [
    "Para quem a radiofrequência ginecológica pode ser indicada?",
    "Pode ser avaliada em alguns casos de desconforto íntimo, ressecamento vaginal, queixas relacionadas à menopausa, flacidez íntima ou alterações após o parto, conforme orientação médica.",
  ],
  [
    "A radiofrequência ginecológica substitui consulta médica?",
    `Não. A consulta e a <a class="text-link" href="${routes.ginecologia}">avaliação ginecológica</a> são essenciais para entender os sintomas, histórico, contraindicações e melhor conduta para cada paciente.`,
  ],
  [
    "Preciso passar por avaliação antes do procedimento?",
    "Sim. Antes de qualquer indicação, a paciente passa por avaliação médica para definir se o procedimento faz sentido para o seu caso.",
  ],
  [
    "Radiofrequência ginecológica dói?",
    "A percepção pode variar entre pacientes. O procedimento deve ser explicado previamente e realizado com orientação profissional.",
  ],
  [
    "Quantas sessões são necessárias?",
    "A quantidade de sessões depende da avaliação médica, das queixas apresentadas e da resposta individual ao acompanhamento.",
  ],
  [
    "A radiofrequência ginecológica é indicada para menopausa?",
    "Em alguns casos, queixas relacionadas à menopausa podem ser avaliadas. A indicação depende da consulta médica e das necessidades de cada paciente.",
  ],
  [
    "Como agendar uma avaliação na Clínica Araújo Zamboni?",
    "O agendamento pode ser feito pelo WhatsApp da recepção, informando o interesse em avaliação para radiofrequência ginecológica.",
  ],
];

function icon(name) {
  const icons = {
    whatsapp:
      '<svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.2.3 11.7c0 2 .5 4 1.5 5.7L0 24l6.8-1.8a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.2 11.8-11.7 0-3.1-1.2-6-3.5-8.3Zm-8.4 18a9.8 9.8 0 0 1-5-1.4l-.4-.2-4 .9.9-3.8-.3-.4a9.6 9.6 0 0 1-1.5-5C1.8 6 6.4 1.5 12.1 1.5a10 10 0 0 1 7.3 3 10.2 10.2 0 0 1 3 7.2c0 5.4-4.6 9.8-10.3 9.8Zm5.6-7.4c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.4-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6l.5-.6.2-.5c.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.1.2 2.2 3.4 5.3 4.8.7.3 1.3.5 1.8.6.8.2 1.4.2 2 0 .6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>',
    pin:
      '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>',
    search:
      '<svg viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 0 1 5.9 12.1l4.2 4.2-1.4 1.4-4.2-4.2A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></svg>',
    care:
      '<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.4-9.5-8A6 6 0 0 1 12 5.7 6 6 0 0 1 21.5 13C19 16.6 12 21 12 21Zm-1-6h2v-2h2v-2h-2V9h-2v2H9v2h2v2Z"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24"><path d="M14 8.6V6.7c0-.7.5-.9.9-.9h2.3V2h-3.1c-3.4 0-4.7 2.1-4.7 4.4v2.2H6.8v4h2.6V22H14v-9.4h3.1l.5-4H14Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.9 2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z"/></svg>',
  };
  return icons[name] || icons.care;
}

function header(active = "home") {
  return `
    <header class="site-header">
      <a class="brand" href="${routes.home}" aria-label="Clínica Araújo Zamboni">
        <img src="/assets/caz-logo-horizontal.png" alt="Clínica Araújo Zamboni" />
      </a>
      <button class="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
        <b>Menu</b>
      </button>
      <nav id="primary-navigation" aria-label="Navegação principal">
        <a class="${active === "home" ? "is-active" : ""}" href="${routes.home}">Home</a>
        <a class="${active === "mastologia" ? "is-active" : ""}" href="${routes.mastologia}">Mastologia</a>
        <a class="${active === "ginecologia" ? "is-active" : ""}" href="${routes.ginecologia}">Ginecologia</a>
        <a class="${active === "radio" ? "is-active" : ""}" href="${routes.radio}">Radiofrequência Ginecológica</a>
      </nav>
      <a class="header-cta" href="${wa(active === "mastologia" ? "mastologia" : active === "ginecologia" ? "ginecologia" : active === "radio" ? "radio" : "agendar")}" target="_blank" rel="noopener">${icon("whatsapp")} Agendar</a>
    </header>
  `;
}

function serviceCard(service, index) {
  const isInternal = service.href.startsWith("/");
  return `
    <article class="service-card reveal" style="--d:${index * 70}ms">
      <span class="service-kicker">${service.tag}</span>
      <h3>${service.title}</h3>
      <p>${service.copy}</p>
      <div class="service-actions">
        <a href="${service.href}" ${isInternal ? "" : 'target="_blank" rel="noopener"'}>${service.cta}</a>
        <a class="ghost-link" href="${wa(service.intent)}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </article>
  `;
}

function faqList(items) {
  return items
    .map(
      ([q, a]) => `
        <details class="reveal">
          <summary>${q}</summary>
          <p>${a}</p>
        </details>`
    )
    .join("");
}

function relatedCard(title, copy, href, cta) {
  return `
    <a class="related-card" href="${href}">
      <span class="service-kicker">Atendimento relacionado</span>
      <h3>${title}</h3>
      <p>${copy}</p>
      <strong>${cta}</strong>
    </a>
  `;
}

function homePage() {
  document.title = "Clínica Médica em Caçapava | Araújo Zamboni";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Clínica médica em Caçapava/SP com atendimento em ginecologia, mastologia, dermatologia, endocrinologia, nutrição, psicologia e outras especialidades. Agende pelo WhatsApp."
  );

  return pageShell(`
    ${header("home")}
    <main id="top">
      <section class="hero">
        <div class="hero-media" aria-hidden="true">
          <img src="/assets/caz-home-medical.webp" alt="" />
        </div>
        <div class="hero-content">
          <div class="eyebrow">${icon("pin")} Clínica médica em Caçapava/SP desde 1994</div>
          <h1>Clínica médica em Caçapava para cuidar da sua saúde com atenção e segurança</h1>
          <p>
            Atendimento em <a class="text-link light" href="${routes.ginecologia}">ginecologia</a>, <a class="text-link light" href="${routes.mastologia}">mastologia</a>, dermatologia, endocrinologia, nutrição, psicologia e outras especialidades. Fale com a recepção, tire suas dúvidas e agende sua consulta pelo WhatsApp.
          </p>
          <div class="hero-actions">
            <a class="primary-action" href="${wa("agendar")}" target="_blank" rel="noopener">${icon("whatsapp")} Agendar consulta pelo WhatsApp</a>
            <a class="secondary-action" href="#especialidades">Ver especialidades</a>
          </div>
          <div class="hero-proof" aria-label="Diferenciais da clínica">
            <span><strong>Desde 1994</strong> em Caçapava</span>
            <span><strong>Várias especialidades</strong> em um só lugar</span>
            <span><strong>WhatsApp</strong> para agendamento</span>
          </div>
        </div>
      </section>

      <section class="intent-panel" aria-label="Atalhos para pacientes">
        ${decisionCards
          .map(
            (card) => `
          <a class="intent-card reveal" href="${card.href}" ${card.href.startsWith("#") ? "" : 'target="_blank" rel="noopener"'}>
            <span>${icon(card.href.startsWith("#") ? "search" : "whatsapp")}</span>
            <strong>${card.title}</strong>
            <small>${card.copy}</small>
            <em>${card.action}</em>
          </a>`
          )
          .join("")}
      </section>

      <section class="section split" id="cuidado">
        <div class="copy-block reveal">
          <span class="section-kicker">Cuidado médico em Caçapava</span>
          <h2>Atendimento para diferentes fases e necessidades da sua saúde</h2>
          <p>
            Na Clínica Araújo Zamboni, o paciente encontra orientação médica para consultas de rotina, prevenção, investigação de sintomas e acompanhamento contínuo.
          </p>
          <p>
            A proposta é oferecer um atendimento acolhedor, com escuta, avaliação individualizada e encaminhamento adequado conforme cada necessidade.
          </p>
        </div>
        <div class="journey reveal">
          <div><b>01</b><strong>Fale com a recepção</strong><span>Confirme especialidades, horários e convênios.</span></div>
          <div><b>02</b><strong>Escolha o atendimento</strong><span><a class="text-link" href="${routes.ginecologia}">Ginecologia</a>, <a class="text-link" href="${routes.mastologia}">mastologia</a>, <a class="text-link" href="${routes.radio}">radiofrequência ginecológica</a> e outras áreas.</span></div>
          <div><b>03</b><strong>Receba orientação</strong><span>A equipe informa os próximos passos para a consulta.</span></div>
          <div><b>04</b><strong>Agende com facilidade</strong><span>Use o WhatsApp para iniciar o atendimento.</span></div>
        </div>
      </section>

      <section class="section services" id="especialidades">
        <div class="section-head reveal">
          <span class="section-kicker">Especialidades médicas</span>
          <h2>Encontre atendimento médico em Caçapava para o que você precisa</h2>
          <p>
            Veja algumas áreas atendidas pela Clínica Araújo Zamboni, incluindo <a class="text-link" href="${routes.ginecologia}">ginecologia em Caçapava</a>, <a class="text-link" href="${routes.mastologia}">mastologia em Caçapava</a> e <a class="text-link" href="${routes.radio}">radiofrequência ginecológica</a>. Fale com a recepção para confirmar agenda, convênios e disponibilidade.
          </p>
        </div>
        <div class="service-grid">
          ${services.map(serviceCard).join("")}
        </div>
      </section>

      <section class="feature-band">
        <div class="feature-copy reveal">
          <span class="section-kicker light">Atendimento acolhedor</span>
          <h2>Uma clínica para prevenir, acompanhar e orientar com responsabilidade</h2>
          <p>
            Cada paciente tem uma história, sintomas e necessidades próprias. Por isso, o atendimento valoriza avaliação individualizada, linguagem clara e conduta médica adequada.
          </p>
        </div>
        <div class="feature-list reveal">
          <div>${icon("care")} Consultas com avaliação individualizada</div>
          <div>${icon("search")} Especialidades organizadas para facilitar sua escolha</div>
          <div>${icon("whatsapp")} Recepção disponível para orientar pelo WhatsApp</div>
        </div>
      </section>

      ${locationSection()}
      ${faqSection(homeFaq, "Dúvidas frequentes", "Informações importantes antes de agendar sua consulta", "Reunimos respostas simples para quem procura uma clínica médica em Caçapava e quer entender melhor o atendimento.")}
      ${finalCta("Fale com a recepção da Clínica Araújo Zamboni", "Para agendar consulta em Caçapava/SP ou tirar dúvidas sobre atendimento, especialidades, convênios e horários, chame a recepção pelo WhatsApp.", "agendar")}
    </main>
  `, "agendar");
}

function mastologiaPage() {
  document.title = "Mastologista em Caçapava | Dr. Bruno Goia | Clínica Araújo Zamboni";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Consulta com mastologista em Caçapava para prevenção, avaliação de nódulo na mama, dor nas mamas e alterações mamárias. Agende com o Dr. Bruno Goia."
  );

  return pageShell(`
    ${header("mastologia")}
    <main id="top">
      <section class="specialty-hero">
        <div class="specialty-copy">
          <div class="eyebrow">${icon("pin")} Mastologista em Caçapava/SP</div>
          <h1>Mastologia em Caçapava: cuidado especializado com a saúde das mamas</h1>
          <p>
            Atendimento com o Dr. Bruno Goia para prevenção, avaliação de nódulo na mama, dor nas mamas, alterações mamárias e acompanhamento da <a class="text-link light" href="${routes.ginecologia}">saúde feminina</a>.
          </p>
          <div class="hero-actions">
            <a class="primary-action" href="${wa("mastologia")}" target="_blank" rel="noopener">${icon("whatsapp")} Agendar consulta com mastologista</a>
            <a class="secondary-action" href="#quando-procurar">Quando procurar</a>
          </div>
        </div>
        <div class="doctor-panel mastologia-doctor-panel">
          <img class="wide-doctor-photo" src="/assets/dr-bruno-mastologia-1920x1080.jpg" alt="Dr. Bruno Goia, mastologista em Caçapava, em consultório médico" />
          <div>
            <span>Dr. Bruno Goia</span>
            <strong>Mastologista, Ginecologista e Obstetra</strong>
            <small>CRM-SP 175799</small>
          </div>
        </div>
      </section>

      <section class="section split" id="quando-procurar">
        <div class="copy-block reveal">
          <span class="section-kicker">Quando procurar</span>
          <h2>Procure um mastologista quando notar alterações nas mamas</h2>
          <p>
            A mastologia cuida da saúde das mamas, tanto na prevenção quanto na avaliação de sintomas e alterações percebidas pela paciente.
          </p>
          <p>
            Em Caçapava/SP, a Clínica Araújo Zamboni oferece atendimento para mulheres que precisam de orientação médica clara, acolhedora e individualizada, com conexão com a <a class="text-link" href="${routes.ginecologia}">ginecologia</a> quando o cuidado pede uma visão mais ampla.
          </p>
        </div>
        <div class="journey reveal">
          <div><b>01</b><strong>Nódulo ou caroço na mama</strong><span>Alterações percebidas ao toque devem ser avaliadas.</span></div>
          <div><b>02</b><strong>Dor nas mamas</strong><span>Especialmente quando é persistente, localizada ou recorrente.</span></div>
          <div><b>03</b><strong>Secreção ou mudança no mamilo</strong><span>O mastologista avalia sinais e orienta os próximos passos.</span></div>
          <div><b>04</b><strong>Prevenção e histórico familiar</strong><span>Acompanhamento regular ajuda no cuidado da saúde das mamas.</span></div>
        </div>
      </section>

      <section class="section services breast-care">
        <div class="section-head reveal">
          <span class="section-kicker">Consulta de mastologia</span>
          <h2>O que o mastologista avalia?</h2>
          <p>
            A consulta com mastologista considera sintomas, histórico pessoal e familiar, exames anteriores e necessidade de exames complementares.
          </p>
        </div>
        <div class="service-grid">
          ${[
            ["Avaliação clínica", "Exame médico das mamas, escuta das queixas e análise do histórico da paciente."],
            ["Prevenção", "Orientação sobre acompanhamento preventivo, exames indicados e sinais que merecem atenção."],
            ["Alterações mamárias", "Avaliação de nódulo na mama, dor nas mamas, secreções, cistos e mudanças percebidas."],
            ["Acompanhamento individual", "Conduta definida conforme idade, sintomas, histórico familiar e exames disponíveis."],
            ["Saúde feminina", `Cuidado integrado com <a class="text-link" href="${routes.ginecologia}">ginecologia</a> quando necessário, respeitando cada fase da mulher.`],
            ["Encaminhamento seguro", "Quando indicado, o médico orienta exames e próximos passos com responsabilidade."]
          ].map(([title, copy], index) => `
            <article class="service-card reveal" style="--d:${index * 70}ms">
              <span class="service-kicker">Saúde das mamas</span>
              <h3>${title}</h3>
              <p>${copy}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="feature-band">
        <div class="feature-copy reveal">
          <span class="section-kicker light">Prevenção</span>
          <h2>Diagnóstico precoce começa com acompanhamento adequado</h2>
          <p>
            O acompanhamento regular da saúde das mamas ajuda a identificar alterações com mais segurança e no momento adequado. A prevenção depende de orientação médica, exames indicados para cada faixa etária e atenção a sinais como nódulo na mama, dor nas mamas ou mudanças recentes.
          </p>
        </div>
        <div class="feature-list reveal">
          <div>${icon("care")} Avaliação médica individualizada</div>
          <div>${icon("search")} Orientação sobre exames quando necessário</div>
          <div>${icon("whatsapp")} Agendamento com a recepção pelo WhatsApp</div>
        </div>
      </section>

      <section class="section related-section">
        <div class="section-head reveal">
          <span class="section-kicker">Cuidado integrado</span>
          <h2>Outros atendimentos que conversam com mastologia</h2>
          <p>
            A saúde das mamas pode fazer parte de um cuidado mais amplo com a saúde da mulher. Por isso, a página já se conecta às próximas áreas estratégicas do site.
          </p>
        </div>
        <div class="related-grid">
          ${relatedCard("Ginecologia em Caçapava", "Consulta ginecológica, prevenção, menopausa, ciclo menstrual e saúde íntima feminina.", routes.ginecologia, "Ver ginecologia")}
          ${relatedCard("Radiofrequência Ginecológica", "Avaliação individualizada para saúde íntima feminina, menopausa e conforto íntimo.", routes.radio, "Ver radiofrequência")}
          ${relatedCard("Clínica médica em Caçapava", "Conheça a estrutura da Clínica Araújo Zamboni e outras especialidades disponíveis.", routes.home, "Voltar para Home")}
        </div>
      </section>

      ${faqSection(mastologiaFaq, "Dúvidas frequentes sobre mastologia", "Perguntas comuns antes de marcar consulta com mastologista", "Respostas objetivas para quem procura mastologia em Caçapava, prevenção e avaliação da saúde das mamas.")}
      ${locationSection()}
      ${finalCta("Cuide da saúde das mamas com acompanhamento especializado", "Para agendar uma consulta de mastologia em Caçapava/SP ou tirar dúvidas sobre atendimento com o Dr. Bruno Goia, fale com a recepção da Clínica Araújo Zamboni pelo WhatsApp.", "mastologia")}
    </main>
  `, "mastologia");
}

function ginecologiaPage() {
  document.title = "Ginecologista em Caçapava | Dra. Luciane Zamboni | Clínica Araújo Zamboni";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Atendimento com ginecologista em Caçapava para consultas de rotina, prevenção ginecológica, saúde íntima, ciclo menstrual, anticoncepcional e menopausa. Agende sua consulta."
  );

  return pageShell(`
    ${header("ginecologia")}
    <main id="top">
      <section class="specialty-hero gynecology-hero">
        <div class="specialty-copy">
          <div class="eyebrow">${icon("pin")} Ginecologista em Caçapava/SP</div>
          <h1>Ginecologia em Caçapava: cuidado completo com a saúde da mulher</h1>
          <p>
            Atendimento com a Dra. Luciane Zamboni para consultas ginecológicas, prevenção, <a class="text-link light" href="${routes.radio}">saúde íntima feminina</a>, ciclo menstrual, anticoncepcional, menopausa e acompanhamento individualizado.
          </p>
          <div class="hero-actions">
            <a class="primary-action" href="${wa("ginecologia")}" target="_blank" rel="noopener">${icon("whatsapp")} Agendar consulta com ginecologista</a>
            <a class="secondary-action" href="#quando-procurar">Quando procurar</a>
          </div>
        </div>
        <div class="doctor-panel ginecologia-doctor-panel">
          <img class="wide-doctor-photo" src="/assets/dra-luciane-ginecologia-1920x1080.jpg" alt="Dra. Luciane Zamboni, ginecologista em Caçapava, em consultório médico" />
          <div>
            <span>Dra. Luciane Zamboni</span>
            <strong>Ginecologia e saúde da mulher</strong>
            <small>CRM-SP 76148</small>
          </div>
        </div>
      </section>

      <section class="section split" id="quando-procurar">
        <div class="copy-block reveal">
          <span class="section-kicker">Quando procurar</span>
          <h2>Procure uma ginecologista para prevenção, orientação e acompanhamento</h2>
          <p>
            A ginecologia acompanha a saúde da mulher em diferentes fases da vida, desde consultas de rotina até avaliação de sintomas, orientação contraceptiva e menopausa.
          </p>
          <p>
            Em Caçapava/SP, a Clínica Araújo Zamboni oferece atendimento ginecológico com escuta, cuidado humanizado e avaliação médica individualizada, conectado a cuidados como <a class="text-link" href="${routes.mastologia}">mastologia</a> e <a class="text-link" href="${routes.radio}">radiofrequência ginecológica</a> quando necessário.
          </p>
        </div>
        <div class="journey reveal">
          <div><b>01</b><strong>Consulta de rotina</strong><span>Acompanhamento preventivo e orientação sobre saúde feminina.</span></div>
          <div><b>02</b><strong>Alterações menstruais ou dores pélvicas</strong><span>Sintomas devem ser avaliados conforme histórico de cada paciente.</span></div>
          <div><b>03</b><strong>Corrimentos ou desconfortos íntimos</strong><span>A consulta ajuda a investigar queixas e orientar próximos passos.</span></div>
          <div><b>04</b><strong>Anticoncepcional e menopausa</strong><span>Orientação individualizada para diferentes fases da vida.</span></div>
        </div>
      </section>

      <section class="section services gynecology-care">
        <div class="section-head reveal">
          <span class="section-kicker">Consulta ginecológica</span>
          <h2>O que a ginecologista avalia?</h2>
          <p>
            A consulta ginecológica considera sintomas, histórico da paciente, fase da vida, exames preventivos e necessidades individuais.
          </p>
        </div>
        <div class="service-grid">
          ${[
            ["Prevenção ginecológica", "Orientação sobre exame preventivo, acompanhamento regular e cuidados importantes para a saúde da mulher."],
            ["Saúde íntima feminina", "Avaliação de corrimentos, desconfortos íntimos, dores, sintomas recorrentes e dúvidas sobre cuidado íntimo."],
            ["Ciclo menstrual", "Acompanhamento de alterações no ciclo menstrual, cólicas, sangramentos irregulares e sintomas associados."],
            ["Contracepção", "Orientação sobre anticoncepcional e métodos contraceptivos conforme histórico, rotina e objetivos da paciente."],
            ["Menopausa", "Acompanhamento de sintomas, saúde íntima, prevenção e qualidade de vida durante essa fase."],
            ["Cuidado integrado", `Quando necessário, o acompanhamento pode conversar com <a class="text-link" href="${routes.mastologia}">mastologia</a>, endocrinologia, nutrição e psicologia.`]
          ].map(([title, copy], index) => `
            <article class="service-card reveal" style="--d:${index * 70}ms">
              <span class="service-kicker">Saúde da mulher</span>
              <h3>${title}</h3>
              <p>${copy}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="feature-band">
        <div class="feature-copy reveal">
          <span class="section-kicker light">Acompanhamento feminino</span>
          <h2>Prevenção e cuidado contínuo em diferentes fases da vida</h2>
          <p>
            Consultas regulares ajudam no acompanhamento da saúde íntima feminina, na prevenção ginecológica e na orientação sobre exames, ciclo menstrual, contracepção e menopausa.
          </p>
        </div>
        <div class="feature-list reveal">
          <div>${icon("care")} Avaliação médica individualizada</div>
          <div>${icon("search")} Orientação sobre exame preventivo quando indicado</div>
          <div>${icon("whatsapp")} Agendamento com a recepção pelo WhatsApp</div>
        </div>
      </section>

      <section class="section related-section">
        <div class="section-head reveal">
          <span class="section-kicker">Cuidado integrado</span>
          <h2>Outros atendimentos relacionados à saúde da mulher</h2>
          <p>
            A ginecologia pode se conectar a outras áreas de cuidado, especialmente quando a paciente precisa de acompanhamento mais amplo.
          </p>
        </div>
        <div class="related-grid">
          ${relatedCard("Mastologia em Caçapava", "Avaliação da saúde das mamas, prevenção, nódulo na mama, dor nas mamas e alterações mamárias.", routes.mastologia, "Ver mastologia")}
          ${relatedCard("Radiofrequência Ginecológica", "Avaliação individualizada para saúde íntima feminina, menopausa, ressecamento vaginal e conforto íntimo.", routes.radio, "Ver radiofrequência")}
          ${relatedCard("Clínica médica em Caçapava", "Conheça a estrutura da Clínica Araújo Zamboni e outras especialidades disponíveis.", routes.home, "Voltar para Home")}
        </div>
      </section>

      ${faqSection(ginecologiaFaq, "Dúvidas frequentes sobre ginecologia", "Informações importantes antes de marcar consulta ginecológica", "Respostas objetivas para quem procura ginecologista em Caçapava, prevenção ginecológica e acompanhamento da saúde da mulher.")}
      ${locationSection()}
      ${finalCta("Cuide da sua saúde feminina com acompanhamento especializado", "Para agendar uma consulta de ginecologia em Caçapava/SP ou tirar dúvidas sobre atendimento com a Dra. Luciane Zamboni, fale com a recepção da Clínica Araújo Zamboni pelo WhatsApp.", "ginecologia")}
    </main>
  `, "ginecologia");
}

function radioPage() {
  document.title = "Radiofrequência Ginecológica em Caçapava | Clínica Araújo Zamboni";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Radiofrequência ginecológica em Caçapava com avaliação médica individualizada para queixas íntimas femininas, menopausa, ressecamento vaginal e conforto íntimo. Agende sua avaliação."
  );

  return pageShell(`
    ${header("radio")}
    <main id="top">
      <section class="specialty-hero radio-hero">
        <div class="specialty-copy">
          <div class="eyebrow">${icon("pin")} Radiofrequência íntima em Caçapava/SP</div>
          <h1>Radiofrequência Ginecológica em Caçapava</h1>
          <p>
            Avaliação com a Dra. Luciane Zamboni para entender se a radiofrequência ginecológica pode ser indicada no cuidado da <a class="text-link light" href="${routes.ginecologia}">saúde íntima feminina</a>, considerando sintomas, histórico e necessidades de cada paciente.
          </p>
          <div class="hero-actions">
            <a class="primary-action" href="${wa("radio")}" target="_blank" rel="noopener">${icon("whatsapp")} Agendar avaliação pelo WhatsApp</a>
            <a class="secondary-action" href="#avaliacao">Entender a avaliação</a>
          </div>
        </div>
        <div class="doctor-panel radio-doctor-panel">
          <img class="wide-doctor-photo" src="/assets/dra-luciane-radiofrequencia-1920x1080.jpg" alt="Dra. Luciane Zamboni, atendimento em radiofrequência ginecológica em Caçapava, em consultório médico" />
          <div>
            <span>Dra. Luciane Zamboni</span>
            <strong>Ginecologia, saúde íntima feminina e acompanhamento individualizado</strong>
            <small>Atendimento na Clínica Araújo Zamboni</small>
          </div>
        </div>
      </section>

      <section class="section split" id="avaliacao">
        <div class="copy-block reveal">
          <span class="section-kicker">Cuidado íntimo feminino</span>
          <h2>O que é a radiofrequência ginecológica?</h2>
          <p>
            A radiofrequência ginecológica é um recurso utilizado em consultório para auxiliar no cuidado da região íntima feminina. A indicação deve ser feita após avaliação médica, considerando sintomas, histórico de saúde e necessidades de cada paciente.
          </p>
          <p>
            O procedimento não substitui a <a class="text-link" href="${routes.ginecologia}">consulta ginecológica</a> e não é indicado da mesma forma para todos os casos.
          </p>
        </div>
        <div class="journey reveal">
          <div><b>01</b><strong>Avaliação médica</strong><span>Entendimento das queixas, histórico, objetivos e possíveis contraindicações.</span></div>
          <div><b>02</b><strong>Indicação individualizada</strong><span>A conduta é definida conforme a realidade clínica de cada paciente.</span></div>
          <div><b>03</b><strong>Procedimento em consultório</strong><span>Quando indicado, é realizado por profissional habilitada em ambiente clínico.</span></div>
          <div><b>04</b><strong>Acompanhamento</strong><span>O plano pode variar de acordo com a resposta e necessidade da paciente.</span></div>
        </div>
      </section>

      <section class="section services radio-care">
        <div class="section-head reveal">
          <span class="section-kicker">Quando pode ser indicada</span>
          <h2>Queixas íntimas que podem ser avaliadas em consulta</h2>
          <p>
            Em alguns casos, a radiofrequência ginecológica pode ser considerada como parte do cuidado da saúde íntima feminina, sempre conforme orientação médica.
          </p>
        </div>
        <div class="service-grid">
          ${[
            ["Ressecamento vaginal", "Pode ser avaliado especialmente quando a queixa impacta conforto íntimo e qualidade de vida."],
            ["Menopausa", `Algumas alterações relacionadas à menopausa podem exigir <a class="text-link" href="${routes.ginecologia}">acompanhamento ginecológico</a> individualizado.`],
            ["Desconforto em relações", "Sintomas devem ser conversados em consulta, sem constrangimento e sem conclusões precipitadas."],
            ["Flacidez íntima", "Queixas relacionadas à flacidez podem ser avaliadas para entender possibilidades de cuidado."],
            ["Alterações após parto", "Cada caso deve ser analisado com atenção ao histórico, sintomas e fase de recuperação da paciente."],
            ["Saúde íntima feminina", "O foco é orientar com seriedade, escuta e conduta segura, sem promessas de resultado."]
          ].map(([title, copy], index) => `
            <article class="service-card reveal" style="--d:${index * 70}ms">
              <span class="service-kicker">Avaliação ginecológica</span>
              <h3>${title}</h3>
              <p>${copy}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="feature-band">
        <div class="feature-copy reveal">
          <span class="section-kicker light">Segurança médica</span>
          <h2>Avaliação antes do procedimento é parte essencial do cuidado</h2>
          <p>
            Antes de qualquer indicação, a paciente passa por avaliação médica para entender sintomas, histórico, necessidades, contraindicações e melhor conduta. Esse é o caminho para um cuidado responsável, seguro e adequado à realidade de cada paciente.
          </p>
        </div>
        <div class="feature-list reveal">
          <div>${icon("care")} Avaliação ginecológica individualizada</div>
          <div>${icon("search")} Indicação conforme sintomas e histórico</div>
          <div>${icon("whatsapp")} Agendamento direto com a recepção</div>
        </div>
      </section>

      <section class="section split video-panel">
        <div class="copy-block reveal">
          <span class="section-kicker">Entenda melhor</span>
          <h2>Saúde íntima feminina com orientação médica</h2>
          <p>
            O vídeo ajuda a apresentar o tema de forma visual, mas a decisão sobre qualquer procedimento deve acontecer em consulta, com avaliação individualizada e orientação profissional.
          </p>
          <a class="primary-action" href="${wa("radio")}" target="_blank" rel="noopener">${icon("whatsapp")} Falar com a recepção</a>
        </div>
        <div class="video-frame reveal">
          <iframe
            title="Vídeo sobre radiofrequência ginecológica e saúde íntima feminina"
            loading="lazy"
            src="https://www.youtube.com/embed/w5yNM8FSP7Y"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </section>

      <section class="section related-section">
        <div class="section-head reveal">
          <span class="section-kicker">Cuidado integrado</span>
          <h2>Atendimentos relacionados à saúde da mulher</h2>
          <p>
            A radiofrequência ginecológica em Caçapava faz parte de um contexto de cuidado ginecológico mais amplo, com avaliação, prevenção e acompanhamento.
          </p>
        </div>
        <div class="related-grid">
          ${relatedCard("Ginecologia em Caçapava", "Consulta ginecológica, prevenção, saúde íntima feminina, anticoncepcional e menopausa.", routes.ginecologia, "Ver ginecologia")}
          ${relatedCard("Mastologia em Caçapava", "Avaliação da saúde das mamas, prevenção, nódulo na mama, dor nas mamas e alterações mamárias.", routes.mastologia, "Ver mastologia")}
          ${relatedCard("Clínica médica em Caçapava", "Conheça a estrutura da Clínica Araújo Zamboni e outras especialidades disponíveis.", routes.home, "Voltar para Home")}
        </div>
      </section>

      ${faqSection(radioFaq, "Dúvidas frequentes sobre radiofrequência ginecológica", "Perguntas importantes antes de agendar uma avaliação", "Respostas objetivas para quem procura radiofrequência ginecológica em Caçapava, saúde íntima feminina, menopausa e ressecamento vaginal.")}
      ${locationSection()}
      ${finalCta("Agende uma avaliação para entender se o procedimento é indicado para você", "Cada caso precisa ser avaliado individualmente. Fale com a recepção da Clínica Araújo Zamboni e tire suas dúvidas sobre o atendimento em radiofrequência ginecológica em Caçapava.", "radio")}
    </main>
  `, "radio");
}

function locationSection() {
  return `
    <section class="section local-seo" id="localizacao">
      <div class="local-card reveal">
        <span class="section-kicker">Localização</span>
        <h2>Clínica Araújo Zamboni em Caçapava/SP</h2>
        <p>
          A clínica está localizada na R. Nações Unidas, 92 - Jardim Santo Antonio, Caçapava - SP, 12281-050.
        </p>
        <p>
          Entre em contato para consultar horários de atendimento, especialidades disponíveis e informações sobre convênios.
        </p>
        <div class="local-actions">
          <a class="primary-action" href="${wa("recepcao")}" target="_blank" rel="noopener">${icon("whatsapp")} Falar com a recepção</a>
          <a class="secondary-action dark" href="https://www.google.com/maps/dir/?api=1&destination=R.%20Na%C3%A7%C3%B5es%20Unidas%2C%2092%20-%20Jardim%20Santo%20Antonio%2C%20Ca%C3%A7apava%20-%20SP%2C%2012281-050" target="_blank" rel="noopener">Abrir rota</a>
        </div>
      </div>
      <div class="map-frame reveal">
        <iframe
          title="Mapa da Clínica Araújo Zamboni"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=R.%20Na%C3%A7%C3%B5es%20Unidas,%2092%20-%20Jardim%20Santo%20Antonio,%20Ca%C3%A7apava%20-%20SP,%2012281-050&output=embed">
        </iframe>
      </div>
    </section>
  `;
}

function faqSection(items, kicker, title, copy) {
  return `
    <section class="section faq">
      <div class="section-head reveal">
        <span class="section-kicker">${kicker}</span>
        <h2>${title}</h2>
        <p>${copy}</p>
      </div>
      <div class="faq-list">
        ${faqList(items)}
      </div>
    </section>
  `;
}

function finalCta(title, copy, intent) {
  return `
    <section class="final-cta">
      <div class="reveal">
        <span class="section-kicker light">Agendamento</span>
        <h2>${title}</h2>
        <p>${copy}</p>
        <a class="primary-action" href="${wa(intent)}" target="_blank" rel="noopener">${icon("whatsapp")} Agendar pelo WhatsApp</a>
      </div>
    </section>
  `;
}

function siteFooter() {
  return `
    <footer class="site-footer" aria-label="Rodapé da Clínica Araújo Zamboni">
      <div class="footer-inner">
        <a class="footer-brand" href="${routes.home}" aria-label="Voltar para a Home da Clínica Araújo Zamboni">
          <img src="/assets/caz-logo-symbol-white.png" alt="Clínica Araújo Zamboni" />
        </a>
        <address class="footer-nap">
          <strong>Clínica Araújo Zamboni - Medicina Integrada</strong>
          <span>R. Nações Unidas, 92 - Jardim Santo Antonio</span>
          <span>Caçapava - SP, 12281-050, Brasil</span>
          <a href="tel:+551236531346">(12) 3653-1346</a>
        </address>
        <div class="footer-links">
          <strong>Nos siga nas redes sociais</strong>
          <div class="social-links" aria-label="Redes sociais">
            <a href="${socialLinks.facebook}" target="_blank" rel="noopener" aria-label="Facebook da Clínica Araújo Zamboni">${icon("facebook")}</a>
            <a href="${socialLinks.instagram}" target="_blank" rel="noopener" aria-label="Instagram da Clínica Araújo Zamboni">${icon("instagram")}</a>
          </div>
          <a href="${routes.privacy}">Política de Privacidade</a>
          <a href="${routes.terms}">Termos de Uso</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Clínica Araújo Zamboni. Todos os direitos reservados.</span>
        <span>Informações do site não substituem avaliação médica individualizada.</span>
      </div>
    </footer>
  `;
}

function cookieBanner() {
  return `
    <section class="cookie-banner" data-cookie-banner aria-label="Aviso de cookies e privacidade" hidden>
      <p>
        Utilizamos cookies essenciais para o funcionamento do site e melhoria da sua experiência. Você pode aceitar ou recusar cookies não essenciais conforme a nossa
        <a href="${routes.privacy}">Política de Privacidade</a>.
      </p>
      <div>
        <button type="button" data-cookie-choice="accepted">Aceitar</button>
        <button type="button" data-cookie-choice="declined">Recusar</button>
        <a href="${routes.privacy}">Política de privacidade</a>
      </div>
    </section>
  `;
}

function pageShell(content, intent = "agendar") {
  return `
    ${content}
    ${siteFooter()}
    ${cookieBanner()}
    ${mobileAction(intent)}
  `;
}

function privacyPage() {
  document.title = "Política de Privacidade | Clínica Araújo Zamboni";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Política de Privacidade da Clínica Araújo Zamboni: informações sobre dados, cookies, contato por WhatsApp e direitos relacionados à LGPD."
  );

  return pageShell(`
    ${header("privacy")}
    <main class="legal-page">
      <section class="legal-hero">
        <span class="section-kicker">LGPD e privacidade</span>
        <h1>Política de Privacidade</h1>
        <p>
          Esta política explica, de forma simples, como a Clínica Araújo Zamboni pode tratar dados pessoais recebidos pelo site, WhatsApp, telefone, formulários e canais digitais.
        </p>
      </section>
      <section class="legal-content">
        <h2>Quem somos</h2>
        <p>Clínica Araújo Zamboni - Medicina Integrada, localizada na R. Nações Unidas, 92 - Jardim Santo Antonio, Caçapava/SP, telefone (12) 3653-1346.</p>

        <h2>Quais dados podem ser coletados</h2>
        <p>Podemos receber dados como nome, telefone, mensagem enviada, especialidade de interesse e informações necessárias para atendimento ou agendamento. Dados sensíveis de saúde devem ser compartilhados apenas nos canais adequados e durante avaliação profissional.</p>

        <h2>Como usamos os dados</h2>
        <p>Os dados podem ser usados para responder solicitações, orientar sobre atendimento, confirmar informações de agenda, melhorar a experiência no site e cumprir obrigações legais ou regulatórias.</p>

        <h2>Cookies</h2>
        <p>O site pode usar cookies essenciais para funcionamento, segurança e preferências de navegação. Cookies não essenciais, quando usados, dependem de consentimento do visitante.</p>

        <h2>Compartilhamento</h2>
        <p>Dados podem ser tratados por fornecedores necessários à operação do site, hospedagem, ferramentas de atendimento e serviços administrativos, sempre com finalidade compatível com o atendimento solicitado.</p>

        <h2>Direitos do titular</h2>
        <p>Nos termos da LGPD, você pode solicitar informações sobre tratamento de dados, correção, atualização, revogação de consentimento ou exclusão quando aplicável.</p>

        <h2>Contato</h2>
        <p>Para solicitações sobre privacidade, fale com a recepção pelo telefone <a href="tel:+551236531346">(12) 3653-1346</a> ou pelo WhatsApp da clínica.</p>

        <h2>Atualizações</h2>
        <p>Esta política pode ser atualizada para refletir mudanças no site, nos canais de atendimento ou nas exigências legais.</p>
      </section>
    </main>
  `);
}

function termsPage() {
  document.title = "Termos de Uso | Clínica Araújo Zamboni";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Termos de Uso do site da Clínica Araújo Zamboni: informações sobre conteúdo, atendimento, agendamento e responsabilidades."
  );

  return pageShell(`
    ${header("terms")}
    <main class="legal-page">
      <section class="legal-hero">
        <span class="section-kicker">Uso do site</span>
        <h1>Termos de Uso</h1>
        <p>
          Estes termos orientam o uso das páginas digitais da Clínica Araújo Zamboni e dos canais de contato disponibilizados no site.
        </p>
      </section>
      <section class="legal-content">
        <h2>Finalidade do site</h2>
        <p>O site apresenta informações institucionais, especialidades atendidas, localização, formas de contato e conteúdos educativos sobre saúde.</p>

        <h2>Informação médica</h2>
        <p>Os conteúdos têm caráter informativo e não substituem consulta, diagnóstico, tratamento ou avaliação médica individualizada.</p>

        <h2>Agendamento e atendimento</h2>
        <p>Botões de WhatsApp e telefone servem para iniciar contato com a recepção. Horários, convênios, disponibilidade de agenda e orientações específicas devem ser confirmados diretamente com a equipe.</p>

        <h2>Uso adequado</h2>
        <p>O visitante se compromete a não usar o site para fins ilícitos, envio de conteúdo ofensivo, tentativa de acesso indevido ou qualquer ação que comprometa o funcionamento dos canais digitais.</p>

        <h2>Links externos</h2>
        <p>O site pode conter links para redes sociais, WhatsApp, Google Maps e outros serviços externos. Esses ambientes possuem regras e políticas próprias.</p>

        <h2>Propriedade intelectual</h2>
        <p>Textos, identidade visual, estrutura e conteúdos do site pertencem à Clínica Araújo Zamboni ou são usados mediante autorização, quando aplicável.</p>

        <h2>Alterações</h2>
        <p>Estes termos podem ser atualizados conforme mudanças no site, nos serviços oferecidos ou na legislação aplicável.</p>
      </section>
    </main>
  `);
}

function mobileAction(intent) {
  return `
    <aside class="mobile-action">
      <a href="${wa(intent)}" target="_blank" rel="noopener">${icon("whatsapp")} Agendar pelo WhatsApp</a>
    </aside>
  `;
}

function initCookieBanner() {
  const banner = document.querySelector("[data-cookie-banner]");
  if (!banner) return;
  const storedChoice = localStorage.getItem("caz_cookie_consent");
  if (!storedChoice) banner.hidden = false;

  banner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("caz_cookie_consent", button.dataset.cookieChoice);
      banner.hidden = true;
    });
  });
}

function initMobileMenu() {
  const header = document.querySelector(".site-header");
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-navigation");
  if (!header || !button || !nav) return;

  const setOpen = (open) => {
    header.classList.toggle("menu-open", open);
    button.setAttribute("aria-expanded", String(open));
  };

  button.addEventListener("click", () => {
    setOpen(!header.classList.contains("menu-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function boot() {
  const path = window.location.pathname.replace(/\/+$/, "/");
  const app = document.querySelector("#app");
  if (path === routes.mastologia) {
    app.innerHTML = mastologiaPage();
  } else if (path === routes.ginecologia) {
    app.innerHTML = ginecologiaPage();
  } else if (path === routes.radio) {
    app.innerHTML = radioPage();
  } else if (path === routes.privacy) {
    app.innerHTML = privacyPage();
  } else if (path === routes.terms) {
    app.innerHTML = termsPage();
  } else {
    app.innerHTML = homePage();
  }

  initCookieBanner();
  initMobileMenu();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

boot();
