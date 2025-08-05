import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, MapPin, Clock, Users, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JobApplication = () => {
  const { jobTitle } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobData = {
    "senior-3d-printing-engineer": {
      title: "Senior 3D Printing Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      overview: "Lead the development of next-generation 3D printing technologies and oversee manufacturing processes. You'll be working with cutting-edge additive manufacturing systems and driving innovation in industrial-scale 3D printing solutions.",
      responsibilities: [
        "Design and optimize 3D printing processes for various materials and applications",
        "Lead cross-functional teams in developing new printing technologies",
        "Collaborate with R&D teams on material science innovations",
        "Oversee quality control and testing protocols",
        "Mentor junior engineers and provide technical guidance",
        "Work closely with clients on custom manufacturing solutions"
      ],
      requirements: [
        "5+ years of experience in additive manufacturing",
        "Proficiency with CAD software (SolidWorks, AutoCAD, Fusion 360)",
        "Strong background in materials science and engineering",
        "Experience with FDM, SLA, SLS printing technologies",
        "Knowledge of manufacturing processes and quality control",
        "Excellent problem-solving and analytical skills",
        "Strong communication and leadership abilities"
      ]
    }
  };

  const currentJob = jobData[jobTitle as keyof typeof jobData] || {
    title: jobTitle?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Position",
    department: "Various",
    location: "Multiple Locations",
    type: "Full-time",
    overview: "Join our innovative team and help shape the future of 3D manufacturing technology.",
    responsibilities: [
      "Contribute to cutting-edge 3D printing projects",
      "Collaborate with cross-functional teams",
      "Drive innovation in manufacturing processes"
    ],
    requirements: [
      "Relevant experience in the field",
      "Strong technical skills",
      "Excellent communication abilities"
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/careers')}
            className="mb-6 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentJob.title}</h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="flex items-center gap-1 bg-white/20 text-white border-0">
                <Users className="w-3 h-3" />
                {currentJob.department}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 bg-white/20 text-white border-0">
                <MapPin className="w-3 h-3" />
                {currentJob.location}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 bg-white/20 text-white border-0">
                <Clock className="w-3 h-3" />
                {currentJob.type}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{currentJob.overview}</p>
              </CardContent>
            </Card>

            {/* Role & Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Role & Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {currentJob.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* We Look For */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">We Look For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {currentJob.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Apply Now</CardTitle>
                <CardDescription>
                  Fill out the form below to submit your application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="4-5">4-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea 
                      id="coverLetter" 
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Resume/CV</Label>
                    <div className="mt-2 border-2 border-dashed border-muted rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, DOCX (max 5MB)
                      </p>
                      <Input 
                        id="resume" 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        className="hidden" 
                        required 
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;