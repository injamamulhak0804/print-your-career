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
    <section className="min-h-screen bg-foreground text-background py-16">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 relative place-content-center items-center">
          {/* Left Navigation */}
          <div className="lg:col-span-1 relative">
            <div className="md:space-y-6 flex gap-5 my-10 md:block">
              {tabs.map((tab, index) => (
                <div className="flex items-center">
                  <Button
                    variant={activeTab === tab ? "default" : "ghost"}
                    className="relative z-10 rounded-3xl px-7 border border-white"
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </Button>

                  {/* Line */}
                  {activeTab === tab && (
                    <div className="flex-grow h-[1.2px] bg-accent hidden lg:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Center - Technical Diagrams */}

          {/* Right - Specifications */}
          <div className="lg:col-span-2 border rounded-md p-10 flex gap-5">
            <div>
              <img src="/printer.png" alt="" />
              <div className="grid grid-cols-2 gap-x-28 bg-green-500/0">
                <div className="col-span-1">
                  <div className="mt-8">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">
                      Physical Dimensions
                    </h3>
                    <div className="grid grid-cols-2 text-sm">
                      <div>
                        <p className="text-background font-semibold">Width</p>
                        <p className="text-background font-semibold">Depth</p>
                        <p className="text-background font-semibold">Height</p>
                        <p className="text-background font-semibold">Weight</p>
                      </div>
                      <div>
                        <p className="font-mono">{physicalDimensions.width}</p>
                        <p className="font-mono">{physicalDimensions.depth}</p>
                        <p className="font-mono">{physicalDimensions.height}</p>
                        <p className="font-mono">{physicalDimensions.weight}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <h3 className="text-sm font-medium text-muted-foreground my-6">
                    Build Volume
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-bacground font-semibold">Width</p>
                      <p className="text-bacground font-semibold">Depth</p>
                      <p className="text-bacground font-semibold">Height</p>
                    </div>
                    <div>
                      <p className="font-mono">{buildVolume.width}</p>
                      <p className="font-mono">{buildVolume.depth}</p>
                      <p className="font-mono">{buildVolume.height}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="space-y-8 transition-all duration-300"
              key={activeTab}
            >
              <div></div>
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
