class FieldCheckbox {
  static toggle = (target) => {
    target.toggleAttribute('active')
  }
}

window.fieldCheckbox = FieldCheckbox

// class Checkbox {
//   static checkActive = true

//   static active = () => {
//     const checkbox = document.querySelector('.checkbox')

//     if (checkbox) {
//       if (this.checkActive) {
//         checkbox.classList.add('checkbox--active')
//         checkbox.setAttribute('value', 'true')
//         console.log('active')
//         this.checkActive = false
//       } else {
//         checkbox.classList.remove('checkbox--active')
//         checkbox.setAttribute('value', 'false')

//         console.log('nonactive')

//         this.checkActive = true
//       }
//     } else {
//       console.error('Елемент .checkbox не знайдено')
//     }
//   }
// }
