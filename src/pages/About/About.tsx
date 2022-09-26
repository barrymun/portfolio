import clsx from 'clsx'
import imagePilot from '@/assets/pilot.jpeg'
import Container from '@/components/Container';
import GitHubIcon from "@/components/SocialIcons/GitHubIcon";
import LinkedInIcon from "@/components/SocialIcons/LinkedInIcon";
import { URI_TARGET, URI_REL, GITHUB_PROFILE_URI, LINKEDIN_PROFILE_URI } from '@/constants';

function SocialLink({ className, href, children, icon: Icon }) {
  const onClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    window.open(href, URI_TARGET, URI_REL);
  }

  return (
    <li className={clsx(className, 'flex')}>
      <button
        onClick={onClick}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </button>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      {/* <Head>
        <title></title>
        <meta
          name="description"
          content="..."
        />
      </Head> */}
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={imagePilot}
                alt=""
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi I’m Neil.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I'm a full stack engineer. I like to design and build things,
                and I have a decent knowledge of many different technologies.
              </p>
              <p>
                Co-founded a VC funded technology company in 2017.
              </p>
              <p>
                As an aviation enthusiast I'm a pilot (PPL), and I also enjoy flying drones.
                Other hobbies include swimming, running, photography and listening to music.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href={GITHUB_PROFILE_URI}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={LINKEDIN_PROFILE_URI}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
