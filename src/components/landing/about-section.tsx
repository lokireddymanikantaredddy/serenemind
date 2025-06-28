import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, User, Users } from "lucide-react";
import { StatsBar } from "./stats-bar";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary/50">
      <StatsBar />
      <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-1">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Portrait of Dr. Serena Blake"
                width={400}
                height={400}
                className="aspect-square w-full max-w-sm mx-auto rounded-lg object-cover shadow-lg"
                data-ai-hint="businesswoman glasses"
              />
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact &amp; Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <a href="tel:3235550192" className="hover:underline">(323) 555-0192</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <a
                      href="mailto:serena@blakepsychology.com"
                      className="hover:underline"
                    >
                      serena@blakepsychology.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">In-person:</p>
                      <p>Tue &amp; Thu, 10 AM–6 PM</p>
                      <p className="mt-2 font-semibold text-foreground">
                        Virtual (Zoom):
                      </p>
                      <p>Mon, Wed &amp; Fri, 1 PM–5 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Dr. Serena Blake, PsyD
                </h2>
                <p className="mt-2 text-xl font-medium text-primary">
                  Licensed Clinical Psychologist
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
                in Los Angeles, CA, with eight years of experience and over 500
                client sessions. She blends evidence-based approaches—like
                cognitive-behavioral therapy and mindfulness—with compassionate,
                personalized care to help you overcome anxiety, strengthen
                relationships, and heal from trauma. Whether you meet in her
                Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
                committed to creating a safe, supportive space for you to thrive.
              </p>

              <div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-foreground">
                  Services &amp; Specialties
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="outline"
                    className="border-primary/50 bg-primary/10 px-4 py-2 text-base"
                  >
                    Anxiety &amp; Stress Management
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-primary/50 bg-primary/10 px-4 py-2 text-base"
                  >
                    Relationship Counseling
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-primary/50 bg-primary/10 px-4 py-2 text-base"
                  >
                    Trauma Recovery
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-foreground">
                  Session Fees
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card className="bg-background">
                    <CardContent className="flex items-center gap-4 p-4">
                      <User className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">
                          $200
                        </p>
                        <p className="text-muted-foreground">
                          Individual Session
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-background">
                    <CardContent className="flex items-center gap-4 p-4">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">
                          $240
                        </p>
                        <p className="text-muted-foreground">Couples Session</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
