/*
ARQUIVO DE TRADUÇÕES E TEMAS
Este arquivo controla os idiomas e temas do site.
Ele contém:
1. Todas as traduções (português e inglês)
2. Funções para trocar idioma
3. Funções para trocar tema (claro/escuro)

COMO FUNCIONA:
1. Definimos um objeto com todas as traduções
2. Cada texto tem uma chave (ex: 'home_section.title')
3. Cada chave tem uma tradução para cada idioma
4. O JavaScript troca os textos baseado no idioma selecionado

DICAS PARA INICIANTES:
- translations: objeto com todas as traduções
- data-i18n: atributo no HTML que indica qual texto usar
- localStorage: salva preferências do usuário no navegador
*/

// Language and theme management
const translations = {
    en: {
        // Navigation
        "portfolio": "Data Mundi",
        "home": "Home",
        "skills": "Skills",
        "services": "Consultancy",
        "experience": "Experience",
        "education": "Education",
        "publications": "Publications",
        "projects": "Projects",
        "contact": "Contact",
        "about": "About",
        "language": "Language",
        "theme": "Theme",
        "our_services": "Consultancy",

        // Theme
        "theme": {
            "light": "Light Mode",
            "dark": "Dark Mode"
        },

        // Home section
        "home_section": {
            "greeting": "\n\n\n", //"Hi, I'm",
            "name": "Yuri Gelsleichter",
            "title": "Researcher in Soil and Geomatics",
            "professional_summary": "Accomplished researcher and educator specializing in Geomatics and coding, with a strong foundation in Digital Soil Mapping, Proximal Soil Sensing, and Data Visualization. Holds a Ph.D. in Science, Technology, and Innovation in Agriculture. Demonstrated proficiency in R programming and Javascript for Google Earth Engine, machine learning techniques, and data analytics. Experienced in international collaborations and committed to advancing computational reproducibility and Open Science principles. Currently, Co-chair of Communication working group for International Soil Judging Sep 2024",
            "email": "",
            "phone": "",
            "address": "Fácán sor, 2100 Gödöllő, Hungary",
            "nationality": "Nationality: Luxembourgish, Brazilian"
        },

        // Skills section
        "skills_section": {
            "title": "SKILLS",
            "programming": "Programming",
            "programming_skills": "R (advanced)\nJavaScript (intermediate)\nGit\nSQL\nSQLPython\nLaTeX",
            "hpc": "High Performance Computing (HPC)",
            "hpc_skills": "Google Earth Engine\nHPC Clusters\nCloud Computing\nParallel Processing",
            "gis": "GIS Software",
            "gis_skills": "GDAL\nR terra\nQGIS\nGRASS",
            "data_science": "Data Science",
            "data_science_skills": "Machine Learning\nData Visualization\nBig Data Processing\nPredictive Modeling"
            //"digital_skills": "Habilidades Digitais",
            //"digital_skills_list": "Git\nMarkdown\nLaTeX\nCloud Platforms\nData Management"
        },

        // Services section
        "services_section": {
            "title": "Consultancy",
            "research": {
                "title": "Research",
                "description": "Specialized in soil science research, focusing on spectroscopy, digital soil mapping, and innovative analytical methods. Offering expertise in experimental design, data collection, and scientific publication.",
                "button": "Read More"
            },
            "precision_agriculture": {
                "title": "Precision Agriculture, Mapping and GIS",
                "description": "Expert services in precision agriculture, utilizing advanced GIS tools and mapping techniques. Specializing in soil mapping, remote sensing analysis, and spatial data management for agricultural optimization.",
                "button": "Read More"
            },
            "data_analysis": {
                "title": "Data Analysis",
                "description": "Advanced data analysis services using machine learning and statistical methods. Expertise in Python, R, and specialized scientific software for processing and analyzing complex datasets.",
                "button": "Read More"
            }
        },

        // Experience section
        "experience_section": {
            "title": "EXPERIENCE",
            "current": {
                "title": "Research, post-doc",
                "company": "Hungarian University of Agriculture and Life Sciences (MATE)",
                "location": "GÖDÖLLŐ, Hungary",
                "period": "Feb 2021 - Current",
                "point1": "Researching soil classification, mapping, and spectral characterization.",
                "point2": "Teaching classes on R programming, soil amelioration, and protection.",
                "point3": "Engaged in international collaborations to advance Open Science principles."
            },
            "datascientist": {
                "title": "Data Scientist",
                "company": "Just.bi",
                "location": "SÃO PAULO, Brazil",
                "period": "Aug 2020 - Feb 2021",
                "point1": "Designed sampling data for analytical models.",
                "point2": "Implemented Machine Learning models for data analysis.",
                "point3": "Developed Recency, Frequency, Value (RFV) models to enhance customer insights."
            },
            "isric": {
                "title": "Research Guest",
                "company": "ISRIC, WAGENINGEN",
                "location": "NETHERLANDS",
                "period": "Jan 2019 - Aug 2019",
                "point1": "Developed land cover change scenarios for predicting carbon stock in Argentina.",
                "point2": "Mapped large areas using advanced GIS and remote sensing techniques.",
                "point3": "Collaborated with international teams on soil data projects."
            },
            "teaching": {
                "title": "Lecturing",
                "courses": [
                    "Digital Soil Mapping with R",
                    "Introduction to R Programming", 
                    "Data Analysis and Visualization in R Applied to Agronomy and Soil Sciences"
                ]
            },
            "volunteering": {
                "title": "Volunteering",
                "events": [
                    {
                        "event": "4th International Soil Judging Contest",
                        "location": "Stirling, Scotland",
                        "date": "Aug 2022",
                        "description": "Collaborated on the organization, including site preparation and profile development for participants."
                    },
                    // {
                    //     "event": "Wageningen Soil Conference",
                    //     "location": "Netherlands",
                    //     "date": "Aug 2019",
                    //     "description": "Coordinated tasks and managed team members to facilitate conference activities."
                    // },
                    {
                        "event": "3rd International Soil Judging Contest",
                        "location": "Seropédica, Rio de Janeiro, Brazil",
                        "date": "Aug 2018",
                        "description": "Assisted in organizing the event, including site setup and profile preparation for participants."
                    }
                ]
            }
        },

        // Education section
        "education_section": {
            "title": "EDUCATION",
            "phd": {
                "period": "Mar 2016 - Mar 2020",
                "degree": "Ph.D. in Science, Technology, and Innovation in Agriculture",
                "institution": "Federal Rural University of Rio De Janeiro (UFRRJ), Seropédica, Brazil",
                "points": [
                    "Specialized in soil classification, mapping, and spectral characterization.",
                    "Developed expertise in R programming, machine learning, and data analytics.",
                    "Engaged in research projects enhancing computational reproducibility."
                ]
            },
            "bsc": {
                "period": "Aug 2009 - Aug 2015",
                "degree": "B.Sc. in Environmental and Sanitary Engineering",
                "institution": "University of Southern Santa Catarina (UNISUL), Palhoça, Brazil",
                "points": [
                    "Acquired foundational knowledge in environmental engineering principles.",
                    "Participated in projects on environmental sustainability and sanitation.",
                    "Completed coursework emphasizing geomatics and coding applications."
                ]
            }
        },

        // Projects section
        "projects_section": {
            "title": "PROJECTS",
            "soils4africa": {
                "title": "SOILS 4 AFRICA",
                "period": "2024 - 2025",
                "link": "https://www.soils4africa.eu/",
                "description": "Soils4Africa aims to put in place an Open-data Soil Information System, to improve sustainable intensification of agriculture and boosting food security; by improving the quality and availability of African soil data.",
                "participation": "Active assistance in Portuguese-speaking countries. Gave training in Minimalist Reference Sites sampling collection. Protocol and field survey translation. Further assistance for field surveyors of Portuguese-speaking countries.",
                "tags": ["Africa Soil Information System", "Open-data"]
            },
            "osiris": {
                "title": "OSIRIS",
                "period": "2023 - 2027",
                "link": "https://osiris4r.eu/",
                "description": "Open Science to Increase Reproducibility In Science (OSIRIS) aims to facilitate this shift by systematically gathering knowledge on the underlying drivers, testing effective evidence-based solutions, identifying incentives for reproducibility by stakeholders, and embedding reproducibility in research design.",
                "participation": "Implemented and analyzed a survey to gather the current barriers and motivations for Computational Science Reproducibility; Collaborated in the development of a checklist for science reproducibility, also with the implementation of a Delphi Survey in LimeSurvey platform, where the results were applied within the project.",
                "tags": ["Reproducibility", "Open-data", "Open-code"]
            }
        },

        // Publications section
        "publications_section": {
            "title": "PUBLICATIONS",
            "recent": "Recent Publications",
            "view_all": "View all publications"
        },

        // About section
        "about_section": {
            "title": "About Me",
            "content": "I am passionate about using technology to understand and protect our soils. With expertise in Digital Soil Mapping and Data Science, I work to bridge the gap between traditional soil science and modern computational methods. My research focuses on developing innovative approaches to soil classification and mapping, particularly using machine learning and spectral analysis techniques."
        },

        // Contact section
        "contact_section": {
            "title": "CONTACT",
            "contact_me": "Get in Touch",
            "send": "Send"
        },
        "footer": {
            "copyright": "{CURRENT_YEAR} Yuri Gelsleichter. All rights reserved.",
            "description": "Data Scientist | Researcher | Geospatial Analyst"
        },
    },
    
    'pt-BR': {
        // Navegação
        "portfolio": "Data Mundi",
        "home": "Início",
        "skills": "Habilidades",
        "services": "Consultoria",
        "experience": "Experiência",
        "education": "Educação",
        "publications": "Publicações",
        "projects": "Projetos",
        "contact": "Contato",
        "about": "Sobre",
        "language": "Idioma",
        "theme": "Tema",
        "our_services": "Consultoria",

        // Tema
        "theme": {
            "light": "Modo Claro",
            "dark": "Modo Escuro"
        },

        // Seção Home
        "home_section": {
            "greeting": "\n\n\n", //"Olá, eu sou",
            "name": "Yuri Gelsleichter",
            "title": "Pesquisador em Solos e Geomática",
            "professional_summary": "Pesquisador e educador especializado em Geomática e programação, com sólida formação em Mapeamento Digital de Solos, Sensoriamento Proximal de Solos e Visualização de Dados. Doutor em Ciência, Tecnologia e Inovação em Agricultura. Demonstrada proficiência em programação R e Javascript para Google Earth Engine, técnicas de aprendizado de máquina e análise de dados. Experiência em colaborações internacionais e comprometido com o avanço da reprodutibilidade computacional e princípios da Ciência Aberta. Atualmente, coordenador conjunto de comunicação para o grupo de trabalho para o International Soil Judging",
            "email": "",
            "phone": "",
            "address": "Estreito, Florianópolis, Santa Catarina, Brasil",
            "nationality": "Nacionalidade: Luxemburguesa, Brasileira"
        },

        // Seção de Habilidades
        "skills_section": {
            "title": "HABILIDADES",
            "programming": "Programação",
            "programming_skills": "R (advanced)\nJavaScript (intermediate)\nGit\nSQL\nSQLPython\nLaTeX",
            "hpc": "High Performance Computing (HPC)",
            "hpc_skills": "Google Earth Engine\nHPC Clusters\nCloud Computing\nParallel Processing",
            "gis": "Software GIS",
            "gis_skills": "GDAL\nR terra\nQGIS\nGRASS",
            "data_science": "Ciência de Dados",
            "data_science_skills": "Machine Learning\nData Visualization\nBig Data Processing\nPredictive Modeling"
            //"digital_skills": "Habilidades Digitais",
            //"digital_skills_list": "Git\nMarkdown\nLaTeX\nCloud Platforms\nData Management"
        },

        // Seção de Serviços
        "services_section": {
            "title": "Consultoria",
            "research": {
                "title": "Pesquisa",
                "description": "Especializado em pesquisa em ciência do solo, com foco em espectroscopia, mapeamento digital de solos e métodos analíticos inovadores. Oferecendo expertise em desenho experimental, coleta de dados e publicação científica.",
                "button": "Leia Mais"
            },
            "precision_agriculture": {
                "title": "Agricultura de Precisão, Mapeamento e GIS",
                "description": "Serviços especializados em agricultura de precisão, utilizando ferramentas GIS avançadas e técnicas de mapeamento. Especialização em mapeamento de solos, análise de sensoriamento remoto e gerenciamento de dados espaciais para otimização agrícola.",
                "button": "Leia Mais"
            },
            "data_analysis": {
                "title": "Análise de Dados",
                "description": "Serviços avançados de análise de dados usando aprendizado de máquina e métodos estatísticos. Expertise em Python, R e software científico especializado para processamento e análise de conjuntos de dados complexos.",
                "button": "Leia Mais"
            }
        },

        // Seção de Experiência
        "experience_section": {
            "title": "EXPERIÊNCIA",
            "current": {
                "title": "Pesquisador, pós-doc",
                "company": "Universidade Húngara de Agricultura e Ciências da Vida (MATE)",
                "location": "GÖDÖLLŐ, Hungria",
                "period": "Fev 2021 - Atual",
                "point1": "Pesquisando classificação de solos, mapeamento e caracterização espectral.",
                "point2": "Ministrando aulas de programação R, melhoramento e proteção do solo.",
                "point3": "Engajado em colaborações internacionais para avançar os princípios da Ciência Aberta."
            },
            "datascientist": {
                "title": "Cientista de Dados",
                "company": "Just.bi",
                "location": "SÃO PAULO, Brasil",
                "period": "Ago 2020 - Fev 2021",
                "point1": "Projetou amostragem de dados para modelos analíticos.",
                "point2": "Implementou modelos de Aprendizado de Máquina para análise de dados.",
                "point3": "Desenvolveu modelos RFV (Recência, Frequência, Valor) para melhorar insights sobre clientes."
            },
            "isric": {
                "title": "Pesquisador Convidado",
                "company": "ISRIC, WAGENINGEN",
                "location": "NETHERLANDS",
                "period": "Jan 2019 - Ago 2019",
                "point1": "Desenvolveu cenários de mudança de uso do solo para prever estoque de carbono na Argentina.",
                "point2": "Mapeou grandes áreas usando técnicas avançadas de GIS e sensoriamento remoto.",
                "point3": "Colaborou com equipes internacionais em projetos de dados de solo."
            },
            "teaching": {
                "title": "Ensino",
                "courses": [
                    "Mapeamento Digital de Solos",
                    "Introdução à Programação em R", 
                    "Análise e Visualização de Dados em R Aplicados à Agronomia e Ciências do Solo"
                ]
            },
            "volunteering": {
                "title": "Voluntariado",
                "events": [
                    {
                        "event": "4º Concurso Internacional de Julgamento de Solos",
                        "location": "Stirling, Escócia",
                        "date": "Ago 2022",
                        "description": "Colaborou na organização, incluindo preparação do local e desenvolvimento de perfis para participantes."
                    },
                    // {
                    //     "event": "Conferência de Solos de Wageningen",
                    //     "location": "Holanda",
                    //     "date": "Ago 2019",
                    //     "description": "Coordenou tarefas e gerenciou membros da equipe para facilitar atividades da conferência."
                    // },
                    {
                        "event": "3º Concurso Internacional de Julgamento de Solos",
                        "location": "Seropédica, Rio de Janeiro, Brasil",
                        "date": "Ago 2018",
                        "description": "Auxiliou na organização do evento, incluindo montagem do local e preparação de perfis para participantes."
                    }
                ]
            }
        },

        // Seção de Educação
        "education_section": {
            "title": "FORMAÇÃO ACADÊMICA",
            "phd": {
                "period": "Mar 2016 - Mar 2020",
                "degree": "Doutorado em Ciência, Tecnologia e Inovação em Agricultura",
                "institution": "Universidade Federal Rural do Rio de Janeiro (UFRRJ), Seropédica, Brasil",
                "points": [
                    "Especializado em classificação, mapeamento e caracterização espectral de solos.",
                    "Desenvolveu expertise em programação R, aprendizado de máquina e análise de dados.",
                    "Envolvido em projetos de pesquisa que aprimoram a reprodutibilidade computacional."
                ]
            },
            "bsc": {
                "period": "Ago 2009 - Ago 2015",
                "degree": "Bacharelado em Engenharia Ambiental e Sanitária",
                "institution": "Universidade do Sul de Santa Catarina (UNISUL), Palhoça, Brasil",
                "points": [
                    "Adquiriu conhecimentos fundamentais em princípios de engenharia ambiental.",
                    "Participou de projetos sobre sustentabilidade ambiental e saneamento.",
                    "Concluiu disciplinas com ênfase em geomática e aplicações de programação."
                ]
            }
        },

        // Seção de Projetos
        "projects_section": {
            "title": "PROJETOS",
            "soils4africa": {
                "title": "SOLOS 4 AFRICA",
                "period": "2024 - 2025",
                "link": "https://www.soils4africa.eu/",
                "description": "O Soils4Africa visa estabelecer um Sistema de Informação de Solos de Dados Abertos para melhorar a intensificação sustentável da agricultura e impulsionar a segurança alimentar, mediante a melhoria da qualidade e disponibilidade de dados de solos africanos.",
                "participation": "Assistência ativa em países de língua portuguesa. Ministrou treinamento em coleta de amostras de Locais de Referência Minimalista. Tradução de protocolo e levantamento de campo. Assistência adicional para pesquisadores de campo de países de língua portuguesa.",
                "tags": ["Sistema de Informação de Solos da África", "Dados Abertos"]
            },
            "osiris": {
                "title": "OSIRIS",
                "period": "2023 - 2027",
                "link": "https://osiris4r.eu/",
                "description": "Ciência Aberta para Aumentar a Reprodutibilidade na Ciência (OSIRIS) visa facilitar essa mudança, reunindo sistematicamente conhecimento sobre os fatores subjacentes, testando soluções baseadas em evidências, identificando incentivos para a reprodutibilidade por partes interessadas e incorporando a reprodutibilidade no design de pesquisa.",
                "participation": "Implementou e analisou uma pesquisa para identificar as barreiras e motivações atuais para a Reprodutibilidade da Ciência Computacional; Colaborou no desenvolvimento de uma lista de verificação para reprodutibilidade científica, incluindo a implementação de uma Pesquisa Delphi na plataforma LimeSurvey, onde os resultados foram aplicados dentro do projeto.",
                "tags": ["Reprodutibilidade", "Dados Abertos", "Código Aberto"]
            }
        },

        // Seção de Publicações
        "publications_section": {
            "title": "PUBLICAÇÕES",
            "recent": "Publicações Recentes",
            "view_all": "Ver todas as publicações"
        },

        // Seção Sobre
        "about_section": {
            "title": "Sobre Mim",
            "content": "Sou apaixonado por usar tecnologia para entender e proteger nossos solos. Com experiência em Mapeamento Digital de Solos e Ciência de Dados, trabalho para conectar a ciência do solo tradicional com métodos computacionais modernos. Minha pesquisa concentra-se no desenvolvimento de abordagens inovadoras para classificação e mapeamento de solos, particularmente usando técnicas de aprendizado de máquina e análise espectral."
        },

        // Seção de Contato
        "contact_section": {
            "title": "CONTATO",
            "contact_me": "Contato",
            "send": "Enviar"
        },
        "footer": {
            "copyright": "{CURRENT_YEAR} Yuri Gelsleichter. Todos os direitos reservados.",
            "description": "Cientista de Dados | Pesquisador | Analista Geoespacial"
        },
    }
};

// Get user's preferred language from browser
function getPreferredLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) return savedLanguage;

    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'en';
}

// Get user's preferred theme from system
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Initialize language and theme
let currentLanguage = getPreferredLanguage();
let currentTheme = getPreferredTheme();

// Function to update the language display
function updateLanguageDisplay() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const span = langToggle.querySelector('span');
        if (span) {
            span.textContent = currentLanguage === 'en' ? 'EN' : 'PT';
        }
    }
}

// Function to update theme display
function updateThemeDisplay() {
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
        themeIcon.className = currentTheme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    }
    document.body.className = currentTheme + '-theme';
}

// Function to set the language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageDisplay();
    translatePage();
}

// Function to set the theme
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    updateThemeDisplay();
}

// Function to translate the page
function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[currentLanguage];
        
        // Navigate through nested keys
        for (const k of keys) {
            translation = translation[k];
            if (!translation) break;
        }
        
        if (translation) {
            if (key === 'footer.copyright') {
                translation = translation.replace('{CURRENT_YEAR}', new Date().getFullYear());
            }
            if (translation.includes('\n')) {
                const lines = translation.split('\n');
                element.innerHTML = lines.map(line => `<span>${line}</span>`).join('');
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme switcher
    const themeSwitcher = document.getElementById('theme-toggle');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Initialize language switcher
    const languageSwitcher = document.getElementById('lang-toggle');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'pt-BR' : 'en';
            setLanguage(newLang);
        });
    }
    
    // Initial setup
    updateLanguageDisplay();
    updateThemeDisplay();
    translatePage();
});
