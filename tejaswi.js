function validate(event)
{
    event.preventDefault();
    var f= document.getElementById("f").value;
    var l=document.getElementById("l").value;
    var e= document.getElementById("e").value;
    var p=document.getElementById("pno").value;
    var letters = /^[A-Za-z]+$/;  
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    if(f==''||e==''||l==''||p==''){  
        alert("Enter each details correctly");  
        }  
        else if(!letters.test(f))  
            {  
                alert('Name is incorrect must contain alphabets only');  
            }  
            else if(!letters.test(l))  
                {  
                    alert('Name is incorrect must contain alphabets only');  
                }  
                else if (!email_val.test(e))  
                    {  
                        alert('Invalid email format please enter valid email id');  
                    }  
                    else if(p.length !==10)  
                        {  
                        alert("phone number must has 10 digits");  
                        }  
                        else{  
                            alert("Your feedback has been saved successfully...");  
                            window.location.href = "https://www.hippovideo.io/blog/wp-content/uploads/2023/01/Thank-You-Video-Email-Blog.png"; 
                            }  
}