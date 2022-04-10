const forms = document.querySelectorAll('form')

let FormId
let formBody = {};

const sendForm = (formId) => {
    const form = document.getElementById(formId)
    const formInputs = form.querySelectorAll('input')
    const formSelects = form.querySelectorAll('select')

    const formdata = new FormData(form)

    formdata.forEach((value, key) => {
        formBody[key] = value
      
    })
    console.log( formBody);


     fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({formBody}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
       })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


forms.forEach((form, id) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        FormId = `form${id+1}`
        sendForm(FormId)
    })
})




