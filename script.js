document.addEventListener('DOMContentLoaded',function(){
  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click',()=>{
      siteNav.classList.toggle('open');
    });
  }

  // simple contact form handler (does not send server-side)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      alert(`Takk ${name}! Skilaboðin þín hafa verið vistuð í tölvunni (ekki send).\nNotaðu netfang: ${email} til að svara.`);
      form.reset();
    });
  }
});
