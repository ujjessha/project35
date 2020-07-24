class Form{
    constructor(){
        this.button1=createRadio("YES");
        this.button2=createRadio("NO");
        this.input=createInput("EMAIL ID");
        this.question=createElement('h2');
        this.title=createElement('h2');
    }
    hide(){
       this.input.hide();
       this.button1.hide();
       this.button2.hide();
       this.question.hide();
       this.title.hide();
    }
    display(){
         this.title.html("SURVEY");
         this.title.position(displayWidth/2 - 50, 0);

         
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button2.position(displayWidth/2+20,displayHeight/2);

    this.question.html("DO YOU THINK WE NEED TO HAVE FREE LUNCH MEALS IN OUR SCHOOL CANTEENS FOR THE KIDS WHO ARE VERY POOR");
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.button2.hide();
        this.question.hide();
        voter.emailId=this.input.value();
        voter.answer="yes";
        voter.updateCount();
        voter.update(votersCount);
        this.question=null;

    });
    this.button2.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.button2.hide();
        this.question.hide();
        voter.emailId=this.input.value();
        voter.answer="no";
        voter.updateCount();
        voter.update(votersCount);
        this.question=null;
        
    });


    }
}
