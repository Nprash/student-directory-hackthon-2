let directory = [{ name: "tiger", email: "tiger@gmail.com" },
{ name: "lion", email: "lion@gmail.com"},
{ name: "Escimow", email: "escimow@gmail.com" },
{ name: "hare", email: "hare@gmail.com" },
{ name: "jackle", email: "jackle@gmail.com"}]


function callrollno(){
    for (let i=1;i<directory.length; i++){
        console.log("no",i, '.', directory[i].name, ',' ,directory[i].email);
    }
}
callrollno();


let mailfilter = directory.filter((x) =>{
    return x.email == directory.email;
})

// let directory.name = name1;


// if (mailfilter.length ==0 ){
//     let data = {name:name, emai:email,}
// }
// directory.push(data);
console.log(directory);
