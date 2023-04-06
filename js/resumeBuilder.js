/*
This is empty on purpose! Your code to build the resume will go here.
 */
let model = {
    data: {
        bio: {
            name: "Fortune Ishaku",
            role: "Web Developer",
            contacts: {
                mobile: "+234-816-173-6593",
                email: "fortuneyusufishaku@gmail.com",
                github: String,
                twitter: String, 
                location: String,
            },
            welcomeMessage: String,
            skills: [],
            biopic: String,
            display: () =>{

            }
        },
        education:{
            schools: [{
                name: String,
                location: String,
                majors: [String, String,],
                dates: String,
                url: String,
            }],
            onlineCourses: [{
                title: String,
                school: String,
                dates: String,
                url: String
            }],
            display: ()=>{

            }
        },
        work: {
            jobs: [{
                employer: String,
                title: String,
                location: String,
                dates: String,
                description: String
            }],
            display: ()=>{

            }
        },
        projects: {
            projects: [{
                title: String,
                dates: String,
                description: String,
                images: String
            }],
            display: () =>{

            }
        }
    }
}

let octopus = {
    getBio: () =>{
        return model.data.bio
    }
}

let view = {
    displayBioHeader: ()=>{
        let HTMLheaderName = '<h1 id="name">%data%</h1>';
        var HTMLheaderRole = '<span>%data%</span><hr>'
        HTMLheaderName = HTMLheaderName.replace("%data%", octopus.getBio().name);
        HTMLheaderRole = HTMLheaderRole.replace("%data%", octopus.getBio().role);
        document.querySelector("#header").prepend(HTMLheaderName);
    },
    displayBioContacts: () =>{
        // var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
        var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
        HTMLmobile = HTMLmobile.replace("%data%", octopus.getBio().contacts.mobile);
        var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
        HTMLemail = HTMLemail.replace("%data%", octopus.getBio().contacts.email)
        var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
        var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
        var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
        var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
        document.querySelector("#topContacts").innerHTML += HTMLmobile + HTMLemail;
    }
}
view.displayBioHeader();
view.displayBioContacts();