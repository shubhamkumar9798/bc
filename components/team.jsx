import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { title } from "process";

const coreMembers = {
  management: [
    {
      title: "President",
      image: "/Anshul L.png",
      name: "Anshul L",
      year: "3rd Year",
      department: "EEE",
      description: "All I want to do is go the distance"
    },
    {
      title: "Vice President",
      image: "/A Ankitha Reddy.png",
      name: "A Ankitha Reddy",
      year: "3rd Year",
      department: "CSE",
      description: "A tree-hugging programming junkie, recycling both her waste and her code."
    },
    {
      title: "Secretary",
      image: "/Ajitessh.png",
      name: "Ajitessh R",
      year: "3rd Year",
      department: "ECE",
      description: "From 'I can do this whole day' to 'can I do this in one day?', life happens."
    }
  ],
  advisors: [
    {
      title: "Advisor",
      image: "/Aathish.png",
      name: "Aathish S",
      year: "4th Year",
      department: "CSE",
      description: "Building, Breaking and Fixing things - in that order."
    },
    {
      title: "Advisor",
      image: "/Alamelu.png",
      name: "Alamelu Kannan",
      year: "4th Year",
      department: "CSE",
      description: "A fun-loving team player who thrives on good vibes and turning cool concepts into reality!."
    },
    {
      title: "Advisor",
      image: "/aswathy.png",
      name: "Aswathy",
      year: "4th Year",
      department: "EEE",
      description: "."
    }
  ],
  projectLead: [
    {
      title: "Project Lead",
      image: "/Sreeram.png",
      name: "R Sreeram",
      year: "3rd Year",
      department: "ECE",
      description: "I do be cooking computer chips in my backyard one day."
    },
    {
      title: "Project Lead",
      image: "/avaneesh.png",
      name: "Avaneesh Koushik",
      year: "3rd Year",
      department: "CSE",
      description: "Passionate about technology and always ready to learn."
    }
  ],
  software: [
    {
      title:"Joint Secretary",
      image: "/pranav.png",
      name: "Pranav Moorthi",
      year: "3rd Year",
      department: "CSE",
      description: "I enjoy puzzles and sometimes computer science."
    },
    {
      title : "Software",
      image: "/justin.png",
      name: "Justin Benito B",
      year: "3rd Year",
      department: "ECE",
      description: "Tinkering with code at day, writing content at night."
    },
    {
      title : "Software",
      image: "/sreekar.png",
      name: "Sreekar Kashyap C",
      year: "3rd Year",
      department: "IT",
      description: "REST-less, trying to resolve dependencies."
    },{
      title : "Software",
      image: "/GKR.png",
      name: "G Kavin Rajan",
      year: "3rd Year",
      department: "ECE",
      description: "Tinkering with code at day, writing content at night."
    },
    {
      title : "Software",
      image: "/shubham.png",
      name: "Shubham",
      year: "2nd Year",
      department: "CSE",
      description: "In the world of infinite loops, Find your purpose in creating exit condition."
    },
    {
      title : "Software",
      image: "/sathvika.png",
      name: "Sathvika K S",
      year: "2nd Year",
      department: "CSE",
      description: "Tumbling down the rabbit hole."
    },
    {
      title : "Software",
      image: "/sowmya.png",
      name: "Sowmya Anand",
      year: "2nd Year",
      department: "CSE",
      description: "Passionate about technology and always ready to learn."
    }
  ],
  hardware: [
    {
      title: "Joint Secretary",
      image: "/Goutham R.png",
      name: "Goutham R",
      year: "3rd Year",
      department: "EEE",
      description: "Roses are blue depending on velocity relaive to you."
    },
    {
      title: "Hardware",
      image: "/anas.png",
      name: "Mohamad Anas S",
      year: "3rd Year",
      department: "EEE",
      description: "When it rains, it pours."
    },
    {
      title: "Hardware",
      image: "/Gowshika.png",
      name: "Gowshika J",
      year: "3rd Year",
      department: "ECE",
      description: "Eager to learn, connect and grow!."
    },
    {
      title: "Hardware",
      image: "/chinmaiyee.png",
      name: "Chinmaiyee V",
      year: "3rd Year",
      department: "ECE",
      description: "On a journey from a plain board to circuit boards...."
    },
    {
      title: "Hardware",
      image: "/anush.png",
      name: "Anush Krishna",
      year: "2nd Year",
      department: "ECE",
      description: "Aviation and space enthusiast."
    },
    
    {
      title: "Hardware",
      image: "/tharun.png",
      name: "Tharun V",
      year: "2nd Year",
      department: "ECE",
      description: "An enthusiastic and quick learner, always eager to  dive int new challenges and opportunities."
    },
    {
      title: "Hardware",
      image: "/yogesh.png",
      name: "Yogeshwaran",
      year: "2nd Year",
      department: "Mech",
      description: "A meche with a love for building robots and a knack for design and coding."
    },
    {
      title: "Hardware",
      image: "/paul.png",
      name: "Paul Jey Sanjith J",
      year: "2nd Year",
      department: "EEE",
      description: "God did"
    },
    {
      title: "Hardware",
      image: "/naveen.png",
      name: "Naveen ",
      year: "2nd Year",
      department: "ECE",
      description: "Ready to tackle both digital and analog challenges and bring fresh perspective to our innovations."
    }
  ],
  publicRelations: [
    {
      title:"Joint Secretary",
      image: "/aswin.png",
      name: "Aswin Dava",
      year: "3rd Year",
      department: "ECE",
      description: "Reaching out to embrace the random, reaching out to embrace whatever may come."
    },
    {
      title: "PR and Operations ",
      image: "/ann.png",
      name: "Ann Maria Thomas",
      year: "3rd Year",
      department: "CSE",
      description: "Do it for the plot."
    },
    {
      title: "PR and Operations ",
      image: "/sai.png",
      name: "Sri Sai Niranjan",
      year: "3rd Year",
      department: "ECE",
      description: "Grounded in operations, at times star gazing."
    },
    
    {
      title: "PR and Operations ",
      image: "/Aishwarya.png",
      name: "Aishwarya G",
      year: "2nd Year",
      department: "IT",
      description: "Maybe the real PR was the friends we all made along."
    },
    {
      title: "PR and Operations ",
      image: "/chindhana.png",
      name: "Chindhana K",
      year: "2nd Year",
      department: "EEE",
      description: "Making waves in my own way."
    },
    {
      title: "PR and Operations ",
      image: "/kritin.png",
      name: "Kritin Narayanan",
      year: "2nd Year",
      department: "EEE",
      description: "I love good food, good books and good debate!."
    },
  ]
};

const CoreMembersPage = () => {
  return (
    <div className="pt-20 container mx-auto px-6 bg-white shadow-lg w-full">
      {/* <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Core Members</h1> */}
      <h3 className="text-xl mb-8 text-center text-gray-800">The Build Club is a student-centric club run completely by a talented group of student volunteers spanning multiple disciplines and years of study.</h3>

      {Object.keys(coreMembers).map((domain) => (
        <div key={domain} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600 capitalize">{domain}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {coreMembers[domain].map((member, index) => (
              <Card
                key={index}
                className="w-72 h-auto shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover object-top"
                //   priority
                />
                <CardHeader className="h-12 p-2 text-lg font-bold text-gray-900 text-center">
                  {member.title}
                </CardHeader>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                  <p className="text-sm text-gray-600">
                    {member.year} - {member.department}
                  </p>
                </CardHeader>
                <CardContent className="pb-4 px-4">
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreMembersPage;
