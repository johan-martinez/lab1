const url="http://localhost:8000/"

window.onload= ()=>{
    $.get(url,(respond)=>{
        let res=respond.replace(/(\r\n\t|\n|\r\t)/gm,"");
        console.log(res);
        $('#data').empty()
        let servers=res.split(';')
        servers.forEach((server,i)=>{
            //console.log(server);
            if(server!=""&&server!=''){
                let data=server.split(' ')
                appendData(i,data[data.length-1], data[data.length-3])
            }
        })
    })
}

function startServer(i) {
    window.event.preventDefault()
    $.post({
        traditional: true,
        url: url,
        contentType: 'application/json',
        data: JSON.stringify( {
            id: i
        } ),
        dataType: 'json'
    }).done(function(req){
        let data=JSON.parse(JSON.stringify(req))
        alert(data.request)
    })
}

function appendData(i,isRunning, nameUrl){
    if (isRunning=='DOWN') {
        $('#data').append(`<div class="row">
                                <div class="col">
                                    <p class="card-text">SERVICIO ${(i+1)}: (${nameUrl})</p>
                                </div>
                                <div class="col">
                                    <p class="btn btn-danger">INACTIVO</p>
                                </div>
                                <div class="col">
                                    <button class="btn btn-primary" onClick="startServer(${i})">REINICIAR</button>
                                </div>
                            </div>`)
    } else {
        $('#data').append(`<div class="row">
                                <div class="col">
                                    <p class="card-text">SERVICIO ${(i+1)}: (${nameUrl})</p>
                                </div>
                                <div class="col">
                                    <p class="btn btn-success">DISPONILE</p>
                                </div>
                            </div>`)
    }

}