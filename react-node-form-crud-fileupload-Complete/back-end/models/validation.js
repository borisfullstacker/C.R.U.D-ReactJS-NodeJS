var validRegEx = /^[^\\\/&]*$/


module.exports= 
function inpValidation (name, year,id,rating)  {
   
    if (name.match(validRegEx) != null && isNaN(name)) {
        this.name = name;
    }else{
        this.name= null
    }
    
    if (isNaN(year)|| year=="") {
        this.year=null;
    }else{
        this.year = year;
    }
    
    if (isNaN(id)|| id=="") {
        this.id = null;
    }else{
        this.id=id;
    }
    
    
    if (isNaN(rating)) {
        this.rating=null;

    }else{
        this.rating = rating;
    }
}
