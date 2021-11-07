let add_btn = document.querySelector('.add__input');
let main_input_container = document.querySelector('.main__input2');
let attr_form = document.querySelector('#attr_form');

function __getElemnt(val) {
    return document.querySelector(val);
}


let count = 0;

/**
 * add input fild
 */
function addFild() {
   
    if (count == 2) {
    
       
   } else {
        count++;
        
        let id = Math.floor(Math.random() * 1000)
        console.log(id);
       main_input_container.innerHTML += ` <div class="input__group" id="group_id_${count}">
       <input class="input__fild" id="var_name_${count}" placeholder="Name" type="text" >
       <input class="input__fild" id="var_item_${count}" placeholder="S | M | L" type="text">
       <a class="fild_btn add__input" group_id="0" onclick="addFild()" href="#">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
             </svg>
       </a>
       <a class="fild_btn" href="#" onclick="deletFild(${count})">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
             </svg>
       </a>
       </div>`
   }

}

/**
 * 
 * delete input fild 
 */
function deletFild(id) {
    count--;
    let element_id = `#group_id_${id}`
    __getElemnt(element_id).remove();
}



/**
 * submit input fild
 */
attr_form.addEventListener('submit', (e) => {
    e.preventDefault()

    let id = Math.floor(Math.random() * 1000)
    console.log(id);
    let input_fild_count = ((attr_form.getElementsByTagName('input').length) / 2) - 1
    
    console.log(input_fild_count);
    
    for (let i = 0; i <= input_fild_count; i++) {
        
        let element_name = `#var_name_${i}`
        let element_item = `#var_item_${i}`
        let var_name = (__getElemnt(element_name).value);
        let item_name = (__getElemnt(element_item).value);
        let item_arry = item_name.split(" | ");

        for (let j = 0; j < item_arry.length; j++) {
            
            for (let k = 0; k < item_arry[j].length; k++) {
                
                console.log(item_arry[j][k]);
                
            }
            
        }
        
    }
    
  })