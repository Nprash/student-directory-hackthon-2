// let directory = [{ name: "tiger", email: "tiger@gmail.com" },
// { name: "lion", email: "lion@gmail.com"},
// { name: "Escimow", email: "escimow@gmail.com" },
// { name: "hare", email: "hare@gmail.com" },
// { name: "jackle", email: "jackle@gmail.com"}]


// function callrollno(){
//     // for (let i=1;i<directory.length+1; i++){
//     //     console.log("S.No",i, '.', directory[i].name, ',' , directory[i].email);
//     let i = 0;
//     while (i < directory.length){
//         console.log( directory[i]);
//         i++;
//     }
//     }

// callrollno();


// let mailfilter = directory.filter((x) =>{
//     return x.email == directory.email;
// })

// let directory.name = name1;


// if (mailfilter.length ==0 ){
//     let data = {name:name, emai:email,}
// }
// directory.push(data);
// console.log(directory);

let directory = [];

function submit() {
    let username = document.getElementById('personName').value;
    let useremail = document.getElementById('personEmail').value;

    let datacount = directory.filter((y) => {
        return y.personEmail == useremail;
    }) //if datacount get filtered some mail id then it has some length, it wont push data to main directory

    //first if condition will check that user clicks button without giving input that empty string should not push to directory
    //2ns if condition will filter mail, check its length is zero then it push the data to main directory 
    if (username != "" && useremail != ""){
        if (datacount.length == 0) {
            let data = { personName: username, personEmail: useremail, }
            // console.log("jhgf");
            directory.push(data);
    
            let selectcontainer = document.getElementById('build');
            let div = document.createElement('div');
            div.classList.add("user-card");
            selectcontainer.appendChild(div);
            let collectname = document.createElement('h3');
            let collectemail = document.createElement('p');
            div.appendChild(collectname);
            div.appendChild(collectemail);
            // console.log(directory);
            collectname.innerHTML = username;
            collectemail.innerHTML = useremail;
        }
        else {
            console.log("user is already exist");
        }
        // console.log(directory);
        document.getElementById("personName").value = "";
        document.getElementById('personEmail').value = "";
    }
    else{
        alert("Enter All User Fields");
    }

}

function checkEmail(){
    let quickalert = document.getElementById('alert-msg');
    // let username = document.getElementById('personName');
    let useremail = document.getElementById('personEmail').value;
    let datacount = directory.filter((y) => {
        return y.personEmail == useremail;
    })
    if(datacount.length == 0){
        quickalert.classList.add("alert-message");
    }
    else{
        quickalert.classList.remove("alert-message");
    }
}


