class Start{
    constructor(){
      this.startButton = createButton('Start');
      this.helperButton = createButton('Child');
      this.parentButton = createButton('Parent');
      this.input = createInput("Name");
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      }
    hide(){
      this.title.hide();
      this.startButton.hide();
    }
    display(){
      //var title = createElement('h1');
      this.title.html("Welcome to ");
      this.title.position(displayWidth/2, 0);
      this.startButton.position(displayWidth/2-40,displayWidth/2-80);
      this.startButton.mousePressed(()=>{
        this.title.hide();
        this.startButton.hide();
        this.input.position(600, 200);
        this.greeting.position(600,300);
        helper.name = this.input.value();
        helper.update();
        this.greeting.html("Welcome, "+helper.name+", Please choose");
        this.helperButton.position(displayWidth/2+30, displayHeight/2);
        this.parentButton.position(displayWidth/2-60, displayHeight/4);
            });
        this.helperButton.mousePressed(()=>{
          appState = "child";
          child = new Child();
        });
        this.parentButton.mousePressed(()=>{
          appState = "parent";
          parent = new Parent();
        });
    }
}