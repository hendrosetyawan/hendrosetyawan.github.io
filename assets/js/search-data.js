// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Pipelines, models, and the occasional dashboard.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Public code. Some of the work lives in private repositories — happy to walk through it on request.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "Full history. Download the one-page resume with the button above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-completed-x-gridagent-distilling-a-multi-agent-llm-system-into-a-local-1b-parameter-model-for-power-grid-analysis",
          title: 'Completed X-GridAgent, distilling a multi-agent LLM system into a local 1B-parameter model for...',
          description: "",
          section: "News",},{id: "news-started-the-m-s-data-science-capstone-autoscopy-ai-enabled-3d-microstructure-reconstruction-from-sparse-measurements-with-calibrated-uncertainty-carried-through-to-fatigue-crack-prediction",
          title: 'Started the M.S. Data Science capstone: AutoScopy, AI-enabled 3D microstructure reconstruction from sparse...',
          description: "",
          section: "News",},{id: "news-team-demeter-took-3rd-place-at-the-2026-agtech-hackathon-at-texas-a-amp-amp-m-hosted-with-bayer-breedscope-a-genomic-selection-pipeline-over-1-07m-field-plots",
          title: 'Team Demeter took 3rd place at the 2026 AgTech Hackathon at Texas A&amp;amp;amp;M,...',
          description: "",
          section: "News",},{id: "projects-breedscope",
          title: 'BreedScope',
          description: "A genomic-selection pipeline that ranks 15,968 untested maize lines under a cut plot budget. 3rd place, 2026 AgTech Hackathon.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_breedscope/";
            },},{id: "projects-autoscopy",
          title: 'AutoScopy',
          description: "AI-enabled 3D microstructure reconstruction from sparse measurements, with calibrated uncertainty carried through to fatigue crack prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_autoscopy/";
            },},{id: "projects-x-gridagent-distillm",
          title: 'X-GridAgent + DistiLLM',
          description: "Distilling a multi-agent LLM system for power-grid analysis into a model small enough to run inside the utility.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_xgridagent/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Wahyu_Hendro_Setyawan_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%65%6E%64%72%6F.%73%65%74%79%61%77%61%6E@%74%61%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hendrosetyawan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hendro-setyawan-tamu", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
