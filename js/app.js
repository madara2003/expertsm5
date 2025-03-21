document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
     
    });
});

document.querySelectorAll(".pricing__btn").forEach(button => {
	button.addEventListener("click", function() {
	  document.querySelectorAll(".pricing__btn").forEach(btn => btn.classList.remove("btn-active")); // Remove active class from all
	  this.classList.add("btn-active"); // Add active class to clicked button
	});
  });

  let el1 = document.querySelector("bar__line-1")

  document.getElementById("toggleBtn").addEventListener("click", function() {
    document.querySelector(".block").classList.toggle("hidden");
  });