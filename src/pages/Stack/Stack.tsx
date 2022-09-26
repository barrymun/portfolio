import { LazyLoadImage } from "react-lazy-load-image-component";
import SimpleLayout from "@/components/SimpleLayout";
import imageAWS from "@/assets/aws.png";
import imageBash from "@/assets/bash.png";
import imageCassandra from "@/assets/cassandra.png";
import imageCelery from "@/assets/celery.png";
import imageChromeExtensions from "@/assets/chrome-extensions.jpeg";
import imageCSS from "@/assets/css.png";
import imageDjango from "@/assets/django.jpeg";
import imageDocker from "@/assets/docker.jpeg";
import imageElasticsearch from "@/assets/elasticsearch.jpeg";
import imageGCP from "@/assets/gcp.jpeg";
import imageGit from "@/assets/git.jpeg";
import imageJS from "@/assets/js.jpeg";
import imageNodeJS from "@/assets/nodejs.png";
import imagePostgreSQL from "@/assets/postgresql.png";
import imagePython from "@/assets/python.png";
import imageReact from "@/assets/react.png";
import imageRedis from "@/assets/redis.jpeg";
import imageSvelte from "@/assets/svelte.png";
import imageTailwindCSS from "@/assets/tailwindcss.jpeg";
import imageTS from "@/assets/ts.jpeg";

const TECH = [
  {
    name: "Python",
    image: imagePython,
  },
  {
    name: "Django",
    image: imageDjango,
  },
  {
    name: "React",
    image: imageReact,
  },
  {
    name: "Svelte",
    image: imageSvelte,
  },
  {
    name: "TypeScript",
    image: imageTS,
  },
  {
    name: "JavaScript",
    image: imageJS,
  },
  {
    name: "Git",
    image: imageGit,
  },
  {
    name: "AWS",
    image: imageAWS,
  },
  {
    name: "GCP",
    image: imageGCP,
  },
  {
    name: "tailwindcss",
    image: imageTailwindCSS,
  },
  {
    name: "Redis",
    image: imageRedis,
  },
  {
    name: "Cassandra",
    image: imageCassandra,
  },
  {
    name: "Bash",
    image: imageBash,
  },
  {
    name: "Celery",
    image: imageCelery,
  },
  {
    name: "Chrome Extensions",
    image: imageChromeExtensions,
  },
  {
    name: "CSS",
    image: imageCSS,
  },
  {
    name: "Docker",
    image: imageDocker,
  },
  {
    name: "Elasticsearch",
    image: imageElasticsearch,
  },
  {
    name: "PostgreSQL",
    image: imagePostgreSQL,
  },
  {
    name: "Node.js",
    image: imageNodeJS,
  },
];

export default function Stack() {
  return (
    <>
      {/* <Head>
        <title></title>
        <meta
          name="description"
          content="..."
        />
      </Head> */}
      <SimpleLayout
        title="Tech stack."
        intro="I am proficient with the following languages, libraries or frameworks:"
      >
        <ol className="mt-6 space-y-4">
          {TECH.map((role, roleIndex: number) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <LazyLoadImage
                  src={role.image}
                  alt=""
                  className="h-8 w-8 rounded"
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Name</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 flex justify-left items-center">
                  {role.name}
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <p className="mt-16 text-base text-zinc-600 dark:text-zinc-400">
          And more.
        </p>
      </SimpleLayout>
    </>
  );
}
