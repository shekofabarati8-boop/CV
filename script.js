document.addEventListener('DOMContentLoaded',function(){
  // Cache DOM queries for better performance
  const yearEl = document.getElementById('year');
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const form = document.getElementById('contact-form');

  // Set year - defer non-critical update
  if(yearEl){
    if('requestIdleCallback' in window){
      requestIdleCallback(()=>{ yearEl.textContent = new Date().getFullYear(); });
    } else {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Nav toggle for mobile
  if(navToggle && siteNav){
    navToggle.addEventListener('click',()=>{
      siteNav.classList.toggle('open');
    });
  }

  // Simple contact form handler (does not send server-side)
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      alert(`Takk ${name}! Skilaboðin þín hafa verið vistuð í tölvunni (ekki send).\nNotaðu netfang: ${email} til að svara.`);
      form.reset();
    });
  }
});
