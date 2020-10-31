function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    // var comments = document.contactForm.comments.value;
    try {
        var comments = document.getElementById("com").value;

    } catch (error) {
        document.getElementById("com").innerHTML = msg;

    }
    

    var nameErr = emailErr = phoneErr = commentErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate comments
    if (comments == "") {
        printError("commentErr", "Please enter your inquiries/comments");
    } else {
        commentErr = false;
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } 
    else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate phone number    
    if (mobile == "") {
        printError("phoneErr", "Please enter your phone number");
    } 
    else {
        // Regular expression for basic email validation
        var regex = /^[0-9]+$/;
        if (regex.test(mobile) === false) {
            printError("phoneErr", "Please enter a valid phone number without any hyphens or brackets");
        } else {
            printError("phoneErr", "");
            phoneErr = false;
        }
    }

    // Validate comments    
    if (comments == "") {
        printError("commentErr", "Please enter your comments/inquiries");
    } 
    else {
        // Regular expression for basic email validation
        printError("commentErr", "");
        commentErr = false;
    }



    if (nameErr || emailErr || phoneErr || commentErr == true) {
        alert('Something wrong!')
    } else {
        alert('You have submitted your inquiries/comments!');
        window.location.reload();
        
    }
}


// function printBlogError(element, msg) {
//     document.getElementById(element).innerHTML = msg;
// }


function validateBlogForm() {

    // Retrieving the values of form elements 
    try {
        var titleName = document.blogForm.titleName.value;
        
    } catch (error) {
        alert('Uh oh title')
    }
    try {
        var authorName = document.blogForm.authorName.value;
        
    } catch (error) {
        alert('Uh oh name')

    }
    try {
        var sum = document.blogForm.sum.value;
        
    } catch (error) {
        alert('Uh oh summary')

    }
    try {
        var catTag = document.blogForm.catTag.value;
    } catch (error) {
        alert('Uh oh tags')

    }
    try {
        var des = document.getElementById("des").value;

    } catch (error) {
        alert('Uh oh description')

    }
    
    // var comments = document.contactForm.comments.value;
    // try {
    //     var comments = document.getElementById("com").value;

    // } catch (error) {
    //     document.getElementById("com").innerHTML = msg;

    // }
    

    var authorNameErr = titleNameErr = sumErr = catTagErr = desErr = true;

    // Validate comments    
    if (titleName == "") {
        printError("titleNameErr", "Please enter your blog's title.");
    } 
    else {
        printError("titleNameErr", "");
        titleNameErr = false;
    }

    // Validate comments    
    if (authorName == "") {
        printError("authorNameErr", "Please enter your name.");
    } 
    else {
        printError("authorNameErr", "");
        authorNameErr = false;
    }

    // Validate comments    
    if (sum == "") {
        printError("sumErr", "Please enter your blog's summary.");
    } 
    else {
        printError("sumErr", "");
        sumErr = false;
    }

    // Validate comments    
    if (catTag == "") {
        printError("catTagErr", "Please enter your blog's category/tag. Don't forget to add # at the beginning.");
    } 
    else {
        printError("catTagErr", "");
        catTagErr = false;
    }

    // Validate comments    
    if (des == "") {
        printError("desErr", "Please add some description to your blog.");
    } 
    else {
        printError("desErr", "");
        desErr = false;
    }



    if (authorNameErr || titleNameErr || sumErr || catTagErr || desErr == true) {
        alert('Something wrong!')
    } else {
        alert('You have submitted your first blog!');
        
        newTodo();
    }
}

function newTodo() {

    // var inputValue = document.getElementById('myInput').value;
    // var text = document.createTextNode(inputValue);

    try {
        var titleName = document.getElementById('titleName').value;
   
        var text = document.createTextNode(titleName);

        var sumName = document.getElementById('sumName').value;
        var textsumName = document.createTextNode(sumName);

        var authorName = document.getElementById('authorName').value;
        var textauthorName = document.createTextNode(authorName);

        var catTagName = document.getElementById('catTagName').value;
        var textcatTagName = document.createTextNode(catTagName);

        var des = document.getElementById('des').value;
        var textdes = document.createTextNode(des);


    } catch (error) {
        alert('SHIT!!!!')
    }


    // var summaryDescription = document.getElementById('summaryDescription').value;
    // var authorName = document.getElementById('authorName').value;
    // var tagTitle = document.getElementById('tagTitle').value;
    // var description = document.getElementById('description').value;


    try {
        var li = document.createElement('li');      // <li></li>
        li.style.fontSize = '25px';
        li.style.marginBottom = '22px';
        li.style.fontWeight = 'bold';
        li.style.textTransform = 'uppercase';
        li.appendChild(text);                       //<li>Something Here..</li>

        if (titleName === '') {
            alert('You must write something..')
        } else {
            try {
                document.getElementById('main_blog').appendChild(li);
            document.getElementById('titleName').value = '';
            } catch (error) {
                alert('3rd wave problem!')
            }
            
        }


        var li_2 = document.createElement('li');
        li_2.style.fontSize = '22px';
        li_2.style.marginBottom = '22px';
        li_2.style.textTransform = 'uppercase';
        li_2.style.fontStyle = 'normal';
        li_2.appendChild(textsumName);

        if (sumName === '') {
            alert('You must write something..')
        } else {
            try {
                document.getElementById('main_blog').appendChild(li_2);
            document.getElementById('sumName').value = '';
            } catch (error) {
                alert('3rd wave problem! SUM')
            }
            
        }


        var li_3 = document.createElement('li');
        li_3.style.fontSize = '18px';
        li_3.style.marginBottom = '21px';
        li_3.style.fontWeight = 'bold';
        li_3.style.color = '#223d61';
        li_3.style.textTransform = 'uppercase';
        li_3.appendChild(textauthorName);

        if (authorName === '') {
            alert('You must write something..')
        } else {
            try {
                document.getElementById('main_blog').appendChild(li_3);
            document.getElementById('authorName').value = '';
            } catch (error) {
                alert('3rd wave problem! AUTHOR')
            }
            
        }


        var li_4 = document.createElement('li');
        li_4.style.fontSize = '16px';
        li_4.style.marginBottom = '20px';
        li_4.style.fontWeight = 'bold';
        li_4.appendChild(textcatTagName);

        if (catTagName === '') {
            alert('You must write something..')
        } else {
            try {
                document.getElementById('main_blog').appendChild(li_4);
            document.getElementById('catTagName').value = '';
            } catch (error) {
                alert('3rd wave problem! CATTAG')
            }
            
        }

        var li_5 = document.createElement('li');

        li_5.style.fontSize = '16px';
        li_5.style.fontStyle = 'normal';
        li_5.style.textAlign = 'center';
        // li_5.style.marginLeft = '5%';
        // li_5.style.marginRight = '5%';
        //li_5.style.alignContent = 'center';
        li_5.style.marginBottom = '70px';
        li_5.appendChild(textdes);

        if (des === '') {
            alert('You must write something..')
        } else {
            try {
                document.getElementById('main_blog').appendChild(li_5);
            document.getElementById('des').value = '';
            } catch (error) {
                alert('3rd wave problem! Description')
            }
            
        }

    } catch (error) {
        alert('2nd wave problem!')
    }

    
    // var span = document.createElement('span');      // <span></span>
    // var txt = document.createTextNode("\u00D7");   // X
    // span.appendChild(txt);                         // <span>X</span>
    // span.className = "close";
    // li.appendChild(span);

    // for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function () {
    //         var div = this.parentElement;
    //         div.style.display = 'None'
    //     }
    // }
    
    

}