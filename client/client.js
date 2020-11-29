const url=""

window.onload= ()=>{
    $.get(url,(res)=>{
        $('#data').empty()
        let logs=String(res)
        let servers=logs.split('.')
        servers.forEach((server,i)=>{
            let data=server.split(' ')
            appendData(i,data[data.length-1])
        })
    })
}

function startServer(i) {
    $.post( url, { id: i } )
}

function appendData(i,isRunning){
    if (isRunning=='DOWN') {
        $('#data').append(`<div class="row">
                                <div class="col">
                                    <p class="card-text">SERVICIO ${(i+1)}</p>
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
                                    <p class="card-text">SERVICIO ${(i+1)}</p>
                                </div>
                                <div class="col">
                                    <p class="btn btn-success">DISPONILE</p>
                                </div>
                            </div>`)
    }

}