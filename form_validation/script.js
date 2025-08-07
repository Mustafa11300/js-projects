const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("Password");
const cpassword=document.getElementById("Confirm-Password");
const submit=document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

const validateInputs= ()=>{
    const name=username.value.trim();
    const mail=email.value.trim();
    const pass=password.value.trim();
    const cpass=cpassword.value.trim();

    if(name==='')
    {
        setError(username,"Username is required!");
    }
    else
    {
        setSuccess(username);
    }
    if(mail==='')
        {
            setError(email,"Email is required!");
        }
    else if(!isValidEmail(mail))
    {
        setError(email," Provide valid email!");
    }
     else
        {
            setSuccess(email);
        }
    if(pass==='')
            {
                setError(password,"Password is required!");
            }
    else if(pass.length<8)
    {
        setError(password,"Password must have atleast 8 characters!");
    }
    else
            {
                setSuccess(password);
            }  
    if(cpass==='')
                {
                    setError(cpassword,"Confirm your password!");
                }
    else if(pass!==cpass){
        setError(cpassword,"Password doesn't match!");
    }
    else
                {
                    setSuccess(cpassword);
                }           
}
const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;

    inputControl.classList.add('errors');
    inputControl.classList.remove('success');
}

const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';

    inputControl.classList.add('success');
    inputControl.classList.remove('errors');
}

function isValidEmail(e) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return regex.test(e);
}   