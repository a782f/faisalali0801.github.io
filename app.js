/* =====================================================================
   PROJECTS DATA
   ---------------------------------------------------------------------
   To add a project: copy one { ... } block below, paste it into the
   array, and edit the fields. The first entry with featured:true spans
   the full width. Order in this array = order on the page.

   Fields:
     pid      catalog id shown on the card, e.g. "P-01"
     title    project name
     blurb    one or two sentences
     tags     array of short tech labels
     metric   { value, label }  the headline number for the card
     status   short state text, e.g. "MS Report" / "In progress"
     link     detail page (e.g. "battery-handling.html") OR a repo URL
              (e.g. "https://github.com/you/repo"). Set to "" to make
              the card non-clickable until you have something to link.
     featured true only for the one hero project (optional)
   ===================================================================== */

const PROJECTS = [
  {
    pid: "P-01",
    title: "Vision-Guided Battery Handling for Industrial Robots",
    blurb: "A custom, fully modifiable vision-guided cell that detects empty battery-holder slots and autonomously restocks them via vacuum pick-and-place — matching commercial machine-vision accuracy on commodity hardware. MS Report, Michigan Technological University.",
    tags: ["FANUC LR Mate 200iC", "Jetson Orin Nano", "YOLOv11", "Micro850 PLC", "OpenCV", "Modbus TCP", "EtherNet/IP", "PyQt5"],
    metric: { value: "0.93 mm", label: "aggregate RMS · vs iRVision" },
    status: "MS Report",
    link: "battery-handling.html",
    featured: true
  },
  {
    pid: "P-02",
    title: "Automated Tablet Filling Station with SCADA",
    blurb: "A PLC-driven pharmaceutical filling cell: RFID-based recipe sorting, hopper dispensing, and bottle counting, integrated into an existing Amatrol station without altering its original wiring. Siemens S7-1200 with Ignition SCADA over OPC UA.",
    tags: ["Siemens S7-1200", "Ignition SCADA", "TIA Portal", "OPC UA", "RFID", "Ladder Logic"],
    metric: { value: "250 /hr", label: "throughput · bottles" },
    status: "Team project",
    // Replace with your repo or a detail page when ready:
    link: "https://github.com/a782f"
  }

  /* ---- TEMPLATE: copy this into the array above to add a project ----
  ,{
    pid: "P-03",
    title: "Project title here",
    blurb: "One or two sentences on what it does and why it matters.",
    tags: ["Tool", "Tool", "Protocol"],
    metric: { value: "00", label: "unit · context" },
    status: "In progress",
    link: ""            // "detail.html" or "https://github.com/you/repo"
  }
  ------------------------------------------------------------------- */
];

/* --------------------------------------------------------------------
   RENDER — no framework, no build step.
   -------------------------------------------------------------------- */
(function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  grid.innerHTML = PROJECTS.map((p) => {
    const tags = (p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("");
    const metric = p.metric
      ? `<div class="metric"><span class="m-val">${esc(p.metric.value)}</span><span class="m-lab">${esc(p.metric.label)}</span></div>`
      : "";
    const go = p.link
      ? `<span class="go">View project <span class="arw">&rarr;</span></span>`
      : "";
    const inner = `
      <div class="cardtop">
        <span class="pid">${esc(p.pid)}</span>
        ${p.status ? `<span class="status">${esc(p.status)}</span>` : ""}
      </div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.blurb)}</p>
      <div class="tags">${tags}</div>
      ${metric}
      ${go}
    `;
    const cls = `card reveal${p.featured ? " featured" : ""}`;
    if (p.link) {
      const ext = /^https?:\/\//.test(p.link);
      const attrs = ext ? ` target="_blank" rel="noopener"` : "";
      return `<a class="${cls}" href="${esc(p.link)}"${attrs}>${inner}</a>`;
    }
    return `<div class="${cls}">${inner}</div>`;
  }).join("");

  // scroll reveal
  const items = grid.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("in"), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
})();
