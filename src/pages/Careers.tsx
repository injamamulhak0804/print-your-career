import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Users,
  Zap,
  Shield,
  Trophy,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";
import careerHero from "@/assets/career-hero.jpg";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior 3D Printing Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Lead the development of next-generation 3D printing technologies and oversee manufacturing processes.",
      requirements: [
        "5+ years in additive manufacturing",
        "Experience with CAD software",
        "Materials science background",
      ],
    },
    {
      title: "Software Developer - Printing Solutions",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description:
        "Develop cutting-edge software solutions for 3D printer control systems and user interfaces.",
      requirements: [
        "Python/C++ expertise",
        "Real-time systems experience",
        "UI/UX development",
      ],
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Drive sales of industrial 3D printing solutions to enterprise clients across various industries.",
      requirements: [
        "Technical sales experience",
        "3D printing knowledge",
        "B2B relationship building",
      ],
    },
    {
      title: "Quality Assurance Specialist",
      department: "Operations",
      location: "Austin, TX",
      type: "Full-time",
      description:
        "Ensure product quality and implement testing protocols for our 3D printing systems.",
      requirements: [
        "QA/QC experience",
        "ISO certification knowledge",
        "Problem-solving skills",
      ],
    },
    {
      title: "Marketing Manager - Technical Products",
      department: "Marketing",
      location: "Boston, MA",
      type: "Full-time",
      description:
        "Lead marketing initiatives for our technical 3D printing products and solutions.",
      requirements: [
        "B2B tech marketing",
        "Content creation",
        "Campaign management",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Health",
      description:
        "Full medical, dental, and vision coverage for you and your family",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Annual learning budget and access to cutting-edge training programs",
    },
    {
      icon: Users,
      title: "Innovation Time",
      description:
        "20% time for personal projects and exploring new technologies",
    },
    {
      icon: Trophy,
      title: "Performance Bonuses",
      description: "Quarterly performance bonuses and equity participation",
    },
    {
      icon: HeartHandshake,
      title: "Flexible Work",
      description:
        "Hybrid work options and flexible scheduling to support work-life balance",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description:
        "Access to the latest 3D printing technology and innovation labs",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible in additive manufacturing",
    },
    {
      title: "Quality Excellence",
      description:
        "Every product we create meets the highest standards of precision and reliability",
    },
    {
      title: "Collaborative Spirit",
      description:
        "We believe the best solutions come from diverse teams working together",
    },
    {
      title: "Sustainable Future",
      description:
        "We're committed to environmental responsibility in everything we do",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={careerHero}
            alt="Career opportunities at our 3D printing company"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shape the Future of
            <span className="block bg-gradient-to-r from-white to-tech-teal bg-clip-text text-transparent">
              3D Manufacturing
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join our team of innovators and help revolutionize how the world
            creates, prototypes, and manufactures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="tech" className="text-lg px-8 py-4">
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="tech-outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a technology company. We're a community of
              creators, innovators, and problem-solvers united by our passion
              for transforming ideas into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover exciting career opportunities across engineering,
              technology, sales, and operations. Find your perfect role in
              shaping the future of 3D manufacturing.
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold  mb-2">
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Users className="w-3 h-3" />
                          {position.department}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      className="shrink-0"
                      onClick={() =>
                        (window.location.href = `/careers/apply/${position.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`)
                      }
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {position.description}
                  </p>
                  <div>
                    {/* <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Join Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team members so they can focus on
              what they do best - innovating and creating amazing products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're a seasoned professional or just starting your career,
            we'd love to hear from you. Let's build the future of manufacturing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Browse All Positions
            </Button>
            <Button
              size="lg"
              variant="tech-outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Submit General Application
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Can't find the right position? Send us your resume and tell us how
            you'd like to contribute.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
