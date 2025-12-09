document.addEventListener('DOMContentLoaded',function(){
  // set year
  const yearElement = document.getElementById('year');
  if(yearElement) yearElement.textContent = new Date().getFullYear();

  // nav toggle for mobile
  const navigationToggleButton = document.getElementById('nav-toggle');
  const siteNavigation = document.getElementById('site-nav');
  if(navigationToggleButton && siteNavigation){
    navigationToggleButton.addEventListener('click',()=>{
      siteNavigation.classList.toggle('open');
    });
  }

  // simple contact form handler (does not send server-side)
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit',function(event){
      event.preventDefault();
      const submitterName = contactForm.name.value.trim();
      const submitterEmail = contactForm.email.value.trim();
      alert(`Takk ${submitterName}! Skilaboðin þín hafa verið vistuð í tölvunni (ekki send).\nNotaðu netfang: ${submitterEmail} til að svara.`);
      contactForm.reset();
    });
  }
});
