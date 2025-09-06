import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const PrinterSpecs = () => {
  const [activeTab, setActiveTab] = useState("Composite Specs");

  const tabs = [
    "Composite Specs",
    "Metal Specs",
    "Materials",
    "System Details",
  ];

  const getSpecifications = (tab: string) => {
    switch (tab) {
      case "Composite Specs":
        return {
          printingProcess:
            "Fused Filament Fabrication, Continuous Fiber Reinforcement",
          zLayerResolution: "125μm to 250μm",
          printingMedia: "Polymer Filament, Continuous Fibers",
          internalGeometry:
            "Closed Cell Infill with Continuous Fiber Reinforcement",
          printBed: "Precision Machined Aluminum",
        };
      case "Metal Specs":
        return {
          printingProcess: "Direct Metal Laser Sintering, Powder Bed Fusion",
          zLayerResolution: "20μm to 100μm",
          printingMedia: "Titanium, Aluminum, Stainless Steel Powders",
          internalGeometry: "Lattice Structures, Solid Metal Components",
          printBed: "Heated Steel Platform with Powder Distribution",
        };
      case "Materials":
        return {
          printingProcess:
            "Multi-Material Extrusion, Support Material Integration",
          zLayerResolution: "50μm to 300μm",
          printingMedia: "PLA, ABS, PETG, TPU, PVA Support",
          internalGeometry: "Hollow Structures, Variable Density Infill",
          printBed: "Flexible Magnetic Build Surface",
        };
      case "System Details":
        return {
          printingProcess: "Automated Calibration, Remote Monitoring",
          zLayerResolution: "Software Adaptive Layer Heights",
          printingMedia: "Cloud-Based Material Profiles",
          internalGeometry: "AI-Optimized Structural Analysis",
          printBed: "Auto-Leveling with 9-Point Mesh Compensation",
        };
      default:
        return {
          printingProcess: "",
          zLayerResolution: "",
          printingMedia: "",
          internalGeometry: "",
          printBed: "",
        };
    }
  };

  const specifications = getSpecifications(activeTab);

  const physicalDimensions = {
    width: "760mm",
    depth: "640mm",
    height: "1200mm",
    weight: "125kg (270lbs)",
  };

  const buildVolume = {
    width: "375mm",
    depth: "300mm",
    height: "300mm",
  };

  return (
    <section className="min-h-screen bg-background text-foreground py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              The most advanced printer
              <br />
              we've ever built.
            </h1>
            <Button variant="outline" className="mt-4">
              <Download className="w-4 h-4 mr-2" />
              Read more
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          {/* Left Navigation */}
          <div className="lg:col-span-3 relative">
            <div className="space-y-3">
              {tabs.map((tab, index) => (
                <div key={tab} className="relative">
                  <Button
                    variant={activeTab === tab ? "default" : "ghost"}
                    className={`w-full justify-start text-left h-12 transition-all duration-200 relative z-10 ${
                      activeTab === tab
                        ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </Button>

                  {/* Connecting Line - only visible for active tab */}
                  {activeTab === tab && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <div className="w-8 h-px bg-primary animate-fade-in"></div>
                      <div className="absolute right-0 top-0 w-[20rem] h-1 bg-accent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Center - Technical Diagrams */}

          {/* Right - Specifications */}
          <div className="lg:col-span-4 border p-10">
            <div
              className="space-y-8 transition-all duration-300"
              key={activeTab}
            >
              {/* Printing Process */}
              <div className="animate-in fade-in duration-200">
                <h3 className="text-sm font-medium text-tech-highlight mb-2">
                  Printing Process
                </h3>
                <p className="text-lg font-medium leading-relaxed">
                  {specifications.printingProcess}
                </p>
              </div>

              {/* Z Layer Resolution */}
              <div className="animate-in fade-in duration-200 delay-100">
                <h3 className="text-sm font-medium text-tech-highlight mb-2">
                  Z Layer Resolution
                </h3>
                <p className="text-2xl font-bold">
                  {specifications.zLayerResolution}
                </p>
              </div>

              {/* Printing Media */}
              <div className="animate-in fade-in duration-200 delay-200">
                <h3 className="text-sm font-medium text-tech-highlight mb-2">
                  Printing Media
                </h3>
                <p className="text-lg font-medium">
                  {specifications.printingMedia}
                </p>
              </div>

              {/* Internal Part Geometry */}
              <div className="animate-in fade-in duration-200 delay-300">
                <h3 className="text-sm font-medium text-tech-highlight mb-2">
                  Internal Part Geometry
                </h3>
                <p className="text-lg font-medium leading-relaxed">
                  {specifications.internalGeometry}
                </p>
              </div>

              {/* Print Bed */}
              <div className="animate-in fade-in duration-200 delay-400">
                <h3 className="text-sm font-medium text-tech-highlight mb-2">
                  Print Bed
                </h3>
                <p className="text-lg font-medium">{specifications.printBed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinterSpecs;
