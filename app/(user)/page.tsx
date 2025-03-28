import Hero from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { getCourses } from "@/sanity/lib/courses/getCourses";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <section className="py-32 ">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Delice School
            </h2>
            <p className="text-muted-foreground text-lg">
              Our comprehensive programs deliver exceptional results through
              expert instruction, hands-on practice, and industry-relevant
              training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat Card 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl blur-sm transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white dark:bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-primary">50+</span>
                  <span className="ml-1 text-muted-foreground">Recipes</span>
                </div>
                <p className="text-muted-foreground">
                  Master exclusive chocolate recipes developed by award-winning
                  chocolatiers from around the world.
                </p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl blur-sm transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white dark:bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-primary">12</span>
                  <span className="ml-1 text-muted-foreground">Weeks</span>
                </div>
                <p className="text-muted-foreground">
                  Transform from beginner to professional in just 12 weeks with
                  our intensive, structured curriculum.
                </p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl blur-sm transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white dark:bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-primary">94%</span>
                  <span className="ml-1 text-muted-foreground">Success</span>
                </div>
                <p className="text-muted-foreground">
                  Our graduates have a 94% rate of successful business launch or
                  industry employment within six months.
                </p>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl blur-sm transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white dark:bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-primary">1</span>
                  <span className="ml-1 text-muted-foreground">Mentors</span>
                </div>
                <p className="text-muted-foreground">
                  Learn directly from 1 world-class instructors with experience
                  in luxury chocolate brands
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="mt-16 bg-white dark:bg-card border border-accent/20 rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-12 w-12 flex-shrink-0 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Our Satisfaction Guarantee
                </h3>
                <p className="text-muted-foreground">
                  If you're not completely satisfied after the first two weeks,
                  we'll provide a full refund.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
            >
              <span>Learn more about our guarantee</span>
              <svg
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 pb-32">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Featured Courses
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              href={`/courses/${course.slug}`}
            />
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-r from-primary/95 to-primary py-16">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent/30"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>

        {/* Chocolate pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="chocolatePattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20 L20 0 L40 20 L20 40 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#chocolatePattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-2/3 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-2">
                <span className="text-primary-foreground text-sm font-medium">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                Begin Your Journey to Chocolate Mastery Today
              </h2>
              <p className="text-primary-foreground/90 text-lg max-w-xl">
                Join our comprehensive chocolate crafting program and transform
                your passion into expertise. Next cohort begins April 15th with
                only 24 spots available.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-primary-foreground/90">
                    Personalized Feedback
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-primary-foreground/90">
                    Lifetime Access
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-primary-foreground/90">
                    Job Placement Support
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-card p-8 rounded-xl shadow-xl">
                <div className="text-center mb-6">
                  <span className="text-sm text-muted-foreground">
                    Full Program Investment
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      $1,995
                    </span>
                    <div className="ml-3 flex flex-col items-start">
                      <span className="text-sm text-muted-foreground line-through">
                        $2,495
                      </span>
                      <span className="text-xs text-accent font-medium">
                        Save $500
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Payment plans available from $199/month
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-accent/25 flex items-center justify-center">
                    <span>Enroll Now</span>
                    <svg
                      className="ml-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <button className="w-full py-3 bg-white hover:bg-secondary border border-accent/20 text-primary rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="mr-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Download Syllabus</span>
                  </button>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg
                      className="h-5 w-5 mr-2 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors duration-300"
                    >
                      Watch a preview class
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-primary-foreground/80 text-sm">
                <p>
                  Enrollment closes in{" "}
                  <span className="font-bold text-accent">5 days</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-2">
                <span className="text-primary text-sm font-medium">
                  Course Requirements
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Is This Course Right For You?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our chocolate making programs are designed for passionate
                individuals who are committed to mastering the craft. Here's
                what you need to know before enrolling.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <svg
                      className="h-5 w-5 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      No Prior Experience Needed
                    </h3>
                    <p className="text-muted-foreground">
                      Our program is designed for beginners and experienced
                      bakers alike. We start with the fundamentals and progress
                      to advanced techniques.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <svg
                      className="h-5 w-5 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Time Commitment
                    </h3>
                    <p className="text-muted-foreground">
                      Students should expect to dedicate 8-10 hours per week to
                      classes, practice, and assignments for the duration of the
                      12-week program.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <svg
                      className="h-5 w-5 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Required Equipment
                    </h3>
                    <p className="text-muted-foreground">
                      A basic kitchen setup is required. Upon enrollment, you'll
                      receive our equipment list with both essential and
                      optional tools for chocolate making.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <svg
                      className="h-5 w-5 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Passion & Dedication
                    </h3>
                    <p className="text-muted-foreground">
                      The most important prerequisite is your passion for
                      chocolate and dedication to learning. Our most successful
                      students share a love for culinary creativity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Decorative chocolate squares background */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 opacity-10">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-accent rounded-lg"></div>
                ))}
              </div>

              {/* Course materials image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80"
                  alt="Chocolate making materials"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Free Starter Kit
                  </h3>
                  <p className="text-white/90 mb-4">
                    All new students receive a complimentary starter kit with
                    premium chocolate samples and essential tools.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center bg-white text-primary rounded-lg px-5 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  >
                    <span>View Course Materials</span>
                    <svg
                      className="ml-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Material badges */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-card shadow-lg rounded-lg p-4 border border-border">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                      <svg
                        className="h-5 w-5 text-accent"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      All Levels
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                      <svg
                        className="h-5 w-5 text-accent"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 100 12A6 6 0 0010 4zm0 5a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                        <path d="M10 8a1 1 0 100-2 1 1 0 000 2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      24/7 Support
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                      <svg
                        className="h-5 w-5 text-accent"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Kit Included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-primary text-primary-foreground">
        {/* Top Section with Wave Divider */}
        <div className="relative">
          <svg
            className="w-full text-background dark:text-background"
            viewBox="0 0 1440 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info Column */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Delice School</h2>
                  <p className="text-sm text-primary-foreground/70">
                    Mastering the Art of Chocolate
                  </p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mt-4">
                Empowering students to achieve artisanal excellence and culinary
                mastery in an innovative and inspiring learning environment.
              </p>
              <div className="pt-4">
                <span className="inline-flex bg-accent/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-primary-foreground/90">
                  Excellence in Chocolate Crafting
                </span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-primary-foreground/20 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Our Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Master Classes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Student Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-primary-foreground/20 pb-2">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 mr-2 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-primary-foreground/90">
                    1234 Chocolate Avenue,
                    <br />
                    Chisinau, Moldova
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-primary-foreground/90">
                    (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-primary-foreground/90">
                    info@deliceschool.com
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">School Hours</h4>
                <p className="text-primary-foreground/90 text-sm">
                  Monday - Friday: 8:00 AM - 4:30 PM
                </p>
                <p className="text-primary-foreground/90 text-sm">
                  Weekends: 9:00 AM - 2:00 PM (Workshops)
                </p>
              </div>
            </div>

            {/* Connect & Subscribe Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-primary-foreground/20 pb-2">
                Stay Connected
              </h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">
                  Subscribe to Our Newsletter
                </h4>
                <form className="mt-2">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-l-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent/80 text-accent-foreground px-4 py-2 rounded-r-lg transition-colors duration-300"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Decorative chocolate pattern */}
          <div className="w-full overflow-hidden h-8 my-8 opacity-20">
            <div className="flex justify-center items-center">
              <svg
                className="h-8"
                viewBox="0 0 70 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5 L10 0 L15 5 L20 0 L25 5 L30 0 L35 5 L40 0 L45 5 L50 0 L55 5 L60 0 L65 5 L70 0"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Utility Links */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    Instructor Log In
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    Accessibility
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    Sitemap
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    Careers
                  </a>
                </nav>
              </div>
              <div className="text-primary-foreground/70 text-sm">
                <p>
                  © {new Date().getFullYear()} Delice School. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Back to top button */}
          <div className="flex justify-center mt-8">
            <a
              href="#top"
              className="inline-flex items-center text-primary-foreground/80 hover:text-accent transition-colors duration-300"
            >
              <span>Back to top</span>
              <svg
                className="ml-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
