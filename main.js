const translations = {
  pt: {
    navHome:"Início",navServices:"Serviços",navAbout:"Sobre",navContact:"Contato",
    eyebrow:"ESTÚDIO DIGITAL • CRIATIVIDADE E TECNOLOGIA",
    heroTitle:'Sua ideia.<br><span class="accent">Nossa criação.</span><br>Seu próximo nível.',
    heroText:"Criamos experiências digitais modernas para transformar projetos em marcas que se destacam.",
    heroCta:'Vamos criar juntos <span>↗</span>',heroSecondary:"Explorar serviços",
    heroFoot:"Design marcante. Tecnologia inteligente. Ideias sem limites.",
    servicesKicker:"O QUE FAZEMOS",servicesTitle:'Ideias grandes.<br><span class="accent">Soluções digitais.</span>',
    servicesIntro:"Da primeira ideia ao lançamento, ajudamos sua marca a ganhar forma e presença no mundo digital.",
    service1Title:"Sites profissionais",service1Text:"Sites modernos, rápidos e responsivos para apresentar sua marca e conquistar clientes.",
    service2Title:"Aplicativos",service2Text:"Experiências práticas para celular e web, pensadas para facilitar o dia a dia.",
    service3Title:"Design e identidade",service3Text:"Visual consistente, peças digitais e identidade para sua marca ser reconhecida.",
    service4Title:"Soluções digitais",service4Text:"Organização de ideias, protótipos e ferramentas digitais sob medida para seu projeto.",
    serviceLink:"Quero este serviço ↗",aboutKicker:"NOSSA VISÃO",
    aboutTitle:'Não é só estar online.<br><span class="accent">É deixar sua marca.</span>',
    aboutText:"O Elric Digital Studio une criatividade, tecnologia e atenção aos detalhes para criar experiências digitais com personalidade. Cada projeto começa com uma ideia e evolui com propósito.",
    value1:"Criatividade com propósito",value2:"Visual moderno e funcional",value3:"Foco no seu projeto",
    contactKicker:"SEU PRÓXIMO PROJETO COMEÇA AQUI",
    contactTitle:'Vamos tirar sua<br><span class="accent">ideia do papel?</span>',
    contactText:"Conta pra gente o que você está imaginando. Vamos conversar sobre como transformar isso em realidade.",
    whatsappLabel:"FALE DIRETAMENTE",socialLabel:"Acompanhe o estúdio",
    footerText:"Criando o futuro, uma ideia de cada vez."
  },
  es: {
    navHome:"Inicio",navServices:"Servicios",navAbout:"Nosotros",navContact:"Contacto",
    eyebrow:"ESTUDIO DIGITAL • CREATIVIDAD Y TECNOLOGÍA",
    heroTitle:'Tu idea.<br><span class="accent">Nuestra creación.</span><br>Tu próximo nivel.',
    heroText:"Creamos experiencias digitales modernas para transformar proyectos en marcas que destacan.",
    heroCta:'Creemos juntos <span>↗</span>',heroSecondary:"Explorar servicios",
    heroFoot:"Diseño impactante. Tecnología inteligente. Ideas sin límites.",
    servicesKicker:"LO QUE HACEMOS",servicesTitle:'Grandes ideas.<br><span class="accent">Soluciones digitales.</span>',
    servicesIntro:"Desde la primera idea hasta el lanzamiento, ayudamos a tu marca a ganar forma y presencia digital.",
    service1Title:"Sitios profesionales",service1Text:"Sitios modernos, rápidos y adaptables para presentar tu marca y atraer clientes.",
    service2Title:"Aplicaciones",service2Text:"Experiencias prácticas para móvil y web, diseñadas para facilitar el día a día.",
    service3Title:"Diseño e identidad",service3Text:"Estilo consistente, piezas digitales e identidad para que tu marca sea reconocida.",
    service4Title:"Soluciones digitales",service4Text:"Ideas organizadas, prototipos y herramientas digitales a medida para tu proyecto.",
    serviceLink:"Quiero este servicio ↗",aboutKicker:"NUESTRA VISIÓN",
    aboutTitle:'No se trata solo de estar online.<br><span class="accent">Se trata de dejar huella.</span>',
    aboutText:"Elric Digital Studio une creatividad, tecnología y atención al detalle para crear experiencias digitales con personalidad. Cada proyecto comienza con una idea y evoluciona con propósito.",
    value1:"Creatividad con propósito",value2:"Diseño moderno y funcional",value3:"Enfoque en tu proyecto",
    contactKicker:"TU PRÓXIMO PROYECTO EMPIEZA AQUÍ",
    contactTitle:'¿Damos vida a tu<br><span class="accent">idea?</span>',
    contactText:"Cuéntanos qué tienes en mente. Hablemos sobre cómo transformar tu idea en realidad.",
    whatsappLabel:"HABLA DIRECTAMENTE",socialLabel:"Sigue al estudio",
    footerText:"Creando el futuro, una idea a la vez."
  }
};
let language = "pt";
const languageButton = document.getElementById("language-toggle");
languageButton.addEventListener("click", () => {
  language = language === "pt" ? "es" : "pt";
  document.documentElement.lang = language === "pt" ? "pt-BR" : "es";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
  languageButton.textContent = language === "pt" ? "ES / PT" : "PT / ES";
});
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.querySelectorAll(".service-link").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    const message = language === "pt"
      ? `Olá, Elric Digital Studio! Tenho interesse no serviço: ${service}. Podemos conversar?`
      : `¡Hola, Elric Digital Studio! Me interesa el servicio: ${service}. ¿Podemos hablar?`;
    link.href = `https://wa.me/5592984068640?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
