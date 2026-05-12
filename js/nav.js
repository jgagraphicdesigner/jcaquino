(function(){
  const base = '/';
  const inSub = location.pathname.includes('/services/');
  const cur = location.pathname.replace(/\/+$/, '').split('/').pop() || 'home';

  /* Cursor */
  document.body.insertAdjacentHTML('afterbegin',`<div id="cursor"></div><div id="cursor-ring"></div>`);
  const c=document.getElementById('cursor'),r=document.getElementById('cursor-ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  (function loop(){
    rx+=(mx-rx)*.14;ry+=(my-ry)*.14;
    c.style.left=mx+'px';c.style.top=my+'px';
    r.style.left=rx+'px';r.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover',e=>{
    if(e.target.closest('a,button,.frost,.case-card,.svc-card,.pkg-card,.team-card,.signal-card,.process-step,.stat-box,.about-panel,.value')){
      c.style.transform='translate(-50%,-50%) scale(2)';r.style.width='52px';r.style.height='52px';
    } else {c.style.transform='translate(-50%,-50%) scale(1)';r.style.width='32px';r.style.height='32px';}
  });

  /* Nav */
  document.body.insertAdjacentHTML('afterbegin',`
  <nav id="site-nav">
    <a href="" class="nav-logo">JC <span>Aquino</span></a>
    <div class="nav-inner">
      <ul class="nav-center" id="nav-menu">
        <li><a href="" data-page="home">Home</a></li>
        <li class="has-dropdown" id="services-menu">
          <button data-page="services">Services
            <svg class="nav-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l4 4 4-4"/></svg>
          </button>
          <div class="nav-dropdown">
            <a href="services/ecom-ads/" data-page="ecom-ads">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></span>
              <span class="dd-text"><span class="dd-title">Ecom Ad Creative</span><span class="dd-sub">Static ads that convert</span></span>
            </a>
            <a href="services/ghl-funnels/" data-page="ghl-funnels">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></span>
              <span class="dd-text"><span class="dd-title">GHL Systems & Funnels</span><span class="dd-sub">Done-for-you GHL setups</span></span>
            </a>
            <a href="services/app-development/" data-page="app-development">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
              <span class="dd-text"><span class="dd-title">App Development</span><span class="dd-sub">Custom web apps & SaaS</span></span>
            </a>
            <a href="services/email-marketing/" data-page="email-marketing">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
              <span class="dd-text"><span class="dd-title">Email Marketing</span><span class="dd-sub">Campaigns that get results</span></span>
            </a>
            <a href="services/brand-identity/" data-page="brand-identity">
              <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg></span>
              <span class="dd-text"><span class="dd-title">Brand Identity</span><span class="dd-sub">Logos, systems & guidelines</span></span>
            </a>
            <a href="services/product-images-packaging-label-design/" data-page="product-images-packaging-label-design">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><path d="M4 7h16v10H4z"/><path d="M8 7V5h8v2M8 17v2h8v-2M8 11h8"/></svg></span>
              <span class="dd-text"><span class="dd-title">Product Images &amp; Packaging</span><span class="dd-sub">Product visuals, packaging &amp; labels</span></span>
            </a>
            <div class="dd-divider"></div>
            <a href="contact/" style="padding:8px 14px">
              <span class="dd-text"><span class="dd-title" style="color:var(--orange)">&rarr; Hire me</span><span class="dd-sub">Tell me about your project</span></span>
            </a>
          </div>
        </li>
        <li><a href="about/" data-page="about">About</a></li>
        <li><a href="work/" data-page="work">Work</a></li>
        <li><a href="process/" data-page="process">Process</a></li>
        <li><a href="https://www.upwork.com/freelancers/jovenchrisaquino?mp_source=share" class="nav-cta" data-page="contact" target="_blank" rel="noopener">Hire me &rarr;</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`);

  /* Footer */
  const footerYear = new Date().getFullYear();
  document.body.insertAdjacentHTML('beforeend',`
  <footer id="site-footer" aria-label="Site footer">
    <div class="footer-shell">
      <section class="footer-cta-panel" aria-label="Start a project">
        <div>
          <div class="footer-eyebrow">// Ready when you are</div>
          <h2>Let's build the next system that moves your brand.</h2>
          <p>Ad creative, funnels, brand identity, and custom apps shaped into one clear growth path.</p>
        </div>
        <a href="https://www.upwork.com/freelancers/jovenchrisaquino?mp_source=share" class="footer-action" target="_blank" rel="noopener">Hire me on Upwork -&gt;</a>
      </section>

      <div class="footer-main">
        <div class="footer-brand-block">
          <a href="" class="footer-logo" aria-label="JC Aquino home"><span>JC Aquino</span></a>
          <p>Creative and marketing partner for ecommerce brands, service businesses, and teams that need sharper design, practical systems, and measurable output.</p>
          <div class="footer-pills"><span>PH based</span><span>Global clients</span><span>Design + systems</span></div>
        </div>

        <nav class="footer-column" aria-label="Footer services">
          <h3>Services</h3>
          <a href="services/">All services</a>
          <a href="services/ecom-ads/">Ecommerce ad creative</a>
          <a href="services/product-images-packaging-label-design/">Product images &amp; packaging</a>
          <a href="services/ghl-funnels/">GHL systems &amp; funnels</a>
          <a href="services/app-development/">App development</a>
          <a href="services/email-marketing/">Email marketing</a>
          <a href="services/brand-identity/">Brand identity</a>
        </nav>

        <nav class="footer-column" aria-label="Footer profile links">
          <h3>Profile</h3>
          <a href="about/">About</a>
          <a href="work/">Work</a>
          <a href="process/">Process</a>
          <a href="https://www.upwork.com/freelancers/jovenchrisaquino?mp_source=share" target="_blank" rel="noopener">Hire me</a>
        </nav>

        <div class="footer-column footer-contact-block">
          <h3>Start here</h3>
          <p>Have a campaign, funnel, app, or identity system to build? Send the details and I'll map the cleanest next step.</p>
          <a href="https://www.upwork.com/freelancers/jovenchrisaquino?mp_source=share" class="footer-contact-link" target="_blank" rel="noopener">Hire me -&gt;</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${footerYear} JC Aquino. All rights reserved.</p>
        <div class="footer-bottom-links"><a href="">Home</a><a href="services/">Services</a><a href="https://www.upwork.com/freelancers/jovenchrisaquino?mp_source=share" target="_blank" rel="noopener">Hire me</a></div>
      </div>
    </div>
  </footer>`);


  /* Active page */
  document.querySelectorAll('[data-page]').forEach(el=>{
    const p=el.dataset.page;
    if(cur===p||(p==='services'&&inSub)){el.classList.add('active-page');el.closest('li')?.classList.add('active')}
  });

  /* Dropdown */
  const dd=document.getElementById('services-menu');
  if(dd){
    const ddButton = dd.querySelector('button');
    const hoverDropdown = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mobileDropdown = () => window.matchMedia('(max-width: 768px)').matches || document.getElementById('nav-menu')?.classList.contains('mobile-open');
    ddButton.addEventListener('click',e=>{
      e.preventDefault();
      e.stopPropagation();
      dd.classList.toggle('open');
    });
    document.addEventListener('click',()=>dd.classList.remove('open'));
    let ddTimer;
    dd.addEventListener('mouseenter',()=>{
      if(!hoverDropdown.matches || mobileDropdown()) return;
      clearTimeout(ddTimer);
      dd.classList.add('open');
    });
    dd.addEventListener('mouseleave',()=>{
      if(!hoverDropdown.matches || mobileDropdown()) return;
      ddTimer=setTimeout(()=>dd.classList.remove('open'),180);
    });
  }

  /* Hamburger */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if(hamburger) {
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('mobile-open');
    });
    document.addEventListener('click', e => {
      if(!e.target.closest('#site-nav')) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('mobile-open');
      }
    });
  }

  /* Scroll */
  const nav=document.getElementById('site-nav');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50),{passive:true});

  /* Reveal */
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* Counters */
  function animCount(el){
    const t=parseInt(el.dataset.target),s=el.dataset.suffix||'+',d=1600;
    const step=ts=>{
      if(!step.s)step.s=ts;
      const p=Math.min((ts-step.s)/d,1),ease=1-Math.pow(1-p,3);
      el.textContent=Math.round(ease*t)+s;
      if(p<1)requestAnimationFrame(step);
    };requestAnimationFrame(step);
  }
  const cio=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){animCount(e.target);cio.unobserve(e.target)}});
  },{threshold:.5});
  document.querySelectorAll('[data-target]').forEach(el=>cio.observe(el));
  /* HTML5 interactive layer */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  document.body.classList.add('html5-ready');

  const progress = document.createElement('div');
  progress.className = 'html5-progress';
  progress.setAttribute('aria-hidden', 'true');
  progress.innerHTML = '<span></span>';
  document.body.appendChild(progress);
  const progressBar = progress.firstElementChild;

  function updateProgress(){
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - window.innerHeight);
    const amount = Math.min(1, Math.max(0, window.scrollY / max));
    progressBar.style.transform = 'scaleX(' + amount + ')';
  }
  updateProgress();
  window.addEventListener('scroll', updateProgress, {passive:true});
  window.addEventListener('resize', updateProgress, {passive:true});

  const canvas = document.createElement('canvas');
  canvas.className = 'html5-stage';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext('2d');
  const pointer = { x: window.innerWidth * .68, y: window.innerHeight * .38, active: false };
  let dpr = 1;
  let particles = [];
  let frameId = 0;

  function makeParticles(){
    const area = window.innerWidth * window.innerHeight;
    const total = Math.max(34, Math.min(92, Math.round(area / 22000)));
    particles = Array.from({length: total}, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .22,
      vy: (Math.random() - .5) * .18,
      size: i % 7 === 0 ? 3 : 2,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function resizeCanvas(){
    if(!ctx) return;
    dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    makeParticles();
    if(reduceMotion) drawStage(0);
  }

  function drawGrid(ts){
    const gap = window.innerWidth < 760 ? 64 : 48;
    const drift = (ts * .012 + window.scrollY * .06) % gap;
    ctx.save();
    ctx.globalAlpha = .13;
    ctx.strokeStyle = 'rgba(255,77,0,.45)';
    ctx.lineWidth = 1;
    for(let x = -gap + drift; x < window.innerWidth + gap; x += gap){
      ctx.beginPath(); ctx.moveTo(Math.round(x) + .5, 0); ctx.lineTo(Math.round(x) + .5, window.innerHeight); ctx.stroke();
    }
    for(let y = -gap + drift; y < window.innerHeight + gap; y += gap){
      ctx.beginPath(); ctx.moveTo(0, Math.round(y) + .5); ctx.lineTo(window.innerWidth, Math.round(y) + .5); ctx.stroke();
    }
    ctx.restore();
  }

  function drawStage(ts){
    frameId = 0;
    if(!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawGrid(ts || 0);

    for(let i = 0; i < particles.length; i++){
      const p = particles[i];
      if(!reduceMotion){
        p.x += p.vx;
        p.y += p.vy;
        if(p.x < -12) p.x = window.innerWidth + 12;
        if(p.x > window.innerWidth + 12) p.x = -12;
        if(p.y < -12) p.y = window.innerHeight + 12;
        if(p.y > window.innerHeight + 12) p.y = -12;
        if(pointer.active){
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy);
          if(dist < 180 && dist > 1){
            const pull = (1 - dist / 180) * .45;
            p.x -= (dx / dist) * pull;
            p.y -= (dy / dist) * pull;
          }
        }
      }
      const pulse = Math.sin((ts || 0) * .003 + p.phase) * .8;
      ctx.fillStyle = i % 5 === 0 ? 'rgba(245,240,232,.42)' : 'rgba(255,77,0,.68)';
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size + Math.max(0, pulse), p.size + Math.max(0, pulse));
    }

    ctx.save();
    ctx.lineWidth = 1;
    for(let a = 0; a < particles.length; a++){
      for(let b = a + 1; b < particles.length; b++){
        const pa = particles[a], pb = particles[b];
        const dx = pa.x - pb.x, dy = pa.y - pb.y;
        const dist = Math.hypot(dx, dy);
        if(dist < 128){
          ctx.globalAlpha = (1 - dist / 128) * .19;
          ctx.strokeStyle = 'rgba(255,114,38,.85)';
          ctx.beginPath(); ctx.moveTo(pa.x + 1, pa.y + 1); ctx.lineTo(pb.x + 1, pb.y + 1); ctx.stroke();
        }
      }
    }
    ctx.restore();

    if(pointer.active){
      ctx.save();
      ctx.globalAlpha = .25;
      ctx.strokeStyle = 'rgba(255,77,0,.95)';
      ctx.lineWidth = 1;
      const s = 24 + Math.sin((ts || 0) * .006) * 5;
      ctx.strokeRect(Math.round(pointer.x - s / 2) + .5, Math.round(pointer.y - s / 2) + .5, s, s);
      ctx.restore();
    }

    if(!reduceMotion && !document.hidden) frameId = requestAnimationFrame(drawStage);
  }

  if(ctx){
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, {passive:true});
    window.addEventListener('pointermove', e => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true; }, {passive:true});
    window.addEventListener('pointerleave', () => { pointer.active = false; }, {passive:true});
    if(!reduceMotion) frameId = requestAnimationFrame(drawStage);
    document.addEventListener('visibilitychange', () => {
      if(!document.hidden && !reduceMotion && !frameId) frameId = requestAnimationFrame(drawStage);
    });
  }

  const tiltTargets = document.querySelectorAll('.frost,.svc-card,.case-card,.pkg-card,.team-card,.signal-card,.process-step,.stat-box,.about-panel,.value');
  tiltTargets.forEach(el => {
    el.classList.add('html5-tilt');
    if(!Array.from(el.children).some(child => child.classList.contains('html5-glint'))){
      const glint = document.createElement('span');
      glint.className = 'html5-glint';
      glint.setAttribute('aria-hidden', 'true');
      el.appendChild(glint);
    }
    if(reduceMotion || coarsePointer) return;
    el.addEventListener('pointermove', e => {
      const rect = el.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      const y = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
      const tiltX = ((x - .5) * 8).toFixed(2) + 'deg';
      const tiltY = ((.5 - y) * 8).toFixed(2) + 'deg';
      el.style.setProperty('--tilt-x', tiltX);
      el.style.setProperty('--tilt-y', tiltY);
      el.style.setProperty('--spot-x', (x * 100).toFixed(1) + '%');
      el.style.setProperty('--spot-y', (y * 100).toFixed(1) + '%');
      el.style.transform = 'perspective(900px) rotateX(' + tiltY + ') rotateY(' + tiltX + ') translateY(-4px)';
      el.classList.add('is-tilting');
    }, {passive:true});
    el.addEventListener('pointerleave', () => {
      el.classList.remove('is-tilting');
      el.style.removeProperty('--tilt-x');
      el.style.removeProperty('--tilt-y');
      el.style.removeProperty('transform');
    }, {passive:true});
  });

  document.addEventListener('click', e => {
    const target = e.target.closest('.btn-primary,.btn-ghost,.nav-cta,.html5-tilt');
    if(!target || reduceMotion) return;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'html5-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.setProperty('--ripple-x', (e.clientX - rect.left) + 'px');
    ripple.style.setProperty('--ripple-y', (e.clientY - rect.top) + 'px');
    target.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 720);
  });
})();
