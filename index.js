let number = +prompt(
    "Istalgan soningizni kiriting biz uni jufut yoki toq ekanligini aniqlab beramiz."
  );
  
  while (isNaN(number)) {
    number = +prompt("Bu son emas, iltimos son kiriting!");
  }
  
  while (number == 0) {
    number = +prompt("Bu son emas, iltimos son kiriting!");
  }
  
  if (number % 2 == 1) {
    alert("Bu son toq");
  } else {
    alert("Bu son juft");
  }
  
  let qiymat = +prompt("Iltimos, qiymatni kiriting.");
  
  while (isNaN(qiymat)) {
    qiymat = +prompt("Qiymat son ko'rinishida bo'lishi kerak!");
  }
  
  while (qiymat == 0) {
    qiymat = +prompt("0 dan boshqa son kiriting");
  }
  let daraja = +prompt("Daraja uchun son kirinting.");
  while (isNaN(daraja)) {
    daraja = +prompt("Daraja son ko'rinishida bo'lishi kerak!");
  }
  
  if (qiymat > 0) {
    alert("Natija " + qiymat ** daraja);
  } else {
    alert("Xatolik bor qaytadan urung");
  }
  
  
