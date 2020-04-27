const popUp = document.getElementById('popUP');
const close = document.getElementById('close');
const os = document.getElementById('os');
const symptoms = document.getElementById('symptoms');
const fix = document.getElementById('fix');

//modal pop up
popUp.addEventListener('click', function() {
    document.getElementById('modalPopUP').style.display="block";
    document.getElementById('bodyblack').style.display="block";
});

//close the modal
close.addEventListener('click', function() {
  document.getElementById('modalPopUP').style.display="none";
   document.getElementById('bodyblack').style.display="none";
    // clearTimeout(mmodalPopUPo, bodyblack);
});

//detect os version
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) os.innerHTML = "Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) os.innerHTML = "Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) os.innerHTML = "Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) os.innerHTML = "Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) os.innerHTML = "Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) os.innerHTML = "Windows 2000";

//slide in show the image
symptoms.addEventListener('click', function() {
    document.getElementById('symptomsInfo').style.display="block";
});
//slide in show the image
fix.addEventListener('click', function() {
    document.getElementById('fixInfo').style.display="block";
});

setTimeout(function(){
    document.getElementById('modalPopUP').style.display="block";
    document.getElementById('bodyblack').style.display="block";
}, 2000);
