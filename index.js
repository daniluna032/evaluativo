window.addEventListener('DOMContentLoaded', () => {
    
    const myForm = document.querySelector('form')
    const inputName = myForm.querySelector('#name')
    const inputEmail = myForm.querySelector('#email')
    const inputMsg = myForm.querySelector('#msg')
    const submitButton = myForm.querySelector('#button')

    submitButton.addEventListener('click' , (event) => {
        event.preventDefault()
        
        const formData = {
            name: inputName.value,
            email: inputEmail.value,
            message: inputMsg.value
        }

        localStorage.setItem('formData' , JSON.stringify(formData))
    })

})