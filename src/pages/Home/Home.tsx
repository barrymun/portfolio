import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GitHubIcon from "@/components/SocialIcons/GitHubIcon";
import LinkedInIcon from "@/components/SocialIcons/LinkedInIcon";
import Button from "@/components/Button";
import Container from "@/components/Container";
import logoTraitly from "@/assets/traitly.jpeg";
import logoWorkday from "@/assets/workday.jpeg";
import logoOysterhaven from "@/assets/oysterhaven.jpeg";
import image1 from "@/assets/home-1.jpeg";
import image2 from "@/assets/home-2.jpeg";
import image3 from "@/assets/home-3.jpeg";
import image4 from "@/assets/home-4.jpeg";
import resumePDF from "@/assets/resume.pdf";
import { GITHUB_PROFILE_URI, LINKEDIN_PROFILE_URI, URI_REL, URI_TARGET } from "@/constants";

const IMAGES = [image1, image2, image3, image4];
const IMAGE_ROTATIONS = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
// const CANVAS_WIDTH = window.innerWidth;
// const SCROLL_SPEED = 4.3;

function BriefcaseIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({
  icon: Icon,
  href,
  ...props
}: {
  icon: Function;
  href: string;
  "aria-label": string;
}) {
  const onClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    window.open(href, URI_TARGET, URI_REL);
  }

  return (
    <button className="group -m-1 p-1" onClick={onClick} {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </button>
  );
}

interface Role {
  company: string,
  title: string,
  logo: string,
  start: string | any,
  end: string | any,
}

function Resume() {
  let RESUME: Role[] = [
    {
      company: "Traitly",
      title: "Co-founder & Lead fullstack engineer",
      logo: logoTraitly,
      start: "2016",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Workday",
      title: "Software engineer",
      logo: logoWorkday,
      start: "2015",
      end: "2016",
    },
    {
      company: "Oysterhaven",
      title: "Windsurfing instructor",
      logo: logoOysterhaven,
      start: "2012",
      end: "2014",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {RESUME.map((role: Role, roleIndex: number) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <img src={role.logo} alt="" className="h-7 w-7 rounded-full" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">???</span>{" "}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a href={resumePDF} target={URI_TARGET} rel={URI_REL} download>
        <Button variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </a>
    </div>
  );
}

const useAnimationFrame = (callback: Function) => {
  const requestRef = useRef<number>(0);

  const animate = () => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};

function Photo({ imageIndex }: { imageIndex: number }) {
  // const positionDenominator = imageIndex + 1;
  // const [position, setPosition] = useState(0);
  // useAnimationFrame(() =>
  //   setPosition(prevPosition => {
  //     const newPosition = prevPosition - SCROLL_SPEED;
  //     // return newPosition < -200 ? CANVAS_WIDTH : newPosition;
  //     // return ((newPosition / positionDenominator) / IMAGES.length) < -((640 / positionDenominator) / IMAGES.length) ? CANVAS_WIDTH : newPosition;
  //     // return (newPosition / positionDenominator) < (-400 / positionDenominator) ? CANVAS_WIDTH : newPosition;
  //     // return (newPosition / positionDenominator) < (-400 + positionDenominator) ? CANVAS_WIDTH : newPosition;
  //     // return newPosition < (-300 - (300 * imageIndex)) ? CANVAS_WIDTH : newPosition;
  //     return newPosition < -1200 ? CANVAS_WIDTH : newPosition;
  //   })
  // );

  return (
    <div
      // style={{
      //   transform: `translateX(${position}px)`,
      // }}
      className={clsx(
        'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
        IMAGE_ROTATIONS[imageIndex % IMAGE_ROTATIONS.length]
      )}
    >
      <LazyLoadImage
        src={IMAGES[imageIndex]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}

export default function Home() {
  const renderPhotos = (_: any, index: number) => <Photo key={index} imageIndex={index} />;  // consistent load times
  return (
    <>
      {/* <Head>
        <title></title>
        <meta
          name="description"
          content="..."
        />
      </Head> */}
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {`Software engineer & founder.`}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I???m Neil, a software engineer and entrepreneur based in London.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={LINKEDIN_PROFILE_URI}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={GITHUB_PROFILE_URI}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {IMAGES.map(renderPhotos)}
        </div>
      </div>

      <Container className="mt-24 md:mt-28">
        <Resume />
      </Container>

    </ >
  );
}
