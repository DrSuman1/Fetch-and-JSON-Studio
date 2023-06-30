// TODO: add code here
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
       return response.json();
        }).then (function(response){
let myContainer = document.getElementById("container");
let allMyHtml = "";
            for (let i=0;i<response.length;i++){
                //console.log(response[i]);
                let myHtml =`
               <div class = "astronaut">
                <div class = "bio">
                <h3> ${response[i].firstName} ${response[i].lastName}</h3>
                <ul>
                <li> hoursInSpace:${response[i].hoursInSpace}</li>
                <li> Active:${response[i].active}</li>
                <li> Skills:${response[i].skills}</li>
                </ul>
               </div>
               <img class ="avatar" src="${response[i].picture}">
               </div>
               `;
               allMyHtml += myHtml;
            }
               myContainer.innerHTML = allMyHtml;

            

        })
    });

   