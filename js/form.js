const doc = document

doc.addEventListener('DOMContentLoader', (e) =>

    contactFormValidations()

)

contactFormValidations()

function contactFormValidations(){

    const $form = doc.querySelector('.contact-form');
    $inputs = doc.querySelectorAll('.contact-form [required]');
    console.log($inputs)

    let $select = $inputs[4]

    $select.addEventListener("change", ()=>{
        const mailSelector = $select.value
        console.log("🚀 ~ file: form.js ~ line 23 ~ $select.addEventListener ~ mailSelector", mailSelector)
        
        if (mailSelector == "reparaciones") {
            $form.setAttribute('action', 'https://formsubmit.co/repuestos@dosivac.com')
            console.log('estoy modificando repuestos')
            console.log($form.action)
        }
        if (mailSelector == "cotizaciones") {
            $form.setAttribute('action', 'https://formsubmit.co/cotizaciones@dosivac.com')
            console.log('estoy modificando cotizaciones')
            console.log($form.action)
        }
        if (mailSelector == "dosificacion") {
            $form.setAttribute('action', 'https://formsubmit.co/bombas@dosivac.com')
            console.log('estoy modificando bombas')
            console.log($form.action)
        }
        if (mailSelector == "sopladores") {
            $form.setAttribute('action', 'https://formsubmit.co/ventatecnica@dosivac.com')
            console.log('estoy modificando ventatecnica')
            console.log($form.action)
        }
        
    })
    
    
       


    $inputs.forEach(input => {
        const $span = doc.createElement('span')
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error', 'none')
        input.insertAdjacentElement("afterend", $span);
    });

    doc.addEventListener('keyup', e=> {
        
        if (e.target.matches('.contact-form [required]')) {
            let $input = e.target
            pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== "") {
                console.log('el input tiene patron');
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add('is-active')
                : d.getElementById($input.name).classList.remove('is-active');
            }

            if (!pattern) {
                console.log('el input NO tiene patron')
                return $input.value === ""
                ? d.getElementById($input.name).classList.add('is-active')
                : d.getElementById($input.name).classList.remove('is-active');
            }
        }
    
    });

   doc.addEventListener('submit', e=> {
        //e.preventDefault();

        const $loader = d.querySelector(".contact-form-loader");
        $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            setTimeout(() => $response.classList.add("none"), 3000);
        }, 3000);
        
    }); 
 

}

document.getElementById('textareaConsulta').addEventListener('click', function(e) {
    
    $textArea = document.getElementById('textareaConsulta')
      
      $textArea.classList.add('textareaColorBlanco')
     
});

$('input').click(function(e){
   const ID = ($(this).attr('id')) 
   
   $('#' + `${ID}`).addClass('textareaColorBlanco')
   
})
