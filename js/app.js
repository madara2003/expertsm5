document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
     
    });
});

document.querySelectorAll(".pricing__btn").forEach(button => {
	button.addEventListener("click", function() {
	  document.querySelectorAll(".pricing__btn").forEach(btn =>{
      el = btn.children[0].classList.remove("high");
      btn.classList.remove("btn-active")
    }); 

	  this.classList.add("btn-active"); 
    this.querySelector("p").classList.add("high")
	});
  });


  let isClicked = false
  let bar = document.querySelector(".bar")
  let el1 = document.querySelector(".bar__line-1")
  let el2 = document.querySelector(".bar__line-2")
  let el3 = document.querySelector(".bar__line-3")

  document.getElementById("toggleBtn").addEventListener("click", function() {
    document.querySelector(".block").classList.toggle("hidden");
    console.log(el2)
	if(isClicked==false) {
		el1.style.transform = "translateY(3px) rotate(45deg)";
		el2.style.opacity=0
		el3.style.transform = "translateY(-7px) rotate(-45deg)";
		bar.style.paddingTop = "4px"
		isClicked = true;
	}else {
		el1.style.transform = "translateY(0px) rotate(0deg)";
		el2.style.opacity=1
		el3.style.transform = "translateY(0px) rotate(0deg)";
		bar.style.paddingTop = "0px"
		isClicked = false;
	}
  });

