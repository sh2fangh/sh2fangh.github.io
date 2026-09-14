const agents = [
  {name:'Astra', role:'Controller', abilities:['Gravity Well','Nova Pulse','Nebula / Dissipate','Stars','Cosmic Divide']},
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
  {name:'Reyna', role:'Duelist', abilities:['Leer','Devour / Dismiss','Empress']},
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
  // Astra buys Stars, not separate uses of the three abilities that consume them.
  'Gravity Well':{fixed:true},'Nova Pulse':{fixed:true},'Nebula / Dissipate':{fixed:true},'Stars':{cost:150,max:5,free:1,noun:'STARS'},
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
  // Reyna's Soul Harvest shares one wheel slot: two purchasable Devours plus one free Dismiss.
  'Leer':{cost:250,max:2},'Devour / Dismiss':{cost:200,max:3,free:1,purchasableMax:2,noun:'CHARGES'},
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
const REGULAR_SPIN_RECHARGE_SECONDS = 15;
const state = {
  agent: agents.find(a => a.name === 'Jett'), results: [], held: new Set(), spinning: false,
  sound: true, budget:4500, weaponMode:'both', allowRespin:false, respinAvailable:false,
  rechargeRemaining:0, rechargeTimer:null
};

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
      const ability = state.agent.abilities.find(a => {
        const abilityName = typeof a === 'string' ? a : a.name;
        return normalizeName(abilityName) === normalizeName(item.value) || normalizeName(abilityName).includes(normalizeName(item.value));
      });
      item.icon = typeof ability === 'object' ? ability.icon : null;
    }
  });
  const badge = $('#agentInitial');
  if (state.agent.icon) badge.innerHTML = `<img src="${state.agent.icon}" alt="${state.agent.name} agent portrait" width="44" height="44" decoding="async" />`;
  const pickerBadge = $('#pickerAvatar');
  if (state.agent.icon) pickerBadge.innerHTML = `<img src="${state.agent.icon}" alt="" width="58" height="58" decoding="async" />`;
  renderReels();
}

function createResult(agent, heldResults = state.results) {
  const abilityItems = agent.abilities.map((ability, i) => {
    const name = typeof ability === 'string' ? ability : ability.name;
    const isUltimate = i === agent.abilities.length - 1;
    const utility = utilityData[name] || (isUltimate ? {ultimate:true} : {cost:0,max:1,free:1});
    return {kind:'ability', label:utility.ultimate ? 'ULTIMATE' : `ABILITY ${keys[i] || i + 1}`, value:name, cost:0,
      unitCost:utility.cost, maxUses:utility.max, freeUses:utility.free || 0,
      purchasableMax:utility.purchasableMax, noun:utility.noun, fixed:utility.fixed,
      ultimate:utility.ultimate, icon:typeof ability === 'string' ? null : ability.icon,
      fallback:utility.ultimate ? 'X' : keys[i] || String(i + 1)};
  });
  const heldCost = heldResults.reduce((sum, item, index) => state.held.has(index) ? sum + (item.available === false ? 0 : item.cost || 0) : sum, 0);
  let remaining = Math.max(0, state.budget - heldCost);
  const result = [];

  const chooseEquipment = (kind, pool, index, label) => {
    if (state.held.has(index) && heldResults[index]) return heldResults[index];
    const eligible = pool.filter(item => item.cost <= remaining);
    const choice = randomFrom(eligible);
    remaining -= choice.cost;
    return kind === 'weapon'
      ? {kind, label, value:choice.name, meta:`${choice.type} • ${formatCredits(choice.cost)}`, cost:choice.cost, icon:choice.icon, fallback:'W'}
      : {kind, label:'SHIELD', value:choice.name, meta:`${choice.hp} • ${formatCredits(choice.cost)}`, cost:choice.cost, icon:choice.icon, fallback:choice.cost ? 'S' : 'Ø'};
  };

  const sidearms = weapons.filter(weapon => weapon.type === 'Sidearm');
  const primaries = [{name:'No Primary',type:'Primary',cost:0,icon:null}, ...weapons.filter(weapon => weapon.type !== 'Sidearm')];
  if (state.weaponMode === 'primary' || state.weaponMode === 'both') {
    result.push(chooseEquipment('weapon', primaries, result.length, 'PRIMARY'));
  }
  if (state.weaponMode === 'secondary' || state.weaponMode === 'both') {
    result.push(chooseEquipment('weapon', sidearms, result.length, 'SECONDARY'));
  }
  result.push(chooseEquipment('shield', shields, result.length, 'SHIELD'));
  abilityItems.forEach((item, abilityIndex) => {
    const index = result.length;
    if (state.held.has(index) && heldResults[index]) { result.push(heldResults[index]); return; }
    if (item.ultimate) {
      item.quantity = 0;
      item.available = true;
      item.meta = 'ULT POINTS NOT INCLUDED';
      result.push(item);
      return;
    }
    if (item.fixed) {
      item.quantity = 1;
      item.maxUses = 1;
      item.available = true;
      item.meta = 'ACTIVATED WITH A STAR';
      result.push(item);
      return;
    }
    const purchasableUses = item.purchasableMax ?? Math.max(0, item.maxUses - item.freeUses);
    const affordableUses = item.unitCost === 0 ? purchasableUses : Math.min(purchasableUses, Math.floor(remaining / item.unitCost));
    const boughtUses = Math.floor(Math.random() * (affordableUses + 1));
    item.quantity = item.freeUses + boughtUses;
    item.cost = boughtUses * item.unitCost;
    item.available = item.quantity > 0;
    remaining -= item.cost;
    let usesLabel = `${item.quantity}/${item.maxUses} ${item.noun || (item.maxUses === 1 ? 'USE' : 'USES')}`;
    if (item.value === 'Devour / Dismiss') usesLabel = `1 DISMISS + ${boughtUses}/2 DEVOUR`;
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
  reels.classList.toggle('many-reels', state.results.length > 6);
  state.results.forEach((item, index) => {
    const reel = document.createElement('article');
    reel.className = `reel${state.held.has(index) ? ' held' : ''}${item.kind === 'ability' && !item.available ? ' is-locked' : ''}`;
    reel.dataset.kind = item.kind;
    reel.dataset.index = index;
    reel.title = state.held.has(index) ? 'Click to release reel' : 'Click to hold reel';
    const icon = item.icon ? `<img src="${item.icon}" alt="${item.value} ${item.kind} icon" width="66" height="56" loading="lazy" decoding="async" />` : item.fallback;
    const chargeMeter = item.kind === 'ability' && item.maxUses > 1 && !item.ultimate
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
  resetSpins();
  select.value = state.agent.name;
  $('#activeAgent').textContent = state.agent.name.toUpperCase();
  $('#activeRole').textContent = state.agent.role.toUpperCase();
  $('#agentInitial').textContent = state.agent.name.slice(0, 1);
  $('#pickerAvatar').textContent = state.agent.name.slice(0, 1);
  $('#roleDot').style.background = roleColors[state.agent.role];
  document.documentElement.style.setProperty('--agent', roleColors[state.agent.role]);
  state.results = createResult(state.agent, []);
  renderReels();
  if (state.agent.icon) $('#agentInitial').innerHTML = `<img src="${state.agent.icon}" alt="${state.agent.name} agent portrait" width="44" height="44" decoding="async" />`;
  if (state.agent.icon) $('#pickerAvatar').innerHTML = `<img src="${state.agent.icon}" alt="" width="58" height="58" decoding="async" />`;
}

function toggleHold(index) {
  if (state.spinning || !state.allowRespin || !state.respinAvailable) return;
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
  const isRespin = state.respinAvailable;
  if (state.spinning || (!isRespin && state.rechargeRemaining > 0)) return;
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
    if (isRespin) {
      state.respinAvailable = false;
      state.held.clear();
      updateSpinControls();
    } else {
      state.respinAvailable = state.allowRespin;
      startRegularSpinRecharge();
    }
    renderReels();
    playTone(520, .13);
  }, 950);
}

function resetSpins() {
  if (state.rechargeTimer) clearInterval(state.rechargeTimer);
  state.rechargeTimer = null;
  state.rechargeRemaining = 0;
  state.respinAvailable = false;
  updateSpinControls();
}

function startRegularSpinRecharge() {
  if (state.rechargeTimer) clearInterval(state.rechargeTimer);
  state.rechargeRemaining = REGULAR_SPIN_RECHARGE_SECONDS;
  updateSpinControls();
  state.rechargeTimer = setInterval(() => {
    state.rechargeRemaining--;
    if (state.rechargeRemaining <= 0) {
      clearInterval(state.rechargeTimer);
      state.rechargeTimer = null;
      state.rechargeRemaining = 0;
      state.respinAvailable = false;
      state.held.clear();
      renderReels();
    }
    updateSpinControls();
  }, 1000);
}

function updateSpinControls() {
  const recharging = state.rechargeRemaining > 0;
  const button = $('#spinButton');
  const waitingForRegularSpin = recharging && !state.respinAvailable;
  button.disabled = state.spinning || waitingForRegularSpin;
  button.querySelector('.spin-label').textContent = state.respinAvailable
    ? 'RESPIN LOADOUT'
    : recharging ? `SPIN IN ${state.rechargeRemaining}S` : 'SPIN LOADOUT';
  $('#spinCount').textContent = state.respinAvailable ? '1' : recharging ? `${state.rechargeRemaining}s` : '∞';
  $('#spinCount').setAttribute('aria-label', state.respinAvailable
    ? 'One instant respin available'
    : recharging ? `Next regular spin ready in ${state.rechargeRemaining} seconds` : 'Regular spin ready');
  $('#holdHint').textContent = state.respinAvailable
    ? 'CLICK REELS TO HOLD THEM FOR YOUR INSTANT RESPIN'
    : state.allowRespin ? 'SPIN TO UNLOCK ONE INSTANT HELD-REEL RESPIN' : 'OPTIONAL RESPIN IS DISABLED';
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
  resetSpins();
  document.querySelectorAll('.reel.held').forEach(reel => reel.classList.remove('held'));
  updateCostReadout();
});
$('#creditsInput').addEventListener('change', e => {
  e.target.value = state.budget;
});
$('#randomAgent').addEventListener('click', () => updateAgent(randomFrom(agents).name));
document.querySelectorAll('input[name="weaponMode"]').forEach(input => input.addEventListener('change', e => {
  state.weaponMode = e.target.value;
  state.held.clear();
  resetSpins();
  state.results = createResult(state.agent, []);
  renderReels();
}));
$('#allowRespin').addEventListener('change', e => {
  state.allowRespin = e.target.checked;
  if (!state.allowRespin) state.respinAvailable = false;
  state.held.clear();
  updateSpinControls();
  renderReels();
});
$('#spinButton').addEventListener('click', spin);
$('#copyButton').addEventListener('click', copyResult);
$('#soundButton').addEventListener('click', () => {
  state.sound = !state.sound;
  $('#soundButton').classList.toggle('muted', !state.sound);
  $('#soundButton').setAttribute('aria-pressed', String(state.sound));
});
updateAgent('Jett');
loadGameAssets();
