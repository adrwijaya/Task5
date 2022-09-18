function submitData(){

let name = document.getElementById("input_name").value 
let email = document.getElementById("input_email").value 
let phone = document.getElementById("input_number").value
let subject = document.getElementById("input_subject").value
let message = document.getElementById("input_message").value

if(name == ""){
    return alert("name harus diisi")
} else if (email == "") {
    return alert("email harus diisi") 
} else if (phone == "") {
    return alert("phone harus diisi")
} else if (subject == "") {
    return alert("subject harus diisi")
} else if (message == "") {
    return alert("message harus diisi")
}

console.log(name);
console.log(email);
console.log(phone);
console.log(subject);
console.log(message);


let a = document.createElement('a')
a.href = `mailto:adr.wijayaaa@gmail.com?subject=${subject}&body=Hallo Nama Saya ${name}, ${message}, silahkan kontak ke nomor ${phone}`

a.click()

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student);
}

