// - A required field has been missed
// - The email address is not formatted correctly
// - Have inputs, error messages, and the success message announced on their screen reader
document.addEventListener('DOMContentLoaded', () => {
    // alert('Hello');

    const form = document.querySelector('form');


    form.addEventListener('submit', (e)=>{
        e.preventDefault();



        /////////// Another method to access a form /////////////
        accessForm();


        // if ( form ) {
        //     alert('im here')
        //     // showToast('Successful', "Thanks for completing the form. We'll be in touch soon!");
        // } else {
        //     // showToast('Fail')
        // }

        
    });

    //// access form function ///////////
    function accessForm(){
        const data = document.forms['form'];    // use to get all the form input
        // const firstname = document.forms['form']['firstname'].value;    // used to get individual input directly
        let text = '';
        const hideElements = document.querySelectorAll('.hide');
        const input = document.querySelectorAll('input, textarea, .radio div');
        console.log(input);

        if (data['firstname'].value === '' || data['lastname'].value === '' ||
             data['email'].value === '' || !data.elements['email'].value.includes('@') ||
             data['query'].value === '' || data['message'].value === '' || 
             data['message'].value === '' || !data['checkbox'].checked
            ){
            // alert('Firstname is empty');
            hideElements.forEach(element => {
                element.style.visibility = 'visible';
            });

            input.forEach(element => {
                element.style.borderColor = 'red';
            })

            // // loop to highlight the border of text box using tagname
            // for (let i=0; i<input.length; i++){
            //     input[i].style.borderColor = 'red';
            // }

            showToast('<i class="ri-close-line"></i> Error', "Form not complete. Complete the forms!");
        } else {
            // show toast message
            showToast('<img src="assets/images/icon-success-check.svg"> Message Sent', "Thanks for completing the form. We'll be in touch soon!");
            data.reset();   // reset form input to empty
        }
        
        // data.reset();   // reset form input to empty, the form can be reset manually using the loop format below
        // for (let i=0; i<data.length; i++ ){
        //     text += data.elements[i].value + '<br>';
        // }
        // console.log(text);
    }

    showToast = (msg, paragraph)=> {
            const hiddenContent = document.getElementById('default-msg');
            const headerText = document.querySelector('.default-msg h1');
            const paragraphText = document.querySelector('.default-msg p');

            headerText.innerHTML = msg;
            paragraphText.innerHTML = paragraph;
            // hiddenContent.style.display = 'block';
            hiddenContent.style.visibility = 'visible';

            setTimeout(() => {
                hiddenContent.style.visibility = 'hidden';
            }, 5000);
        };

    // function to checkFormField using FormData object /////////////
    // checkFormField = (formData, form) => {
    //     for (var [key, value] of formData.entries()){
    //         console.log(`${key}: ${value}`);
            
    //         var inputElement = form.querySelector(`[name = '${key}']`);

    //         console.log(inputElement.type);

    //         // if (key.type === String){
    //         //     alert('im here')
    //         //     // console.log(`${key}: ${value}`);
    //         // }
    //     }
    // }


    //// loop to iterate FormData object ////////////
    // const formData = new FormData(form);
    // for (item of formData){
    //     console.log(item[0], item[1]);
    // }
    
    // ///////// Accessing form input individually at a time ///////////
    // let fName = document.getElementById('firstname').value;
    // if (fName === ''){
    //     alert('invalid name');
    // } else if (fName > 20){ // for integer validations
    //     alert('greater than 20');
    // } else{
    //     alert(fName);
    // }


})



        /////////////// to add a file to form data /////////////////////
        // const file = document.querySelector('file');
        // formData.append('fileType', file.files[0], 'image.jpeg');
        // formData.append('id', '1');

        // // /////////// How to stringify formData /////////////////
        // const data = Object.fromEntries(formData);
        // const payload = JSON.stringify(data);

        // console.log(payload);

        // for (item of formData){
        //     console.log(item[0], item[1]);
        // }
        // console.log(formData)

        ///////////////// HTML visibility //////////////////////////////
        // function showContent() {
        //     // Select the element with the ID 'hiddenContent'
        //     let hiddenDiv = document.getElementById('hiddenContent');

        //     // Change the display property to make it visible
        //     hiddenDiv.style.display = "block";
        // }
