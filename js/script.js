$(function(){
    $('.our-partners').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        autoplayTimeout: 1800,
        animateIn: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })    
})
const hamburger = document.getElementById("hamburger");
const close_menu = document.getElementById("close_menu");

hamburger.addEventListener("click",function(){
    document.querySelector(".header .nav_bar").style.display = "flex";
    hamburger.style.display = "none";
    close_menu.style.display = "flex";
})
close_menu.addEventListener("click",function(){
    document.querySelector(".header .nav_bar").style.display = "none";
    hamburger.style.display = "flex";
    close_menu.style.display = "none";
})


this.window.addEventListener("resize",function(){
    if(this.window.innerWidth <= 768 ){
        document.querySelector(".header .nav_bar").style.display = "none";
        hamburger.style.display = "flex";
        close_menu.style.display = "none";
    }
    if(this.window.innerWidth > 768 ){
        document.querySelector(".header .nav_bar").style.display = "flex";
        hamburger.style.display = "none";
        close_menu.style.display = "none";
    }
})
this.window.addEventListener("scroll",function(){
    if(this.window.innerWidth > 768 ){
        document.querySelector(".header .nav_bar").style.display = "flex";
        hamburger.style.display = "none";
        close_menu.style.display = "none";
    }else{
        document.querySelector(".header .nav_bar").style.display = "none";
        hamburger.style.display = "flex";
        close_menu.style.display = "none";
    }
})




var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
let yearly_used_energy = document.getElementById("yearly_used_energy");

rangeSlider.addEventListener("input", function() {
    rangeBullet.innerHTML = rangeSlider.value;
    rangeBullet.style.left = ((rangeSlider.value - 1000) * (100 / (rangeSlider.max - rangeSlider.min))) + "%";
    document.getElementById("yearly_used_energy").value = rangeSlider.value;
});
document.getElementById("yearly_used_energy").addEventListener("keyup" , function() {
    if(document.getElementById("yearly_used_energy").value > 1000){
        document.getElementById("rs-range-line").value = yearly_used_energy.value;
        rangeBullet.style.left = ((rangeSlider.value - 1000) * (100 / (rangeSlider.max - rangeSlider.min))) + "%";
        rangeBullet.innerHTML = rangeSlider.value;
    }else if(document.getElementById("yearly_used_energy").value === ""){
        document.getElementById("rs-range-line").value = 1000;
        rangeBullet.style.left = "0%";
        rangeBullet.innerHTML = 1000;    
    }else if(document.getElementById("yearly_used_energy").value <= 1000){
        document.getElementById("rs-range-line").value = 1000;
        rangeBullet.style.left = "0%";
        rangeBullet.innerHTML = 1000;    
    }
    
});




var energy_payment_range_line = document.getElementById("energy-payement-rs-range-line");  // rs-range-line
var energy_payment = document.getElementById("energy_payment");  // rangeBullet
let used_energy_pay = document.getElementById("used_energy_pay");   // yearly_used_energy
energy_payment_range_line.addEventListener("input", function() {
    if(document.getElementById("energy-payement-rs-range-line").value > 100){
        energy_payment.innerHTML = "£" + parseFloat(energy_payment_range_line.value / 100).toFixed(2);
        energy_payment.style.left = ((energy_payment_range_line.value - 1) * (100 / (energy_payment_range_line.max - energy_payment_range_line.min))) + "%";
        document.getElementById("used_energy_pay").value = energy_payment_range_line.value;
    }else{
        energy_payment.innerHTML = energy_payment_range_line.value + "p";
        energy_payment.style.left = ((energy_payment_range_line.value - 1) * (100 / (energy_payment_range_line.max - energy_payment_range_line.min))) + "%";
        document.getElementById("used_energy_pay").value = energy_payment_range_line.value;
    }
});
document.getElementById("used_energy_pay").addEventListener("keyup" , function() {
    if(document.getElementById("used_energy_pay").value > 1){
        if(document.getElementById("used_energy_pay").value > 100){
            document.getElementById("energy-payement-rs-range-line").value = used_energy_pay.value;
            energy_payment.innerHTML = "£" + parseFloat(energy_payment_range_line.value / 100).toFixed(2);
            energy_payment.style.left = ((energy_payment_range_line.value - 1) * (100 / (energy_payment_range_line.max - energy_payment_range_line.min))) + "%";
        }else{
            document.getElementById("energy-payement-rs-range-line").value = used_energy_pay.value;
            energy_payment.style.left = ((energy_payment_range_line.value - 1) * (100 / (energy_payment_range_line.max - energy_payment_range_line.min))) + "%";
            energy_payment.innerHTML = energy_payment_range_line.value + "p";
        }
    }else if(document.getElementById("used_energy_pay").value === ""){
        document.getElementById("energy-payement-rs-range-line").value = 1;
        energy_payment.style.left = "0%";
        energy_payment.innerHTML = 1;    
    }else if(document.getElementById("used_energy_pay").value <= 1){
        document.getElementById("energy-payement-rs-range-line").value = 1;
        energy_payment.style.left = "0%";
        energy_payment.innerHTML = 1;    
    }  
});








let energy_std_payement_rs_range_line = document.getElementById("energy-std-payement-rs-range-line");  // rs-range-line
let energy_std_payment = document.getElementById("energy_std_payment");  // rangeBullet
let used_std_energy_pay = document.getElementById("used_std_energy_pay");   // yearly_used_energy

energy_std_payement_rs_range_line.addEventListener("input", function() {
    energy_std_payment.innerHTML = energy_std_payement_rs_range_line.value + "p";
    energy_std_payment.style.left = ((energy_std_payement_rs_range_line.value - 1) * (100 / (energy_std_payement_rs_range_line.max - energy_std_payement_rs_range_line.min))) + "%";
    used_std_energy_pay.value = energy_std_payement_rs_range_line.value;
});
used_std_energy_pay.addEventListener("keyup" , function() {
    if(document.getElementById("used_std_energy_pay").value > 1){
        energy_std_payement_rs_range_line.value = used_std_energy_pay.value;
        energy_std_payment.style.left = ((energy_std_payement_rs_range_line.value - 1) * (100 / (energy_std_payement_rs_range_line.max - energy_std_payement_rs_range_line.min))) + "%";
        energy_std_payment.innerHTML = energy_std_payement_rs_range_line.value + "p";
    }else if(document.getElementById("used_std_energy_pay").value === ""){
        energy_std_payement_rs_range_line.value = 1;
        energy_std_payment.style.left = "0%";
        energy_std_payment.innerHTML = 1;    
    }else if(document.getElementById("used_std_energy_pay").value <= 1){
        energy_std_payement_rs_range_line.value = 1;
        energy_std_payment.style.left = "0%";
        energy_std_payment.innerHTML = 1;    
    }  
});


const get_started = document.getElementById("get_Started");
const go_back_1 = document.getElementById("go_back_1");
const go_next_3 = document.getElementById("go_next_3");



const step_one = document.querySelector(".get_quotebox_section")
const step_two = document.querySelector(".step_two");
const step_three = document.querySelector(".step_three");



function jump_to_step(current_step , step_turn){
    document.getElementById(`step_${current_step}`).classList.add("d-none");
    document.getElementById(`step_${step_turn}`).classList.remove("d-none");
    if(current_step > step_turn){
        document.getElementById(`step_${step_turn}`).classList.remove("animate__slideInUp");
        document.getElementById(`step_${step_turn}`).classList.add("animate__slideInDown");
    }else{
        document.getElementById(`step_${step_turn}`).classList.add("animate__slideInUp");
        document.getElementById(`step_${step_turn}`).classList.remove("animate__slideInDown");
    }
}
// go_back_1.addEventListener("click", function(){
//     if(true){
//         step_one.classList.remove("d-none");
//         step_one.classList.add("animate__slideInDown");
//         step_two.classList.add("d-none");
//     }
// })

// go_next_3.addEventListener("click", function(){
//     if(true){
//         step_two.classList.add("d-none");
//         step_three.classList.remove("d-none");
//     }
// })
