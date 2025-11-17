
export interface Quote {
  data: string;
  description?: string;
  author: string;          // required – every entry has an author
  attribution?: string;
  my_reference?: string;
  category?: string;
}

export const data: Quote[] = [
    {
        data: "notes can be good",
        author: "me",
        attribution: "tradition and logic",
        my_reference: "book one page one",
        category: "general"
    },
    {
        data: "I am tall",
        author: "lebron",
        attribution: "everyone",
        my_reference: "all the shit",
        category: "general"
    },
    {
        data: "The Multidisciplinary Approach",
        description: "You ",
        author: "Charlie Munger",
    },
    {
        data: "Inversion",
        description:
        "invert the problem. if you want to have a successful company try to make a plan of how to have a failing company",
        author: "Charlie Munger",
    },
    {
        data: "Prescriptions for a miserable life",
        description:
        "Ingesting chemicals… envy… resentment… be unreliable… never invert your problems…",
        author: "Charlie Munger",
        attribution: "Johnny Carson speech",
        my_reference: "poor charlies almanac pg 77",
    },
    {
        data: "Reverse Charisma",
        description: "",
        author: "Chris Williamson",
    },
    {
        data: "know the way broadly see it in all things",
        author: "musashi",
    },
    {
        data: "If you cant teach something to a 5 year old you dont understand it",
        author: "Richard Feynman",
    },
    {
        data: "I never allow myself to have an opinion on anything that I dont know the other sides argument better than they do",
        author: "Charlie Munger",
    },
    {
        data: "dont be idealistic zealot",
        author: "Charlie Munger",
    },
    {
        data: "be a learning machine. Try to be wiser every day.",
        author: "Charlie Munger",
    },
    {
        data: "filial piety of ideas or values that are taught and duties that should be passed on to the next generation",
        author: "Charlie Munger",
        my_reference: "PCA pg 269",
    },
    {
        data: "Avoid List",
        author: "Warren Buffet",
    },
    {
        data: "Speaking on benjamin franklin and charlie munger…",
        author: "Peter D Caughman",
        attribution: "Benjamin Franklin",
        my_reference: "PCA pg 54",
    },
    {
        data: "Speaking on benjamin franklin and charlie munger…",
        author: "Peter D Caughman",
        attribution: "Charlie Munger",
        my_reference: "PCA pg 54",
    },
    {
        data: "On Charlie Mungers work ethic…",
        author: "Peter Caughman",
        attribution: "Charlie Munger",
        my_reference: "PCA pg 62",
    },{
        data: "Charlie said: I like to read, I like to hang out with smart people, I like to make money with my mind, I like to think about the world... And he built that world around him",
        author: "david senra talking about charlie munger",
        attribution: "charlie munger",
        my_reference: "the last few mins of founders what i learned at dinner with charlie munger"
    },
    {
        data: "The best thing a human being can do is help another human being know more",
        author: "david Senra",
        attribution: "Charlie Munger",
        my_reference: "the last few mins of founders what I learned at dinner with charlie munger"
    }
];