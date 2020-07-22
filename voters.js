class Voters{
    constructor(){
        this.index=null;
        this.emailId=null;
        this.answer=null;
    }
    getCount(){
        var voterCountRef=database.ref("votersCount");
        voterCountRef.on("value",(data)=>{
            votersCount=data.val();
        }) 
    }
    updateCount(count){
        database.ref('/').update({
         votersCount: count
        });
      }
      update(){
        var votersIndex = "voters/voter" + this.index;
        database.ref(votersIndex).set({
          emailId :this.emailId,
          answer:this.answer

        })
    }
}