import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import {
  FAQ,
  FAQContent,
  FAQHeader,
  FAQItem,
  FAQTitle,
} from "@/components/ui/FAQ";
import PrinterSpecs from "@/components/ui/PrinterSpecs";
import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Ghost Coding?",
      answer:
        "Writing code in a way that no one else can easily understand, but it still works.",
    },
    {
      question: "Is this FAQ reusable?",
      answer:
        "Yes! Each FAQ part is its own atomic component like shadcn UI cards.",
    },
    {
      question: "Does this use TailwindCSS?",
      answer:
        "Absolutely. All styles are based on Tailwind utilities and cn().",
    },
  ];

  const about = [
    {
      id: 1,
      icon: "icon",
      title: "Vision",
      desc: "Our vision is to simplify tools and prototype production and foster innovation in 3D printing materials. We want to enable Indian toolmakers and prototype manufacturers to manufacture 10x quicker and at half the cost.",
    },
    {
      id: 2,
      icon: "icon",
      title: "Vision",
      desc: "Our vision is to simplify tools and prototype production and foster innovation in 3D printing materials. We want to enable Indian toolmakers and prototype manufacturers to manufacture 10x quicker and at half the cost.",
    },
  ];

  // toggle icons here
  const icons = false; // try true / false

  const ourValues = ["Disruptive", "Reliable", "Reasonable", "Reliable"];

  const card = [
    {
      id: 1,
      img: "/img.png",
      title: "Stainless Steel 316L",
      desc: "Corrosion-resistant steel ideal for medical and food-grade applications",
      weight: "3 kg",
      dia: "1.75 kg",
    },
    {
      id: 1,
      img: "/img.png",
      title: "Stainless Steel 316L",
      desc: "Corrosion-resistant steel ideal for medical and food-grade applications",
      weight: "3 kg",
      dia: "1.75 kg",
    },
    {
      id: 1,
      img: "/img.png",
      title: "Stainless Steel 316L",
      desc: "Corrosion-resistant steel ideal for medical and food-grade applications",
      weight: "3 kg",
      dia: "1.75 kg",
    },
  ];

  const culture = [
    {
      id: 1,
      icon: "icon",
      title: "Collaborative Culture",
      desc: "Work with passionate innovators in a supportive environment",
    },
    {
      id: 2,
      icon: "icon",
      title: "Collaborative Culture",
      desc: "Work with passionate innovators in a supportive environment",
    },
    {
      id: 3,
      icon: "icon",
      title: "Collaborative Culture",
      desc: "Work with passionate innovators in a supportive environment",
    },
  ];

  // const

  return (
    <>
      <div className="min-h-screen flex items-center flex-col gap-10 justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            3D Printing Innovation Hub
          </h1>
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

        <div className="flex justify-center w-fit bg-red-500/0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 place-items-center bg-slate-300/0">
            {ECO_SYSTEM.map((value, index) => (
              <Card
                key={index}
                className="max-w-96 py-6 shadow transition-all duration-300 border-[1px] border-border backdrop-blur-sm flex flex-col items-center"
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
                  <p className="text-accent text-sm font-medium">
                    {value.description}
                  </p>
                </CardContent>
                <CardFooter className="">
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
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

      <div className="bg-red-800/0 w-fit mx-auto">
        <div
          // className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 items-center justify-center place-content-center"
          className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-4 justify-items-center"
        >
          {about.map((value, index) => (
            <Card
              key={index}
              // className="shadow-sm transition-all duration-300 border-[1px] border-border backdrop-blur-sm text-center"
              className="w-[29rem] shadow transition-all duration-300 border border-sm border-border backdrop-blur-sm text-center"
            >
              <CardHeader className="px-2">
                <div className="flex gap-2 justify-center items-center">
                  {value.icon}
                  <CardTitle className="text-xl font-black">
                    {value.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-accent text-sm font-medium">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="bg-red-800/0 w-fit mx-auto">
          <div
            // className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 items-center justify-center place-content-center"
            className="grid grid-cols-1 sm:grid-cols-4 gap-20 p-4 justify-items-center"
          >
            {ourValues.map((value, index) => (
              <Card
                key={index}
                // className="shadow-sm transition-all duration-300 border-[1px] border-border backdrop-blur-sm text-center"
                className="w-[15rem] shadow transition-all duration-300 border border-sm border-primary backdrop-blur-sm text-center"
              >
                <CardHeader className="px-2">
                  <div className="flex gap-2 justify-center items-center">
                    {/* {value.icon} */}
                    <CardTitle className="text-xl font-black">
                      {value}
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {card.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-[1px] border-border border-sm shadow"
              >
                <CardImage
                  src={value.img}
                  className="w-[10rem] bg-slate-400/0 mx-auto"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-accent font-medium text-sm">
                    {value.desc}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col text-start font-bold">
                      <span>Weight:</span>
                      <span>Diameter:</span>
                    </div>
                    <div className="flex flex-col">
                      <span>{value.weight}</span>
                      <span>{value.dia}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culture.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-[1px] border-border border-shadow shadow flex items-center"
              >
                <div className="p-4">{value.icon}</div>
                <div>
                  <CardHeader className="bg-red-500/0 text-start pb-1">
                    <CardTitle className="text-xl font-bold">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent font-normal text-sm text-start">
                      {value.desc}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex container bg-red-700/20 justify-between items-center my-10">
          <div className="bg-slate-300/0 flex flex-col bg-yellow-300 gap-3">
            <span className="px-4 py-2 border rounded-3xl bg-green-500 after:content-['_↗'] after:bg-red-400 after:w-100% after:h-[1rem]">
              Composite
            </span>
            <span className="px-4 py-2 border rounded-3xl bg-green-500">
              Metal
            </span>
            <span className="px-4 py-2 border rounded-3xl bg-green-500">
              Specification
            </span>
          </div>
          <div className="w-[40rem] border-2 h-[40rem] bg-green-500"></div>
        </div>
      </section>
      <section className="py-20">
        <PrinterSpecs />
      </section>

      <section>
        <div className="container px-28 bg-slate-600/0">
          <FAQ icons={icons} className="bg-slate-600/0">
            {faqs.map((faq, index) => {
              const isOpen = icons ? openIndex === index : true;
              return (
                <FAQItem key={index}>
                  <FAQHeader
                    onClick={() => icons && setOpenIndex(isOpen ? null : index)}
                  >
                    <FAQTitle>{faq.question}</FAQTitle>
                    {icons && (
                      <span
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </FAQHeader>
                  {isOpen && <FAQContent>{faq.answer}</FAQContent>}
                </FAQItem>
              );
            })}
          </FAQ>
        </div>
      </section>
    </>
  );
};

export default Index;
