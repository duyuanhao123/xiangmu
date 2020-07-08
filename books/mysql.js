const mysql = require('mysql');
module.exports = {
    "sel": (res) => {
        var conn = mysql.createConnection({
            "host": "127.0.0.1",
            "user": "root",
            "password": "",
            "database": "h52002"
        })
        var sql = "SELECT id,name,price,count,zuozhe,jianjie FROM books";
        conn.query(sql, function (err, result) {
            res.end(JSON.stringify(result));
        });
        conn.end();
    },
    "sel1": (res, uname, psw) => {
        var conn = mysql.createConnection({
            "host": "127.0.0.1",
            "user": "root",
            "password": "",
            "database": "h52002"
        })
        var sql = "SELECT name,psw FROM man";
        conn.query(sql, (err, result) => {
            // console.log(result);
            for (var i = 0; i < result.length; i++) {
                if (result[i].name == uname && result[i].psw == psw) {
                    // res.end(JSON.stringify(result));
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('<head><meta charset="utf-8"/></head>');
                    res.end(`<script>location='/yhc';sessionStorage['name']='${uname}'</script>`);
                    return false;
                }
                res.end(`<script>location='/'</script>`)
            }
        })
        conn.end();
    },
    "into": (res, arr) => {
        var conn = mysql.createConnection({
            "host": "127.0.0.1",
            "user": "root",
            "password": "",
            "database": "h52002"
        })
        var sql = "INSERT INTO books VALUES(0,?,?,?,?,?,?)";
        conn.query(sql, arr, (err, result) => {
            if (result) {
                res.end(`<script>location='/yhc'</script>`)
            }
        })
        conn.end();
    },
    "del": (res, id) => {
        var conn = mysql.createConnection({
            "host": "127.0.0.1",
            "user": "root",
            "password": "",
            "database": "h52002"
        })
        var arr = [id];
        var sql = "DELETE FROM books WHERE id=?";
        conn.query(sql, arr, (err, result) => {
            if (result) {
                res.end(`<script>location.reload()</script>`)
            }
        })
        conn.end();
    },
    "zzz": (res, id) => {
        var conn = mysql.createConnection({
            "host": "127.0.0.1",
            "user": "root",
            "password": "",
            "database": "h52002"
        })
        
        var sql = `SELECT * FROM books WHERE id=${id}`;
        conn.query(sql,(err, result) => {
            // if (result) {
                res.end(JSON.stringify(result));
                // console.log(result);
            // }
        })
        conn.end();
    },
    "upd":(res,arr,ddd)=>{
        var conn = mysql.createConnection({
            "host": "127.0.0.1",
            "user": "root",
            "password": "",
            "database": "h52002"
        })
        // var sql=`UPDATE books SET name=?,zuozhe=?,count=?,price=?,jianjie=?,content=? WHERE name='${arr[0]}'`;
        var sql=`UPDATE books SET name="${arr[0]}",zuozhe='${arr[1]}',count='${arr[2]}',price=${arr[3]},jianjie='${arr[4]}',content='${arr[5]}' where id='${ddd}'`;
        console.log(arr);
        conn.query(sql,arr,(err,result)=>{
            if(result){
                res.end(`<script>location='/yhc'</script>`)
            }
            res.end(`<script>alert('修改失败');loaction='/yhc'</script>`)
        })
        conn.end();
    },
}
