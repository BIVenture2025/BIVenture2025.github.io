/* ============================================================
   data.js — the only file you need to edit.
   Everything on the site is rendered from this object.
   Reload the page after saving. No build step.
   ============================================================ */

const CV = {

  /* ---------- 1. WHO ---------- */
  profile: {
    name:      "Yeong Wai Son",
    shortName: "Wai Son",
    role:      "Finance Transformation & Analytics Leader",
    location:  "Kuala Lumpur, Malaysia",
    email:     "waisonyeong@gmail.com",
    phone:     "+60 12 369 2924",
    available: "Open to Work · Available for consulting",
    photo:     "img/profile.jpg",
    summary:
      "Strategic finance transformation leader and Microsoft-certified solution architect with 15+ years " +
      "driving global digital evolution inside Fortune 50 energy businesses. I bridge complex financial " +
      "operations and modern data technology — automating workflows, optimising capital, and building " +
      "data-driven cultures that outlast the project.",
    languages: ["English", "Bahasa Malaysia", "Mandarin", "Cantonese"],
    education: {
      degree: "Bachelor's Degree in Accounting with Finance",
      school: "University of Abertay Dundee",
      year:   "2007",
      extra:  "Professional Certificate in Credit Management — FCIB, 2015"
    }
  },

  /* ---------- 2. THE NUMBERS ---------- */
  stats: [
    { value: 30000, suffix: "+", label: "Hours of documented CI savings", note: "Verified annual efficiency delivered" },
    { value: 5,     prefix: "USD ", suffix: "M", label: "Monthly working capital gain", note: "Risk-based order blocking system" },
    { value: 50,    suffix: "+", label: "Analysts mentored", note: "Citizen Developer programme" },
    { value: 15,    suffix: "+", label: "Years across finance & digital", note: "Shell · Air Products" },
    { value: 5,     suffix: "",  label: "Microsoft certifications", note: "All independently verifiable" }
  ],

  /* ---------- 3. THE CAREER ARC ----------
     logos:  files in img/ shown on the chapter plate
     scope:  the one-line "how big was this" readout
     Edit start/end as decimal years (2018.2 = March 2018)     */
  timeline: {
    intro: {
      kicker: "The Arc",
      title:  "Fifteen years climbing one ladder. Then stepping off it.",
      standfirst:
        "Most finance careers move in one direction — bigger team, bigger budget, same discipline. " +
        "Mine did that for eleven years, and then deliberately stopped."
    },
    acts: [
      {
        id: "a1",
        act: "Act I", numeral: "I",
        period: "2008 — 2011",
        title: "Foundation",
        heading: "Learning the ledger before automating it",
        body:
          "Tax computations, then property accounts, then Shell's shared service centre. The work was " +
          "reconciliations, aged items and month-end closes — the unglamorous mechanics that later made it " +
          "obvious which processes were worth automating and which were worth deleting.",
        highlight: "Promotional transfer to Credit Analyst",
        scope: "Individual contributor · Kuala Lumpur",
        logos: [{src:"img/logo-shell.svg", alt:"Shell"}],
        orgNote: "Chiang & Chiang · Lion Group · Shell Business Service Centre",
        roles: [
          { title: "Tax Assistant",     org: "Chiang & Chiang Tax Services", start: 2008.0,  end: 2008.4,  team: 0, track: "finance" },
          { title: "Account Assistant", org: "Lion Group (Property)",        start: 2008.4,  end: 2009.3,  team: 0, track: "finance" },
          { title: "Account Associate", org: "Shell Business Service Centre",start: 2009.45, end: 2010.75, team: 0, track: "finance" },
          { title: "Credit Analyst",    org: "Shell Business Service Centre",start: 2010.75, end: 2011.2,  team: 0, track: "finance" }
        ]
      },
      {
        id: "a2",
        act: "Act II", numeral: "II",
        period: "2011 — 2013",
        title: "First command",
        heading: "Eight people, and a country to migrate",
        body:
          "First management role: the China credit book. Led the GSAP migration for China with minimal " +
          "business disruption, and drove automation of the cash application process — matching incoming " +
          "customer payments against open receivables — from effectively nothing to roughly 60% auto-matched " +
          "within a year. It was the first time the pattern showed up of fixing the system rather than " +
          "working harder inside it.",
        highlight: "Cash application automation: ~0% → ~60% auto-match in twelve months",
        scope: "8 people · China credit book",
        logos: [{src:"img/logo-shell.svg", alt:"Shell"}],
        orgNote: "Shell Business Service Centre",
        roles: [
          { title: "Team Manager, Credit Management (China)", org: "Shell Business Service Centre", start: 2011.2, end: 2013.3, team: 8, track: "finance" }
        ]
      },
      {
        id: "a3",
        act: "Act III", numeral: "III",
        period: "2013 — 2018",
        title: "Wider command",
        heading: "From one country to a region",
        body:
          "The Malaysia book roughly doubled the team. Then the significant step: at Shell the remit had been " +
          "a single country, but the move to Air Products came with regional Asia accountability — a portfolio " +
          "of markets, each with its own credit culture, legal recovery route and payment behaviour. Two builds " +
          "mattered there: a risk-based order blocking system that moved working capital materially, and an " +
          "automated global bad debt reserve solution that closed a live control gap.",
        highlight: "Country-level at Shell → regional Asia ownership at Air Products",
        scope: "15 people, then regional Asia portfolio",
        logos: [{src:"img/logo-shell.svg", alt:"Shell"}, {src:"img/logo-airproducts.png", alt:"Air Products"}],
        orgNote: "Shell Business Service Centre → Air Products",
        roles: [
          { title: "Team Manager, Credit Management (Malaysia)", org: "Shell Business Service Centre", start: 2013.3, end: 2014.6, team: 15, track: "finance" },
          { title: "Credit Manager — Regional Asia",             org: "Air Products",                 start: 2014.7, end: 2018.15, team: null, track: "finance" }
        ]
      },
      {
        id: "a4",
        act: "Act IV", numeral: "IV",
        period: "2018 — 2019",
        title: "Regional scale",
        heading: "Thirty people, three countries",
        body:
          "Back to Shell with accountability for credit performance across China, Hong Kong and Thailand. " +
          "The largest team of the finance career — and the point where blending financial analysis with " +
          "data modelling stopped being a side interest and became how the risk frameworks actually worked.",
        highlight: "Largest finance team led — 30 across 3 countries",
        scope: "30 people · China, Hong Kong, Thailand",
        logos: [{src:"img/logo-shell.svg", alt:"Shell"}],
        orgNote: "Shell",
        roles: [
          { title: "Senior Credit Manager", org: "Shell", start: 2018.2, end: 2019.99, team: 30, track: "finance" }
        ]
      },
      {
        id: "a5",
        act: "Act V", numeral: "V",
        period: "2020 — 2022",
        title: "The pivot",
        heading: "Giving up a thirty-person org to go and build",
        body:
          "This is the decision the rest of the CV hangs on. Left the credit management ladder — the safe, " +
          "legible, upward one — to run the Global Data & Digital programme for the Credit function. " +
          "Azure SQL and Power Platform replaced manual bottlenecks, delivering over 30,000 documented hours " +
          "of CI savings. Then scaled a Citizen Developer programme that put those tools in 50+ analysts' hands, " +
          "so the capability outlived the programme.",
        highlight: "30,000+ hours saved · 50+ analysts upskilled",
        scope: "Global programme · scope, not headcount",
        pivot: true,
        logos: [{src:"img/logo-shell.svg", alt:"Shell"}, {src:"img/logo-powerplatform.png", alt:"Power Platform"}],
        orgNote: "Shell · Global Data & Digital",
        roles: [
          { title: "Digital Operations Program Manager", org: "Shell", start: 2020.0, end: 2022.9, team: null, track: "digital" }
        ]
      },
      {
        id: "a6",
        act: "Act VI", numeral: "VI",
        period: "2022 — 2026",
        title: "Product",
        heading: "From programme to portfolio",
        body:
          "Product management for global data products — owning the roadmap rather than a delivery date. " +
          "Unified 20+ disparate economic models into one Power Platform decision tool for the renewables " +
          "portfolio, rebuilt global FP&A reporting on Power BI with the upskilling programme attached, and " +
          "architected a Carbon Scenario tool that automated emissions estimation for strategic planning.",
        highlight: "20+ economic models unified · multi-billion-dollar portfolio",
        scope: "Global data products · renewables, FP&A, ESG",
        logos: [{src:"img/logo-shell.svg", alt:"Shell"}, {src:"img/logo-powerbi.svg", alt:"Power BI"}],
        orgNote: "Shell · Digitalization",
        roles: [
          { title: "Digitalization Product Manager", org: "Shell", start: 2022.9, end: 2026.05, team: null, track: "digital" }
        ]
      },
      {
        id: "a7",
        act: "Act VII", numeral: "VII",
        period: "2026 — now",
        title: "Independent",
        heading: "Same work, chosen clients",
        body:
          "Now consulting independently on the same problems: Power BI and Fabric platforms, finance and " +
          "credit analytics, AI agents built on Copilot Studio, and Power Platform automation — plus " +
          "HRDC-claimable corporate training for Malaysian organisations building the capability in-house.",
        highlight: "Available for consulting and permanent roles",
        scope: "Independent practice · Kuala Lumpur",
        logos: [{src:"img/logo-powerbi.svg", alt:"Power BI"}, {src:"img/logo-fabric.svg", alt:"Microsoft Fabric"},
                {src:"img/logo-copilot.png", alt:"Copilot Studio"}, {src:"img/logo-hrdcorp.png", alt:"HRD Corp certified trainer"}],
        orgNote: "Independent",
        roles: [
          { title: "Independent BI & Automation Consultant", org: "Freelance", start: 2026.1, end: 2026.62, team: null, track: "independent" }
        ]
      }
    ]
  },

  /* ---------- 4. WORK ----------
     kind: "powerbi"  → live report embed on click
           "video"    → video embed on click
           "diagram"  → built-in architecture graphic, no embed          */
  projects: [
    {
      id: "agent-variance",
      category: "AI & Automation",
      domain: "Finance",
      no: "01",
      kind: "video",
      title: "AI Finance Agent — Variance Analysis",
      meta: "Microsoft Copilot Studio",
      featured: true,
      image: "img/agent-copilot.jpg",
      desc: "An agent that produces the monthly variance pack end to end. It reads the month's governed workbook, decides which movements are material enough to mention, drafts the commentary in the finance team's house style while carrying forward last month's story, builds the branded Word pack, and routes it to the FP&A Manager in Teams for approval. Nothing is distributed until a human presses Approve. Built entirely with no-code orchestration on governed SharePoint sources.",
      use:  "Month-end close and FP&A reporting teams who want the assembly work removed without giving up editorial control or the audit trail.",
      tags: ["Copilot Studio", "AI Agents", "Power Automate", "SharePoint Governance", "FP&A", "Process Automation"],
      signals: [
        { v: "Human-in-loop", k: "Mandatory approval gate" },
        { v: "Governed", k: "Inherits SharePoint permissions" },
        { v: "Audit-ready", k: "Full run log per cycle" }
      ],
      note: "Illustrative demo built on fictional data. Timings shown in the walkthrough are configurable estimates.",
      video: "https://drive.google.com/file/d/1C7codAiriWshDoSHvSMlEpT22fQtyxaC/preview",
      videoLink: "https://drive.google.com/file/d/1C7codAiriWshDoSHvSMlEpT22fQtyxaC/view"
    },
    {
      id: "pbi-engine",
      category: "AI & Automation",
      domain: "Design & Delivery",
      no: "02",
      kind: "diagram",
      title: "Power BI Automation Engine — an AI Agent",
      meta: "Built on Claude · self-improving",
      featured: true,
      desc: "An AI agent I designed and built on Claude that turns a brief into a production-grade Power BI deliverable. It works from a curated knowledge base I maintain — design references, themes and hard-won build rules — and runs a mockup stage that agrees the look and the story before a single measure is written. It then generates the project files itself and validates them before anything ships. The part that matters is the last loop: every failure gets written back as a rule the agent reads next time, so the same mistake cannot happen twice and each project starts further ahead than the last. This site's other Power BI work was built through it.",
      use:  "Teams producing reports repeatedly who want consistent design quality and fewer rebuild cycles — and anyone evaluating whether AI agents can do real delivery work rather than demos.",
      tags: ["Claude", "AI Agents", "Power BI", "Design Systems", "Automation", "Knowledge Management"],
      signals: [
        { v: "Agent-driven", k: "Built and run on Claude" },
        { v: "Design-first", k: "Mockup agreed before build" },
        { v: "Compounding", k: "Every failure becomes a rule" }
      ],
      note: "Architecture shown at concept level. Implementation detail withheld."
    },
    {
      id: "credit-risk",
      category: "Analytic Dashboard",
      domain: "Credit & Risk",
      no: "03",
      kind: "powerbi",
      title: "IFRS 9 Credit Risk Analytics Suite",
      meta: "7 chapters",
      featured: true,
      image: "img/credit-risk.jpg",
      desc: "A full credit risk platform following the expected-credit-loss chain from end to end: probability of default scoring, loss-given-default estimation, exposure modelling, three-stage classification, concentration and stress testing. Risk flags are generated automatically and written in plain language, so the exception finds the reviewer rather than the reviewer hunting the exception.",
      use:  "Bank and corporate credit teams running IFRS 9 provisioning, regulatory reporting and portfolio stress testing.",
      tags: ["Power BI", "Microsoft Fabric", "Credit Management", "Risk Modelling", "IFRS 9", "DAX", "Data Modelling", "Financial Analysis"],
      signals: [
        { v: "End-to-end", k: "Full ECL chain" },
        { v: "PD · LGD · EAD", k: "Component modelling" },
        { v: "Auto-narrative", k: "Risk flags in plain English" }
      ],
      note: "Synthetic data; the domain draws on 15 years of credit management.",
      url: "https://app.powerbi.com/view?r=eyJrIjoiYjc0NjRmZjQtZDY5OS00ZmQ4LWFiMDAtZTk3OTQwN2FlNGQxIiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "biz-performance",
      category: "Analytic Dashboard",
      domain: "Business Performance",
      no: "04",
      kind: "powerbi",
      title: "Integrated Energy — Executive Scorecard",
      meta: "7 chapters",
      featured: true,
      image: "img/biz-performance.jpg",
      desc: "An enterprise scorecard for an integrated energy business spanning oil and gas, LNG, solar and wind. Composite indices roll performance, financial health and ESG into figures a board can hold in its head, and every page closes with a stated recommendation rather than leaving the reader to interpret a chart.",
      use:  "Executive and board reporting where performance, ESG and safety need to be read together rather than in separate packs.",
      tags: ["Power BI", "Microsoft Fabric", "Business Analysis", "ESG Reporting", "Data Visualization", "Executive Reporting", "Energy Sector"],
      signals: [
        { v: "Board-ready", k: "Recommendation on every page" },
        { v: "Composite scoring", k: "Performance · finance · ESG" },
        { v: "Multi-segment", k: "Fossil and renewable together" }
      ],
      note: "Synthetic scaffolded data, for demonstration.",
      url: "https://app.powerbi.com/view?r=eyJrIjoiYmI0NDNmNmUtMmQ0Mi00MzA4LTg3ZDQtMGE4MzU1OGNkZTZhIiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "mass-balance",
      category: "Analytic Dashboard",
      domain: "Operations",
      no: "05",
      kind: "powerbi",
      title: "Refinery Mass Balance Analytics",
      meta: "Single canvas",
      image: "img/mass-balance.jpg",
      desc: "An operational control view that traces material from crude feeds through each processing unit to finished product on one screen. Measured volumes are set against reconciled volumes so closure gaps surface immediately, with unit utilisation, yield variance and margin by crude sitting alongside — the layout a control room actually reads.",
      use:  "Refinery and plant operations teams doing process reconciliation, yield accounting and mass-balance control.",
      tags: ["Power BI", "Microsoft Fabric", "Data Visualization", "Operations Analytics", "Process Reconciliation", "Data Modelling"],
      signals: [
        { v: "Sankey flow", k: "Crude → unit → product" },
        { v: "Reconciliation", k: "Measured vs balanced" },
        { v: "Control-room", k: "One canvas, no drilling" }
      ],
      note: "Fictional dataset, built for learning and exploration.",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMjdkNzk2MTEtODU1Ny00Y2E1LWJiNzktMzJjZWQwODIxNTQ1IiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "wc-round3",
      category: "Analytic Dashboard",
      domain: "Data Storytelling",
      no: "06",
      kind: "powerbi",
      title: "Budget Doesn't Buy Hits. It Buys Floors.",
      meta: "5 chapters",
      award: "World Champs · Round 3",
      featured: true,
      image: "img/wc-round3.jpg",
      desc: "An editorial data story about investment risk, told through film budgets. The finding is counter-intuitive: the smallest and largest budgets return about the same, but for opposite reasons — one wins by lottery, the other by floor — and the middle is where the money goes to die. A dedicated closing chapter sets out what the data cannot support, which is the part most dashboards leave out.",
      use:  "Investment and portfolio communication where the audience needs the conclusion and its limits, not a wall of charts.",
      tags: ["Power BI", "Microsoft Fabric", "Data Storytelling", "Data Visualization", "Statistical Analysis", "DAX", "Editorial Design"],
      signals: [
        { v: "Competition entry", k: "Dataviz World Champs" },
        { v: "Distribution analysis", k: "Full spread, not averages" },
        { v: "States its limits", k: "Dedicated method chapter" }
      ],
      note: "Power BI Dataviz World Champs Barcelona 2026 — Round 3. Featured on the Microsoft Fabric Community blog.",
      community: "https://community.fabric.microsoft.com/t5/Power-BI-Community-Blog/Power-BI-Dataviz-World-Champs-Round-3/ba-p/5323477",
      url: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNTAxYmQ1MWEtYzlhOS00NDM3LTliOTgtOTY0NWFiODc5ZmJlIiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "wc-round1",
      category: "Analytic Dashboard",
      domain: "Business Performance",
      no: "07",
      kind: "powerbi",
      title: "PitchSide Pro — Revenue Performance",
      meta: "5 chapters",
      award: "World Champs · Round 1",
      image: "img/wc-round1.jpg",
      desc: "An executive briefing that answers how the business performed and, more usefully, why. Rather than presenting revenue and margin and leaving interpretation to the reader, each visual carries a written headline stating what it shows — and the analysis separates growth coming from more customers and orders from growth coming from conversion or basket size.",
      use:  "Executive scorecards and board packs that need a plain-English answer rather than a chart to interpret.",
      tags: ["Power BI", "Microsoft Fabric", "Business Analysis", "Data Visualization", "DAX", "Executive Reporting", "Growth Analytics"],
      signals: [
        { v: "Insight-led", k: "Written headline per visual" },
        { v: "Driver analysis", k: "Volume vs value separated" },
        { v: "Competition entry", k: "Dataviz World Champs" }
      ],
      note: "Power BI Dataviz World Champs Barcelona 2026 — Round 1. Featured on the Microsoft Fabric Community blog.",
      community: "",
      url: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMWYyY2RmNzEtMDY0Ni00ZjI5LWJmMGItZTAwOTY3YzBkMWM1IiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "lending",
      category: "Analytic Dashboard",
      domain: "Credit & Risk",
      no: "08",
      kind: "powerbi",
      title: "Lending Portfolio Snapshot",
      meta: "3 chapters",
      image: "img/lending.jpg",
      desc: "An approval-performance view built to answer whether the credit policy is drawing the line in the right place. Approved and rejected applications are shown as mirrored distributions so the gap between them is legible at a glance, then broken down by age band, risk profile and demographic driver to expose where the cut-off is doing real work and where it is only adding friction.",
      use:  "Consumer lending teams calibrating credit policy, monitoring approval rates and reviewing scorecard cut-offs.",
      tags: ["Power BI", "Microsoft Fabric", "Credit Management", "Risk Analytics", "Data Visualization", "Cohort Analysis"],
      signals: [
        { v: "Policy calibration", k: "Where the cut-off bites" },
        { v: "Mirrored view", k: "Approved against rejected" },
        { v: "Cohort breakdown", k: "Age and demographic" }
      ],
      note: "Illustrative data, for training purposes.",
      url: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMmZiZjIwZTMtNGU2ZS00MzI1LTg1NTQtYjE5MjhkYWNlODJiIiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "capital-projects",
      category: "Analytic Dashboard",
      domain: "Operations",
      no: "09",
      kind: "powerbi",
      title: "Capital Projects Portfolio Control Tower",
      meta: "3 chapters",
      image: "img/capital-projects.jpg",
      desc: "Portfolio oversight across a programme of utility infrastructure builds — water, wastewater, grid, solar and desalination. Progress and budget variance sit next to the actual reason each delayed project is delayed, and contractors are plotted on cost discipline against on-time delivery, which turns a vague sense of who is difficult into something you can put in front of a procurement review.",
      use:  "Capital programme governance and contractor management across a portfolio of concurrent projects.",
      tags: ["Power BI", "Microsoft Fabric", "Project Management", "Portfolio Analytics", "Data Modelling", "Geospatial", "Contractor Performance"],
      signals: [
        { v: "Portfolio control", k: "Concurrent projects, one view" },
        { v: "Root cause", k: "Why each delay happened" },
        { v: "Contractor scoring", k: "Cost against schedule" }
      ],
      note: "Fictitious demonstration data, built for proposal purposes.",
      url: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZWJiYjk4Y2EtNjIwNS00YmExLWFiMGMtZTNlNTVhOGNmYWZiIiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "financial-statement",
      category: "Analytic Dashboard",
      domain: "Finance",
      no: "10",
      kind: "powerbi",
      title: "Investment Metrics — Corporate Financial Health",
      meta: "3 chapters",
      image: "img/financial-statement.jpg",
      desc: "The ratio set an analyst or lender actually reads before making a decision — cash generation, coverage, yield, leverage and gearing — trended together over a multi-year window so the direction of travel is visible rather than a single-point snapshot. Deliberately spare: high contrast, no ornament, nothing competing with the numbers.",
      use:  "Investor relations, treasury and lender reporting, or assessing the financial health of a counterparty.",
      tags: ["Power BI", "Microsoft Fabric", "Financial Analysis", "DAX", "Ratio Analysis", "Treasury", "Data Visualization"],
      signals: [
        { v: "Investor-grade", k: "The ratios lenders ask for" },
        { v: "Cash and leverage", k: "Read side by side" },
        { v: "Trend-first", k: "Direction over snapshot" }
      ],
      note: "Three-chapter analytical pack.",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMWNmYTNjNjEtYmYyZi00MWY4LTkwZGQtNWEzMDdlNDE3NjhiIiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "lego-life",
      category: "Analytic Dashboard",
      domain: "Data Storytelling",
      no: "11",
      kind: "powerbi",
      title: "My Life, In LEGO Bricks",
      meta: "5 chapters",
      award: "World Champs · Round 2",
      image: "img/lego-life.jpg",
      desc: "Four decades of personal history told entirely through the LEGO catalogue, beginning with the set released the year I was born. Sets grew, palettes widened, themes came and went — and read in sequence the catalogue turns into a biography. Proof that engagement is a design problem, not a data problem.",
      use:  "Brand and engagement storytelling — showing that an ordinary catalogue dataset can hold an audience.",
      tags: ["Power BI", "Microsoft Fabric", "Data Storytelling", "Data Visualization", "Custom Visuals", "SVG in DAX", "Narrative Design"],
      signals: [
        { v: "Scrollytelling", k: "Guided, inside Power BI" },
        { v: "Custom visuals", k: "HTML and SVG built in DAX" },
        { v: "Competition entry", k: "Dataviz World Champs" }
      ],
      note: "Power BI Dataviz World Champs Barcelona 2026 — Round 2. Featured on the Microsoft Fabric Community blog.",
      community: "",
      url: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZGE1MGYyMTgtMWEzOC00YjlhLWJmNmUtOTEyOThiY2JmMTg4IiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    },
    {
      id: "lego-grey",
      category: "Analytic Dashboard",
      domain: "Data Storytelling",
      no: "12",
      kind: "powerbi",
      title: "The Great Grey — LEGO's Colour Story",
      meta: "4 chapters",
      award: "World Champs · Round 2",
      image: "img/lego-grey.jpg",
      desc: "A companion piece testing a belief LEGO fans hold strongly: that sets have quietly become greyer. The catalogue's full colour history is used as its own evidence, with colour encoding the data rather than merely decorating it — and the answer is more interesting than either side of the argument expects.",
      use:  "Hypothesis testing and myth-busting analysis, where the audience arrives with a prior belief to be tested.",
      tags: ["Power BI", "Microsoft Fabric", "Data Storytelling", "Data Visualization", "Hypothesis Testing", "Colour Theory"],
      signals: [
        { v: "Hypothesis test", k: "Belief against the record" },
        { v: "Colour as data", k: "Encoding, not decoration" },
        { v: "Competition entry", k: "Dataviz World Champs" }
      ],
      note: "Power BI Dataviz World Champs Barcelona 2026 — Round 2. Featured on the Microsoft Fabric Community blog.",
      community: "",
      url: "https://app.fabric.microsoft.com/view?r=eyJrIjoiOTE5ZWY1YTctOWIyOS00NTQ3LWIwZmItNTI1NDFhNjQ5Y2M2IiwidCI6IjQ5MDk0YTAyLTRjNzktNGEyYy1iZDdmLThlZTBmMjgzN2Y0MSJ9"
    }
  ],

  /* ---------- 4b. ENGINE DIAGRAM ----------
     Concept-level only. Drives the graphic on the Automation Engine card. */
  engineDiagram: {
    title:   "AGENT ARCHITECTURE · BUILT ON CLAUDE",
    caption: "How the agent works — and why it gets better with every project",
    nodes: [
      { id:"k", label:"Knowledge",  sub:"Design references, themes\nand accumulated build rules" },
      { id:"m", label:"Mockup",     sub:"Brainstorm the story, agree\nthe look before anything is built" },
      { id:"b", label:"Build",      sub:"Generate the model and\nreport from proven components" },
      { id:"v", label:"Validate",   sub:"Automated checks until\nthe deliverable is clean" },
      { id:"l", label:"Learn",      sub:"Every failure becomes a rule\nand returns to the knowledge base" }
    ]
  },

  /* ---------- 5. FREELANCE SERVICES ---------- */
  services: [
    {
      no: "01",
      name: "Power BI & Fabric Dashboard Build",
      pitch: "End-to-end delivery — data model, DAX, design, deployment.",
      body: "From a messy spreadsheet or a live warehouse to a report people actually open. Semantic model design, performance-tuned DAX, and a visual layer built to communicate a decision rather than decorate a page.",
      deliver: ["Semantic model & star schema", "Performance-tuned DAX", "Report design & theming", "Workspace setup, RLS & refresh", "Handover documentation"]
    },
    {
      no: "02",
      name: "Finance & Credit Analytics",
      pitch: "The specialisation — built by someone who ran the function.",
      body: "Credit risk, IFRS 9 provisioning, AR and DSO analytics, FP&A reporting, working capital and cash flow. Fifteen years running credit operations means the model gets built right the first time, and the numbers get challenged before a stakeholder does it for you.",
      deliver: ["Credit risk & IFRS 9 ECL models", "AR / DSO / collections analytics", "FP&A and management reporting", "Working capital diagnostics", "Board and lender packs"],
      accent: true
    },
    {
      no: "03",
      name: "AI Agents & Process Automation",
      pitch: "Delete the manual step, don't optimise it.",
      body: "Copilot Studio agents grounded in your own governed content, plus Power Apps, Power Automate and Azure SQL replacing the spreadsheet-and-email processes that quietly consume a finance team's month — always with a human approval gate before anything leaves the building.",
      deliver: ["Copilot Studio agent design & build", "Grounded knowledge & governance setup", "Power Apps & Power Automate flows", "Azure SQL data engineering", "Process discovery & CI assessment"]
    },
    {
      no: "04",
      name: "Corporate Training — HRDC Claimable",
      pitch: "Malaysian employers can claim this against their HRD levy.",
      body: "Certified HRD Corp trainer delivering practical Power BI, Excel and Power Platform programmes. Built from the Citizen Developer programme that upskilled 50+ analysts inside Shell — hands-on, using your data, with the goal that the team no longer needs me.",
      deliver: ["Power BI foundation → advanced DAX", "Excel & Power Query for finance", "Power Platform citizen developer track", "Custom in-house curriculum", "HRDC-claimable certification"]
    }
  ],

  /* ---------- 6. CAPABILITIES ---------- */
  skills: [
    { group: "Data & BI",        items: ["Power BI", "Microsoft Fabric", "Advanced DAX", "Data Modelling", "Power Query / ETL", "Azure SQL", "Alteryx"] },
    { group: "AI & Low-code",    items: ["Copilot Studio", "AI Agent Design", "Power Apps", "Power Automate", "Power Platform Architecture", "Azure AI"] },
    { group: "Finance",          items: ["Credit Risk & IFRS 9", "FP&A", "Working Capital", "Financial Analysis", "SAP", "Risk Management"] },
    { group: "Leadership",       items: ["Product Management", "Program Management", "Digital Transformation", "Agile Delivery", "Team Leadership", "Capability Building"] }
  ],

  /* ---------- 7. VERIFIED CREDENTIALS ----------
     Only credentials with a working verification link are listed.     */
  certs: [
    { name: "Power Platform Solution Architect Expert", issuer: "Microsoft", level: "Expert", badge: "img/badge-expert.svg",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/YeongWaiSon/E59EBBE190D61C4B?sharingId=C9A8E00030F8C72D" },
    { name: "Fabric Analytics Engineer Associate", issuer: "Microsoft", level: "Associate", badge: "img/badge-associate.svg",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/YeongWaiSon/6B3FA3104F33A5A7?sharingId=C9A8E00030F8C72D" },
    { name: "Power BI Data Analyst Associate", issuer: "Microsoft", level: "Associate", badge: "img/badge-associate.svg",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/YeongWaiSon/4483E3147AD69868?sharingId=C9A8E00030F8C72D" },
    { name: "Azure AI Engineer Associate", issuer: "Microsoft", level: "Associate", badge: "img/badge-associate.svg",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/YeongWaiSon/533FD1FDEBAE70DA?sharingId=C9A8E00030F8C72D" },
    { name: "Power Platform Functional Consultant Associate", issuer: "Microsoft", level: "Associate", badge: "img/badge-associate.svg",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/YeongWaiSon/95FDFD8E3F8BAF5F?sharingId=C9A8E00030F8C72D" },
    { name: "Certified Trainer", issuer: "HRD Corp Malaysia", level: "Trainer", badge: "img/logo-hrdcorp.png",
      url: "https://trainers.hrdcorp.gov.my/ecert/3642aa70-2aa0-11f1-9e1f-2915cdf5aecf/3ea09790-2aa0-11f1-a7a5-8d94a6f95f04" }
  ],

  /* ---------- 8. LINKS ---------- */
  links: [
    { name: "LinkedIn",        icon: "linkedin",  url: "https://www.linkedin.com/in/wai-son-yeong-46388685/" },
    { name: "Upwork",          icon: "upwork",    url: "https://www.upwork.com/freelancers/~01363fe05497ff6934?viewMode=1" },
    { name: "Microsoft Learn", icon: "microsoft", url: "https://learn.microsoft.com/en-us/users/yeongwaison/transcript/dr5pyhex5ple9xy" },
    { name: "HRD Corp",        icon: "award",     url: "https://trainers.hrdcorp.gov.my/ecert/3642aa70-2aa0-11f1-9e1f-2915cdf5aecf/3ea09790-2aa0-11f1-a7a5-8d94a6f95f04" }
  ]
};
