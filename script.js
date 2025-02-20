document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;
  const menuBtn = document.querySelector(".menu-btn");
  const sidebar = document.querySelector(".sidebar");
  const navLinks = document.querySelectorAll(".sidebar a");

  // Dark Mode Toggle
  themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";

      // Store preference in localStorage
      localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });

  // Load Dark Mode Preference
  if (localStorage.getItem("darkMode") === "true") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
  }

  // Sidebar Menu Toggle
  menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");

      // Toggle between opening and closing menu
      menuBtn.classList.toggle("open");
  });

  // Smooth Scrolling for Sidebar Links
  navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 20,
                  behavior: "smooth"
              });
          }
          sidebar.classList.remove("active"); // Close menu after clicking a link
          menuBtn.classList.remove("open");
      });
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
          sidebar.classList.remove("active");
          menuBtn.classList.remove("open");
      }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
          backToTop.style.display = "block";
      } else {
          backToTop.style.display = "none";
      }
  });

  backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
