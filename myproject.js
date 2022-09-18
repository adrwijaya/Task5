let dataBlog = []
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("project-name").value
    let content = document.getElementById("description").value
    let image = document.getElementById("upload-image").files
    let nodeJs = document.getElementById("nodejs").checked
    let javaScript = document.getElementById("javascript").checked
    let reactJs = document.getElementById("reactjs").checked
    let socketIo = document.getElementById("socketio").checked
    let startDate = new Date(document.getElementById("start-date").value)
    let endDate = new Date(document.getElementById("end-date").value)

    if (nodeJs) {
        nodeJs = document.getElementById("nodejs").value
    } else {
        nodeJs = ""
    }

    if (javaScript) {
        javaScript = document.getElementById("javascript").value
    } else {
        javaScript = ""
    }

    if (reactJs) {
        reactJs = document.getElementById("reactjs").value
    } else {
        reactJs = ""
    }

    if (socketIo) {
        socketIo = document.getElementById("socketio").value
    } else {
        socketIo = ""
    }

    if(image.length == 0) {
        return alert("gambar wajib diisi!")
    }

    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog = {
        title,
        content,
        image,
        javaScript,
        nodeJs,
        reactJs,
        socketIo,
        startDate,
        endDate,
    }

    dataBlog.push(blog)
    console.log(dataBlog);

    renderBlog()
}


function renderBlog(){

    document.getElementById("konten").innerHTML = ''

    for (let index = 0; index < dataBlog.length;  index++){  
        console.log(dataBlog[index]);

        document.getElementById("konten").innerHTML += `

        <div class="mycontent">
            <div>
                <img src="${dataBlog[index].image}" alt="gambar">
            </div>
            <div>
                <h4>
                    <a href="blog_content.html" target="_blank">${dataBlog[index].title}</a>
                </h4>
                <p class="durasi">
                    durasi: ${getDistanceTime(dataBlog[index].startDate, dataBlog[index].endDate)}
                </p>
            </div>
            <div>
                <p>${dataBlog[index].content}</p>
            </div>
            <div class="icon">
                <i class='fab fa-${dataBlog[index].reactJs}'></i></i> 
                <i class='fab fa-${dataBlog[index].nodeJs}'></i></i>
                <i class='fab fa-${dataBlog[index].javaScript}'></i></i>
                <i class='fab fa-${dataBlog[index].socketIo}'></i></i>
            </div>
            <div class="div-button">
                <button type="button" onclick="">edit</button>
                <button type="button" onclick="">delete</button>
            </div>
        </div>
        `
    }

    function getDistanceTime(start, end){

        let timeNow = new Date (end)
        let timePost = new Date(start)

        let distance = timeNow - timePost

        let milisecond = 1000
        let secondInHours = 3600
        let hoursInDay = 24

        let distanceMonth = Math.floor(distance / (milisecond * secondInHours * hoursInDay * 30))
        let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
        let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
        let distanceMinutes = Math.floor(distance / (milisecond * 60))
        let distanceSecond = Math.floor(distance / milisecond)
        
        if(distanceMonth > 0){
            return `${distanceMonth} bulan`;
        } else if(distanceDay > 0){
            return `${distanceDay} hari`;
        } else if(distanceHours > 0){
            return `${distanceHours} jam`;
        } else if(distanceMinutes > 0){
            return `${distanceMinutes} menit`;
        } else{
            return `${distanceSecond} detik`;
        }

    }

}