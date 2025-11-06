const defaultConfig = {
  background_color: "#f8f9fa",
  surface_color: "#ffffff",
  text_color: "#2c3e50",
  primary_action_color: "#3498db",
  secondary_action_color: "#95a5a6",
  font_family: "Inter",
  font_size: 16,
  hero_title: "Seu Nome",
  hero_subtitle: "Designer & Desenvolvedor Criativo",
  about_title: "Sobre Mim",
  about_text: "Olá! Sou um profissional apaixonado por criar experiências incríveis. Com anos de experiência em design e desenvolvimento, trabalho para transformar ideias em realidade. Minha jornada começou com curiosidade e evoluiu para uma carreira dedicada à inovação e criatividade.",
  gallery_title: "Minha Galeria",
  contact_title: "Entre em Contato",
  contact_email: "seu@email.com",
  contact_phone: "+55 (11) 99999-9999"
};

async function onConfigChange(config) {
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;
  const fontFamily = config.font_family || defaultConfig.font_family;
  const baseFontSize = config.font_size || defaultConfig.font_size;

  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;
  document.body.style.fontFamily = `${fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`;
  document.body.style.fontSize = `${baseFontSize}px`;

  const hero = document.querySelector('.hero');
  hero.style.backgroundColor = primaryColor;
  hero.style.color = surfaceColor;

  const heroImage = document.getElementById('heroImage');
  heroImage.style.backgroundColor = surfaceColor;
  heroImage.style.color = primaryColor;

  const navLogo = document.querySelector('.nav-logo');
  navLogo.style.color = textColor;

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.style.color = textColor;
  });

  const ctaButton = document.getElementById('ctaButton');
  ctaButton.style.backgroundColor = secondaryColor;
  ctaButton.style.color = surfaceColor;

  const aboutImage = document.querySelector('.about-image');
  aboutImage.style.backgroundColor = surfaceColor;
  aboutImage.style.color = primaryColor;

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.style.backgroundColor = surfaceColor;
    item.style.color = primaryColor;
  });

  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach(item => {
    item.style.backgroundColor = surfaceColor;
    item.style.color = textColor;
  });

  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.style.fontSize = `${baseFontSize * 2.5}px`;
    title.style.color = textColor;
  });

  document.getElementById('heroTitle').textContent = config.hero_title || defaultConfig.hero_title;
  document.getElementById('heroTitle').style.fontSize = `${baseFontSize * 3.5}px`;
  
  document.getElementById('heroSubtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById('heroSubtitle').style.fontSize = `${baseFontSize * 1.5}px`;
  
  document.getElementById('aboutTitle').textContent = config.about_title || defaultConfig.about_title;
  document.getElementById('aboutText').textContent = config.about_text || defaultConfig.about_text;
  document.getElementById('aboutText').style.fontSize = `${baseFontSize * 1.1}px`;
  
  document.getElementById('galleryTitle').textContent = config.gallery_title || defaultConfig.gallery_title;
  document.getElementById('contactTitle').textContent = config.contact_title || defaultConfig.contact_title;
  document.getElementById('contactEmail').textContent = config.contact_email || defaultConfig.contact_email;
  document.getElementById('contactPhone').textContent = config.contact_phone || defaultConfig.contact_phone;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          window.elementSdk.setConfig({ primary_action_color: value });
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          window.elementSdk.setConfig({ secondary_action_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["hero_title", config.hero_title || defaultConfig.hero_title],
    ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
    ["about_title", config.about_title || defaultConfig.about_title],
    ["about_text", config.about_text || defaultConfig.about_text],
    ["gallery_title", config.gallery_title || defaultConfig.gallery_title],
    ["contact_title", config.contact_title || defaultConfig.contact_title],
    ["contact_email", config.contact_email || defaultConfig.contact_email],
    ["contact_phone", config.contact_phone || defaultConfig.contact_phone]
  ]);
}

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}
