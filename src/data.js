const data = {
    admin:[
        {id:1, name:"admin", email:"ss@gmail.com",password:"123" }
    ],
    faculty:[
        {id:1,name:"faculty1",email:"faculty1@gmail.com",password:"faculty1", branch:"cse", phone:"99999991"},
        {id:2,name:"faculty2",email:"faculty2@gmail.com",password:"faculty2", branch:"cse", phone:"99999992"},
        {id:3,name:"faculty3",email:"faculty3@gmail.com",password:"faculty3", branch:"cse", phone:"99999993"},
        {id:4,name:"faculty4",email:"faculty4@gmail.com",password:"faculty4", branch:"cse", phone:"99999994"},
        {id:5,name:"faculty5",email:"faculty5@gmail.com",password:"faculty5", branch:"cse", phone:"99999995"},
        {id:6,name:"faculty6",email:"faculty6@gmail.com",password:"faculty6", branch:"cse", phone:"99999996"},
        {id:7,name:"faculty7",email:"faculty7@gmail.com",password:"faculty7", branch:"cse", phone:"99999997"},
        {id:8,name:"faculty8",email:"faculty8@gmail.com",password:"faculty8", branch:"cse", phone:"99999998"},
        {id:9,name:"faculty9",email:"faculty9@gmail.com",password:"faculty9", branch:"cse", phone:"99999999"},
        {id:10,name:"faculty10",email:"faculty10@gmail.com",password:"faculty10", branch:"cse", phone:"999999910"}   
    ],
    student:[
        {id:1, name:"student1", email:"student1@gmail.com", password:"student1", courses:"react1",phone:"99998881"},
        {id:2, name:"student2", email:"student2@gmail.com", password:"student2", courses:"react2",phone:"99998882"},
        {id:3, name:"student3", email:"student3@gmail.com", password:"student3", courses:"react3",phone:"99998883"},
        {id:4, name:"student4", email:"student4@gmail.com", password:"student4", courses:"react4",phone:"99998884"},
        {id:5, name:"student5", email:"student5@gmail.com", password:"student5", courses:"react5",phone:"99998885"},
        {id:6, name:"student6", email:"student6@gmail.com", password:"student6", courses:"react6",phone:"99998886"},
        {id:7, name:"student7", email:"student7@gmail.com", password:"student7", courses:"react7",phone:"99998887"},
        {id:8, name:"student8", email:"student8@gmail.com", password:"student8", courses:"react8",phone:"99998888"},
        {id:9, name:"student9", email:"student9@gmail.com", password:"student9", courses:"react9",phone:"99998889"},
        {id:10, name:"student10", email:"student10@gmail.com", password:"student10", courses:"react10",phone:"999988810"}
    ],
    courses:[
        {id:1,name:"react1",price:1000, days:111},
        {id:2,name:"react2",price:2000, days:222},
        {id:3,name:"react3",price:3000, days:333}
    ],
    slots:[
        {id:1, name:"7-8"},
        {id:2, name:"8-9"},
        {id:3, name:"9-10"},
        {id:4, name:"10-11"},
        {id:5, name:"11-12"},
    ],
    batch:[],
    menu:[
    {lable:"admin", to: "/admin"},    
    {lable:"student", to: "/student"},    
    {lable:"courses", to: "/courses"},    
    {lable:"slots", to: "/slots"},    
    {lable:"chart", to: "/chart"},    
    {lable:"graph", to: "/graph"},    
    {lable:"attendance", to: "/attendance"},    
    {lable:"faculty", to: "/faculty"},    
    {lable:"planner", to: "/planner"}    
    ]
}

export default data