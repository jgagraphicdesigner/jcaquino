(function(){
  const inSub = location.pathname.includes('/services/');
  const base = inSub ? '../' : './';
  const cur = location.pathname.split('/').pop() || 'index.html';

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
    if(e.target.closest('a,button,.frost,.case-card,.svc-card,.pkg-card')){
      c.style.transform='translate(-50%,-50%) scale(2)';r.style.width='52px';r.style.height='52px';
    } else {c.style.transform='translate(-50%,-50%) scale(1)';r.style.width='32px';r.style.height='32px';}
  });

  /* Nav */
  document.body.insertAdjacentHTML('afterbegin',`
  <nav id="site-nav">
    <div class="nav-inner">
    <a href="${base}index.html" class="nav-logo">JC<span>.</span></a>
    <ul class="nav-center">
      <li><a href="${base}index.html" data-page="index.html">Home</a></li>
      <li class="has-dropdown" id="services-menu">
        <button data-page="services">Services
          <svg class="nav-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l4 4 4-4"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="${base}services/ecom-ads.html" data-page="ecom-ads.html">
            <span class="dd-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></span>
            <span class="dd-text"><span class="dd-title">Ecom Ad Creative</span><span class="dd-sub">Static ads that convert</span></span>
          </a>
          <a href="${base}services/ghl-funnels.html" data-page="ghl-funnels.html">
            <span class="dd-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></span>
            <span class="dd-text"><span class="dd-title">GHL Systems & Funnels</span><span class="dd-sub">Done-for-you GHL setups</span></span>
          </a>
          <a href="${base}services/app-development.html" data-page="app-development.html">
            <span class="dd-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
            <span class="dd-text"><span class="dd-title">App Development</span><span class="dd-sub">Custom web apps & SaaS</span></span>
          </a>
          <a href="${base}services/email-marketing.html" data-page="email-marketing.html">
            <span class="dd-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
            <span class="dd-text"><span class="dd-title">Email Marketing</span><span class="dd-sub">Campaigns that get results</span></span>
          </a>
          <div class="dd-divider"></div>
          <a href="${base}contact.html" style="padding:8px 14px">
            <span class="dd-text"><span class="dd-title" style="color:var(--orange)">→ Get a free quote</span><span class="dd-sub">Tell me about your project</span></span>
          </a>
        </div>
      </li>
      <li><a href="${base}work.html" data-page="work.html">Work</a></li>
      <li><a href="${base}process.html" data-page="process.html">Process</a></li>
      <li><a href="${base}contact.html" data-page="contact.html">Contact</a></li>
    </ul>
    <a href="${base}contact.html" class="nav-cta">Let's talk →</a>
    </div>
  </nav>`);

  /* Footer */
  document.body.insertAdjacentHTML('beforeend',`
  <footer id="site-footer">
    <a href="${base}index.html" class="footer-logo">JC<span>.</span></a>
    <div class="footer-wired">THE &ldquo;WIRED&rdquo; DESIGNER</div>
    <nav class="footer-links">
      <a href="${base}services/ecom-ads.html">Ad Creative</a>
      <a href="${base}services/ghl-funnels.html">GHL Funnels</a>
      <a href="${base}services/app-development.html">App Dev</a>
      <a href="${base}services/email-marketing.html">Email</a>
      <a href="${base}work.html">Work</a>
      <a href="${base}contact.html">Contact</a>
    </nav>
  </footer>`);

  /* Active page */
  document.querySelectorAll('[data-page]').forEach(el=>{
    const p=el.dataset.page;
    if(cur===p||(p==='services'&&inSub)){el.classList.add('active-page');el.closest('li')?.classList.add('active')}
  });

  /* Dropdown */
  const dd=document.getElementById('services-menu');
  if(dd){
    dd.querySelector('button').addEventListener('click',e=>{e.stopPropagation();dd.classList.toggle('open')});
    document.addEventListener('click',()=>dd.classList.remove('open'));
    let ddTimer;
    dd.addEventListener('mouseenter',()=>{clearTimeout(ddTimer);dd.classList.add('open');});
    dd.addEventListener('mouseleave',()=>{ddTimer=setTimeout(()=>dd.classList.remove('open'),180);});
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
})();
