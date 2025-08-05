import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">3D Printing Innovation Hub</h1>
        <p className="text-xl text-muted-foreground mb-8">Advanced manufacturing solutions for the future</p>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="tech">
            <Link to="/careers">Join Our Team</Link>
          </Button>
          <Button asChild variant="tech-outline">
            <Link to="/careers">View Career Opportunities</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
