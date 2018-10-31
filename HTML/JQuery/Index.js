$(document).ready(function(){
    $.get("http://jsonplaceholder.typicode.com/todos", function(data, status){
        let listTodos = data;
            if(status == "success"){
                for(let i = 0; i < listTodos.length; i++){
                    let content = "<tr>";
                    if(listTodos[i].id != undefined){
                        content += "<td>" + listTodos[i].id + "</td>";
                    }
                    else{
                        content += "<td> und </td>";
                    }
                        
                    content += "<td>" + listTodos[i].title + "</td>";
                    content += "<td>" + listTodos[i].completed + "</td>";
                    content += "</tr>";

                    $("#todo-Table > tbody").prepend(content);
                }
            }
            else{
                alert('error en el servidor');
            }
    }, 'json');
});

$('#header > h1').click(function(){
    $(this).animate({marginLeft: '500px', opacity: '0.5'}, 5000,function(){
        $(this).css({textShadow: "6px 6px 10px #333"});
    });
    $(this).animate({top: '-50px', opacity: '1'}, 1000,function(){
        $(this).css({textShadow: "none"});
    });
    $(this).animate({marginLeft: '50px', opacity: '0,5'}, 3000);
    $(this).animate({top: '0px', opacity: '1'}, 1000);    
});

$('#header > h1').dblclick(function(){
    $(this).stop(true);
});