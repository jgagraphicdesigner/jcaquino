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
    if(e.target.closest('a,button,.frost,.case-card,.svc-card,.pkg-card')){
      c.style.transform='translate(-50%,-50%) scale(2)';r.style.width='52px';r.style.height='52px';
    } else {c.style.transform='translate(-50%,-50%) scale(1)';r.style.width='32px';r.style.height='32px';}
  });

  /* Nav */
  document.body.insertAdjacentHTML('afterbegin',`
  <nav id="site-nav">
    <a href="/" class="nav-logo"><img src="/JGA_logo.svg" alt="JGA Studios" class="nav-logo-img"></a>
    <div class="nav-inner">
      <ul class="nav-center" id="nav-menu">
        <li><a href="/" data-page="home">Home</a></li>
        <li class="has-dropdown" id="services-menu">
          <button data-page="services">Services
            <svg class="nav-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l4 4 4-4"/></svg>
          </button>
          <div class="nav-dropdown">
            <a href="/services/ecom-ads/" data-page="ecom-ads">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></span>
              <span class="dd-text"><span class="dd-title">Ecom Ad Creative</span><span class="dd-sub">Static ads that convert</span></span>
            </a>
            <a href="/services/ghl-funnels/" data-page="ghl-funnels">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></span>
              <span class="dd-text"><span class="dd-title">GHL Systems & Funnels</span><span class="dd-sub">Done-for-you GHL setups</span></span>
            </a>
            <a href="/services/app-development/" data-page="app-development">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
              <span class="dd-text"><span class="dd-title">App Development</span><span class="dd-sub">Custom web apps & SaaS</span></span>
            </a>
            <a href="/services/email-marketing/" data-page="email-marketing">
              <span class="dd-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
              <span class="dd-text"><span class="dd-title">Email Marketing</span><span class="dd-sub">Campaigns that get results</span></span>
            </a>
            <a href="/services/brand-identity/" data-page="brand-identity">
              <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg></span>
              <span class="dd-text"><span class="dd-title">Brand Identity</span><span class="dd-sub">Logos, systems & guidelines</span></span>
            </a>
            <div class="dd-divider"></div>
            <a href="/contact/" style="padding:8px 14px">
              <span class="dd-text"><span class="dd-title" style="color:var(--orange)">→ Get a free quote</span><span class="dd-sub">Tell us about your project</span></span>
            </a>
          </div>
        </li>
        <li><a href="/work/" data-page="work">Work</a></li>
        <li><a href="/process/" data-page="process">Process</a></li>
        <li><a href="/contact/" class="nav-cta" data-page="contact">Let\'s talk →</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`);

  /* Footer */
  document.body.insertAdjacentHTML('beforeend',`
  <footer id="site-footer">
    <a href="/" class="footer-logo"><img src="/JGA_logo.svg" alt="JGA Studios" class="footer-logo-img"></a>
    <div class="footer-wired">JGA STUDIOS</div>
    <nav class="footer-links">
      <a href="/services/ecom-ads/">Ad Creative</a>
      <a href="/services/ghl-funnels/">GHL Funnels</a>
      <a href="/services/app-development/">App Dev</a>
      <a href="/services/email-marketing/">Email</a>
      <a href="/services/brand-identity/">Brand Identity</a>
      <a href="/work/">Work</a>
      <a href="/contact/">Contact</a>
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
})();
