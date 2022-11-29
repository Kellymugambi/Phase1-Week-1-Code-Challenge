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

function speed(speed){
    if (speed<70){
        return "OK"
    }
    if (((speed-70)/5)>12)    
        return "License suspended"
        
    if (speed>70){
        return "Points:"+((speed-70)/5)
    }
    }
// console.log(speed(85))


// Net salary calculator
 //payee tax calculator
function payee (basicSalary){
    if (basicSalary<24001){
        return "payee tax:"+((basicSalary*10)/100);  
       }    
    if (basicSalary<32333) {
            return 'payee tax:'+((basicSalary*25)/100)
    } 

     if (basicSalary>32333) {
            return 'payee tax:'+((basicSalary*30)/100)
    } 
    
}
//console.log(payee(70000))


//Nhif rates






console.log(NhifDeduction(1000))