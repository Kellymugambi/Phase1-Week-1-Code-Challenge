// 1 STUDENT GRADE CHALLENGE

//0-100 marks
// 80-100 ="A"
// 60-79="B"
// 50-59="C"
// 40-49="D"
// less 40="E"

function grade(marks){

    if (marks < 40){
        return "Grade E"
    }
    else if (marks < 50){
        return "Grade D"
    }
    else if(marks < 60){
        return "Grade C"
    }
    else if (marks < 80){
        return "Grade B"
    }
    else if (marks < 100){
        return "Grade A"
    }
}
// console.log(grade(74))



// 2 SPEED DETECTOR 

//  if speed is less 70= "OK"
// if speed is more than 70, for every 5km/s give driver one demerit point
// if the points exceed 12, print license suspended

function speedDetector(speed){
    if (speed<70){
        return "OK"
    }
    if (((speed-70)/5)>12)    
        return "License suspended"
        
    if (speed>70){
        return "Points:"+((speed-70)/5)
    }
    }
    function evokeSpeed(event){
        let speed = document.getElementById('speed').value
        let speedKph = Boolean(speed) ? speed : 0;
        document.getElementById('result').textContent = (speedDetector(speedKph))
    }
    

// console.log(speed(85))

 //payee tax calculator


function payee (grossPay){
    if (grossPay<24001){
        return "payee tax:"+((grossPay*10)/100);  
       }    
    if (grossPay<32333) {
            return 'payee tax:'+((grossPay*25)/100)
    } 

     if (grossPay>32333) {
            return 'payee tax:'+((grossPay*30)/100)
    } 
    
}
//console.log(payee(70000))


//Nhif rates
function nhifDeduction(grossPay){
    if (grossPay< 6000){
        return 150
    }  if(grossPay< 8000){
        return 300
    }  if(grossPay < 12000){
        return 400
    }  if(grossPay < 15000){
        return 500
    }  if(grossPay < 20000){
        return 600
    }  if(grossPay < 25000){
        return 750
    } if(grossPay  < 30000){
        return 850
    } if(grossPay < 35000){
        return 900
    }  if(grossPay < 40000){
        return 950
    } if(grossPay  < 45000){
        return 1000
    }  if(grossPay < 50000){
        return 1100
    }  if(grossPay < 60000){
        return 1200
    } if(grossPay  < 70000){
        return 1300
    } if(grossPay  < 80000){
        return 1400
    } if(grossPay  < 90000){
        return 1500
    } if(grossPay  <100000){
        return 1600
    } if(grossPay >= 100000){
        return 1700 
    }  
}
// console.log(nhifDeduction(950000))


function nssf(grossPay){
    return parseInt(grossPay *= 0.06)
}
//console.log(nssf(24000))

// Net salary
function netPay(grossPay){
    let netSalary = grossPay - payee (grossPay) -nhifDeduction(grossPay) - nssf(grossPay)
    return parseInt(netSalary)
    
}



 
 function displayDeductions(event){
     let grossSalary = document.getElementById('grossPay').value 
     let salary = Boolean(grossSalary) ? grossSalary : 0;
     document.getElementById('net-salary').textContent = (`Ksh ${netPay(salary)}`)
     document.getElementById('paye').textContent = (`Ksh ${payee(salary)}`)
     document.getElementById('nssf').textContent = (`Ksh ${nssf(salary)}`)
     document.getElementById('nhif').textContent = (`Ksh ${nhifDeduction(salary)}`)
 }