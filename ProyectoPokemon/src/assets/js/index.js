var routes = [
    { 
        "path":"/",
        "component":"list.html",
        "controller": function(){
            $.getJSON('./Resources/books.json').done(
                Response=>{
                    let items = response.items;
                    var ract = new Reactive({
                        target: "#Books",
                        template: "#templateCards",
                        data:{
                            items: items
                        }

                    });
                }
            );
        }
    },
    {
        "path": "detail/:id",
        "component": "detail.html",
        "controller": function(id){
            $.getJSON('./Resources/books.json').done(
                Response=>{
                    let items = response.items;
                    let item = item.find(
                        elem => {
                            return elem.id === id;
                        }
                    );
                   
                   if(item){
                       var ract = new Reactive(
                           {
                                target: "#Book",
                                template: "#templateBook",
                                data: item.volumeInfo
                           }
                        
                       );
                   }
                }
            );
        }
    }
];

function getContent(url, callback, param){
    $.ajax(
        {
            url: url,
            requestType: 'GET',
            dataType: 'text',
            success: function callback(response){
                $("#viewContent").html(response);
                if(param){
                    callback(param);
                }
                else{
                    callback();
                }
            },
            error: function(error){
                console.log(error);
            }
        }
    );
}

function router(location){
    // routes.map(
    //     data => {
    //         let url = loc.hash.slice(1)||
    //     }
    // );
}

$('.toggle-sidebar').click(function(event){
        event.preventDefault();
        if(!$('.left-aside').hasClass('aside-close')){
            $('.left-aside').toggleClass('aside-close');            
            $('.left-aside').animate({
                flex: '0 0 50px'
            }, function(){
                $('.main-section').toggleClass('main-collape');
            });
        }else {
            $('.main-section').toggleClass('main-collape');
            $('.left-aside').animate({
                flex: '0 0 25%'
            }, function(){                
                $(this).toggleClass('aside-close');               
            });
        }        
    });