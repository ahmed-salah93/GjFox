


// ______________________header movement __________________

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
};

//  ______________________ products headline _________________________



  $(document).ready(function(){
  $("#para").click(function(){
    $(".menue").slideToggle("slow");
  });
 
});





// _________________________Rating Form ___________________________________





function submitForm() {
         
  var form = document.getElementById("contact-form");
  form.style.display = "none";
  var successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";
};
const ratingForm = document.getElementById('ratingForm');
        const messageBox = document.getElementById('messageBox');

        ratingForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(ratingForm);
          
            const rating = formData.get('rating');

            // Display the submitted data under the form.
            messageBox.style.display = 'block';
            messageBox.innerHTML = `
                <p>Rating: ${rating} stars</p>
            `;

            // Clear the form inputs.
            ratingForm.reset();
        });



        // ________________SCROLLED PICTURES___________________




        function changePicture(){
          var arr=['airpods/3.jpg',
                  'smart watches/3.jpg',
                  'headphones/5.jpg','headphones/55.jpg',
                  'airpods/7.jpg','power banks/1.jpg', 'Camera/66.jpg',
                  'ccccc.jpg', 'ccc2.jpg'];
          var scrollImage = document.getElementById('scrollImg');
          var i=0;
          setInterval(
               function () {
                  if (i<arr.length){
                      scrollImage.src=arr[i];
                      i++;
                  }
                  else{
                      i=0;
                  }
              },
              3000
          )};


   // ___________________ comment in rating Form _________________________

          function myFunction(val) {
            if(val.value === ""){
              alert("YOU HAVEN'T WRITE A COMMENT")
            }
            else{
              alert(`thanks for the time that investing to rate us  
 ` + val.value);
              
            }
            val.value = "";
        };


   // ___________________Color words on Products ________________________________

        function mouseEnter(x) {
          x.style.color="white";
        };
        
        function mouseLeave(y) {
          y.style.color="gray"; 
        };

    // __________________contact Us Form (success msg)__________________________
        
        function submitForm() {
         
            var form = document.getElementById("contact-form");
            form.style.display = "none";
            var successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";
        };
        
   // _______________change background in header elements_______________________

        var changeli = document.getElementsByClassName("li");
        
        function change_Bg(f){
          f.style.backgroundColor="#2aafb980";

        }
        function return_Bg(k){
          k.style.backgroundColor="#192a48";
        }



  // ________________________scroll up Button ________________________________

          
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};



// _____________________local storage login data _____________________________



var storedEmail = localStorage.getItem("E-mail");
var storedPass = localStorage.getItem("password");
var email = document.getElementById("E-mail");
var pass = document.getElementById("password");

function getData(){
 
   storedEmail = email.value;
   storedPass = pass.value ;
}
function login(){
    if(email.value != storedEmail || pass.value != storedPass ){
        alert("please enter a valid e-mail or a password");
        return false;
    }
    else{
        regesterForm.action="index.html"; //the path of home page
        
    }

};

var password =document.getElementById("password");
var confirmPass =document.getElementById("confpass");
var username = document.getElementById("username");
var email = document.getElementById("email");
function setData(){
    if(password.value!=confirmPass.value){
        alert('Passwords doesnot match');
        return false;
        }
        else{ 
            localStorage.setItem("username",username.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("password", password.value);
            console.log(username.value + email.value + password.value); 
            formContainer.action="login.html";
        }
      };

  //  ______________add to card (cart count)_________________________


      function addToCard(){
        var num = document.querySelector('.increment');
        var new_num =parseInt(num.innerHTML);
        new_num++;
        num.innerHTML=new_num
          alert(new_num + " products added to the cart");
        };


      
       
       
  
