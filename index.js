
function doSomething() {

    var myvalidate = [
    	['fname',/^[A-Z][a-z]{2,30}$/,'First name must be more than 2 character and begin with upper case'],
    	['lname',/^[A-Z][a-z]{2,30}$/,'Last name must be more than 2 character and begin with upper case'],
    	['password',/^(?=.*?[0-9]).{8,12}$/,'Password field length must be 8 to 12 characters and must include numbers'],
    	['phonenumber',/^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,'Phone number allows only ten digits'],
    	['postcode',/[a-zA-Z]\d[a-zA-Z] ?\d[a-zA-Z]\d/,'Postal code field only allows “A9A 9A9” format'],
    	['email',/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,'Email must be in correct format']
    ];


    var result = true;


    var nullfield = [
    	['address','Street Address must be filled'],

    	['city','City must be filled'],
    	['province','Province must be filled'],
    	['program','Program interest must be filled']

    ];



    for(i = 0; i < myvalidate.length;i++){


    		//console.log(myvalidate[i][2]);
    		var result1 = check(myvalidate[i]);
    		console.log(result1);
    		if(result1 == false){
    			console.log(myvalidate[i][2]);
    			result = false;
    			alert(myvalidate[i][2]);
    			return false;

    		}


    }

    for (k = 0; k < nullfield.length;k++){

   		var mynull = checkNull(nullfield[k]);
   		if(mynull == false){
   			console.log(nullfield[k][1]);
    		result = false;
    		alert(nullfield[k][1]);
    		return false;
   		}


   	}


    var password = document.getElementsByName('password')[0].value;
    var confirm = document.getElementsByName('confirm')[0].value;

    if(password != confirm){

    	result = false;
    	alert("Confirm password must be the same");
    	return false;
    }

   	if(result){
   		window.open("result.html");

   	}
   	else{

   		return false;
   	}

   //	return false;



}


// function checkNull(a){
//
// 	var x = document.getElementsByName(a[0])[0].value;
//
//
//
// 	return (x == "" ? false:true);
//
// }


function check(a){

	var x = document.getElementsByName(a[0])[0].value;
	var reg = new RegExp(a[1]);
	console.log(x);
	//console.log(reg.test(x));

	return reg.test(x);

}
