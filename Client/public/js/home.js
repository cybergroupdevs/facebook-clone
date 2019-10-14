$(document).ready( function(){
    $("#btn").click( function(){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var output = d.getFullYear() + '-' +
            (month<10 ? '0' : '') + month + '-' +
            (day<10 ? '0' : '') + day;
            console.log('hello');
        $.ajax("http://localhost:9000/home",{
                type:"POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify({
                    "userid":"user@gmail.com",
                    "posts":[{
                        "postdate":output,
                        "postdata":$.trim($("#myTextarea").val())
                    }]
                }),
                success:function(data, status){
                    console.log(data.msg +" "+status);
                },
                error: function(error){
                    console.log(error +" "+ "error occurred");
            }
        });
    });
    $("#comment-btn").click( function(){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var output = d.getFullYear() + '-' +
            (month<10 ? '0' : '') + month + '-' +
            (day<10 ? '0' : '') + day;
            console.log('hello');
        $.ajax("http://localhost:9000/home/comment",{
                type:"POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify({
                    "post_id" : "p1235",
                    "user_id":"bhujel@gmail.com",
                    "comment_user": $.trim($("#comment-id").val()),
                    "comment_date" : output
                }),
                success:function(data, status){
                    console.log(data.msg +" "+status);
                },
                error: function(error){
                    console.log(error +" "+ "error occurred");
            }
        });
    });
    $("#show-comments").click( function(){
        console.log('hide')
        $(".display-comment").show();
    });
});