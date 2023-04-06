/*
This is empty on purpose! Your code to build the resume will go here.
 */
let model = {
    data: {
        bio: {
            name: String,
            role: String,
            contacts: {
                mobile: String,
                email: String,
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
                employer,
                title,
                location,
                dates,
                description
            }],
            display: ()=>{

            }
        },
        projects: {
            projects: [{
                title,
                dates,
                description,
                images
            }],
            display: () =>{

            }
        }
    }
}