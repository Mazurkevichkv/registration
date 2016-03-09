(function(){

	correctPage=[true,false,false,false]; 

	var app=angular.module('app',[]);

	app.controller('pageController',function(){

		this.currentPage = 1;
		this.secondButton={text:'Вперед'};
        this.firstButton={text:'Назад'};
        this.label=['1. Введите имя и e-mail','2. Выберете страну и город','3. Отметьте социальные сети','4. Выберете любимого котика'];
        this.isCorrect=function(page){
        	return(correctPage[page-1]);
        };
        this.loadPage=function(newPage){
        	   if(newPage==6){
        	   	               this.currentPage=1;  
        	   	               this.makeButton(newPage); 
        	   	               return true;}
        	   if(newPage>this.currentPage){
        	   				   correctPage[this.currentPage-1]=true} 
        	   else {
        	   	               correctPage[this.currentPage-1]=false}
               this.currentPage = newPage;
               this.makeButton(newPage);
        };
        this.makeButton=function(page){
        	 if(this.currentPage==1 || this.currentPage==2 || this.currentPage==3 ){
          	 	    this.secondButton.text='Вперед';};
          	 if( this.currentPage==4){
          	 	    this.secondButton.text='Завершить';
          	 };
        };
        this.isSet = function(tab){
            return this.currentPage === tab;
        };
	});

	app.controller('formController',function(){ 
	   this.patternUrl="/^(https?:\/\/)?([\dA-Za-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/";
	   this.dogVsCat=function(pict){
	   		this.picture=pict;
	   };
        this.checkDog=function(pict){
        	return (pict==4);
        };
        
       this.controlCountry=function(country){
        	if( country==undefined) 
        		       return true;
       }; 
       this.reset=function(user,answerForm,pict){
         user.name=undefined; user.email=undefined;
         user.countries=undefined; user.cities=undefined;
         user.fb=undefined; user.fbsite=undefined;
         user.twitt=undefined; user.twittsite=undefined; 
         user.insta=undefined; user.instasite=undefined;
         user.vk=undefined; user.vksite=undefined;
         pict=undefined;
         correctPage=[true,false,false,false]; 
         answerForm.$setPristine();
       };
	   this.checkValidation= function (user, answerForm, page,pict){
            if(page==1){ 
            	if(answerForm.name.$valid&&answerForm.email.$valid){ 
            		correctPage[page-1]=true;
            	    return false;}
                else{
	                correctPage[page-1]=false;  
	                return true;}
            };
            if(page==2){
            	if(user.cities){
            		correctPage[page-1]=true;
            	    return false;}
            	else{
            		correctPage[page-1]=false;
            		return true;}; 
            	};
            if(page==3){
            	if((user.fb&&!user.fbsite)||(user.twitt&&!user.twittsite)||(user.insta&&!user.instasite)||(user.vk&&!user.vksite)||(!user.fb&&!user.twitt&&!user.vk&&!user.insta)){
            		correctPage[page-1]=false;
            		return true;}
            	else{
    		        correctPage[page-1]=true;
            	    return false;}
            	};	
            if(page==4){
            	    if(pict==4||pict==undefined)
            	    return true;
            	};			
        };

	});
})();

