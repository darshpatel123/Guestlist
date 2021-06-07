var Guests=[];
function add(){
var latest_g=document.getElementById("name").value;
Guests.push(latest_g);
console.log(Guests);

}

function menu_s(){
    
    display_student=[];
    var length_array=Guests.length;
    console.log(length_array);
    
    for(k = 0; k < length_array;k++){
    display_student.push("<h4>Guests-"+ (k+1) +"   "+ Guests[k]+"</h4>");
    
    
    }
    
    var Value=display_student.join(" ");
    console.log(Value);
    document.getElementById("menu").innerHTML = Value;
    document.getElementById("sort_button").style.display="inline-block";
    
    
    }
    function sort(){
        Guests.sort();
        display_sorted=[];
        var length_array=Guests.length;
        console.log(length_array);
        
        for(b = 0; b < length_array;b++){
        display_sorted.push("<h4>Guests-"+ (b+1) +"   "+ Guests[b]+"</h4>");
        
        
        }
        
        var Value=display_sorted.join(" ");
        console.log(Value);
        document.getElementById("menu_sorted").innerHTML = Value;
        
        
        }
    function search(){
        var searching=document.getElementById("search").value;
        var found=0;
        //var search_l=Guests.length;
        var len;
        for(len=0; len<Guests.length;len++){
            //search_result=Guests[z];
            if(Guests[len] == searching){
               // var search_guest=z + 1;
                found=found+1;
                
            }
            document.getElementById("search_res").innerHTML="Result found"+"Names Found-"+found+" "+"Are same as this name";
                console.log("Result found"+" "+search_guest+" "+"Guest");
            
        }
    }
    