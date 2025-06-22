let zz = "00";
let tt = "00";


// Forward Button
const currentTimeSpan = document.getElementById("current-time");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const prevdayBtn = document.getElementById("prevday-btn");
const nextdayBtn = document.getElementById("nextday-btn");

forwardBtn.addEventListener("click", () => {
  let current = parseInt(currentTimeSpan.textContent);
  current = (current + 6); // Wrap around after 24
  currentTimeSpan.textContent = current.toString().padStart(2, '0');
  // Update global Var
  tt = current.toString().padStart(2, '0');
  refreshPage(zz, tt);
});

nextdayBtn.addEventListener("click", () => {
  let current = parseInt(currentTimeSpan.textContent);
  current = (current + 24); // Wrap around after 24
  currentTimeSpan.textContent = current.toString().padStart(2, '0');
  // Update global Var
  tt = current.toString().padStart(2, '0');
  refreshPage(zz, tt);
});

backwardBtn.addEventListener("click", () => {
  let current = parseInt(currentTimeSpan.textContent);
  current = (current - 6); // Wrap around after 24
  if(current > 0){
    currentTimeSpan.textContent = current.toString().padStart(2, '0');
    // Update global Var
    tt = current.toString().padStart(2, '0');
  } else {
    currentTimeSpan.textContent = "00";
    // Update global Var
    tt = "00";
  }
  refreshPage(zz, tt);
  
});

prevdayBtn.addEventListener("click", () => {
  let current = parseInt(currentTimeSpan.textContent);
  current = (current - 24); // Wrap around after 24
  if(current > 0){
    currentTimeSpan.textContent = current.toString().padStart(2, '0');
    // Update global Var
    tt = current.toString().padStart(2, '0');
  } else {
    currentTimeSpan.textContent = "00";
    // Update global Var
    tt = "00";
  }
  refreshPage(zz, tt);
  
});

function refreshPage(zz, tt){
    document.getElementById("loader").style.display = "block";
    document.getElementById("img925").src = `https://nwp.imd.gov.in/gfs/${zz}/${tt}hgfs_925wind.gif`;
    document.getElementById("img850").src = `https://nwp.imd.gov.in/gfs/${zz}/${tt}hgfs_850wind.gif`;
    document.getElementById("img700").src = `https://nwp.imd.gov.in/gfs/${zz}/${tt}hgfs_700wind.gif`;
    document.getElementById("img600").src = `https://nwp.imd.gov.in/gfs/${zz}/${tt}hgfs_600wind.gif`;
    document.getElementById("img500").src = `https://nwp.imd.gov.in/gfs/${zz}/${tt}hgfs_500wind.gif`;
    document.getElementById("img400").src = `https://nwp.imd.gov.in/gfs/${zz}/${tt}hgfs_400wind.gif`;
    document.getElementById("img300").src = `https://nwp.imd.gov.in/gfs/${zz}/${tt}hgfs_300wind.gif`;
    document.getElementById("img200").src = `https://nwp.imd.gov.in/gfs/${zz}/${tt}hgfs_200wind.gif`;
    document.getElementById("loader").style.display = "none";
}



  // Get all hour buttons
const hourButtons = document.querySelectorAll('.hour-btn');

hourButtons.forEach(btn => {
    btn.addEventListener('click', () => {
    // Remove 'active' from all
    hourButtons.forEach(b => b.classList.remove('active'));
    // update global variable
    zz = btn.textContent;
    // Add 'active' to clicked
    btn.classList.add('active');
    refreshPage(zz, tt);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const viewer = new Viewer(gallery, {
      inline: false,
      toolbar: true,
      navbar: true,
      title: true,
      tooltip: true,
    });
  });