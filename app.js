const agents = [
  {name:'Astra', role:'Controller', abilities:['Gravity Well','Nova Pulse','Nebula / Dissipate','Astral Form / Cosmic Divide']},
  {name:'Breach', role:'Initiator', abilities:['Aftershock','Flashpoint','Fault Line','Rolling Thunder']},
  {name:'Brimstone', role:'Controller', abilities:['Stim Beacon','Incendiary','Sky Smoke','Orbital Strike']},
  {name:'Chamber', role:'Sentinel', abilities:['Trademark','Headhunter','Rendezvous','Tour De Force']},
  {name:'Clove', role:'Controller', abilities:['Pick-me-up','Meddle','Ruse','Not Dead Yet']},
  {name:'Cypher', role:'Sentinel', abilities:['Trapwire','Cyber Cage','Spycam','Neural Theft']},
  {name:'Deadlock', role:'Sentinel', abilities:['Barrier Mesh','Sonic Sensor','GravNet','Annihilation']},
  {name:'Fade', role:'Initiator', abilities:['Prowler','Seize','Haunt','Nightfall']},
  {name:'Gekko', role:'Initiator', abilities:['Mosh Pit','Wingman','Dizzy','Thrash']},
  {name:'Harbor', role:'Controller', abilities:['Storm Surge','High Tide','Cove','Reckoning']},
  {name:'Iso', role:'Duelist', abilities:['Contingency','Undercut','Double Tap','Kill Contract']},
  {name:'Jett', role:'Duelist', abilities:['Cloudburst','Updraft','Tailwind','Blade Storm']},
  {name:'KAY/O', role:'Initiator', abilities:['FRAG/ment','FLASH/drive','ZERO/point','NULL/cmd']},
  {name:'Killjoy', role:'Sentinel', abilities:['Nanoswarm','Alarmbot','Turret','Lockdown']},
  {name:'Miks', role:'Controller', abilities:['M-pulse','Harmonize','Waveform','Bassquake']},
  {name:'Neon', role:'Duelist', abilities:['Fast Lane','Relay Bolt','High Gear','Overdrive']},
  {name:'Omen', role:'Controller', abilities:['Shrouded Step','Paranoia','Dark Cover','From the Shadows']},
  {name:'Phoenix', role:'Duelist', abilities:['Blaze','Curveball','Hot Hands','Run it Back']},
  {name:'Raze', role:'Duelist', abilities:['Boom Bot','Blast Pack','Paint Shells','Showstopper']},
  {name:'Reyna', role:'Duelist', abilities:['Leer','Devour','Dismiss','Empress']},
  {name:'Sage', role:'Sentinel', abilities:['Barrier Orb','Slow Orb','Healing Orb','Resurrection']},
  {name:'Skye', role:'Initiator', abilities:['Regrowth','Trailblazer','Guiding Light','Seekers']},
  {name:'Sova', role:'Initiator', abilities:['Owl Drone','Shock Bolt','Recon Bolt','Hunter’s Fury']},
  {name:'Tejo', role:'Initiator', abilities:['Special Delivery','Stealth Drone','Guided Salvo','Armageddon']},
  {name:'Veto', role:'Sentinel', abilities:['Chokehold','Crosscut','Interceptor','Evolution']},
  {name:'Viper', role:'Controller', abilities:['Snake Bite','Poison Cloud','Toxic Screen','Viper’s Pit']},
  {name:'Vyse', role:'Sentinel', abilities:['Razorvine','Shear','Arc Rose','Steel Garden']},
  {name:'Waylay', role:'Duelist', abilities:['Saturate','Lightspeed','Refract','Convergent Paths']},
  {name:'Yoru', role:'Duelist', abilities:['Fakeout','Blindside','Gatecrash','Dimensional Drift']}
];

const weapons = [
  ['Classic','Sidearm',0],['Shorty','Sidearm',300],['Frenzy','Sidearm',450],['Ghost','Sidearm',500],['Bandit','Sidearm',600],['Sheriff','Sidearm',800],
  ['Stinger','SMG',1100],['Spectre','SMG',1600],['Bucky','Shotgun',850],['Judge','Shotgun',1850],
  ['Bulldog','Rifle',2050],['Guardian','Rifle',2250],['Phantom','Rifle',2900],['Vandal','Rifle',2900],
  ['Marshal','Sniper',950],['Outlaw','Sniper',2400],['Operator','Sniper',4700],['Ares','Heavy',1600],['Odin','Heavy',3200]
].map(([name, type, cost]) => ({name, type, cost, icon:null}));
const shields = [
  {name:'No Shield', hp:'0 HP', cost:0, icon:null},
  {name:'Light Shield', hp:'25 HP', cost:400, icon:null},
  {name:'Regen Shield', hp:'25 + 50 reserve', cost:650, icon:null},
  {name:'Heavy Shield', hp:'50 HP', cost:1000, icon:null}
];
const utilityData = {
  'Gravity Well':{cost:150,max:1,free:1},'Nova Pulse':{cost:150,max:1},'Nebula / Dissipate':{cost:150,max:2},
  'Aftershock':{cost:200,max:1},'Flashpoint':{cost:250,max:2},'Fault Line':{cost:0,max:1,free:1},
  'Stim Beacon':{cost:200,max:1},'Incendiary':{cost:250,max:1},'Sky Smoke':{cost:100,max:3,free:1},
  'Trademark':{cost:200,max:1},'Headhunter':{cost:100,max:8},'Rendezvous':{cost:0,max:1,free:1},
  'Meddle':{cost:250,max:1},'Ruse':{cost:150,max:2,free:1},'Pick-me-up':{cost:200,max:1},
  'Trapwire':{cost:200,max:2},'Cyber Cage':{cost:100,max:2},'Spycam':{cost:0,max:1,free:1},
  'Barrier Mesh':{cost:300,max:1},'Sonic Sensor':{cost:200,max:2},'GravNet':{cost:0,max:1,free:1},
  'Prowler':{cost:250,max:2},'Seize':{cost:200,max:1},'Haunt':{cost:0,max:1,free:1},
  'Mosh Pit':{cost:250,max:1},'Wingman':{cost:300,max:1},'Dizzy':{cost:0,max:1,free:1},
  'Storm Surge':{cost:200,max:1},'High Tide':{cost:300,max:1},'Cove':{cost:0,max:1,free:1},
  'Contingency':{cost:200,max:1},'Undercut':{cost:300,max:1},'Double Tap':{cost:0,max:1,free:1},
  'Cloudburst':{cost:200,max:2},'Updraft':{cost:150,max:1},'Tailwind':{cost:0,max:1,free:1},
  'FRAG/ment':{cost:200,max:1},'FLASH/drive':{cost:250,max:2},'ZERO/point':{cost:0,max:1,free:1},
  'Nanoswarm':{cost:200,max:2},'Alarmbot':{cost:200,max:1},'Turret':{cost:0,max:1,free:1},
  'M-pulse':{cost:300,max:2},'Harmonize':{cost:200,max:1},'Waveform':{cost:100,max:2,free:1},
  'Relay Bolt':{cost:250,max:1},'Fast Lane':{cost:250,max:1},'High Gear':{cost:0,max:1,free:1},
  'Shrouded Step':{cost:100,max:2},'Paranoia':{cost:250,max:1},'Dark Cover':{cost:150,max:2,free:1},
  'Blaze':{cost:150,max:1},'Hot Hands':{cost:200,max:1},'Curveball':{cost:250,max:2,free:1},
  'Boom Bot':{cost:300,max:1},'Blast Pack':{cost:200,max:2},'Paint Shells':{cost:0,max:1,free:1},
  'Leer':{cost:250,max:2},'Devour':{cost:200,max:2,free:1},'Dismiss':{cost:200,max:2},
  'Barrier Orb':{cost:300,max:1},'Slow Orb':{cost:200,max:2},'Healing Orb':{cost:0,max:1,free:1},
  'Regrowth':{cost:150,max:1},'Trailblazer':{cost:300,max:1},'Guiding Light':{cost:250,max:2,free:1},
  'Shock Bolt':{cost:150,max:2},'Owl Drone':{cost:400,max:1},'Recon Bolt':{cost:0,max:1,free:1},
  'Special Delivery':{cost:200,max:1},'Stealth Drone':{cost:400,max:1},'Guided Salvo':{cost:150,max:2,free:1},
  'Chokehold':{cost:200,max:1},'Crosscut':{cost:200,max:2},'Interceptor':{cost:0,max:1,free:1},
  'Snake Bite':{cost:300,max:1},'Poison Cloud':{cost:200,max:1},'Toxic Screen':{cost:0,max:1,free:1},
  'Razorvine':{cost:150,max:2},'Shear':{cost:200,max:1},'Arc Rose':{cost:0,max:1,free:1},
  'Saturate':{cost:300,max:1},'Lightspeed':{cost:300,max:1},'Refract':{cost:0,max:1,free:1},
  'Fakeout':{cost:200,max:1},'Blindside':{cost:250,max:1},'Gatecrash':{cost:150,max:2,free:1}
};
const roleColors = {Duelist:'#ff665f',Initiator:'#f3c969',Controller:'#9b7cff',Sentinel:'#53e7db'};
const keys = ['C','Q','E','X'];
const state = { agent: agents.find(a => a.name === 'Jett'), results: [], held: new Set(), spinning: false, sound: true, budget:4500 };

const $ = (selector) => document.querySelector(selector);
const select = $('#agentSelect');
agents.forEach(agent => select.add(new Option(`${agent.name} — ${agent.role}`, agent.name)));
select.value = state.agent.name;

function randomFrom(list) { return list[Math.floor(Math.random() * list.length)]; }
function normalizeName(value) { return value.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]/g, ''); }

async function loadGameAssets() {
  try {
    const [agentResponse, weaponResponse, gearResponse] = await Promise.all([
      fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true'),
      fetch('https://valorant-api.com/v1/weapons'),
      fetch('https://valorant-api.com/v1/gear')
    ]);
    const [agentPayload, weaponPayload, gearPayload] = await Promise.all([
      agentResponse.json(), weaponResponse.json(), gearResponse.json()
    ]);

    weaponPayload.data.forEach(asset => {
      const weapon = weapons.find(item => normalizeName(item.name) === normalizeName(asset.displayName));
      if (!weapon) return;
      weapon.icon = asset.displayIcon;
      if (Number.isFinite(asset.shopData?.cost)) weapon.cost = asset.shopData.cost;
    });
    gearPayload.data.forEach(asset => {
      const assetName = normalizeName(asset.displayName).replace(/armor$/, 'shield').replace(/shields$/, 'shield');
      const shield = shields.find(item => normalizeName(item.name) === assetName);
      if (!shield) return;
      shield.icon = asset.displayIcon;
      if (Number.isFinite(asset.shopData?.cost)) shield.cost = asset.shopData.cost;
    });
    agentPayload.data.forEach(asset => {
      const agent = agents.find(item => normalizeName(item.name) === normalizeName(asset.displayName));
      if (!agent) return;
      agent.icon = asset.displayIcon;
      agent.abilities = agent.abilities.map(name => {
        const currentName = typeof name === 'string' ? name : name.name;
        const match = asset.abilities.find(ability => normalizeName(ability.displayName) === normalizeName(currentName));
        return {name:currentName, icon:match?.displayIcon || null};
      });
    });
    decorateCurrentResults();
  } catch (_) {
    // Text fallbacks keep the roulette fully usable if the asset service is unavailable.
  }
}

function decorateCurrentResults() {
  state.results.forEach(item => {
    if (item.kind === 'weapon') item.icon = weapons.find(w => w.name === item.value)?.icon || null;
    if (item.kind === 'shield') item.icon = shields.find(s => s.name === item.value)?.icon || null;
    if (item.kind === 'ability') {
      const ability = state.agent.abilities.find(a => normalizeName(typeof a === 'string' ? a : a.name) === normalizeName(item.value));
      item.icon = typeof ability === 'object' ? ability.icon : null;
    }
  });
  const badge = $('#agentInitial');
  if (state.agent.icon) badge.innerHTML = `<img src="${state.agent.icon}" alt="${state.agent.name}" />`;
  const pickerBadge = $('#pickerAvatar');
  if (state.agent.icon) pickerBadge.innerHTML = `<img src="${state.agent.icon}" alt="" />`;
  renderReels();
}

function createResult(agent, heldResults = state.results) {
  const heldSoulCharge = heldResults.find((item, index) => state.held.has(index) && ['Devour','Dismiss'].includes(item.value) && item.freeUses > 0);
  const reynaFreeAbility = agent.name === 'Reyna' ? (heldSoulCharge?.value || randomFrom(['Devour','Dismiss'])) : null;
  const abilityItems = agent.abilities.map((ability, i) => {
    const name = typeof ability === 'string' ? ability : ability.name;
    let utility = utilityData[name] || {cost:0,max:1,free:0};
    if (['Devour','Dismiss'].includes(name)) utility = {cost:200,max:1,free:name === reynaFreeAbility ? 1 : 0};
    return {kind:'ability', label:`ABILITY ${keys[i] || i + 1}`, value:name, cost:0,
      unitCost:utility.cost, maxUses:utility.max, freeUses:utility.free || 0,
      icon:typeof ability === 'string' ? null : ability.icon, fallback:keys[i] || String(i + 1)};
  });
  const heldCost = heldResults.reduce((sum, item, index) => state.held.has(index) ? sum + (item.available === false ? 0 : item.cost || 0) : sum, 0);
  let remaining = Math.max(0, state.budget - heldCost);
  const result = [];

  const chooseEquipment = (kind, pool, index) => {
    if (state.held.has(index) && heldResults[index]) return heldResults[index];
    const eligible = pool.filter(item => item.cost <= remaining);
    const choice = randomFrom(eligible.length ? eligible : pool.filter(item => item.cost === 0));
    remaining -= choice.cost;
    return kind === 'weapon'
      ? {kind, label:'WEAPON', value:choice.name, meta:`${choice.type} • ${formatCredits(choice.cost)}`, cost:choice.cost, icon:choice.icon, fallback:'W'}
      : {kind, label:'SHIELD', value:choice.name, meta:`${choice.hp} • ${formatCredits(choice.cost)}`, cost:choice.cost, icon:choice.icon, fallback:choice.cost ? 'S' : 'Ø'};
  };

  result.push(chooseEquipment('weapon', weapons, 0));
  result.push(chooseEquipment('shield', shields, 1));
  abilityItems.forEach((item, abilityIndex) => {
    const index = abilityIndex + 2;
    if (state.held.has(index) && heldResults[index]) { result.push(heldResults[index]); return; }
    const purchasableUses = Math.max(0, item.maxUses - item.freeUses);
    const affordableUses = item.unitCost === 0 ? purchasableUses : Math.min(purchasableUses, Math.floor(remaining / item.unitCost));
    const boughtUses = Math.floor(Math.random() * (affordableUses + 1));
    item.quantity = item.freeUses + boughtUses;
    item.cost = boughtUses * item.unitCost;
    item.available = item.quantity > 0;
    remaining -= item.cost;
    const usesLabel = `${item.quantity}/${item.maxUses} ${item.maxUses === 1 ? 'USE' : 'USES'}`;
    if (!item.available) item.meta = `${usesLabel} • LOCKED`;
    else if (item.cost === 0 && item.freeUses) item.meta = `${usesLabel} • FREE BASE`;
    else item.meta = `${usesLabel} • ${formatCredits(item.cost)}`;
    result.push(item);
  });
  return result;
}

function formatCredits(value) { return `${Number(value).toLocaleString()} CR`; }

function resultCost() {
  return state.results.reduce((sum, item) => sum + (item.available === false ? 0 : item.cost || 0), 0);
}

function renderReels() {
  const reels = $('#reels');
  reels.innerHTML = '';
  state.results.forEach((item, index) => {
    const reel = document.createElement('article');
    reel.className = `reel${state.held.has(index) ? ' held' : ''}${item.kind === 'ability' && !item.available ? ' is-locked' : ''}`;
    reel.dataset.kind = item.kind;
    reel.dataset.index = index;
    reel.title = state.held.has(index) ? 'Click to release reel' : 'Click to hold reel';
    const icon = item.icon ? `<img src="${item.icon}" alt="" />` : item.fallback;
    const chargeMeter = item.kind === 'ability' && item.maxUses > 1
      ? `<span class="charge-meter" role="img" aria-label="${item.quantity} of ${item.maxUses} uses">${Array.from({length:item.maxUses}, (_, chargeIndex) => `<i class="${chargeIndex >= item.maxUses - item.quantity ? 'filled' : ''}"></i>`).join('')}</span>`
      : '';
    reel.innerHTML = `<div class="reel-top"><span class="reel-type">${item.label}</span><span>0${index + 1}</span></div>
      <div class="reel-main"><div class="reel-visual"><span class="reel-icon">${icon}</span>${chargeMeter}</div><div class="reel-value"><b>${item.value}</b><small>${item.meta}</small></div></div>`;
    const image = reel.querySelector('img');
    if (image) image.addEventListener('error', () => { image.parentElement.textContent = item.fallback; });
    reel.addEventListener('click', () => toggleHold(index));
    reels.appendChild(reel);
  });
  updateCostReadout();
}

function updateCostReadout() {
  const cost = resultCost();
  $('#loadoutCost').textContent = cost.toLocaleString();
  $('#budgetTotal').textContent = state.budget.toLocaleString();
  document.querySelector('.cost-readout').classList.toggle('over-budget', cost > state.budget);
}

function updateAgent(name) {
  state.agent = agents.find(a => a.name === name) || agents[0];
  state.held.clear();
  select.value = state.agent.name;
  $('#activeAgent').textContent = state.agent.name.toUpperCase();
  $('#activeRole').textContent = state.agent.role.toUpperCase();
  $('#agentInitial').textContent = state.agent.name.slice(0, 1);
  $('#pickerAvatar').textContent = state.agent.name.slice(0, 1);
  $('#roleDot').style.background = roleColors[state.agent.role];
  document.documentElement.style.setProperty('--agent', roleColors[state.agent.role]);
  state.results = createResult(state.agent, []);
  renderReels();
  if (state.agent.icon) $('#agentInitial').innerHTML = `<img src="${state.agent.icon}" alt="${state.agent.name}" />`;
  if (state.agent.icon) $('#pickerAvatar').innerHTML = `<img src="${state.agent.icon}" alt="" />`;
}

function toggleHold(index) {
  if (state.spinning) return;
  state.held.has(index) ? state.held.delete(index) : state.held.add(index);
  renderReels();
  playTone(240, .035);
}

function playTone(frequency = 180, duration = .05) {
  if (!state.sound) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.type = 'square'; osc.frequency.value = frequency;
    gain.gain.setValueAtTime(.025, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + duration);
    osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration);
  } catch (_) { /* Sound is a progressive enhancement. */ }
}

function spin() {
  if (state.spinning) return;
  state.spinning = true;
  $('#spinButton').disabled = true;
  const next = createResult(state.agent);
  const reelNodes = [...document.querySelectorAll('.reel')];
  reelNodes.forEach((node, i) => { if (!state.held.has(i)) node.classList.add('spinning'); });
  let ticks = 0;
  const ticker = setInterval(() => {
    ticks++;
    reelNodes.forEach((node, i) => {
      if (state.held.has(i)) return;
      const temp = createResult(state.agent)[i];
      const value = node.querySelector('.reel-value b');
      if (value && temp) value.textContent = temp.value;
    });
    playTone(125 + ticks * 7, .028);
    if (ticks >= 13) clearInterval(ticker);
  }, 65);

  setTimeout(() => {
    state.results = state.results.map((old, i) => state.held.has(i) ? old : next[i]);
    state.spinning = false;
    $('#spinButton').disabled = false;
    renderReels();
    playTone(520, .13);
  }, 950);
}

function copyResult() {
  const lines = [`VAL//WHEEL — ${state.agent.name.toUpperCase()} (${state.agent.role})`, `BUDGET: ${formatCredits(state.budget)} • SPENT: ${formatCredits(resultCost())}`];
  state.results.forEach(item => lines.push(`${item.label}: ${item.value} — ${item.meta}`));
  const text = lines.join('\n');
  const done = () => {
    $('#toast').classList.add('show');
    setTimeout(() => $('#toast').classList.remove('show'), 1800);
  };
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  else fallbackCopy(text, done);
}

function fallbackCopy(text, done) {
  const area = document.createElement('textarea'); area.value = text; document.body.appendChild(area);
  area.select(); document.execCommand('copy'); area.remove(); done();
}

select.addEventListener('change', e => updateAgent(e.target.value));
$('#creditsInput').addEventListener('input', e => {
  const value = Math.max(0, Math.min(9000, Number(e.target.value) || 0));
  state.budget = value;
  state.held.clear();
  document.querySelectorAll('.reel.held').forEach(reel => reel.classList.remove('held'));
  updateCostReadout();
});
$('#creditsInput').addEventListener('change', e => {
  e.target.value = state.budget;
});
$('#randomAgent').addEventListener('click', () => updateAgent(randomFrom(agents).name));
$('#spinButton').addEventListener('click', spin);
$('#copyButton').addEventListener('click', copyResult);
$('#soundButton').addEventListener('click', () => {
  state.sound = !state.sound;
  $('#soundButton').classList.toggle('muted', !state.sound);
  $('#soundButton').setAttribute('aria-pressed', String(state.sound));
});
updateAgent('Jett');
loadGameAssets();
