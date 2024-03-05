/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M4W0Xs4qdk7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="border-b">
        <div className="container px-4 py-4 md:py-6 flex items-center gap-4 md:gap-6">
          <button className="p-3 rounded-md hover:bg-gray-100 focus-visible:outline-none dark:hover:bg-gray-800">
            <span className="sr-only">Home</span>
            <FlagIcon className="h-6 w-6" />
          </button>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Skills
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Experience
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 lg:gap-10 lg:flex-row">
            <div className="flex items-center space-x-4 lg:space-x-10">
              <img
                alt="Avatar"
                className="rounded-full aspect-square overflow-hidden"
                height="150"
                src="/placeholder.svg"
                width="150"
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p className="text-gray-500 dark:text-gray-400">UI/UX Designer</p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-3xl space-y-4 min/[400px]:space-y-2">
              <p className="text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                I'm a passionate UI/UX designer with a keen eye for creating beautiful and intuitive user interfaces. I
                believe that great design is not just about aesthetics but also about enhancing the user experience.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Projects</h2>
              <p className="text-gray-500 dark:text-gray-400">Check out some of my recent projects.</p>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-10 sm:gap-6 lg:grid-cols-2 lg:max-w-none lg:gap-12">
              <Card>
                <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden" href="#" />
                <CardContent className="flex items-end p-4 lg:p-6">
                  <div className="space-y-1 text-gray-900 dark:text-gray-100">
                    <h3 className="font-bold">Project One</h3>
                    <p className="text-sm">
                      Description of the project goes here. This is a brief overview of what the project is about.
                    </p>
                  </div>
                </CardContent>
                <img
                  alt="Project One"
                  className="aspect-video object-cover"
                  height="225"
                  src="/placeholder.svg"
                  width="400"
                />
              </Card>
              <Card>
                <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden" href="#" />
                <CardContent className="flex items-end p-4 lg:p-6">
                  <div className="space-y-1 text-gray-900 dark:text-gray-100">
                    <h3 className="font-bold">Project Two</h3>
                    <p className="text-sm">
                      Description of the project goes here. This is a brief overview of what the project is about.
                    </p>
                  </div>
                </CardContent>
                <img
                  alt="Project Two"
                  className="aspect-video object-cover"
                  height="225"
                  src="/placeholder.svg"
                  width="400"
                />
              </Card>
              <Card>
                <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden" href="#" />
                <CardContent className="flex items-end p-4 lg:p-6">
                  <div className="space-y-1 text-gray-900 dark:text-gray-100">
                    <h3 className="font-bold">Project Three</h3>
                    <p className="text-sm">
                      Description of the project goes here. This is a brief overview of what the project is about.
                    </p>
                  </div>
                </CardContent>
                <img
                  alt="Project Three"
                  className="aspect-video object-cover"
                  height="225"
                  src="/placeholder.svg"
                  width="400"
                />
              </Card>
              <Card>
                <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden" href="#" />
                <CardContent className="flex items-end p-4 lg:p-6">
                  <div className="space-y-1 text-gray-900 dark:text-gray-100">
                    <h3 className="font-bold">Project Four</h3>
                    <p className="text-sm">
                      Description of the project goes here. This is a brief overview of what the project is about.
                    </p>
                  </div>
                </CardContent>
                <img
                  alt="Project Four"
                  className="aspect-video object-cover"
                  height="225"
                  src="/placeholder.svg"
                  width="400"
                />
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I'm a passionate UI/UX designer with a keen eye for creating beautiful and intuitive user interfaces. I
                believe that great design is not just about aesthetics but also about enhancing the user experience.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Skills</div>
              <ul className="grid gap-2">
                <li>
                  <CheckCircleIcon className="w-4 h-4 mr-2 inline-block" />
                  User Interface Design
                </li>
                <li>
                  <CheckCircleIcon className="w-4 h-4 mr-2 inline-block" />
                  User Experience Design
                </li>
                <li>
                  <CheckCircleIcon className="w-4 h-4 mr-2 inline-block" />
                  Prototyping
                </li>
                <li>
                  <CheckCircleIcon className="w-4 h-4 mr-2 inline-block" />
                  Wireframing
                </li>
                <li>
                  <CheckCircleIcon className="w-4 h-4 mr-2 inline-block" />
                  Interaction Design
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
              <ul className="grid gap-4">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Senior UI/UX Designer</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Acme Inc (2018 - Present)</p>
                  </div>
                  <p>
                    Description of my role and responsibilities as a Senior UI/UX Designer at Acme Inc. This is a brief
                    overview of my experience and the projects I've worked on.
                  </p>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">UI/UX Intern</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Example Studio (Summer 2017)</p>
                  </div>
                  <p>
                    Description of my role and responsibilities as a UI/UX Intern at Example Studio. This is a brief
                    overview of my experience and the projects I've worked on during my internship.
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
              <ul className="grid gap-4">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Master of Fine Arts in Design</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">University of Design (2016 - 2018)</p>
                  </div>
                  <p>
                    Description of my experience and the skills I've gained during my Master of Fine Arts in Design
                    program at the University of Design. This is a brief overview of my academic journey and the
                    projects I've worked on.
                  </p>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Bachelor of Science in Multimedia Arts</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Creative University (2013 - 2016)</p>
                  </div>
                  <p>
                    Description of my experience and the skills I've gained during my Bachelor of Science in Multimedia
                    Arts program at Creative University. This is a brief overview of my academic journey and the
                    projects I've worked on.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Want to collaborate or have any questions? Feel free to reach out to me.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm text-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                <MailIcon className="w-4 h-4" />
                Email Me
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 shadow text-sm gap-2 transition-colors hover:bg-gray-900/90 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                <FlagIcon className="w-4 h-4" />
                Website
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex items-center justify-between px-4 py-4 md:py-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 John Doe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              className="rounded-full border border-gray-200 border-gray-200 w-8 h-8 overflow-hidden dark:border-gray-800"
              href="#"
            >
              <img alt="Avatar" className="object-cover aspect-square" height="32" src="/placeholder.svg" width="32" />
            </Link>
            <Link
              className="rounded-full border border-gray-200 border-gray-200 w-8 h-8 overflow-hidden dark:border-gray-800"
              href="#"
            >
              <img alt="Avatar" className="object-cover aspect-square" height="32" src="/placeholder.svg" width="32" />
            </Link>
            <Link
              className="rounded-full border border-gray-200 border-gray-200 w-8 h-8 overflow-hidden dark:border-gray-800"
              href="#"
            >
              <img alt="Avatar" className="object-cover aspect-square" height="32" src="/placeholder.svg" width="32" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
