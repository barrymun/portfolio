import React, { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { formatDate } from "@/lib/formatDate";
import Card from "@/components/Card";
import GitHubIcon from "@/components/SocialIcons/GitHubIcon";
import LinkedInIcon from "@/components/SocialIcons/LinkedInIcon";
import Button from "@/components/Button";
import Container from "@/components/Container";
import logoTraitly from "@/assets/traitly.jpeg";
import logoWorkday from "@/assets/workday.jpeg";
import logoOysterhaven from "@/assets/oysterhaven.jpeg";
import image1 from "@/assets/image-1.jpg";
import image2 from "@/assets/image-2.jpg";
import image3 from "@/assets/image-3.jpg";
import image4 from "@/assets/image-4.jpg";
import image5 from "@/assets/image-5.jpg";
import resumePDF from "@/assets/resume.pdf";
import { GITHUB_PROFILE_URI, LINKEDIN_PROFILE_URI, URI_REL, URI_TARGET } from "@/constants";

const IMAGES = [image1, image2, image3, image4, image5];
const IMAGE_ROTATIONS = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
const CANVAS_WIDTH = window.innerWidth;
const SCROLL_SPEED = 4.3;

// function MailIcon(props: any) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//         className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//       />
//       <path
//         d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
//         className="stroke-zinc-400 dark:stroke-zinc-500"
//       />
//     </svg>
//   );
// }

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

// function Newsletter() {
//   return (
//     <form
//       action="/thank-you"
//       className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="mt-6 flex">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
//         />
//         <Button type="submit" className="ml-4 flex-none">
//           Join
//         </Button>
//       </div>
//     </form>
//   );
// }

function Resume() {
  let resume = [
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
        {resume.map((role, roleIndex: number) => (
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
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
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
  const requestRef = useRef();

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
      <img
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
            Software engineer, founder, and amateur pilot.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Neil, a software engineer and entrepreneur based in London.
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

      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
    </ >
  );
}
