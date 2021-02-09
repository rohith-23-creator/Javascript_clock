const hours = document.querySelector(".hours");
const minutes =document.querySelector(".minutes")
const seconds = document.querySelector(".seconds");

function getTime(){
    const getDate =  new Date();
    const getHr =  getDate.getHours();
    const getMin = getDate.getMinutes();
    const getSec = getDate.getSeconds();
    hours.innerHTML = getHr ;
    minutes.innerHTML = getMin;
    seconds.innerHTML = getSec ;

    if(getSec < 10 ){
        seconds.innerHTML = "0"+ getSec
    }   

}



setInterval(getTime , 1)