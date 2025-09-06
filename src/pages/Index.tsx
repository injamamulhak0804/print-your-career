import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const ECO_SYSTEM = [
  {
    id: 1,
    title: "Sistem T1",
    description:
      "Compact desktop metal 3D printer with unparalleled speed, seamless performance, and sleek design.",
  },
  {
    id: 2,
    title: "Sistem T1",
    description:
      "Compact desktop metal 3D printer with unparalleled speed, seamless performance, and sleek design.",
  },
  {
    id: 3,
    title: "Sistem T1",
    description:
      "Compact desktop metal 3D printer with unparalleled speed, seamless performance, and sleek design.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex items-center flex-col gap-10 justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">3D Printing Innovation Hub</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Advanced manufacturing solutions for the future
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="tech"
            className="rounded-md text-md"
            onClick={() => console.log("Button Clicked!")}
          >
            <Link to="/careers">Join Our Team</Link>
          </Button>
          <Button variant="tech-outline">
            <Link to="/careers">View Career Opportunities</Link>
          </Button>
        </div>
      </div>

      <div className="flex justify-center w-full bg-red-500">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 p-2 place-items-center bg-slate-300">
          {ECO_SYSTEM.map((value, index) => (
            <Card
              key={index}
              className="shadow-sm transition-all duration-300 border-[1px] border-border backdrop-blur-sm text-center"
            >
              <CardHeader className="px-2">
                <div className="flex gap-2 justify-center items-center">
                  <CardImage className="w-6 h-6" src="/placeholder.svg" />
                  <CardTitle className="text-xl text-primary">
                    {value.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground/60 text-sm">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {/* Add any additional content or images here */}
        <div>
          <Button>Book a Demo</Button> - Default
        </div>
        <div>
          <Button variant="primary">Book a Demo</Button> - Primary
        </div>
        <div>
          <Button variant="primary-outline">Book a Demo</Button> -
          Primary-outline
        </div>
        <div>
          <Button variant="destructive">Book a Demo</Button> - destructive
        </div>
        <div>
          <Button variant="outline">Book a Demo</Button> - outline
        </div>
        <div>
          <Button variant="secondary">Book a Demo</Button> - secondary
        </div>
        <div>
          <Button variant="ghost">Book a Demo</Button> - ghost
        </div>
        <div>
          <Button variant="link">Book a Demo</Button> - link
        </div>
        <div>
          <Button variant="tech">Book a Demo</Button> - tech
        </div>
        <div>
          <Button variant="tech-outline">Book a Demo</Button> - tech-outline
        </div>
      </div>
    </div>
  );
};

export default Index;
