$(document).ready(function(){
    $("#theme-list").change(function(){
        
        if($(this).val() == "dark"){
            console.log("clicked")
            $("body").css({
                "background-color": "#000",
                "color": "#fff"
            });

        }
        if($(this).val() == "light"){
         
            $("body").css({
                "background-color": "#fff",
                "color": "#111"
            });

        }
 
        if($(this).val() == "contrast"){
            $("body").css({
                "background-color": "#000",
                "color": "#ff0",
                "font-weight": "bold"
                
             });
          
            $("nav").css({
                "border-bottom": "2px solid #ff0",
                "background-color": "#111",
                "color": "#ff0"
            });
           
           
            $(".flxnav-logo").css({
                "background-color": "#000",
                "color": "#ff0",
                "font-weight": "bold"

            })
            $(".flxnav-menu a").css({
                
                "color": "#ff0"
            })
        }
        })
    
    });

