img=""
staus=""
object=[]
function preload(){
    img=loadImage("BEDROOM.jpg")
}
function setup(){
    Canvas=createCanvas(500,400)
    Canvas.center()
    
    Object_Detect=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("satus").innerHTML="Status detecting object"
    }
    function modelloaded(){
        console.log("model loaded")
        staus=true;
        Object_Detect.detect(img,gotresult)
    }
    function gotresult (error,result){
        if(error){
            console.log(error)
        }
    
    object=result
    console.log(object)
    }
    
    function draw(){
        image(img,0,0,500,400)
    
    
        if(staus !=""){
            for(vish=0; vish<object.length;vish++){
                document.getElementById("satus").innerHTML="Status:Object Detected"
                percentag=floor(object[vish].confidence*100)
                fill("blue")
                text(object[vish].label+" "+percentag+"%",object[vish].x,object[vish].y)
                noFill()
                stroke("blue")
                rect(object[vish].x,object[vish].y,object[vish].width,object[vish].height)
        }
    }
    }

function back(){
    window.location="index.html"
}


