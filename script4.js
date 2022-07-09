

   //  person class to hold all details

      class person{
        constructor(name,age,place,gender)
        {
            this.age=age;
            this.place=place;
            this.gender=gender;
            this.name=name;
        }
        getpersondetails()
        {
            console.log(`person details are here ${this.age} and ${this.place} and ${this.gender} and ${this.name}`);
        }
      }
      let p1=new person("22","chennai","male","hari");
      p1.getpersondetails();



   //    class to calculate uber price
   
   
   class uber{
    constructor(distance,rate,waitingtime,untime)
    {
        this.distance=distance;
        this.rate=rate;
        this.waitingtime=waitingtime;
        this.untime=untime;
    }
   setextradistance(distance)
     {
      this.distance=distance;
     }
   
    getalldetails()
    {
        
        console.log(`the travel details are ${this.distance} and ${this.rate} and ${this.waitingtime} and ${this.untime}`);
    }
    getcalculationprice()
    {
        
        if(this.waitingtime<12)
        {
         this.rate=5000;
        }  
        else
        {
          this.rate=1300;
        }
        let totalprice;
        totalprice=((this.rate*this.distance) + (this.waitingtime*5));
        return totalprice;
    }
   }
   let uber1 = new uber(356,12,11,7);
     console.log(uber1.getcalculationprice());
     uber1.setextradistance(120);
     console.log(uber1.getcalculationprice());
     console.log(uber1.getalldetails());

