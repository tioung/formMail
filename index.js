const contactForm=document.querySelector('.contact-form')

contactForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const name=contactForm.name.value
  const email=contactForm.email.value
  const subject=contactForm.subject.value
  const telephone=contactForm.telephone.value
  const message=contactForm.message.value

  // console.log(name, email, subject, telephone, message)

  Email.send({
    Host: "smtp.gmail.com",
    Username: "dakchoy@gmail.com",
    Password: "txscgswevqbzxhiy",
    To: 'dakchoy@gmail.com',
    From: `${email}`,
    Subject: `Kindwood: ${subject}`,
    Body: `Name: ${name}, Email: ${email}, Subject: ${subject}, Tel: ${telephone}<br><br>
          Message: ${message}`,
  })
  .then(function (message) {
    alert("Thank you for your email. We will get back to you soon")
  });

  contactForm.reset()
})
