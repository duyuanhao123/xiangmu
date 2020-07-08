$.get("/gsj",(data)=>{
    var $table=$(`<table class='table table-hover table-bordered table-striped'></table>`);
    var $tr=$("<tr></tr>");
    for(var i in data[1]){
        $tr.append($(`<td>${i}</td>`))
    }
    $table.append($tr)
    for(var i=0;i<data.length;i++){
        var $tr=$("<tr></tr>")
        for(var j in data[i]){
            $tr.append($(`<td>${data[i][j]}</td>`))
        }
        $table.append($tr)
    }
    $(".table-responsive").append($table)
},"JSON")



