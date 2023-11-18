
const switchIconos = document.querySelector('.switch__iconos');

switchIconos.addEventListener('click', (e) => {

  function eventDel(e) {
  if(e.target === switchIconos.children[0]) {
    console.log(switchIconos.children[0]);
    switchIconos.children[0].style.opacity = '1';
    switchIconos.children[1].classList.replace('mostrar', 'ocultar');
    switchIconos.children[2].classList.replace('mostrar', 'ocultar');
    
    const tema1 = {
      name: 'tema 1',
      $menufondo: 'hsl(222, 26%, 31%)',
      $fondocal: 'hsl(223, 31%, 20%)',
      $pantallafondo: 'hsl(224, 36%, 15%)',
      $fondodelyres: 'hsl(225, 21%, 49%)',
     $sombradelyres: 'hsl(224, 28%, 35%)',
      $fondoigual: 'hsl(6, 63%, 50%)',
      $sombraigual: 'hsl(6, 70%, 34%)',
     $teclafondo: 'hsl(30, 25%, 89%)',
      $teclasombra: 'hsl(28, 16%, 65%)',
      $colortecla: 'hsl(221, 14%, 31%)',
      $blanco: 'hsl(0, 0%, 100%)',
      $numero: 'hsl(221, 14%, 31%)',
    }
    
    const body = document.querySelector('body');
    body.style.backgroundColor = tema1.$menufondo;
    const logo = document.querySelector('.calculadora__logo');
    logo.style.color = tema1.$blanco;
    const temaText = document.querySelector('.tema__text');
    temaText.style.color = tema1.$blanco;
    const switchCirculos = document.querySelectorAll('.circulos__switch');
    switchCirculos.forEach(circulo => {
      circulo.style.backgroundColor = tema1.$fondoigual;
      });
    const switchNums = document.querySelectorAll('.switch__nums');
    switchNums.forEach(nums => {
      nums.style.color = tema1.$blanco;
    });
    const pantalla = document.querySelector('.pantalla__contenedor');
    pantalla.style.backgroundColor = tema1.$pantallafondo;
    const pantallaText = document.querySelectorAll('.pantalla__text');
    pantallaText.forEach(text => {
      text.style.color = 'hsl(0, 0%, 100%)';
    });
    const teclasContenedor = document.querySelector('.teclas__contenedor');
    teclasContenedor.style.backgroundColor = tema1.$fondocal;
    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
      boton.style.backgroundColor = tema1.$teclafondo;
      boton.style.borderColor = tema1.$teclasombra;
      boton.style.color = tema1.$colortecla;
    });
    const signo = document.querySelectorAll('.signo');
    signo.forEach(signo => {
      signo.style.backgroundColor = tema1.$teclafondo;
      signo.style.borderColor = tema1.$teclasombra;
      signo.style.color = tema1.$colortecla;
    });
    const del = document.querySelector('#del');
    del.style.backgroundColor = tema1.$fondodelyres;
    del.style.borderColor = tema1.$sombradelyres;
    del.style.color = tema1.$blanco;
    const reset = document.querySelector('#reset');
    reset.style.backgroundColor = tema1.$fondodelyres;
    reset.style.borderColor = tema1.$sombradelyres;
    reset.style.color = tema1.$blanco;
    const igual = document.querySelector('#igual');
    igual.style.backgroundColor = tema1.$fondoigual;
    igual.style.borderColor =  tema1.$sombraigual;    

      } else if ( e.target === switchIconos.children[1]) {
    console.log(switchIconos.children[1]);
    switchIconos.children[1].classList.replace('ocultar', 'mostrar');
    switchIconos.children[0].style.opacity = '0.1';
    switchIconos.children[2].classList.replace('mostrar', 'ocultar');
    
    const $teclafondo2 = 'hsl(30, 25%, 89%)';
    const $teclasombra2 = 'hsl(28, 16%, 65%)';
    const $colortecla2 = 'hsl(221, 14%, 31%)';
    const $blanco2 = 'hwb(0 100% 0%)';
    const $menufondo2 = 'hsl(0, 0%, 90%)';
    const $fondocal2 = 'hsl(0, 5%, 81%)';
    const $pantallafondo2 = 'hsl(0, 0%, 93%)';
    const $fondodelyres2 = 'hsl(185, 42%, 37%)';
    const $sombradelyres2 = 'hsl(185, 58%, 25%)';
    const $fondoigual2 = 'hsl(25, 98%, 40%)';
    const $sombraigual2 = 'hsl(25, 99%, 27%)';
    
    const tema2 = {
      $name: 'tema 2',
      $menufondo:$menufondo2,
      $fondocal:$fondocal2,
      $pantallafondo:$pantallafondo2,
      $fondodelyres:$fondodelyres2,
      $sombradelyres:$sombradelyres2,
      $fondoigual:$fondoigual2,
      $sombraigual:$sombraigual2,
      $colortecla:$colortecla2,
      $blanco:$blanco2,
      $teclafondo:$teclafondo2,
      $teclasombra:$teclasombra2,
    }
    
    const body = document.querySelector('body');
    body.style.backgroundColor = tema2.$menufondo;
    const logo = document.querySelector('.calculadora__logo');
    logo.style.color = tema2.$colortecla;
    const temaText = document.querySelector('.tema__text');
    temaText.style.color = tema2.$colortecla;
    const switchCirculos = document.querySelectorAll('.circulos__switch');
    switchCirculos.forEach(circulo => {
    circulo.style.backgroundColor = tema2.$fondoigual;
    });
    const switchNums = document.querySelectorAll('.switch__nums');
    switchNums.forEach(nums => {
    nums.style.color = tema2.$colortecla;
    });
    const pantalla = document.querySelector('.pantalla__contenedor');
    pantalla.style.backgroundColor = tema2.$pantallafondo;
    const pantallaText = document.querySelectorAll('.pantalla__text');
    pantallaText.forEach(text => {
      text.style.color = tema2.$colortecla;
    });
    const teclasContenedor = document.querySelector('.teclas__contenedor');
    teclasContenedor.style.backgroundColor = tema2.$pantallafondo;
    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
      boton.style.backgroundColor = tema2.$teclafondo;
      boton.style.borderColor = tema2.$teclasombra;
      boton.style.color = tema2.$colortecla;
    });
    const signo = document.querySelectorAll('.signo');
    signo.forEach(signo => {
      signo.style.backgroundColor = tema2.$teclafondo;
      signo.style.borderColor = tema2.$teclasombra;
      signo.style.color = tema2.$colortecla;
    });
    const del = document.querySelector('#del');
    del.style.backgroundColor = tema2.$fondodelyres;
    del.style.borderColor = tema2.$sombradelyres;
    del.style.color = tema2.$blanco;
    const reset = document.querySelector('#reset');
    reset.style.backgroundColor = tema2.$fondodelyres;
    reset.style.borderColor = tema2.$sombradelyres;
    reset.style.color = tema2.$blanco;
    const igual = document.querySelector('#igual');
    igual.style.backgroundColor = tema2.$fondoigual;
    igual.style.borderColor =  tema2.$sombraigual;    
     } 
     else if ( e.target === switchIconos.children[2]) {
    console.log(switchIconos.children[2]);  
          switchIconos.children[2].classList.replace('ocultar', 'mostrar');
          switchIconos.children[1].classList.replace('mostrar', 'ocultar');
          switchIconos.children[0].style.opacity = '0.1';
            
          const $menufondo3 =  'hsl(268, 75%, 9%)';
          const $fondocal3 =  'hsl(268, 71%, 12%)';
          const $teclafondo3 = 'hsl(268, 47%, 21%)';
          const $teclasombra3 = 'hsl(285, 91%, 52%)';
          const $fondoigual3 = 'hsl(176, 100%, 44%)';
          const $sombraigual3 = 'hsl(177, 92%, 70%)';
          const $fondodelyres3 = 'hsl(281, 89%, 26%)'
          const $sombradelyres3 = 'hsl(290, 70%, 36%)';
          const $colortecla3 = 'hsl(52, 100%, 62%)';
          const $blanco3 = 'hsl(0, 0, 100%)';
            
          const tema3 = {
            name: 'tema 3',
            $menufondo: $menufondo3,
            $fondocal:  $fondocal3,
            $pantallafondo:  $fondocal3,
            $fondodelyres:  $fondodelyres3,
            $sombradelyres:  $sombradelyres3,
            $fondoigual:   $fondoigual3,
            $sombraigual: $sombraigual3,
            $colortecla:  $colortecla3,
           $teclafondo:  $teclafondo3,
            $teclasombra:  $teclasombra3,
            $blanco:  $blanco3,
          }
          const body = document.querySelector('body');
          body.style.backgroundColor = tema3.$menufondo;
          const logo = document.querySelector('.calculadora__logo');
          logo.style.color = tema3.$colortecla;
          const temaText = document.querySelector('.tema__text');
          temaText.style.color = tema3.$colortecla;
          const switchCirculos = document.querySelectorAll('.circulos__switch');
          switchCirculos.forEach(circulo => {
            circulo.style.backgroundColor = tema3.$fondoigual;
          });
          const switchNums = document.querySelectorAll('.switch__nums');
          switchNums.forEach(nums => {
            nums.style.color = tema3.$colortecla;
          });
          const pantalla = document.querySelector('.pantalla__contenedor');
          pantalla.style.backgroundColor = tema3.$pantallafondo;
          const pantallaText = document.querySelectorAll('.pantalla__text');
          pantallaText.forEach(text => {
            text.style.color = tema3.$colortecla;
          });
          const teclasContenedor = document.querySelector('.teclas__contenedor');
          teclasContenedor.style.backgroundColor = tema3.$pantallafondo;
          const botones = document.querySelectorAll('button');
          botones.forEach(boton => {
            boton.style.backgroundColor = tema3.$teclafondo;
            boton.style.borderColor = tema3.$teclasombra;
            boton.style.color = tema3.$colortecla;
          });
          const del = document.querySelector('#del');
          del.style.backgroundColor = tema3.$fondodelyres;
          del.style.borderColor = tema3.$teclasombra;
          del.style.color = tema3.$blanco;
          const reset = document.querySelector('#reset');
          reset.style.backgroundColor = tema3.$fondodelyres;
          reset.style.borderColor = tema3.$teclasombra;
          reset.style.color = tema3.$blanco;
          const igual = document.querySelector('.igual');
          igual.style.backgroundColor = tema3.$fondoigual;
          igual.style.borderColor=  tema3.$sombraigual;
      }
  }
  eventDel(e);
});


const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
  boton.addEventListener('click', (e) => {
   function insert(value) {
      const pantalla = document.querySelector('#resultado');   
      if (boton.classList.contains('del')) {
       if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error!') {
          pantalla.textContent = '0';          
        }
       else {
          pantalla.textContent = pantalla.textContent.slice(0, -1);
        } 
        return;
      } else if (boton.classList.contains('reset')) {
        pantalla.textContent = '0';
        return;
      } else if (boton.classList.contains('igual')) {
        try {
          pantalla.textContent = eval(pantalla.textContent);
        } catch {
          pantalla.textContent = 'Error!';
        }
        return
      }
      if (pantalla.textContent === '0' || pantalla.textContent === 'Error!') {
        pantalla.textContent = value;
      } else {
        pantalla.textContent += value;
      }
   }
    insert(e.target.textContent);
  });
});

