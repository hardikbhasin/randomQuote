function getQuote(){
    var randomQuotes = [
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",

    },
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!",
        author: "Audrey Hepburn",

    },
    {
        quote: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
        author: "Amal Clooney",

    },
    {
        quote: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
        author: "Duchess Meghan",

    },
    {
        quote: "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.",
        author: "Taylor swift",

    },
    {
        quote: "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
        author: "Dr. Phil",

    },
    {
        quote: "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",
        author: "Carrie and Moss",

    },
    {
        quote: "For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.",
        author: "Michelle Obama",

    },
    {
        quote: "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is.",
        author: "Gabrielle Bernstein",

    },
    {
        quote: "I'm going to be gone one day, and I have to accept that tomorrow isn't promised. Am I OK with how I’m living today? It's the only thing I can help. If I didn't have another one, what have I done with all my todays? Am I doing a good job?",
        author: "Hayley Williams",

    },
    {
        quote: "In a gentle way, you can shake the world.",
        author: "Mahatma Gandhi",

    },
    {
        quote: "Everyone has inside of him a piece of good news. The good news is that you don't know how great you can be! How much you can love! What you can accomplish! And what your potential is!",
        author: "Anee Frank",

    },
    {
        quote: "Find out who you are and be that person. That's what your soul was put on this earth to be. Find that truth, live that truth, and everything else will come",
        author: "Ellen DeGeneres",

    },
    {
        quote: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
        author: "Eleanor Roosevelt",

    },
    {
        quote: "I tell myself, 'You've been through so much, you've endured so much, time will allow me to heal, and soon this will be just another memory that made me the strong woman, athlete, and mother I am today.",
        author: "Serena Williams",

    },
    {
        quote: "Dreams don't have to just be dreams. You can make it a reality; if you just keep pushing and keep trying, then eventually you'll reach your goal. And if that takes a few years, then that's great, but if it takes 10 or 20, then that's part of the process.",
        author: "Naomi Osaka",

    },
    {
        quote: "When we let fear be our master, we cannot be happy and free as a butterfly. But when we choose to trust the journey and embrace love and joy, we are free to fly.",
        author: "Annicken R. Day",

    },
    {
        quote: "I'm not a handsome guy, but I can give my hand to someone who needs help. Beauty is in the heart, not in the face.",
        author: "Dr. APJ Abdul Kalam",

    },
    {
        quote: "If you fail, never give up because F.A.I.L. means 'First Attempt In Learning'. End is not the end, if fact E.N.D. means 'Effort Never Dies.' If you get No as an answer, remember N.O. means 'Next Opportunity', So let's be positive",
        author: "Dr. APJ Abdul Kalam",

    },
    {
        quote: "Be active! Take on responsibility! Work for the things you believe in. If you do not, you are surrendering your fate to others.",
        author: "Dr. APJ Abdul Kalam",

    },
    {
        quote: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.",
        author: "William W. Purkey",

    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
        author: "Dr. Seuss",

    },
    {
        quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",

    },
 
    {
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author: " Helen Keller",

    },
    {
        quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
        author: "Paulo Coelho, The Alchemist",

    },
    {
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        author: "John Lennon",

    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",

    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",

    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: " Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",

    },
    {
        quote: "RATIONAL, adj. Devoid of all delusions save those of observation, experience and reflection.",
        author: "Ambrose Gwinett Bierce",

    },
    {
        quote: "Understanding human needs is half the job of meeting them.",
        author: " Adlai Ewing Stevenson",

    },
    {
        quote: "Of what good is our faith, our repentance, our baptism, and all the sacred ordinances of the gospel by which we have been made ready to receive the blessings of the Lord, if we fail, on our part, to keep the commandments.",
        author: " Heber J. Grant",

    },
    {
        quote: "The people made the Constitution, and the people can unmake it. It is the creature of their own will, and lives only by their will.",
        author: " John Marshall",

    },
    {
        quote: "Be courageous. I have seen many depressions in business. Always America has emerged from these stronger and more prosperous. Be brave as your fathers before you. Have faith! Go forward!",
        author: "Thomas Alva Edison",

    },
    {
        quote: "Don't laugh at youth for his affectations; he is only trying on one face after another to find his own.",
        author: "Logan Pearsall Smith",

    },


];
var randomColors= "rgb("+ Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," +Math.floor(Math.random()*255) +")";
var x= document.querySelector(".quote");
var y= document.querySelector(".author");
var ind=Math.floor(Math.random()*35);
x.innerHTML='"';
x.innerHTML+=randomQuotes[ind].quote;
x.innerHTML+='"';
y.innerHTML="- "
y.innerHTML+=randomQuotes[ind].author;
document.querySelector("body").style.backgroundColor=randomColors;
}
var button= document.querySelector(".btn");
button.onclick = getQuote;


getQuote();

