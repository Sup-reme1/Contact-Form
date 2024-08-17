document.addEventListener('DOMContentLoaded', () => {
    // alert('Hello');

    const form = document.querySelector('form');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        // alert('submitted');

        const formData = new FormData(form);

        for (item of formData){
            console.log(item[0], item[1]);
        }
        showToast('Successful', "Thanks for completing the form. We'll be in touch soon!");

        if ( formData.first-name) {
            alert('im here')
            // showToast('Successful', "Thanks for completing the form. We'll be in touch soon!");
        } else {
            // showToast('Fail')
        }

        
    });
    
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
            }, 2000);
        }
})



/////////////// to add a file to form data
        // const file = document.querySelector('file');
        // formData.append('fileType', file.files[0], 'image.jpeg');
        // formData.append('id', '1');

        // // /////////// How to stringify formData
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
