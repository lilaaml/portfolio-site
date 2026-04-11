import { ShieldCheck, BarChart3, ClipboardCheck, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutMe = () => {
    const expertise = [
        {
            title: "Secure SaaS Development",
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            description: "Proven track record of architecting and deploying full-stack SaaS applications, with a heavy emphasis on secure Identity and Access Management (IAM) and Role-Based Access Control (RBAC)."
        },
        {
            title: "Risk & Audit Leadership",
            icon: <BarChart3 className="w-8 h-8 text-primary" />,
            description: "I design and execute internal IT Audit Working Papers, establishing technical standards for ground checks and control verification in diverse client environments."
        },
        {
            title: "Technical Compliance",
            icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
            description: "Specializing in ensuring alignment between manual business workflows (AR, AP, Purchasing) and digital systems through comprehensive Tests of Controls (TOC)."
        },
        {
            title: "Ethical Hacking",
            icon: <Zap className="w-8 h-8 text-primary" />,
            description: "As a CEH, I leverage an attacker's mindset to lead technical evaluations of infrastructure and data integrity, translating complex findings into actionable insights."
        }
    ];

    return (
        <section id="aboutme" className="container py-24 px-4 w-full">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Expertise & Experience</h2>
                <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
                <p className="text-muted-foreground text-lg max-w-[700px]">
                    Bridging the gap between high-velocity engineering and rigorous risk management.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {expertise.map((item, index) => (
                    <Card key={index} className="group bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <CardHeader className="flex flex-row items-center gap-4 pb-4">
                            <div className="p-2.5 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                                {item.icon}
                            </div>
                            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                {item.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default AboutMe;
