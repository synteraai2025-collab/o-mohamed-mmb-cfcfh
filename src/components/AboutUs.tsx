interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar?: string;
}

interface AboutUsProps {
  companyName?: string;
  mission?: string;
  description?: string;
  teamMembers?: TeamMember[];
}

export function AboutUs({ 
  companyName = "Our Company",
  mission = "Delivering exceptional solutions with passion and innovation",
  description = "We are a dedicated team committed to creating meaningful impact through our work. Our journey began with a simple vision: to build something that matters.",
  teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years of industry experience"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      description: "Operations expert focused on efficiency and growth"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      description: "Award-winning designer with a passion for innovation"
    }
  ]
}: AboutUsProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About {companyName}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {mission}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                <p>
                  {description}
                </p>
                <p>
                  Today, we continue to push boundaries and challenge the status quo. 
                  Our commitment to excellence drives everything we do, from the smallest 
                  details to the biggest innovations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-card-foreground">Innovation</h3>
                <p className="mt-2 text-muted-foreground">
                  We constantly push the boundaries of what's possible, embracing new ideas and technologies.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-card-foreground">Integrity</h3>
                <p className="mt-2 text-muted-foreground">
                  We believe in doing the right thing, even when no one is watching. Trust is our foundation.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-card-foreground">Collaboration</h3>
                <p className="mt-2 text-muted-foreground">
                  We achieve more together. Our strength lies in our diverse perspectives and shared goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The talented individuals behind our success
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <svg className="h-16 w-16 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Let's discuss how we can help bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
                Get In Touch
              </button>
              <button className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
