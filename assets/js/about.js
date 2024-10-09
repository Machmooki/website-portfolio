function programming_display(){
    document.querySelector("#about_box_programming").style.display = "";
    document.querySelector("#about_box_cybersecurity").style.display = "none";
    document.querySelector("#about_box_business").style.display = "none";
    document.querySelector("#about_box_details").style.display = "none";
}

function cybersecurity_display(){
    document.querySelector("#about_box_programming").style.display = "none";
    document.querySelector("#about_box_cybersecurity").style.display = "";
    document.querySelector("#about_box_business").style.display = "none";
    document.querySelector("#about_box_details").style.display = "none";
}

function business_display(){
    document.querySelector("#about_box_programming").style.display = "none";
    document.querySelector("#about_box_cybersecurity").style.display = "none";
    document.querySelector("#about_box_business").style.display = "";
    document.querySelector("#about_box_details").style.display = "none";
}

function details_display(){
    document.querySelector("#about_box_programming").style.display = "none";
    document.querySelector("#about_box_cybersecurity").style.display = "none";
    document.querySelector("#about_box_business").style.display = "none";
    document.querySelector("#about_box_details").style.display = "";
}