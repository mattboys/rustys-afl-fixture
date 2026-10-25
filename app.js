const DOCS = [
  { id: "01", path: "docs/01-problem-overview.md", title: "Problem overview", short: "Scope, season parameters and problem structure" },
  { id: "02", path: "docs/02-rules.md", title: "Rules", short: "Absolute rules, preferences and special treatment" },
  { id: "03", path: "docs/03-teams-and-classifications.md", title: "Teams and classifications", short: "Club grounds, interstate pairs and ladder brackets" },
  { id: "04", path: "docs/04-match-ups.md", title: "Match-up assignments", short: "Regular, assigned and conditional double-ups" },
  { id: "05", path: "docs/05-venues.md", title: "Venues and ground rules", short: "Venue eligibility, contracts and secondary-ground schedules" },
  { id: "06", path: "docs/06-base-fixture.md", title: "Base fixture", short: "Pre-filled rows, restrictions, patterns and time slots" },
  { id: "07", path: "docs/07-home-away-rules.md", title: "Home-away clarifications", short: "Definitions, streak semantics and Gather Round treatment" },
];

const TEAMS = [
  { name: "Adelaide", state: "SA", type: "interstate", ground: "Adelaide Oval", bracket: "B" },
  { name: "Brisbane", state: "QLD", type: "interstate", ground: "Gabba", bracket: "E" },
  { name: "Carlton", state: "VIC", type: "victorian", ground: "Docklands Stadium", bracket: "D" },
  { name: "Collingwood", state: "VIC", type: "victorian", ground: "MCG", bracket: "C" },
  { name: "Essendon", state: "VIC", type: "victorian", ground: "Docklands Stadium", bracket: "E" },
  { name: "Fremantle", state: "WA", type: "interstate", ground: "Perth Stadium", bracket: "D" },
  { name: "Geelong", state: "VIC", type: "victorian", ground: "Kardinia Park", bracket: "A" },
  { name: "Gold Coast", state: "QLD", type: "interstate", ground: "Carrara Stadium", bracket: "D" },
  { name: "Greater Western Sydney", short: "GWS", state: "NSW", type: "interstate", ground: "Sydney Showground Stadium", bracket: "A" },
  { name: "Hawthorn", state: "VIC", type: "victorian", ground: "MCG", bracket: "B" },
  { name: "Melbourne", state: "VIC", type: "victorian", ground: "MCG", bracket: "C" },
  { name: "North Melbourne", state: "VIC", type: "victorian", ground: "Docklands Stadium", bracket: "B" },
  { name: "Port Adelaide", state: "SA", type: "interstate", ground: "Adelaide Oval", bracket: "C" },
  { name: "Richmond", state: "VIC", type: "victorian", ground: "MCG", bracket: "D" },
  { name: "St. Kilda", state: "VIC", type: "victorian", ground: "Docklands Stadium", bracket: "C" },
  { name: "Sydney", state: "NSW", type: "interstate", ground: "SCG", bracket: "A" },
  { name: "Tasmania Devils", state: "TAS", type: "interstate", ground: "Port Macquarie Stadium", bracket: "E" },
  { name: "West Coast", state: "WA", type: "interstate", ground: "Perth Stadium", bracket: "B" },
  { name: "Western Bulldogs", state: "VIC", type: "victorian", ground: "Docklands Stadium", bracket: "A" },
];

const MATCHUPS = [
  { team: "Adelaide", regular: ["Fremantle", "Port Adelaide", "West Coast"], assigned: ["Hawthorn", "North Melbourne"], conditional: ["TBD"] },
  { team: "Brisbane", regular: ["Gold Coast", "Melbourne", "Sydney"], assigned: ["Essendon", "Tasmania Devils"], conditional: ["TBD"] },
  { team: "Carlton", regular: ["Collingwood", "Essendon", "Richmond"], assigned: ["Gold Coast", "Fremantle"], conditional: ["TBD"] },
  { team: "Collingwood", regular: ["Carlton", "Essendon", "St. Kilda"], assigned: ["Melbourne", "Port Adelaide"], conditional: ["TBD"] },
  { team: "Essendon", regular: ["Carlton", "Collingwood", "Geelong"], assigned: ["Brisbane", "Tasmania Devils"], conditional: ["TBD"] },
  { team: "Fremantle", regular: ["Adelaide", "Port Adelaide", "West Coast"], assigned: ["Carlton", "Gold Coast", "Richmond"], conditional: [] },
  { team: "Geelong", regular: ["Essendon", "Hawthorn", "North Melbourne"], assigned: ["Greater Western Sydney", "Sydney", "Western Bulldogs"], conditional: [] },
  { team: "Gold Coast", regular: ["Brisbane", "Greater Western Sydney", "Tasmania Devils"], assigned: ["Carlton", "Fremantle", "Richmond"], conditional: [] },
  { team: "Greater Western Sydney", regular: ["Gold Coast", "Sydney", "Tasmania Devils"], assigned: ["Geelong", "Sydney", "Western Bulldogs"], conditional: [] },
  { team: "Hawthorn", regular: ["Geelong", "Richmond", "St. Kilda"], assigned: ["Adelaide", "North Melbourne", "West Coast"], conditional: [] },
  { team: "Melbourne", regular: ["Brisbane", "Sydney", "Western Bulldogs"], assigned: ["Collingwood", "St. Kilda", "Port Adelaide"], conditional: [] },
  { team: "North Melbourne", regular: ["Geelong", "Richmond", "Western Bulldogs"], assigned: ["Adelaide", "Hawthorn", "West Coast"], conditional: [] },
  { team: "Port Adelaide", regular: ["Adelaide", "Fremantle", "West Coast"], assigned: ["Collingwood", "Melbourne", "St. Kilda"], conditional: [] },
  { team: "Richmond", regular: ["Carlton", "Hawthorn", "North Melbourne"], assigned: ["Carlton", "Gold Coast", "Fremantle"], conditional: ["TBD"] },
  { team: "St. Kilda", regular: ["Collingwood", "Hawthorn", "Western Bulldogs"], assigned: ["Collingwood", "Melbourne", "Port Adelaide"], conditional: ["TBD"] },
  { team: "Sydney", regular: ["Brisbane", "Greater Western Sydney", "Melbourne"], assigned: ["Geelong", "Greater Western Sydney", "Western Bulldogs"], conditional: ["TBD"] },
  { team: "Tasmania Devils", regular: ["Gold Coast", "Greater Western Sydney"], assigned: ["Brisbane", "Essendon"], conditional: ["TBD"] },
  { team: "West Coast", regular: ["Adelaide", "Fremantle", "Port Adelaide"], assigned: ["Adelaide", "Hawthorn", "North Melbourne"], conditional: ["TBD"] },
  { team: "Western Bulldogs", regular: ["Melbourne", "North Melbourne", "St. Kilda"], assigned: ["Geelong", "Greater Western Sydney", "Sydney"], conditional: [] },
];

const RULES = [
  { id: "A1", type: "absolute", category: "Home & away", title: "Exact season allocation", text: "Every team must play exactly 12 Home and 12 Away games, and have exactly 3 Byes." },
  { id: "A2", type: "absolute", category: "Home & away", title: "Away-game streak cap", text: "No team can play more than 3 consecutive Away games. Byes do not count as games and do not reset an ordinary Home/Away streak." },
  { id: "A3", type: "absolute", category: "Travel", title: "Interstate Away streak", text: "An Interstate team cannot play more than 2 consecutive Away games, unless a Bye separates them." },
  { id: "A4", type: "absolute", category: "Travel", title: "Victorian Away opponents", text: "A Victorian team cannot play more than 2 consecutive Away games against Interstate teams, unless a Bye separates them. Three consecutive Away games against Victorian teams are acceptable." },
  { id: "A5", type: "absolute", category: "Travel", title: "Victorian interstate locations", text: "A Victorian team cannot play more than 2 consecutive games at interstate locations, unless a Bye separates them. Gather Round Home games count as interstate travel for this rule." },
  { id: "A6", type: "absolute", category: "Travel", title: "Back-to-back WA opponents", text: "A team cannot play consecutive Away games against both Fremantle and West Coast. A Bye may separate the two Away games over a three-round span." },
  { id: "A7", type: "absolute", category: "Byes", title: "Bye spacing", text: "All byes must be separated by at least 2 games between occurrences (a minimum difference of 3 rounds)." },
  { id: "A8", type: "absolute", category: "Byes", title: "First Bye deadline", text: "No team can have its first Bye after Round 16." },
  { id: "A9", type: "absolute", category: "Byes", title: "Late-season Bye", text: "No team can have all 3 Byes before Round 16; at least one Bye must be in Round 16 or later." },
  { id: "A10", type: "absolute", category: "Opponents", title: "Opponent frequency", text: "Each team plays 6 opponents twice and the remaining 12 opponents once. Double-ups comprise Regular, Assigned and Conditional opponents." },
  { id: "A11", type: "absolute", category: "Rematches", title: "Rematch spacing", text: "There must be at least 5 rounds between games against the same opponent." },
  { id: "A12", type: "absolute", category: "Rematches", title: "Home-and-away split", text: "When two teams meet twice, each team hosts the other once. A team cannot host the same opponent twice." },
  { id: "A13", type: "absolute", category: "Playing days", title: "Minimum rest", text: "All teams must have at least 5 full days off between consecutive games; match days themselves are not counted. This requires actual calendar dates." },
  { id: "A14", type: "absolute", category: "Venues", title: "Venue/day capacity", text: "No more than one game may be played at the same venue on the same day." },
  { id: "P1", type: "preferential", category: "Pair balance", title: "Same-state pair balance", text: "For an interstate Pair, when both teams play in a round, one should be Home and the other Away." },
  { id: "P2", type: "preferential", category: "Pair balance", title: "Interstate alternation", text: "Interstate teams should alternate Home and Away from week to week where possible." },
];

const CLARIFICATIONS = [
  { title: "A Bye does not reset every streak", text: "For the general Home/Away streak, byes are ignored when counting consecutive games. Some travel rules explicitly allow a Bye to separate Away trips; the auditor tracks those rule-specific interpretations separately." },
  { title: "Gather Round changes travel accounting", text: "Round 6 is played entirely in South Australia. A Victorian club hosting at a neutral Gather Round venue still gets a Home game for the 12/12 tally, but that match counts as interstate travel for A4 and A5." },
  { title: "A slot restriction is not an invitation", text: "An opponent in a restricted eligible list may be chosen only for that fixed Home-team slot. Being eligible does not require that club to occupy the slot; every other rule still applies." },
  { title: "Status labels have different force", text: "LOCKED assignments stay fixed. NOT LOCKED fixes the pairing but permits a time or venue adjustment. Unlabelled rows are retained unless a rule requires an allowed adjustment." },
  { title: "The finals are out of scope", text: "The source mentions four finals weeks but does not supply a format, participants, venues or rules. The specified optimisation covers the regular season only." },
  { title: "Supplementary grounds are retired", text: "No Supplementary-ground allocation applies. Only primary, secondary, contractual and Gather Round venue rules in the current documents are active." },
];

const VENUES = [
  { name: "Melbourne Cricket Ground", short: "MCG", location: "Melbourne, VIC", homes: "Collingwood, Hawthorn, Melbourne, Richmond", kind: "Primary" },
  { name: "Docklands Stadium", short: "DS", location: "Melbourne, VIC", homes: "Carlton, Essendon, North Melbourne, St. Kilda, Western Bulldogs", kind: "Primary" },
  { name: "Kardinia Park", short: "KP", location: "Geelong, VIC", homes: "Geelong", kind: "Primary" },
  { name: "Adelaide Oval", short: "AO", location: "Adelaide, SA", homes: "Adelaide, Port Adelaide", kind: "Primary" },
  { name: "Gabba", short: "G", location: "Brisbane, QLD", homes: "Brisbane", kind: "Primary" },
  { name: "Perth Stadium", short: "PS", location: "Perth, WA", homes: "Fremantle, West Coast", kind: "Primary" },
  { name: "Sydney Cricket Ground", short: "SCG", location: "Sydney, NSW", homes: "Sydney", kind: "Primary" },
  { name: "Sydney Showground Stadium", short: "SSS", location: "Sydney, NSW", homes: "Greater Western Sydney", kind: "Primary" },
  { name: "Carrara Stadium", short: "CS (GC)", location: "Gold Coast, QLD", homes: "Gold Coast", kind: "Primary" },
  { name: "Port Macquarie Stadium", short: "PMS", location: "Port Macquarie, NSW", homes: "Tasmania Devils", kind: "Primary" },
  { name: "York Park", short: "YP", location: "Launceston, TAS", homes: "Tasmania Devils (secondary)", kind: "Secondary" },
  { name: "Manuka Oval", short: "MO (C)", location: "Canberra, ACT", homes: "GWS (secondary)", kind: "Secondary" },
  { name: "Cazaly's Stadium", short: "CS (C)", location: "Cairns, QLD", homes: "Hawthorn (secondary)", kind: "Secondary" },
  { name: "Traegar Park", short: "TP", location: "Alice Springs, NT", homes: "Melbourne (secondary)", kind: "Secondary" },
  { name: "Marrara Oval", short: "MO (D)", location: "Darwin, NT", homes: "Gold Coast (secondary)", kind: "Secondary" },
  { name: "Riverway Stadium", short: "RS", location: "Townsville, QLD", homes: "Gold Coast (secondary)", kind: "Secondary" },
  { name: "Eureka Stadium", short: "ES", location: "Ballarat, VIC", homes: "Western Bulldogs (secondary)", kind: "Secondary" },
  { name: "Lyndoch Oval", short: "", location: "Barossa Valley, SA", homes: "Gather Round only", kind: "Gather Round" },
  { name: "Summit Sports Park", short: "", location: "Mt. Barker, SA", homes: "Gather Round only", kind: "Gather Round" },
  { name: "Norwood Oval", short: "", location: "Norwood, SA", homes: "Gather Round only", kind: "Gather Round" },
];

const SPECIAL_VENUES = [
  { title: "MCG priority / Carlton & Essendon", rounds: "ALWAYS", text: "Carlton or Essendon hosting Collingwood, Hawthorn, Melbourne or Richmond must use the MCG. Carlton vs Essendon is always at the MCG." },
  { title: "Collingwood / Docklands", rounds: "2 HOME GAMES", text: "Exactly 2 of Collingwood's 12 Home games at Docklands. Not against Carlton, Essendon, Hawthorn, Melbourne or Richmond." },
  { title: "Gold Coast / Darwin + Townsville", rounds: "R11-13, 17-18, 22", text: "Marrara in R11, 12, 13 and 22; Riverway in R17 and 18. R11-13 Home games must be bookended by Away games, with the documented R10 Away and post-R13 Away-or-Bye allowance." },
  { title: "Hawthorn / Cairns", rounds: "R11, 12, 13, 22", text: "Four Home games at Cazaly's. R11-13 Home games must be preceded and followed by Away games against Victorian opponents; a Bye may intervene." },
  { title: "Melbourne / Alice Springs", rounds: "R11, 12, 13, 22", text: "Four Home games at Traegar Park. R11-13 Home games must be preceded and followed by Away games against Victorian opponents; a Bye may intervene." },
  { title: "GWS / Canberra", rounds: "R8, 13, 22 + 1", text: "Four Home games at Manuka Oval: fixed in R8, R13 and R22, plus one unassigned round." },
  { title: "Western Bulldogs / Ballarat", rounds: "R13, 22", text: "Secondary-venue Home games at Eureka Stadium in R13 and R22. The R22 opponent has a restricted eligible list." },
  { title: "Venue sharing / Melbourne", rounds: "SAME DAY", text: "Docklands-primary clubs may both host if one uses the MCG as a permitted secondary ground against an MCG-primary or Interstate opponent. Two MCG-primary hosts may share a day only using permitted Home venues; Collingwood's Docklands game must meet its opponent restriction." },
];

const RESTRICTED = {
  hawthorn: "R11, R12, R13, R22 at Cazaly's: Adelaide, Brisbane, Greater Western Sydney, Port Adelaide, Tasmania Devils.",
  "gold coast": "R11-12 at Marrara: Carlton, Collingwood, Geelong, St. Kilda, Western Bulldogs. R13: Fremantle. R17-18 at Riverway: Carlton, Collingwood, Essendon, Geelong, North Melbourne, Richmond, Western Bulldogs. R22: West Coast.",
  "greater western sydney": "R13 and R22 at Manuka: Adelaide, Brisbane, Port Adelaide, Richmond, St. Kilda, Tasmania Devils.",
  "western bulldogs": "R13 and R22 at Eureka: Adelaide, Brisbane, Port Adelaide, Tasmania Devils.",
  melbourne: "R13 and R22 at Traegar Park: Adelaide, Brisbane, Port Adelaide, Tasmania Devils.",
  geelong: "R22 at the MCG: Essendon.",
};

const PRIMARY_VENUES = Object.fromEntries(TEAMS.map(team => [team.name, team.ground]));
const SECONDARY_VENUES = {
  "Carlton": ["MCG"], "Collingwood": ["Docklands Stadium"], "Essendon": ["MCG"], "Geelong": ["MCG"],
  "Hawthorn": ["Cazaly's Stadium"], "Melbourne": ["Traegar Park"], "Gold Coast": ["Marrara Oval", "Riverway Stadium"],
  "Greater Western Sydney": ["Manuka Oval"], "Tasmania Devils": ["York Park"], "Western Bulldogs": ["Eureka Stadium"],
};
const VENUE_ALIASES = new Map([
  ["mcg", "Melbourne Cricket Ground"], ["ds", "Docklands Stadium"], ["docklands", "Docklands Stadium"],
  ["kp", "Kardinia Park"], ["ao", "Adelaide Oval"], ["g", "Gabba"], ["gabba", "Gabba"],
  ["ps", "Perth Stadium"], ["scg", "Sydney Cricket Ground"], ["sss", "Sydney Showground Stadium"],
  ["cs (gc)", "Carrara Stadium"], ["pms", "Port Macquarie Stadium"], ["yp", "York Park"],
  ["mo (c)", "Manuka Oval"], ["manuka", "Manuka Oval"], ["cs (c)", "Cazaly's Stadium"],
  ["tp", "Traegar Park"], ["mo (d)", "Marrara Oval"], ["rs", "Riverway Stadium"], ["es", "Eureka Stadium"],
]);
const INTERSTATE = new Set(TEAMS.filter(team => team.type === "interstate").map(team => team.name));
const VIC = new Set(TEAMS.filter(team => team.type === "victorian").map(team => team.name));
const WA_TEAMS = new Set(["Fremantle", "West Coast"]);
const PAIRS = [["Adelaide", "Port Adelaide"], ["Brisbane", "Gold Coast"], ["Fremantle", "West Coast"], ["Greater Western Sydney", "Sydney"]];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

function inlineMarkdown(text) {
  let value = escapeHTML(text);
  value = value.replace(/`([^`]+)`/g, "<code>$1</code>");
  value = value.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  value = value.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  value = value.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => `<a href="${escapeHTML(href)}">${label}</a>`);
  return value;
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const output = [];
  let paragraph = [];
  let listType = "";
  let tableRows = [];
  const flushParagraph = () => {
    if (paragraph.length) output.push(`<p>${paragraph.map(inlineMarkdown).join("<br>")}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (listType) output.push(`</${listType}>`);
    listType = "";
  };
  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.filter(row => !/^\s*\|?\s*:?-{3,}/.test(row));
    if (rows.length) {
      const cells = row => row.trim().replace(/^\||\|$/g, "").split("|").map(cell => cell.trim());
      const header = cells(rows[0]);
      const body = rows.slice(1).map(cells);
      output.push(`<div class="source-table-wrap"><table><thead><tr>${header.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${body.map(row => `<tr>${header.map((_, index) => `<td>${inlineMarkdown(row[index] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
    }
    tableRows = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushParagraph(); flushList(); tableRows.push(trimmed); continue;
    }
    flushTable();
    if (!trimmed) { flushParagraph(); flushList(); continue; }
    const heading = /^(#{1,6})\s+(.+)$/.exec(trimmed);
    if (heading) {
      flushParagraph(); flushList();
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    if (/^---+$/.test(trimmed)) { flushParagraph(); flushList(); output.push("<hr>"); continue; }
    if (trimmed.startsWith(">")) {
      flushParagraph(); flushList();
      output.push(`<blockquote><p>${inlineMarkdown(trimmed.replace(/^>\s?/, ""))}</p></blockquote>`);
      continue;
    }
    const unordered = /^[-*+]\s+(.+)$/.exec(trimmed);
    const ordered = /^\d+\.\s+(.+)$/.exec(trimmed);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) { flushList(); output.push(`<${nextType}>`); listType = nextType; }
      output.push(`<li>${inlineMarkdown((unordered || ordered)[1])}</li>`);
      continue;
    }
    flushList(); paragraph.push(trimmed);
  }
  flushParagraph(); flushList(); flushTable();
  return output.join("\n");
}

function navigate(viewName) {
  const target = $(`#view-${viewName}`);
  if (!target) return;
  $$(".view").forEach(view => view.classList.toggle("active-view", view === target));
  $$(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === viewName));
  const navItem = $(`.nav-link[data-view="${viewName}"]`);
  $("#crumb-current").textContent = navItem?.textContent.trim().replace(/^\d+\s*/, "").toUpperCase() || "OVERVIEW";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDocIndex() {
  $("#doc-index").innerHTML = DOCS.map(doc => `<a class="doc-index-item" href="#source" data-open-doc="${doc.id}"><span class="doc-index-number">${doc.id}</span><strong>${escapeHTML(doc.title)}</strong><span>${escapeHTML(doc.short)}</span></a>`).join("");
}

function renderRules() {
  const filter = document.body.dataset.ruleFilter || "all";
  const query = $("#rule-search").value.trim().toLowerCase();
  const shown = RULES.filter(rule => (filter === "all" || rule.type === filter) && `${rule.id} ${rule.title} ${rule.text} ${rule.category}`.toLowerCase().includes(query));
  const groups = [
    { type: "absolute", title: "Absolute rules", note: "ALL MUST PASS" },
    { type: "preferential", title: "Preferential rules", note: "OPTIMISE WHERE POSSIBLE" },
  ];
  $("#rule-list").innerHTML = groups.map(group => {
    const rules = shown.filter(rule => rule.type === group.type);
    if (!rules.length) return "";
    return `<section class="rule-group ${group.type === "preferential" ? "rule-group-preferential" : ""}"><div class="rule-group-head"><h2>${group.title}</h2><span>${group.note} / ${rules.length}</span></div>${rules.map(rule => `<article class="rule-row"><span class="rule-id">${rule.id}</span><h3>${escapeHTML(rule.title)}</h3><p>${escapeHTML(rule.text)}</p><span class="rule-family">${escapeHTML(rule.category.toUpperCase())}</span></article>`).join("")}</section>`;
  }).join("") || `<p class="rule-group-empty">No rules match this search.</p>`;
}

function renderClarifications() {
  $("#clarifications").innerHTML = CLARIFICATIONS.map(item => `<article class="clarification"><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></article>`).join("");
}

function initials(name) {
  const words = name.replace("Greater Western Sydney", "GWS").split(/\s+/);
  return words.length > 1 ? `${words[0][0]}${words[1][0]}` : words[0].slice(0, 2).toUpperCase();
}

function renderTeamDetail(team) {
  if (!team) return;
  const matchup = MATCHUPS.find(row => row.team === team.name);
  const detail = $("#team-detail");
  detail.classList.toggle("interstate", team.type === "interstate");
  const doubleUps = matchup ? [...new Set([...matchup.regular, ...matchup.assigned, ...matchup.conditional.filter(name => name !== "TBD")])] : [];
  const secondary = SECONDARY_VENUES[team.name] || [];
  detail.innerHTML = `<div class="eyebrow">${team.type === "victorian" ? "VICTORIAN CLUB" : "INTERSTATE CLUB"} / BRACKET ${team.bracket}</div><h2>${escapeHTML(team.name)}</h2><div class="team-state">${team.state} / ${team.type.toUpperCase()} / LADDER BRACKET ${team.bracket}</div><div class="detail-pairs"><div><span>PRIMARY GROUND</span><strong>${escapeHTML(team.ground)}</strong></div><div><span>SECONDARY / CONTRACT</span><strong>${secondary.length ? escapeHTML(secondary.join(", ")) : "None listed"}</strong></div><div><span>DOUBLE-UP NAMES</span><strong>${doubleUps.length} resolved / 6 required</strong></div><div><span>CONDITIONAL</span><strong>${matchup?.conditional.includes("TBD") ? "TBD in source" : matchup?.conditional.length ? matchup.conditional.join(", ") : "None listed"}</strong></div></div>`;
}

function renderTeams() {
  const filter = document.body.dataset.teamFilter || "all";
  const query = $("#team-search").value.trim().toLowerCase();
  const selected = document.body.dataset.selectedTeam || TEAMS[0].name;
  const shown = TEAMS.filter(team => (filter === "all" || team.type === filter) && `${team.name} ${team.state} ${team.ground} ${team.bracket}`.toLowerCase().includes(query));
  $("#team-list").innerHTML = shown.length ? shown.map(team => `<button class="team-row ${team.type} ${team.name === selected ? "selected" : ""}" data-team="${escapeHTML(team.name)}"><span class="team-initial">${initials(team.name)}</span><span class="team-row-copy"><strong>${escapeHTML(team.name)}</strong><small>${escapeHTML(team.state)} / ${escapeHTML(team.ground)}</small></span><span class="team-bracket">${team.bracket}</span></button>`).join("") : `<p class="empty-state">No clubs match this search.</p>`;
  const chosen = TEAMS.find(team => team.name === selected) || shown[0] || TEAMS[0];
  renderTeamDetail(chosen);
}

function renderBrackets() {
  const brackets = ["A", "B", "C", "D", "E"];
  $("#bracket-strip").innerHTML = brackets.map(bracket => {
    const members = TEAMS.filter(team => team.bracket === bracket);
    const positions = { A: "1-4", B: "5-8", C: "9-12", D: "13-16", E: "17-19" }[bracket];
    return `<div class="bracket-block"><strong>BRACKET ${bracket}</strong><span>POSITIONS ${positions}</span><span class="bracket-members">${members.map(team => escapeHTML(team.name)).join(" / ")}</span></div>`;
  }).join("");
}

function chips(names, type) {
  return `<div class="opponent-list">${names.map(name => name === "TBD" ? `<span class="unresolved-chip">TBD / unresolved</span>` : `<span class="opponent-chip ${type}">${escapeHTML(name)}</span>`).join("") || `<span class="unresolved-chip">—</span>`}</div>`;
}

function renderMatchups() {
  const query = $("#matchup-search").value.trim().toLowerCase();
  const shown = MATCHUPS.filter(row => `${row.team} ${row.regular.join(" ")} ${row.assigned.join(" ")} ${row.conditional.join(" ")}`.toLowerCase().includes(query));
  $("#matchup-body").innerHTML = shown.map(row => `<tr><td>${escapeHTML(row.team)}</td><td>${chips(row.regular, "regular")}</td><td>${chips(row.assigned, "assigned")}</td><td>${chips(row.conditional.length ? row.conditional : ["—"], "conditional")}</td></tr>`).join("") || `<tr><td colspan="4">No match-ups found.</td></tr>`;
}

function renderVenues() {
  const query = $("#venue-search").value.trim().toLowerCase();
  const shown = VENUES.filter(venue => `${venue.name} ${venue.short} ${venue.location} ${venue.homes} ${venue.kind}`.toLowerCase().includes(query));
  $("#venue-count").textContent = `${shown.length} OF ${VENUES.length} GROUNDS`;
  $("#venue-body").innerHTML = shown.map(venue => `<tr><td>${escapeHTML(venue.name)}${venue.short ? ` <small>${escapeHTML(venue.short)}</small>` : ""}</td><td>${escapeHTML(venue.location)}</td><td>${escapeHTML(venue.homes)}</td><td><span class="venue-kind ${venue.kind === "Gather Round" ? "neutral" : ""}">${escapeHTML(venue.kind.toUpperCase())}</span></td></tr>`).join("") || `<tr><td colspan="4">No grounds found.</td></tr>`;
}

function renderVenueExtras() {
  const primary = VENUES.filter(venue => venue.kind === "Primary").length;
  const secondary = VENUES.filter(venue => venue.kind === "Secondary").length;
  const gather = VENUES.filter(venue => venue.kind === "Gather Round").length + 1;
  $("#venue-summary").innerHTML = `<div><strong>${primary}</strong><span>PRIMARY GROUNDS</span></div><div><strong>${secondary}</strong><span>SECONDARY GROUNDS</span></div><div><strong>${gather}</strong><span>GATHER ROUND GROUNDS</span></div><div><strong>01</strong><span>CONTRACT / COLLINGWOOD</span></div>`;
  $("#special-venues").innerHTML = SPECIAL_VENUES.map(item => `<article class="special-venue"><h3>${escapeHTML(item.title)}<span>${escapeHTML(item.rounds)}</span></h3><p>${escapeHTML(item.text)}</p></article>`).join("");
  $("#gather-grounds").innerHTML = ["Adelaide Oval", "Lyndoch Oval", "Summit Sports Park", "Norwood Oval"].map(name => `<span class="gather-ground">${escapeHTML(name)}</span>`).join("");
}

const DOC_CACHE = new Map();
async function getDoc(doc) {
  if (DOC_CACHE.has(doc.path)) return DOC_CACHE.get(doc.path);
  const response = await fetch(doc.path);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const text = await response.text();
  DOC_CACHE.set(doc.path, text);
  return text;
}

async function renderAllSourceDocs() {
  const container = $("#source-documents");
  const results = await Promise.allSettled(DOCS.map(getDoc));
  container.innerHTML = results.map((result, index) => {
    const doc = DOCS[index];
    const body = result.status === "fulfilled" ? `<div class="markdown-body">${renderMarkdown(result.value)}</div>` : `<div class="source-error">Could not load ${escapeHTML(doc.path)}. Serve the repository root over HTTP and reload. (${escapeHTML(result.reason.message)})</div>`;
    return `<details class="source-doc" id="source-doc-${doc.id}"><summary><span class="source-doc-num">${doc.id}</span><strong>${escapeHTML(doc.title)}</strong><small>${escapeHTML(doc.short)}</small></summary>${body}</details>`;
  }).join("");
}

let fixtureSections = new Map();
async function loadFixtureDoc() {
  const doc = DOCS.find(item => item.id === "06");
  try {
    const text = await getDoc(doc);
    const lines = text.split(/\r?\n/);
    let activeRound = null;
    let current = [];
    const save = () => { if (activeRound !== null) fixtureSections.set(activeRound, current.join("\n")); };
    for (const line of lines) {
      const heading = /^### Round (\d+)/.exec(line);
      if (heading) { save(); activeRound = Number(heading[1]); current = [line]; }
      else if (activeRound !== null && /^## /.test(line)) { save(); activeRound = null; current = []; }
      else if (activeRound !== null) current.push(line);
    }
    save();
    $("#base-document").innerHTML = `<div class="markdown-body">${renderMarkdown(text)}</div>`;
    renderRound(1);
  } catch (error) {
    $("#round-content").innerHTML = `<div class="source-error">Could not load the base fixture document: ${escapeHTML(error.message)}</div>`;
  }
}

function renderRound(round) {
  const text = fixtureSections.get(round);
  $("#selected-round-label").textContent = `ROUND ${round.toString().padStart(2, "0")}`;
  $$(".round-button").forEach(button => button.classList.toggle("selected", Number(button.dataset.round) === round));
  const content = $("#round-content");
  if (text) {
    $("#round-status").textContent = "DOCUMENTED";
    $("#round-status").className = "status-chip status-known";
    content.innerHTML = `<div class="markdown-body round-markdown">${renderMarkdown(text)}</div>`;
  } else {
    const isGap = [19, 20, 21, 25, 27].includes(round);
    $("#round-status").textContent = isGap ? "SOURCE GAP" : "NO ROUND SECTION";
    $("#round-status").className = `status-chip ${isGap ? "status-missing" : "status-blank"}`;
    const byeNote = round === 26 ? "The source documents Fremantle and West Coast as byes in Round 26." : "No match or bye rows are supplied for this round in the base-fixture document.";
    content.innerHTML = `<div class="round-gap"><span class="gap-round">${round.toString().padStart(2, "0")}</span><div><strong>${isGap ? "No fixture data supplied" : "No round section in source"}</strong><p>${byeNote}</p>${isGap ? `<a href="docs/06-base-fixture.md" target="_blank" rel="noreferrer">Open base-fixture source ↗</a>` : ""}</div></div>`;
  }
}

function renderRoundPicker() {
  const known = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 26]);
  $("#round-picker").innerHTML = Array.from({ length: 27 }, (_, index) => index + 1).map(round => `<button class="round-button ${known.has(round) ? "has-data" : "missing-data"} ${round === 1 ? "selected" : ""}" data-round="${round}" aria-label="Round ${round}${known.has(round) ? ", source section available" : ", no source section"}">${round.toString().padStart(2, "0")}</button>`).join("");
}

function setSolverTab(name) {
  $$(".solver-tab").forEach(tab => {
    const active = tab.dataset.solverTab === name;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  $$(".solver-panel").forEach(panel => {
    const active = panel.id === `solver-${name}`;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
}

function canonicalVenue(venue) {
  const value = String(venue || "").trim();
  return VENUE_ALIASES.get(value.toLowerCase()) || value;
}

function isoDay(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(date || ""))) return null;
  const parsed = new Date(`${date}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date ? null : parsed;
}

function auditSchedule(candidate) {
  const matches = Array.isArray(candidate.matches) ? candidate.matches : [];
  const byes = Array.isArray(candidate.byes) ? candidate.byes : [];
  const problems = [];
  const add = (rule, message) => problems.push({ rule, message });
  const matchesByTeam = new Map(TEAMS.map(team => [team.name, []]));
  const byesByTeam = new Map(TEAMS.map(team => [team.name, []]));
  const gamesByRound = new Map();
  const byeKeys = new Set();

  matches.forEach((match, index) => {
    const round = Number(match.round);
    if (!Number.isInteger(round) || round < 1 || round > 27) { add("INPUT", `Match ${index + 1} has invalid round '${match.round}'.`); return; }
    if (!TEAMS.some(team => team.name === match.home) || !TEAMS.some(team => team.name === match.away)) { add("INPUT", `Match ${index + 1}, Round ${round}: home/away must use exact team names.`); return; }
    if (match.home === match.away) { add("INPUT", `Round ${round}: ${match.home} cannot play itself.`); return; }
    const normalized = { ...match, round, venue: canonicalVenue(match.venue) };
    matchesByTeam.get(match.home).push({ ...normalized, side: "H", opponent: match.away });
    matchesByTeam.get(match.away).push({ ...normalized, side: "A", opponent: match.home });
    if (!gamesByRound.has(round)) gamesByRound.set(round, []);
    gamesByRound.get(round).push(normalized);
  });

  byes.forEach((bye, index) => {
    const round = Number(bye.round);
    if (!TEAMS.some(team => team.name === bye.team) || !Number.isInteger(round) || round < 1 || round > 27) { add("INPUT", `Bye ${index + 1} must have an exact team name and round 1-27.`); return; }
    const key = `${bye.team}|${round}`;
    if (byeKeys.has(key)) add("INPUT", `${bye.team} has a duplicate bye in Round ${round}.`);
    byeKeys.add(key);
    byesByTeam.get(bye.team).push(round);
  });

  const attendanceErrors = [];
  for (const team of TEAMS) {
    const appearances = new Map();
    for (const game of matchesByTeam.get(team.name)) appearances.set(game.round, (appearances.get(game.round) || 0) + 1);
    for (const [round, count] of appearances) if (count > 1) attendanceErrors.push(`${team.name} appears in ${count} games in Round ${round}.`);
    for (const round of byesByTeam.get(team.name)) if (appearances.has(round)) attendanceErrors.push(`${team.name} both plays and has a Bye in Round ${round}.`);
    for (const round of appearances.keys()) if (byeKeys.has(`${team.name}|${round}`)) attendanceErrors.push(`${team.name} both plays and has a Bye in Round ${round}.`);
  }
  const completeTeams = TEAMS.filter(team => {
    const rounds = new Set([...matchesByTeam.get(team.name).map(game => game.round), ...byesByTeam.get(team.name)]);
    return rounds.size === 27 && Array.from({ length: 27 }, (_, i) => i + 1).every(round => rounds.has(round));
  });
  const complete = completeTeams.length === TEAMS.length;
  const checkResults = [];
  const record = (id, title, status, detail = "") => checkResults.push({ id, title, status, detail });
  record("INPUT", "Input structure and team names", problems.some(item => item.rule === "INPUT") ? "FAIL" : "PASS", problems.filter(item => item.rule === "INPUT").map(item => item.message).join(" ") || `${matches.length} matches and ${byes.length} bye entries parsed.`);
  record("GRID", "One match or bye per team-round", attendanceErrors.length ? "FAIL" : complete ? "PASS" : "UNKNOWN", attendanceErrors.join(" ") || (complete ? "All 19 clubs account for all 27 rounds." : `${completeTeams.length}/19 clubs have a complete 27-round record; completeness is required for full validation.`));

  const allocationErrors = [];
  if (complete) for (const team of TEAMS) {
    const games = matchesByTeam.get(team.name);
    const home = games.filter(game => game.side === "H").length;
    const away = games.filter(game => game.side === "A").length;
    const teamByes = byesByTeam.get(team.name).length;
    if (home !== 12 || away !== 12 || teamByes !== 3) allocationErrors.push(`${team.name}: ${home}H/${away}A/${teamByes}B.`);
  }
  record("A1", "12 Home, 12 Away, 3 Byes", !complete ? "UNKNOWN" : allocationErrors.length ? "FAIL" : "PASS", !complete ? "Requires a complete 27-round schedule for every team." : allocationErrors.join(" ") || "Every club meets the exact season allocation.");

  const awayStreakErrors = [], interstateErrors = [], victorianAwayErrors = [], vicLocationErrors = [], waErrors = [];
  const locationFor = venue => VENUES.find(item => item.name.toLowerCase() === canonicalVenue(venue).toLowerCase())?.location || "";
  for (const team of TEAMS) {
    const events = [];
    for (let round = 1; round <= 27; round++) {
      const game = matchesByTeam.get(team.name).find(item => item.round === round);
      if (game) events.push(game);
      else if (byesByTeam.get(team.name).includes(round)) events.push({ round, side: "B", opponent: "", venue: "" });
    }
    let awayRun = 0, interstateAwayRun = 0, vicAwayInterstateRun = 0, vicTravelRun = 0;
    for (const event of events) {
      if (event.side === "B") { interstateAwayRun = 0; vicAwayInterstateRun = 0; vicTravelRun = 0; continue; }
      if (event.side === "A") {
        awayRun++;
        if (INTERSTATE.has(team.name)) interstateAwayRun++;
        else interstateAwayRun = 0;
        if (VIC.has(team.name) && INTERSTATE.has(event.opponent)) vicAwayInterstateRun++;
        else vicAwayInterstateRun = 0;
      } else {
        awayRun = 0; interstateAwayRun = 0; vicAwayInterstateRun = 0;
      }
      const location = locationFor(event.venue);
      const outsideVic = /, (?!VIC$)[A-Z]{2,3}$/.test(location) && !location.endsWith(", VIC");
      const gatherNeutral = event.round === 6 && VIC.has(team.name) && !["Adelaide Oval"].includes(canonicalVenue(event.venue)) && /SA$/.test(location);
      const vicTravel = VIC.has(team.name) && (outsideVic || gatherNeutral);
      vicTravelRun = vicTravel ? vicTravelRun + 1 : 0;
      if (awayRun > 3) awayStreakErrors.push(`${team.name} exceeds 3 consecutive Away games by Round ${event.round}.`);
      if (INTERSTATE.has(team.name) && interstateAwayRun > 2) interstateErrors.push(`${team.name} exceeds 2 consecutive Away games by Round ${event.round}.`);
      if (VIC.has(team.name) && vicAwayInterstateRun > 2) victorianAwayErrors.push(`${team.name} exceeds 2 consecutive Away games against Interstate teams by Round ${event.round}.`);
      if (vicTravelRun > 2) vicLocationErrors.push(`${team.name} exceeds 2 consecutive interstate-location games by Round ${event.round}.`);
    }
    const games = matchesByTeam.get(team.name).sort((a, b) => a.round - b.round);
    for (let index = 1; index < games.length; index++) {
      const previous = games[index - 1], current = games[index];
      const hasByeBetween = byesByTeam.get(team.name).some(round => round > previous.round && round < current.round);
      if (!hasByeBetween && current.round === previous.round + 1 && previous.side === "A" && current.side === "A" && WA_TEAMS.has(previous.opponent) && WA_TEAMS.has(current.opponent) && previous.opponent !== current.opponent) {
        waErrors.push(`${team.name} plays Away against Fremantle and West Coast in consecutive rounds ${previous.round}-${current.round}.`);
      }
    }
  }
  const seqStatus = complete ? (errors => errors.length ? "FAIL" : "PASS") : () => "UNKNOWN";
  record("A2", "Maximum 3 consecutive Away games", seqStatus(awayStreakErrors), !complete ? "Requires every round to distinguish consecutive games." : awayStreakErrors.join(" ") || "No Away streak exceeds three games.");
  record("A3", "Interstate Away streak maximum 2", seqStatus(interstateErrors), !complete ? "Requires complete round assignments; a Bye explicitly separates this travel streak." : interstateErrors.join(" ") || "No Interstate club exceeds two consecutive Away rounds without a Bye.");
  record("A4", "Victorian Away games vs Interstate maximum 2", seqStatus(victorianAwayErrors), !complete ? "Requires a complete schedule and opponent classifications." : victorianAwayErrors.join(" ") || "No Victorian club exceeds the documented consecutive-trip limit.");
  record("A5", "Victorian games at interstate locations maximum 2", seqStatus(vicLocationErrors), !complete ? "Requires every venue; Round 6 Victorian neutral Home games count as travel." : vicLocationErrors.join(" ") || "No Victorian club exceeds two consecutive interstate-location games.");
  record("A6", "No back-to-back Away games vs both WA clubs", complete ? (waErrors.length ? "FAIL" : "PASS") : "UNKNOWN", !complete ? "Requires complete opponents and Bye placement." : waErrors.join(" ") || "No consecutive Away sequence covers both WA opponents.");

  const byeErrors = [];
  if (complete) for (const team of TEAMS) {
    const rounds = byesByTeam.get(team.name).sort((a, b) => a - b);
    if (rounds.length !== 3) byeErrors.push(`${team.name} has ${rounds.length} Byes.`);
    if (rounds.length && rounds[0] > 16) byeErrors.push(`${team.name}'s first Bye is Round ${rounds[0]}.`);
    if (rounds.length === 3 && rounds.every(round => round < 16)) byeErrors.push(`${team.name} has all Byes before Round 16.`);
    for (let i = 1; i < rounds.length; i++) if (rounds[i] - rounds[i - 1] < 3) byeErrors.push(`${team.name}'s Byes in Rounds ${rounds[i - 1]} and ${rounds[i]} have fewer than two games between them.`);
  }
  const byesStatus = complete ? (byeErrors.length ? "FAIL" : "PASS") : "UNKNOWN";
  record("A7-A9", "Bye spacing and placement", byesStatus, !complete ? "Requires three known Byes per club." : byeErrors.join(" ") || "All Byes are correctly spaced and placed.");

  const opponentErrors = [], rematchErrors = [], hostErrors = [];
  for (const team of TEAMS) {
    const games = matchesByTeam.get(team.name);
    const byOpponent = new Map();
    games.forEach(game => { if (!byOpponent.has(game.opponent)) byOpponent.set(game.opponent, []); byOpponent.get(game.opponent).push(game); });
    const doubles = [...byOpponent.values()].filter(list => list.length === 2).length;
    const singles = [...byOpponent.values()].filter(list => list.length === 1).length;
    const invalidCounts = [...byOpponent.values()].some(list => list.length > 2);
    if (complete && (doubles !== 6 || singles !== 12 || invalidCounts)) opponentErrors.push(`${team.name}: ${doubles} double-ups, ${singles} single-ups.`);
    for (const [opponent, list] of byOpponent) {
      if (list.length > 1) {
        const sorted = [...list].sort((a, b) => a.round - b.round);
        for (let i = 1; i < sorted.length; i++) if (sorted[i].round - sorted[i - 1].round < 5) rematchErrors.push(`${team.name} vs ${opponent}: rounds ${sorted[i - 1].round} and ${sorted[i].round} are fewer than 5 rounds apart.`);
        if (list.filter(game => game.side === "H").length > 1) hostErrors.push(`${team.name} hosts ${opponent} more than once.`);
      }
    }
  }
  record("A10", "Six double-ups and twelve single-ups", complete ? (opponentErrors.length ? "FAIL" : "PASS") : "UNKNOWN", !complete ? "Requires all games. GWS's source double-up list also has an unresolved duplicate category." : opponentErrors.join(" ") || "Every club has the required opponent frequency.");
  record("A11", "At least 5 rounds between rematches", rematchErrors.length ? "FAIL" : complete ? "PASS" : "UNKNOWN", !complete && !rematchErrors.length ? "No observed short-spacing violation; full validation needs all matches." : rematchErrors.join(" ") || "All observed repeat pairings are spaced by at least five rounds.");
  record("A12", "Opponents host each other once", hostErrors.length ? "FAIL" : complete ? "PASS" : "UNKNOWN", !complete && !hostErrors.length ? "No observed duplicate hosting; full validation needs all matches." : hostErrors.join(" ") || "No club hosts a repeat opponent twice.");

  const missingDates = matches.filter(match => !isoDay(match.date)).length;
  const restErrors = [];
  for (const team of TEAMS) {
    const games = matchesByTeam.get(team.name).filter(game => isoDay(game.date)).sort((a, b) => a.date.localeCompare(b.date));
    for (let i = 1; i < games.length; i++) {
      const days = (isoDay(games[i].date) - isoDay(games[i - 1].date)) / 86400000;
      if (days < 6) restErrors.push(`${team.name}: ${games[i - 1].date} to ${games[i].date} leaves fewer than 5 full days off.`);
    }
  }
  record("A13", "At least 5 full days off", missingDates ? "UNKNOWN" : restErrors.length ? "FAIL" : complete ? "PASS" : "UNKNOWN", missingDates ? `${missingDates} of ${matches.length} matches lack a valid ISO date; A13 cannot be established.` : restErrors.join(" ") || (complete ? "All dates meet the rest interval." : "All supplied dates pass; complete fixture required for full validation."));

  const venueDay = new Map(), venueErrors = [], venueEligibilityErrors = [];
  for (const [round, games] of gamesByRound) for (const game of games) {
    const venue = game.venue;
    if (!venue || venue === "—" || venue.toLowerCase() === "tbd") { venueEligibilityErrors.push(`Round ${round}: ${game.home} vs ${game.away} has no venue.`); continue; }
    const day = game.date ? game.date : game.day ? game.day : `round-${round}`;
    const key = `${day}|${venue.toLowerCase()}`;
    if (venueDay.has(key)) venueErrors.push(`${venue} is assigned twice on ${day} (Rounds ${venueDay.get(key)} and ${round}).`);
    else venueDay.set(key, round);
    const allowed = [PRIMARY_VENUES[game.home], ...(SECONDARY_VENUES[game.home] || [])].map(canonicalVenue);
    const isGatherVenue = round === 6 && ["Adelaide Oval", "Lyndoch Oval", "Summit Sports Park", "Norwood Oval"].includes(venue);
    if (!allowed.includes(venue) && !(isGatherVenue && VIC.has(game.home))) venueEligibilityErrors.push(`Round ${round}: ${game.home} cannot host at ${venue} under the documented ground list.`);
    if (round === 6 && !["Adelaide Oval", "Lyndoch Oval", "Summit Sports Park", "Norwood Oval"].includes(venue)) venueEligibilityErrors.push(`Round 6: ${venue} is not a listed Gather Round venue.`);
    if (round === 6 && !VIC.has(game.home) && isGatherVenue && !allowed.includes(venue)) venueEligibilityErrors.push(`Round 6: only a Victorian team may host at a neutral Gather Round ground.`);
    if ((game.home === "Carlton" || game.home === "Essendon") && ["Collingwood", "Hawthorn", "Melbourne", "Richmond"].includes(game.away) && venue !== "Melbourne Cricket Ground") venueEligibilityErrors.push(`Round ${round}: ${game.home} vs ${game.away} must be at the MCG.`);
    if ([game.home, game.away].includes("Carlton") && [game.home, game.away].includes("Essendon") && venue !== "Melbourne Cricket Ground") venueEligibilityErrors.push(`Round ${round}: Carlton vs Essendon must be at the MCG.`);
    if (game.home === "Collingwood" && venue === "Docklands Stadium" && ["Carlton", "Essendon", "Hawthorn", "Melbourne", "Richmond"].includes(game.away)) venueEligibilityErrors.push(`Round ${round}: Collingwood cannot host ${game.away} at Docklands.`);
  }
  if (complete) {
    const docklandsHome = matches.filter(game => game.home === "Collingwood" && canonicalVenue(game.venue) === "Docklands Stadium").length;
    if (docklandsHome !== 2) venueEligibilityErrors.push(`Collingwood has ${docklandsHome} Docklands Home games; exactly 2 are required.`);
    const fixedSecondary = [["Gold Coast", 11, "Marrara Oval"], ["Gold Coast", 12, "Marrara Oval"], ["Gold Coast", 13, "Marrara Oval"], ["Gold Coast", 22, "Marrara Oval"], ["Gold Coast", 17, "Riverway Stadium"], ["Gold Coast", 18, "Riverway Stadium"], ["Hawthorn", 11, "Cazaly's Stadium"], ["Hawthorn", 12, "Cazaly's Stadium"], ["Hawthorn", 13, "Cazaly's Stadium"], ["Hawthorn", 22, "Cazaly's Stadium"], ["Melbourne", 11, "Traegar Park"], ["Melbourne", 12, "Traegar Park"], ["Melbourne", 13, "Traegar Park"], ["Melbourne", 22, "Traegar Park"], ["Greater Western Sydney", 8, "Manuka Oval"], ["Greater Western Sydney", 13, "Manuka Oval"], ["Greater Western Sydney", 22, "Manuka Oval"], ["Western Bulldogs", 13, "Eureka Stadium"], ["Western Bulldogs", 22, "Eureka Stadium"]];
    for (const [team, round, venue] of fixedSecondary) if (!matches.some(game => game.home === team && Number(game.round) === round && canonicalVenue(game.venue) === venue)) venueEligibilityErrors.push(`${team} is missing the documented Round ${round} Home game at ${venue}.`);
    const gwsCount = matches.filter(game => game.home === "Greater Western Sydney" && canonicalVenue(game.venue) === "Manuka Oval").length;
    if (gwsCount !== 4) venueEligibilityErrors.push(`GWS has ${gwsCount} Manuka Home games; exactly 4 are required.`);
  }
  record("A14", "Venue/day capacity", venueErrors.length ? "FAIL" : complete ? "PASS" : "UNKNOWN", !complete && !venueErrors.length ? "No observed venue/day collision; complete dates and venue assignments are required." : venueErrors.join(" ") || "No venue is used more than once on the same supplied day.");
  record("VENUE", "Home-ground eligibility and special obligations", venueEligibilityErrors.length ? "FAIL" : complete ? "PASS" : "UNKNOWN", !complete && !venueEligibilityErrors.length ? "No observed venue eligibility issue; exact secondary-ground counts need a complete fixture." : venueEligibilityErrors.join(" ") || "All checked Home grounds and fixed venue obligations are met.");

  const pairScores = [];
  for (const [first, second] of PAIRS) {
    for (let round = 1; round <= 27; round++) {
      const a = matchesByTeam.get(first).find(game => game.round === round);
      const b = matchesByTeam.get(second).find(game => game.round === round);
      if (a && b) pairScores.push(a.side !== b.side);
    }
  }
  record("P1", "Same-state pair balance", pairScores.length ? "INFO" : "UNKNOWN", pairScores.length ? `${pairScores.filter(Boolean).length}/${pairScores.length} observed paired rounds have one Home and one Away.` : "No paired rounds can yet be scored.");
  const alternations = [], nonAlternations = [];
  for (const name of INTERSTATE) {
    const games = matchesByTeam.get(name).sort((a, b) => a.round - b.round);
    for (let i = 1; i < games.length; i++) {
      if (games[i].round === games[i - 1].round + 1) {
        if (games[i].side !== games[i - 1].side) alternations.push(name);
        else nonAlternations.push(name);
      }
    }
  }
  record("P2", "Interstate Home/Away alternation", alternations.length + nonAlternations.length ? "INFO" : "UNKNOWN", alternations.length + nonAlternations.length ? `${alternations.length} observed alternations / ${nonAlternations.length} non-alternations in adjacent rounds. This is a preference, not a hard pass/fail.` : "No adjacent rounds can yet be scored.");

  const failures = checkResults.filter(item => item.status === "FAIL").length;
  const unknown = checkResults.filter(item => item.status === "UNKNOWN").length;
  const passes = checkResults.filter(item => item.status === "PASS").length;
  return { checks: checkResults, failures, unknown, passes, complete, problems };
}

function runAudit() {
  const resultNode = $("#audit-results");
  try {
    const candidate = JSON.parse($("#schedule-json").value || "{}");
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) throw new Error("Top-level JSON must be an object.");
    const result = auditSchedule(candidate);
    $("#audit-message").textContent = "Audit ran locally; nothing was uploaded.";
    resultNode.innerHTML = `<div class="audit-summary"><div><strong>${result.passes}</strong><span>PASS</span></div><div><strong>${result.failures}</strong><span>FAIL</span></div><div><strong>${result.unknown}</strong><span>UNKNOWN</span></div><div><strong>${result.complete ? "YES" : "NO"}</strong><span>27-ROUND COMPLETE</span></div></div>${result.checks.map(check => `<div class="audit-check"><span class="audit-check-id">${escapeHTML(check.id)}</span><span class="audit-check-title">${escapeHTML(check.title)}</span><span class="audit-status ${check.status === "PASS" || check.status === "INFO" ? "pass" : check.status === "FAIL" ? "fail" : "unknown"}">${escapeHTML(check.status)}</span><span class="audit-check-detail">${escapeHTML(check.detail)}</span></div>`).join("")}`;
  } catch (error) {
    $("#audit-message").textContent = "JSON could not be parsed.";
    resultNode.innerHTML = `<div class="source-error">${escapeHTML(error.message)}</div>`;
  }
}

function sourceSearch() {
  const query = $("#source-search").value.trim().toLowerCase();
  $$(".source-doc").forEach(doc => {
    const matches = !query || doc.textContent.toLowerCase().includes(query);
    doc.classList.toggle("no-results", !matches);
    if (query && matches) doc.open = true;
  });
}

function globalSearch() {
  const query = $("#global-search").value.trim();
  if (!query) return;
  const lower = query.toLowerCase();
  const ruleHit = RULES.some(rule => `${rule.id} ${rule.title} ${rule.text}`.toLowerCase().includes(lower));
  const teamHit = TEAMS.some(team => `${team.name} ${team.state} ${team.ground}`.toLowerCase().includes(lower));
  if (ruleHit && !teamHit) {
    navigate("rules"); $("#rule-search").value = query; renderRules();
  } else if (teamHit && !ruleHit) {
    navigate("teams"); $("#team-search").value = query; renderTeams();
  } else {
    navigate("source"); $("#source-search").value = query; sourceSearch();
    if (!DOC_CACHE.size) renderAllSourceDocs().then(sourceSearch);
  }
}

function bindEvents() {
  $$(".nav-link").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
  $$('[data-view-link="overview"]').forEach(link => link.addEventListener("click", event => { event.preventDefault(); navigate("overview"); }));
  $$('[data-go]').forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));
  $$("[data-open-doc]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault(); navigate("source");
    const doc = $(`#source-doc-${link.dataset.openDoc}`);
    if (doc) { doc.open = true; doc.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }));
  $$("[data-rule-filter]").forEach(button => button.addEventListener("click", () => {
    document.body.dataset.ruleFilter = button.dataset.ruleFilter;
    $$("[data-rule-filter]").forEach(item => item.classList.toggle("active", item === button)); renderRules();
  }));
  $$("[data-team-filter]").forEach(button => button.addEventListener("click", () => {
    document.body.dataset.teamFilter = button.dataset.teamFilter;
    $$("[data-team-filter]").forEach(item => item.classList.toggle("active", item === button)); renderTeams();
  }));
  $("#rule-search").addEventListener("input", renderRules);
  $("#team-search").addEventListener("input", renderTeams);
  $("#matchup-search").addEventListener("input", renderMatchups);
  $("#venue-search").addEventListener("input", renderVenues);
  $("#source-search").addEventListener("input", sourceSearch);
  $("#global-search").addEventListener("keydown", event => { if (event.key === "Enter") globalSearch(); });
  window.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) { event.preventDefault(); $("#global-search").focus(); }
    if (event.key === "Escape" && document.activeElement === $("#global-search")) $("#global-search").blur();
  });
  $("#round-picker").addEventListener("click", event => {
    const button = event.target.closest("[data-round]"); if (button) renderRound(Number(button.dataset.round));
  });
  $$(".solver-tab").forEach(button => button.addEventListener("click", () => setSolverTab(button.dataset.solverTab)));
  $("#team-list").addEventListener("click", event => {
    const button = event.target.closest("[data-team]"); if (!button) return;
    document.body.dataset.selectedTeam = button.dataset.team; renderTeams();
  });
  $("#load-schema").addEventListener("click", () => { $("#schedule-json").value = JSON.stringify({ matches: [], byes: [] }, null, 2); });
  $("#run-audit").addEventListener("click", runAudit);
}

function init() {
  renderDocIndex(); renderRules(); renderClarifications(); renderTeams(); renderBrackets(); renderMatchups(); renderVenues(); renderVenueExtras(); renderRoundPicker();
  bindEvents();
  renderAllSourceDocs();
  loadFixtureDoc();
}

init();