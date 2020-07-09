class Child{
    constructor(){
        this.name = null;
        //Chat, call, video call, order stuff, emergency contact numbers, reminders for checkup
        //GPS Tracker, pay bills/insurance
        this.chat = createButton('Chat');
        this.order = createButton('Orders');
        this.contacts = createButton('Contacts');
        this.settings = createButton('Settings');
        this.reminders = createButton('Reminders');

        this.message = createInput("Message");
        this.videoCall = createButton('Video Call');
        this.voiceCall = createButton('Voice Call');

        this.payOrder = createButton('Order Now');

        this.newContact1 = createInput('Enter contact number');
        this.newContact2 = createInput('Enter contact number');
        this.newContact3 = createInput('Enter contact number');
        this.newContact4 = createInput('Enter contact number');
        this.newContact5 = createInput('Enter contact number');

        this.contact1 = null;
        this.contact2 = null;
        this.contact3 = null;
        this.contact4 = null;
        this.contact5 = null;

        this.newReminder = createButton('New reminder');
        this.reminderRec = createElement('h3');

        this.gps = createButton('GPS');
        this.help = createButton('Help');
    }
    chat(){
      
    }
    order(){

    }
    contacts(){
      this.newContact1.position = (500,300);
      this.newContact2.position = (500,350);
      this.newContact3.position = (500,400);
      this.newContact4.position = (500,450);
      this.newContact5.position = (500,500);

      this.contact1.position = (400,300);
      this.contact2.position = (400,350);
      this.contact3.position = (400,400);
      this.contact4.position = (400,450);
      this.contact5.position = (400,500);

      this.newContact1.value = this.contact1;

      if(this.contact1 == null){
        text("Contact1", 400, 500);
        }
        else{
           text("Contact 1- "+this.contact1, 400, 500);
        }
        if(this.contact2 == null){
          text("Contact2", 400, 500);
          }
          else{
             text("Contact 2- "+this.contact2, 400, 500);
          }
          if(this.contact3 == null){
            text("Contact3", 400, 500);
            }
            else{
               text("Contact 3- "+this.contact3, 400, 500);
            }
            if(this.contact4 == null){
              text("Contact4", 400, 500);
              }
              else{
                 text("Contact 4- "+this.contact4, 400, 500);
              }
              if(this.contact5 == null){
                text("Contact5", 400, 500);
                }
                else{
                   text("Contact 5- "+this.contact5, 400, 500);
                }
    }
    pay(){

    }
    reminders(){
        
    }  
    display(){
        this.chat.mousePressed(()=>{
            appState = "chat";
        });
        this.order.mousePressed(()=>{
            appState = "order";
        });
        this.contacts.mousePressed(()=>{
            appState = "contacts";
        });
        this.pay.mousePressed(()=>{
            appState = "pay";
        });
        this.reminders.mousePressed(()=>{
            appState = "reminders";
        });
    }
}