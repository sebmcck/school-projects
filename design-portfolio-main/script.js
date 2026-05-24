const projects = {
  praxis1: {
    eyebrow: "Praxis I",
    title: "The BikePack Buddy",
    subtitle: "Foundations of stakeholder-centred engineering design",
    summary: "5 CTMF sections with placeholder text and image areas.",
    projectOverview:
      'Toronto’s "Tangerine" bike-share system is a fast-growing part of the city’s transit, yet it is far from perfect. Our team identified a “splartz”: the existing front rack on these bikes is often insufficient for stabilising delicate or heavy items during a standard urban commute. The challenge was to design a secondary, removable storage solution that could integrate seamlessly with the existing Tangerine bike geometry without requiring permanent modifications to the fleet. <br> The development of the Bikepack Buddy was a wonderful exercise where we were able to pull from various CTMFs we learned in Praxis. We began by framing the needs of the Toronto commuter, prioritising stability and ease of attachment. During the Divergence phase, we generated over 50 concepts, ranging from a magnetic saddle to biomimetic suction mounts inspired by octopi. To filter these ideas, we utilised Proxy testing, with gyroscopic sensors on bike frames to understand the vibrational loads our device would need to withstand. <br> Our convergence process was driven by a series of Pugh charts and a measurement matrix, where we used the standard front basket as a reference. Through this analytical process, we evaluated our designs based on mass, number of parts, and most importantly, acceleration. <br> The final design emerged as an optimised Front Basket configuration that outperformed traditional models in securing cargo during high-acceleration maneuvers. By focusing on the specific Need, Goals, and Objectives of the city commuter, we produced a design that balanced the technical requirements of load-bearing with the user-centric requirement of rapid, non-destructive attachment.',
    thumbnail: "assets/praxis1/thumb.png",
    ctmfs: [
      {
        label: "CTMF 1: Diverging",
        heading: "CTMF 1: Diverging",
        body:
          `Diverging is the phase within the design process dedicated to the intentional expansion of the solution space. Rather than settling on the first viable idea, diverging mandates the generation of a high volume and wide variety of potential solutions. The goal is to move past obvious or fixed ideas to uncover innovative possibilities by suspending judgment and leveraging structured creativity tools. In the Frame-Diverge-Converge-Represent (FDCR) framework, diverging ensures that the subsequent Converge phase has a rich, diverse pool of high-quality data to draw from.

In our development of the Bikepack Buddy, a portable storage solution for cyclists, our team moved into the diverging phase once our need, goals, and objectives were framed. We aimed for a target of over 50 unique concepts. Using a morph chart to decompose the project into functional sub-problems, brainwriting to silently iterate on each other’s sketches and revent groupthink, biomimicry to mimic the suction-cup mechanics of octopi, and SCAMPER to confirm final ideas, we generated a healthy design space of ideas which were not all immediately intuitive. [BOTH HERE SIDE BY SIDE]

However, a critique of this process is quantity over quality. Generating 50 ideas is time-consuming, and toward the end, some designs strongly resembled each other. In future practice, I would implement a brief convergence halfway through to iltering for feasibility before a second burst of divergence. Despite this, diverging remains a non-negotiable step in my practice.`,

        imagePlaceholders: [
          {
            src: "assets/praxis1/diverging1.png",
            alt: "BikePack Buddy concept sheet showing a hinged suction-cup concept",
            caption: "Figure 1. SCAMPER as used during divergence."
          },
          {
            src: "assets/praxis1/diverging2.png",
            alt: "BikePack Buddy concept sheet showing a magnet and natural-fit concept",
            caption: " "
          }
        ]
      },
      {
        label: "CTMF 2: Morph Chart",
        heading: "CTMF 2: Morph Chart",
        body:
          `A Morph Chart is a systematic design tool used to decompose a complex problem into its primary functional requirements. By breaking a project down into specific parameters, we can list multiple sub-solutions for each. The matrix then allows for the exploration of new design combinations by "path-finding" through these sub-solutions.

As discussed in the Divergence CTMF, we utilized a Morph Chart to organize the output of our initial brainstorming sessions. We identified four critical functional requirements: Bag to Device Attachment, Device to Bike Attachment, Attachment Location, and Method of Attachment. For example, under Method of Attachment, we listed options ranging from adhesives to magnetic mounts. By using the chart, we came up with one of our 5 main candidate designs, as seen in Figure 1. We utilised straps for the Bag to Device connection, magnets for Device to Bike Attachment, above the pedals for Attachment Location, and a hook for Method of attachment. [HERE]

The Morph Chart is an invaluable tool for organization, although it has some limitations. Its greatest strength is its nature as a first iteration. It forced us to overcome the initial friction of brainstorming by breaking the possibilities into smaller sub-solutions.

However, a significant critique of the Morph Chart is the risk of creating Frankenstein designs. Just because a sub-solution for "Attachment Location" and a sub-solution for "Method of attachment" exist in the same matrix does not mean they are physically or logically compatible. We wasted time on paths that were possible in the chart but physically impossible to manufacture as a single unit. In future practice, I would add something like a "Compatibility Matrix" alongside the Morph Chart to quickly filter out combinations that violate physical constraints.`,
        imagePlaceholders: [
          {
            src: "assets/praxis1/morphchart.png",
            alt: "Morph chart for the BikePack Buddy project",
            caption: "Figure 1. Morph chart used to generate BikePack Buddy concept combinations."
          }
        ]
      },
      {
        label: "CTMF 3: Proxy testing",
        heading: "CTMF 3: Proxy testing",
        body:
          `Proxy testing is a tactical design approach where simplified are conducted to isolate and validate specific performance variables before a full-scale prototype is built. It is used in scenarios when testing the final product in its intended environment is either too costly, dangerous, or simply premature. By identifying a "proxy", designers can gather high-quality, quantitative data on specific stressors.

In the early stages of the Bikepack Buddy project, we lacked a physical prototype of the storage unit, yet we needed to understand the dynamic loads the attachment mechanism would face. To solve this, we employed Proxy Testing by mounting a gyroscope and accelerometer directly to various points on a bicycle frame. By riding the bike over rough terrain, we used the gyroscope as a proxy for the bag itself to measure the angular velocity and forces acting on the attachment points. [BOTH HERE STACKED VERTICALLY]

Rather than guessing the impact of a pothole or a sharp turn, the proxy test provided us with a range of degrees and accelerations the backpack itself and our device would endure. This data was then used to refine our requirements and evaluation criteria, specifically setting a quantified target for the force required for our final design to remain stable during cycling.

The primary strength of Proxy Testing is its efficiency and timeliness. It allowed us to fail and iterate on the attachment logic before we had even 3D-printed a single part. Without this data, we likely could have over-engineered the weight of the device, leading to a bulky and inefficient product. In the future, I will always look for ways I can simplify my tests before waiting implementing them on a final design.`,
        imagePlaceholders: [
          {
            src: "assets/praxis1/proxytesting1.png",
            alt: "Angular velocity graph from BikePack Buddy proxy testing",
            caption: "Figure 1. Angular velocity results gathered during proxy testing."
          },
          {
            src: "assets/praxis1/proxytesting2.png",
            alt: "Acceleration graph from BikePack Buddy proxy testing",
            caption: "Figure 2. Acceleration results gathered during proxy testing."
          }
        ]
      },
      {
        label: "CTMF 4: Converging",
        heading: "CTMF 4: Converging",
        body:
          `Converging is the systematic process of narrowing the design space from a wide array of potential concepts to a single, optimised solution. While diverging is about expansion and possibility, converging is about reduction and feasibility. This phase utilises logical frameworks, such as Pairwise Comparison, Attribute Listing, and Pugh Charts, to evaluate designs against the requirements and evaluation criteria.

Once we moved into the convergence of our 50 initial concepts, we utilised a measurement matrix to weigh our objectives, followed by four Pugh charts to compare our top candidates against each design as a reference.

Our analysis showed that the Front Basket was not only simpler, but it also outperformed our other designs in metrics of Storage Size, Angular Speed, and Acceleration. Being able to see first-hand the proof of the numbers was provoking in a way. I recall there being a favourite among the team due to aesthetics; however, its performance was not able to hide behind the science.

The primary value of the Convergence CTMF is its ability to enforce objectivity. It is necessary for the purpose of deciding upon a final design, and sometimes quite fun. In the future, though, I would like to employ it more often in between divergence processes, as stated previously.`,
        imagePlaceholders: [
          {
            src: "assets/praxis2/converging.png",
            alt: "Converging chart comparing BikePack Buddy concepts against a reference design",
            caption: "Figure 1. Measurement matrix used during convergence of BikePack Buddy concepts.",
            maxWidth: "60%",
            center: true
          }
        ]
      },
      {
        label: "CTMF 5: Pugh Chart",
        heading: "CTMF 5: Pugh Chart",
        body:
          `A Pugh chart is a convergence technique used to evaluate multiple design alternatives against a set of established criteria relative to a baseline. Unlike a measurement matrix, which is full of numbers and sometimes difficult to quickly assimilate, the Pugh chart focuses on whether a design is better (+), worse (-), or roughly equal (=) to the baseline. The purpose of this tool is to facilitate a structured, iterative dialogue within a design team, allowing a better understanding of each design individually.

In the selection process for the Bikepack Buddy, we utilised the Pugh chart to move from our 50 initial concepts down to a final candidate. We selected each design as our baseline so that we can get a broader idea of every one of them. Every design we generated was evaluated directly against each other. For the purpose of this design portfolio, I will only include one; however, the rest can be found in the Design Report located in the references. [HERE]

For instance, while the Back Axle design scored a (+) for Mass, it scored a (-) in all of the other criteria. By visualising these trade-offs in a grid, we were able to quickly see which design was specifically better than the other designs we had. This forced us to be honest about the trade-offs we were making; we accepted a higher mass in exchange for significantly improved performance in the Proxy Testing metrics we had earlier established.

The Pugh chart is an exceptional tool for facilitating team consensus. Because it uses relative symbols rather than arbitrary numbers (like 1–10), it reduces the friction of subjective scoring. However, lots of information is lost when using a Pugh chart one must be aware of. For example, when a design has a (+) or a (-), one must remember that this is not quantified. The improvement could be minimal, while the drawback is massive. For this reason, it’s always important to cross-reference with a measurement matrix.`,
        imagePlaceholders: [
          {
            src: "assets/praxis2/pughchart.png",
            alt: "Pugh chart for BikePack Buddy design comparison",
            caption: "Figure 1. Pugh chart summarising the relative performance of final BikePack Buddy concepts.",
            maxWidth: "60%"
          }
        ]
      }
    ],
    teammates: [
      "I would like to acknowledge the great efforts of my wonderful teammates Jan, who reliably built prototypes for us to test on, Hugo, who made stunning sketches and diagrams of our work, and Ammar, who did stellar research and calculations to verify our prototypes. Without their hard work and patience, the BikePack Buddy would still be just an idea!"
    ],
    references: [
      "Praxis I project brief and team deliverables. Replace this with the formal course or assignment citation.",
      "Stakeholder interview notes, observation summaries, and synthesis artifacts used during framing and discovery.",
      "Concept screening matrix, prototype documentation, and any supporting technical calculations."
    ]
  },
  praxis2: {
    eyebrow: "Praxis II",
    title: "COMETS",
    subtitle: "Improving the lived experience of a community",
    summary: "4 CTMF sections with placeholder text and image areas.",
    projectOverview:
      'The Royal Astronomical Society of Canada (RASC) faces a persistent barrier to accessibility: the high-dexterity requirement of operating precision telescopes. Amateur astronomers often struggle to manipulate the small eyepiece screws, particularly in the cold, low-light environments typical of observation sessions where gloves are a necessity. Our team was tasked with developing the COMETS (Component for Optimised Mechanical Engagement in Telescope Screws) to reduce the burden required to swap lenses and adjust focus. <br> We developed four distinct physical prototypes, two motorised solutions using an Arduino and a Raspberry Pi, a suction cup solution, and a cone-shaped solution. Once having these in hand, we met with the community for a validation meeting to see which ones would be the most feasible to use in the field. After receiving wonderful feedback and useful testing data, we converged on the cone-shaped solution for its simple design and ease of use. <br> The final COMETS device is an ergonomic knob designed with a specialised "slip-on" interior profile. The exterior features a high-friction, ridged texture that allows for maximum torque with minimal grip strength, even while wearing thick winter gloves. By prioritising the environmental constraints and the specific dexterity needs of our primary stakeholders, we created a tool that makes the wonder of the night sky more accessible to everyone, regardless of physical ability or weather conditions.',
    thumbnail: "assets/praxis2/showcase.png",
    ctmfs: [
      {
        label: "CTMF 1: Stakeholder",
        heading: "CTMF 1: Stakeholder",
        body:
          `Stakeholders are individuals, groups, or organisations that have a vested interest in the outcome of a design project or are impacted by its implementation. In engineering design, identifying stakeholders is a critical step in the Framing phase, as it ensures that design requirements are responsive to actual needs rather than designer assumptions. Stakeholders are usually categorised by their level of involvement: Primary stakeholders are the direct users of the product; Secondary stakeholders are those indirectly affected; and Tertiary stakeholders are those impacted by broader systemic, environmental, or social effects.

In our development of the COMETS (Cold-Optimised Multi-Eyepiece Turner for Screws), we designed a device to assist hobbyists with reduced dexterity in operating small, precision telescope screws in the cold. Our Primary Stakeholders were the members of the Royal Astronomical Society of Canada (RASC). This group often does winter stargazing, as the longer nights provide for more opportunities when tracking stars and planets. However, in the cold, dexterity in the hand is compromised either through restricted blood flow or gloves, therefore leading to a need for a device to reduce the amount of dexterity required to operate the telescope. [HERE]

Beyond the RASC, we identified Secondary Stakeholders such as telescope manufacturers, who would need to ensure our device did not interfere with existing warranties. Finally, our Tertiary Stakeholders included the broader scientific community, as our device aimed to improve the accessibility of amateur astronomy for a more diverse population.

Identifying key stakeholders is primordial in designing an effective solution. Without identifying the RASC as our primary focus, we could have over-engineered a motorised solution that was too expensive for the average hobbyist. Understanding their specific context of cold-weather observation was the first step for our most successful design features.`,
        imagePlaceholders: [
          {
            src: "assets/praxis2/stakeholders.png",
            alt: "Hands testing an early COMETS prototype on a screw",
            caption: "Figure 1. A group photo of the Royal Astronomical Society of Canada."
          }
        ]
      },
      {
        label: "CTMF 2: Model",
        heading: "CTMF 2: Model",
        body:
          `A model is a representation of an object used to communicate or predict its behaviour. One of the purposes of modelling is to validate design assumptions and detect potential failures in a low-stakes digital or theoretical environment before committing to physical manufacturing. Within the FDCR framework, models serve as the primary vehicle for the Representation phase, allowing stakeholders to visualise the versions between the initial prototype and the final product.

In the COMETS project, we utilised modelling to solve the spatial constraints of attaching a device to a telescope’s eyepiece screws. We developed high-fidelity CAD models to represent the interaction between our device and the screws. Modelling was particularly critical for our electric circuit board, responsible for the mechanised prototype. We were able to develop a digital version of the circuit before investing time in making the actual circuit. Additionally, these modelling efforts directly informed our final physical prototype, reducing the number of 3D prints required to reach a functional design. [HERE]

The most significant benefit of modelling in my practice is its ability to identify interference. In the COMETS project, our initial CAD model revealed that the sharp edges of the device were not optimal for use in someone’s hand. In the future, I will always take the time to accurately model my environment, as well as the parts of my solution, as it will almost certainly save time in the long run.`,
        imagePlaceholders: [
          {
            src: "assets/praxis2/model.png",
            alt: "CAD model of the COMETS concept beside a telescope screw",
            caption: "Figure 1. CAD model used to study the cone geometry and screw interaction.",
            maxWidth: "70%"
          }
        ]
      },
      {
        label: "CTMF 3: Prototype",
        heading: "CTMF 3: Prototype",
        body:
          `A prototype is a preliminary, physical manifestation of a design solution used to explore, demonstrate, and test the feasibility of a concept. Unlike a model, which might remain digital or theoretical, a prototype is designed to interact with the physical world. Prototypes exist on a spectrum of fidelity: low-fidelity prototypes (made of simple materials) are used to quickly test ergonomics and scale, while high-fidelity prototypes (which are closer to the final design) use representative materials and electronics to verify functional performance.

In our Praxis II project, our team developed four initial prototypes to better understand the opportunity and to refine the user experience for our telescope screwing device. Three of the prototypes each focused on a different mechanical engagement method, whereas the fourth one was an iteration. Our first prototype was a low-fidelity suction cup used to test if a suction-based grip could provide enough torque to turn a screw.

The next prototype was a cone and clamp idea, where the user would clamp the device onto the screw and then turn the cone shape, allowing for the user to choose from a range of diameters, offering a tradeoff between control and speed of rotation. The final prototypes were electric circuit boards, with the idea of automating the screwing and unscrewing process with an electric motor. One of the devices had a potentiometer to control the speed of rotation, whereas another had a simplified interface with only an on/off switch. [FIRST ONE HERE]

Being able to see our prototypes in action allowed us to better measure each of their performance to each other through further testing. Additionally, we were able to quickly verify our ideas with the RASC to ensure that we were on the right track. After this testing and verification, we decided to proceed with the cone and clamp, with which we iterated upon to finally end up with COMETS. [SECOND ONE HERE]

The primary strength of prototyping is its ability to uncover unknown unknowns. In our cone and clamp prototype, we realised that we were using a screw to clamp the device onto a screw, which simply did not make sense. This gave us the insight we needed to create the much more functional COMETS. In the future, I will always remember the power of creating prototypes throughout the design process, as they are invaluable vehicles of information.`,
        imagePlaceholders: [
          {
            src: "assets/praxis2/prototype1.png",
            alt: "Hands testing an early COMETS prototype on a screw",
            caption: "Figure 1. Early physical prototype being tested on a representative screw.",
            maxWidth: "52.5%"
          },
          {
            src: "assets/praxis2/prototype2.png",
            alt: "Rendered isometric view of a COMETS prototype",
            caption: "Figure 2. Prototype rendering used to communicate form and grip geometry.",
            maxWidth: "50%"
          }
        ]
      },
      {
        label: "CTMF 4: Psychological Safety",
        heading: "CTMF 4: Psychological Safety",
        body:
          `Psychological safety is a shared belief held by members of a team that the group is a safe environment for communicative and emotional risk-taking. In a psychologically safe climate, team members feel comfortable expressing their ideas, asking "naive" questions, and admitting mistakes without fear of being shamed or penalised. In the context of the design process, this is a foundational requirement throughout it all. For example, in the Divergence strand, if a team member feels judged, they will self-censor, effectively shrinking the design space and limiting the potential for innovation.

Before the development of the COMETS project, when our team was initially working on our own RFP, we recognised the need for efficient teamwork early on. To foster a sense of psychological safety, we intentionally moved beyond a purely transactional working relationship. We prioritised social comfort by eating lunch together and discussing our personal interests and career aspirations outside of the classroom. [HERE]

This personal connection created a baseline of trust that translated directly into our design meetings. We established a protocol of weekly check-ins where each member could voice concerns not just about the technical status of the project, but about the team's internal health. This meant that when we reached the "Convergence" phase, where ideas must be critically evaluated, we could disagree with one another’s designs with respect and candour. Because we felt safe, a critique of a specific prototype was never perceived as a personal attack, allowing us to arrive at the most optimal version of COMETS without internal friction.

The strength of Psychological Safety is its role in collaboration. It was only because of this safe environment that a team member felt comfortable suggesting the suction cup idea, which initially seemed unconventional. However, a critique of prioritising psychological safety is the potential for losing sight of the needs of the project. For example, if a team is too focused on being nice, they may avoid the necessary conflict required for rigorous convergence. In future practice, I would pair psychological safety with something like a Devil’s Advocate, explicitly assigning someone to challenge ideas, to ensure that our comfort with each other doesn't lead to a lack of critical scrutiny.`,
        imagePlaceholders: [
          {
            src: "assets/praxis2/psychologicalsafety1.png",
            alt: "Praxis II team photo",
            caption: "Figure 1. Team photo taken at the beginning of the semester."
          }
        ]
      }
    ],
    teammates: [
      "Additionally for this semeseter, I would like to thank Anna for her great work on accurately identifying stakeholders, drafting of the poster and one-pager, and her creative ideas during divergence, Cindy for her diligence in her writing and her work with the circuitry, and Alex for his bulletproof research. Their skills and unwavering drive pushed me to work harder alongside them to make COMETS a viable solution."
    ],
    references: [
      "Praxis II project brief, progress reviews, and final deliverables. Replace this with the formal project citation.",
      "Benchmarking notes, stakeholder feedback, and precedent materials used during research and concept comparison.",
      "Prototype records, test results, and supporting calculations or CAD exports used during refinement."
    ]
  }
};

const referenceCards = [
  {
    citations: [
      "[1] S. McCown-Kobinger, J. Kazimierczak, H. Franchi, and A. Hasham, “The BikePack Buddy: A Solution to Back Pain from Wearing Backpacks While Riding on Toronto Bike Share Bicycles,” Nov. 2025.",
      "[5] “Locations.” Describes city sky parties and CAO under dark skies near the Blue Mountains., RASC Toronto Centre, Accessed: Feb. 13, 2026. [Online]. Available: https://rascto.ca/about-us/locations.",
      "[6] “Star parties and events.” Defines star parties as overnight excursions to dark-sky sites and notes year-round practice., Royal Astronomical Society of Canada, Accessed: Feb. 13, 2026. [Online]. Available: https://www.rasc.ca/star-parties-and-events.",
      "[7] “Sunrise and sunset times in toronto, ontario, canada (december 2026).” Used for December 21 daylength (8:55:45), Time and Date, Accessed: Feb. 13, 2026. [Online]. Available: https://www.timeanddate.com/sun/canada/toronto?month=12.",
      "[8] “Sunrise and sunset times in toronto, ontario, canada (june 2026).” Used for June 21 daylength (15:26:33), Time and Date, Accessed: Feb. 13, 2026. [Online]. Available: https://www.timeanddate.com/sun/canada/toronto?month=6.",
      "[9] “Winter access at the cao.” Winter access scheduling; mentions exceptionally clear skies and winter targets., RASC Toronto Centre, Accessed: Feb. 13, 2026. [Online]. Available: https://rascto.ca/news/winter-access-cao.",
      "[10] “Canadian climate normals 1991-2020: Toronto (city).” Daily minimum temperatures for Toronto City (e.g., Jan -6.7 C, Feb -6.0 C), Environment and Climate Change Canada, Accessed: Feb. 13, 2026. [Online]. Available: https://climate.weather.gc.ca/climate_normals/results_1991_2020_e.html?climate_id=6153193&dispBack=0&lstProvince=&searchType=stnProv&stnID=207000000&txtCentralLatMin=0&txtCentralLatSec=0&txtCentralLongMin=0&txtCentralLongSec=0&wbdisable=true.",
      "[11] C. L. Chapman et al., “Occupational cold stress and rewarming alters skin temperature thresholds for manual dexterity decrements: An exploratory study,” Physiological Reports, vol. 13, no. 9, e70342, 2025. DOI: 10.14814/phy2.70342. Accessed: Feb. 13, 2026. [Online]. Available: https://pmc.ncbi.nlm.nih.gov/articles/PMC12059468/.",
      "[12] “Raynaud’s phenomenon,” Canadian Centre for Occupational Health and Safety (CCOHS), Accessed: Feb. 13, 2026. [Online]. Available: https://www.ccohs.ca/oshanswers/diseases/raynaud.html."
    ]
  }
];

const projectDownloads = {
  praxis1: {
    pdfHref: "assets/bikepack.pdf",
    pdfDownloadName: "BikePackBuddy.pdf",
    pdfButtonLabel: "Download PDF"
  },
  praxis2: {
    pdfHref: "assets/coldweather.pdf",
    pdfDownloadName: "COMETS.pdf",
    pdfButtonLabel: "Download PDF"
  }
};

const sectionIds = ["hero", "position", "projects", "references"];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const projectCards = [...document.querySelectorAll(".project-card[data-project]")];
const pageTeammateCredits = document.getElementById("teammate-credit-groups");
const pageReferences = document.getElementById("reference-groups");
const modal = document.getElementById("project-modal");
const modalDialog = modal?.querySelector(".modal__dialog");
const modalCloseControls = modal ? [...modal.querySelectorAll("[data-close-modal]")] : [];

const modalFields = {
  eyebrow: document.getElementById("modal-eyebrow"),
  title: document.getElementById("modal-title"),
  subtitle: document.getElementById("modal-subtitle"),
  tabs: document.getElementById("modal-ctmf-tabs"),
  heading: document.getElementById("modal-ctmf-heading"),
  body: document.getElementById("modal-ctmf-body"),
  images: document.getElementById("modal-ctmf-images")
};

let rafScheduled = false;
let activeProjectId = null;
let lastFocusedElement = null;
let lockedScrollY = 0;

function populateProjectCards() {
  projectCards.forEach((card) => {
    const project = projects[card.dataset.project];
    const download = projectDownloads[card.dataset.project];
    if (!project) {
      return;
    }

    const titleEl = card.querySelector('[data-field="title"]');
    const subtitleEl = card.querySelector('[data-field="subtitle"]');
    const summaryEl = card.querySelector(".project-card__summary");
    const thumbnailEl = card.querySelector('[data-field="thumbnail"]');
    const thumbnailFrame = card.querySelector("[data-thumbnail-wrapper]");
    const downloadSlot = card.querySelector("[data-download-slot]");

    titleEl.textContent = project.title;
    subtitleEl.textContent = project.subtitle;
    if (summaryEl) {
      summaryEl.textContent = project.summary;
    }
    if (thumbnailEl && thumbnailFrame) {
      thumbnailEl.src = project.thumbnail;
      thumbnailEl.alt = `${project.title} thumbnail`;
      attachMediaFallback(thumbnailEl, thumbnailFrame, `${project.title} thumbnail`);
    }

    if (downloadSlot && download) {
      downloadSlot.innerHTML = "";

      const downloadLink = document.createElement("a");
      downloadLink.className = "button button--primary project-card__download-button";
      downloadLink.href = download.pdfHref;
      downloadLink.download = download.pdfDownloadName;
      downloadLink.textContent = download.pdfButtonLabel;

      downloadSlot.appendChild(downloadLink);
    }
  });
}

function renderProjectTabs({ tabsEl, panelHeading, panelBody, panelImages, items = [] }) {
  tabsEl.innerHTML = "";

  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "project-card__tab";
    button.textContent = item.label;
    button.setAttribute("aria-pressed", String(index === 0));

    button.addEventListener("click", () => {
      [...tabsEl.querySelectorAll(".project-card__tab")].forEach((tab, tabIndex) => {
        const isActive = tabIndex === index;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-pressed", String(isActive));
      });

      panelHeading.textContent = "";
      panelHeading.hidden = true;
      const unusedImages = renderParagraphContent(panelBody, item.body, item.imagePlaceholders);
      renderImagePlaceholders(panelImages, unusedImages);
    });

    if (index === 0) {
      button.classList.add("is-active");
      panelHeading.textContent = "";
      panelHeading.hidden = true;
      const unusedImages = renderParagraphContent(panelBody, item.body, item.imagePlaceholders);
      renderImagePlaceholders(panelImages, unusedImages);
    }

    tabsEl.appendChild(button);
  });
}

function renderImagePlaceholders(container, labels = []) {
  container.innerHTML = "";
  container.hidden = labels.length === 0;

  if (labels.length === 0) {
    return;
  }

  labels.forEach((label) => {
    if (typeof label === "string") {
      const box = document.createElement("div");
      box.className = "project-card__image-placeholder";
      box.textContent = label;
      container.appendChild(box);
      return;
    }

    const figure = document.createElement("figure");
    figure.className = "project-card__image-figure";
    if (label.center) {
      figure.classList.add("project-card__image-figure--centered");
    }
    if (label.maxWidth) {
      figure.style.setProperty("--inline-image-max-width", label.maxWidth);
      figure.style.setProperty("--modal-image-max-width", label.maxWidth);
    }

    const frame = document.createElement("div");
    frame.className = "media-frame project-card__image-frame";

    const image = document.createElement("img");
    image.className = "project-card__image";
    image.src = label.src;
    image.alt = label.alt || "";

    const fallback = document.createElement("span");
    fallback.className = "media-frame__fallback";
    fallback.textContent = label.alt || "Project image";

    frame.append(image, fallback);
    attachMediaFallback(image, frame, label.alt || "Project image");
    figure.appendChild(frame);

    if (label.caption) {
      const caption = document.createElement("figcaption");
      caption.textContent = label.caption;
      figure.appendChild(caption);
    }

    container.appendChild(figure);
  });
}

function createProjectFigure(label) {
  const figure = document.createElement("figure");
  figure.className = "project-card__image-figure";
  if (label.center) {
    figure.classList.add("project-card__image-figure--centered");
  }
  if (label.maxWidth) {
    figure.style.setProperty("--inline-image-max-width", label.maxWidth);
    figure.style.setProperty("--modal-image-max-width", label.maxWidth);
  }

  const frame = document.createElement("div");
  frame.className = "media-frame project-card__image-frame";

  const image = document.createElement("img");
  image.className = "project-card__image";
  image.src = label.src;
  image.alt = label.alt || "";

  const fallback = document.createElement("span");
  fallback.className = "media-frame__fallback";
  fallback.textContent = label.alt || "Project image";

  frame.append(image, fallback);
  attachMediaFallback(image, frame, label.alt || "Project image");
  figure.appendChild(frame);

  if (label.caption && label.caption.trim()) {
    const caption = document.createElement("figcaption");
    caption.textContent = label.caption;
    figure.appendChild(caption);
  }

  return figure;
}

function getMarkerConfig(markerText) {
  switch (markerText) {
    case "[HERE]":
      return { kind: "single", indexes: [null], layout: "single" };
    case "[BOTH HERE SIDE BY SIDE]":
      return { kind: "group", indexes: [null, null], layout: "side-by-side" };
    case "[BOTH HERE STACKED VERTICALLY]":
      return { kind: "group", indexes: [null, null], layout: "stacked" };
    case "[FIRST ONE HERE]":
      return { kind: "single", indexes: [0], layout: "single" };
    case "[SECOND ONE HERE]":
      return { kind: "single", indexes: [1], layout: "single" };
    default:
      return null;
  }
}

function consumeImageByIndex(images, state, explicitIndex) {
  if (explicitIndex !== null && explicitIndex !== undefined) {
    if (state.usedIndexes.has(explicitIndex) || !images[explicitIndex]) {
      return null;
    }

    state.usedIndexes.add(explicitIndex);
    return images[explicitIndex];
  }

  while (state.nextIndex < images.length && state.usedIndexes.has(state.nextIndex)) {
    state.nextIndex += 1;
  }

  if (!images[state.nextIndex]) {
    return null;
  }

  const image = images[state.nextIndex];
  state.usedIndexes.add(state.nextIndex);
  state.nextIndex += 1;
  return image;
}

function createInlineMediaBlock(images, layout) {
  const wrapper = document.createElement("div");
  wrapper.className = `project-card__inline-media project-card__inline-media--${layout}`;

  images.forEach((image) => {
    wrapper.appendChild(createProjectFigure(image));
  });

  return wrapper;
}

function attachMediaFallback(image, frame, label) {
  const fallback = frame.querySelector(".media-frame__fallback");
  if (fallback && label) {
    fallback.textContent = label;
  }

  image.onerror = () => {
    frame.classList.add("is-fallback");
    image.removeAttribute("src");
  };

  image.onload = () => {
    frame.classList.remove("is-fallback");
  };

  if (image.complete) {
    if (image.naturalWidth > 0) {
      frame.classList.remove("is-fallback");
    } else {
      frame.classList.add("is-fallback");
    }
  }
}

function renderDetailList(container, items = []) {
  container.innerHTML = "";

  items.filter(Boolean).forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    container.appendChild(item);
  });
}

function renderParagraphContent(container, text = "", images = []) {
  container.innerHTML = "";
  const markerPattern = /\[(?:HERE|BOTH HERE SIDE BY SIDE|BOTH HERE STACKED VERTICALLY|FIRST ONE HERE|SECOND ONE HERE)\]/g;
  const normalizedText = text.replace(/<br\s*\/?>/gi, "\n\n");
  const state = {
    nextIndex: 0,
    usedIndexes: new Set()
  };

  normalizedText
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .forEach((paragraph) => {
      let lastIndex = 0;
      let match;

      while ((match = markerPattern.exec(paragraph)) !== null) {
        const before = paragraph.slice(lastIndex, match.index).trim();
        if (before) {
          const element = document.createElement("p");
          element.textContent = before;
          container.appendChild(element);
        }

        const markerConfig = getMarkerConfig(match[0]);
        const markerImages = markerConfig
          ? markerConfig.indexes
              .map((index) => consumeImageByIndex(images, state, index))
              .filter(Boolean)
          : [];

        if (markerImages.length > 0) {
          container.appendChild(createInlineMediaBlock(markerImages, markerConfig.layout));
        }

        lastIndex = match.index + match[0].length;
      }

      const after = paragraph.slice(lastIndex).trim();
      if (after) {
        const element = document.createElement("p");
        element.textContent = after;
        container.appendChild(element);
      }

      markerPattern.lastIndex = 0;
    });

  return images.filter((_, index) => !state.usedIndexes.has(index));
}

function renderPageReferences() {
  if (!pageReferences) {
    return;
  }

  pageReferences.innerHTML = "";

  referenceCards.forEach((referenceCard) => {
    const article = document.createElement("article");
    article.className = "surface-card reference-group";

    if (Array.isArray(referenceCard.citations) && referenceCard.citations.length > 0) {
      const list = document.createElement("ol");
      list.className = "reference-list";

      referenceCard.citations
        .filter(Boolean)
        .forEach((item) => {
          const listItem = document.createElement("li");
          listItem.className = "reference-citation";
          populateCitationContent(listItem, item.replace(/^\[\d+\]\s*/, ""));
          list.appendChild(listItem);
        });

      article.appendChild(list);
    }

    pageReferences.appendChild(article);
  });
}

function populateCitationContent(container, text) {
  const urlPattern = /https?:\/\/\S+/g;
  let lastIndex = 0;
  let match;

  container.textContent = "";

  while ((match = urlPattern.exec(text)) !== null) {
    const rawUrl = match[0];
    const cleanUrl = rawUrl.replace(/[.,)]$/, "");
    const leadingText = text.slice(lastIndex, match.index);

    if (leadingText) {
      container.appendChild(document.createTextNode(leadingText));
    }

    const link = document.createElement("a");
    link.href = cleanUrl;
    link.textContent = cleanUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    container.appendChild(link);

    const trailingText = rawUrl.slice(cleanUrl.length);
    if (trailingText) {
      container.appendChild(document.createTextNode(trailingText));
    }

    lastIndex = match.index + rawUrl.length;
  }

  const remainder = text.slice(lastIndex);
  if (remainder) {
    container.appendChild(document.createTextNode(remainder));
  }
}

function renderPageTeammateCredits() {
  if (!pageTeammateCredits) {
    return;
  }

  pageTeammateCredits.innerHTML = "";

  Object.values(projects).forEach((project) => {
    if (!Array.isArray(project.teammates) || project.teammates.length === 0) {
      return;
    }

    const article = document.createElement("article");
    article.className = "surface-card reference-group";

    const heading = document.createElement("h3");
    heading.textContent = project.title;

    const copy = document.createElement("div");
    copy.className = "detail-copy";

    project.teammates
      .filter(Boolean)
      .forEach((paragraph) => {
        const element = document.createElement("p");
        element.textContent = paragraph;
        copy.appendChild(element);
      });

    article.append(heading, copy);
    pageTeammateCredits.appendChild(article);
  });
}

function renderProjectModal(project) {
  modalFields.eyebrow.textContent = project.eyebrow || "";
  modalFields.title.textContent = project.title;
  modalFields.subtitle.textContent = project.subtitle;

  const projectItems = [
    {
      label: "The Project",
      heading: "The Project",
      body: project.projectOverview || "",
      imagePlaceholders: []
    },
    ...(project.ctmfs || [])
  ];

  renderProjectTabs({
    tabsEl: modalFields.tabs,
    panelHeading: modalFields.heading,
    panelBody: modalFields.body,
    panelImages: modalFields.images,
    items: projectItems
  });
}

function openProjectModal(projectId) {
  const project = projects[projectId];
  if (!project || !modal) {
    return;
  }

  activeProjectId = projectId;
  lastFocusedElement = document.activeElement;
  renderProjectModal(project);

  lockedScrollY = window.scrollY;
  document.body.classList.add("modal-open");
  document.body.style.top = `-${lockedScrollY}px`;

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");

  requestAnimationFrame(() => {
    modal.classList.add("is-open");
    modal.querySelector(".modal__close")?.focus({ preventScroll: true });
  });
}

function closeProjectModal() {
  if (!modal || modal.hidden) {
    return;
  }

  const completeClose = () => {
    const scrollY = lockedScrollY;
    const rootStyle = document.documentElement.style;
    const previousScrollBehavior = rootStyle.scrollBehavior;

    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("is-open");
    rootStyle.scrollBehavior = "auto";
    document.body.classList.remove("modal-open");
    document.body.style.top = "";

    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
      lastFocusedElement?.focus?.({ preventScroll: true });
      activeProjectId = null;

      requestAnimationFrame(() => {
        rootStyle.scrollBehavior = previousScrollBehavior;
      });
    });
  };

  if (prefersReducedMotion.matches) {
    completeClose();
    return;
  }

  const handleTransitionEnd = (event) => {
    if (event.target !== modalDialog) {
      return;
    }

    modalDialog.removeEventListener("transitionend", handleTransitionEnd);
    completeClose();
  };

  modalDialog.addEventListener("transitionend", handleTransitionEnd);
  modal.classList.remove("is-open");
}

function trapModalFocus(event) {
  if (event.key !== "Tab" || !modal || modal.hidden) {
    return;
  }

  const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(
    (element) => !element.hidden && !element.closest("[hidden]")
  );

  if (focusable.length === 0) {
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function getScrollTarget(element) {
  const headerHeight = header?.offsetHeight || 0;
  return element.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
}

function handleAnchorClick(event) {
  const href = event.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) {
    return;
  }

  const target = document.querySelector(href);
  if (!target) {
    return;
  }

  event.preventDefault();

  window.scrollTo({
    top: getScrollTarget(target),
    behavior: prefersReducedMotion.matches ? "auto" : "smooth"
  });

  history.replaceState(null, "", href);
}

function updateActiveSection() {
  const headerOffset = (header?.offsetHeight || 0) + 120;
  let activeId = sectionIds[0];

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    if (window.scrollY >= section.offsetTop - headerOffset) {
      activeId = id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function scheduleActiveSectionUpdate() {
  if (rafScheduled) {
    return;
  }

  rafScheduled = true;
  requestAnimationFrame(() => {
    updateActiveSection();
    rafScheduled = false;
  });
}

projectCards.forEach((card) => {
  const openButton = card.querySelector("[data-open-project]");

  openButton?.addEventListener("click", () => {
    openProjectModal(card.dataset.project);
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", handleAnchorClick);
});

modalCloseControls.forEach((control) => {
  control.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && !modal.hidden) {
    event.preventDefault();
    closeProjectModal();
    return;
  }

  trapModalFocus(event);
});

window.addEventListener("scroll", scheduleActiveSectionUpdate, { passive: true });
window.addEventListener("resize", scheduleActiveSectionUpdate);

populateProjectCards();
renderPageTeammateCredits();
renderPageReferences();
updateActiveSection();
