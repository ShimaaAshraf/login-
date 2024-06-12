// when user sign up 

var userName = document.getElementById('username');
var userMail = document.getElementById('usermail');
var userPass = document.getElementById('userpassword');


// localStorage.removeItem('userdata');
var userArr =[];
if(localStorage.getItem('userdata')!= null)
    {
        userArr = JSON.parse(localStorage.getItem('userdata'));
       
    }
   
    
function addUser()
{
    var userObject ={
        uName : userName.value,
        uMail : userMail.value,
        uPass : userPass.value
    }
    
    if(userArr.length === 0)
        {
            userArr.push(userObject);
            localStorage.setItem('userdata',JSON.stringify(userArr)); 
            document.getElementById("result").innerHTML = `<p class="text-success">success</p>`;
            resetForm();
            console.log("first section");
        }
    else
        {
            var count = 0;
            for(var i = 0; i< userArr.length;i++)
                {
                    count +=1;
                    if(userObject.uMail === userArr[i].uMail)
                        {
                            document.getElementById("result").innerHTML = `<p class="text-danger">email already exists</p>`;
                            console.log("second section");
                            break; 
                        }
                    else
                        {
                            if(count == userArr.length)
                                {
                                    userArr.push(userObject);
                                    localStorage.setItem('userdata',JSON.stringify(userArr)); 
                                    document.getElementById("result").innerHTML = `<p class="text-success">success</p>`;
                                    
                                    console.log("third section");  
                                    resetForm(); 
                                    break;
                                }
                          
                        }   
                         
                }
        }
 
    
}


// clear form
function resetForm()
{
    userName.value = null;
    userMail.value = null;
    userPass.value = null;
}


// when user sign in 
var mail = document.getElementById('usersmail');
var password = document.getElementById('userspassword');




function signIn()
{
   
    var count1;
    count1 = 0;
   
    for(var i = 0; i< userArr.length ;i++)
        {
            
            count1 +=1;
            if(userArr[i].uMail == mail.value )
                {
                   
                    if(userArr[i].uPass == password.value)
                        {
                            window.open("page.html","_self");
                            // .document.write('<h1>Welcome ${userArr[i].uName}</h1>')        //   
                        }    
                    else
                       {
                         document.getElementById('nocorrect').innerHTML =`<p><b>incorrect email or password</b></p>`;
                       }    
                }
            else
            {
                if(count1 == userArr)
                    {
                        document.getElementById('nocorrect').innerHTML =`<p><b>incorrect email or password</b></p>`;
                        
                    }
                
            }    
        }
}