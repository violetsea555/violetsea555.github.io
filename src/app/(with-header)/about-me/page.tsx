import coffeeCats from "@/assets/coffeecats.gif";
import Card from "@/components/Card";
export default function AboutMe() {
  return (
    <main className="flex w-full">
      <div className="flex flex-col flex-1 items-center justify-center dark:bg-black">
        <div className="flex flex-col gap-4 m-10 items-center justify-center min-h-screen">
          <Card
            imageSrc={coffeeCats}
            imageWidth="w-[25vw]"
            description={
              <div className="mt-4">
                Hi! I&apos;m Violet — a software engineer who discovered her
                love of coding in middle school with Codecademy, and hasn&apos;t
                stopped creating since. I have six+ years of professional
                experience building software, specializing in Frontend
                development(React & TypeScript) for the past few years. I have
                an academic background in backend development(Python, C++)
                through a B.S. in Computer Science from UCI, and roots in
                accessibility research at UC Irvine. If you&apos;re interested
                in working with me or believe I&apos;m a good fit for your
                company, please reach out on{" "}
                <a
                  className="text-[#f59c86]"
                  href="https://www.linkedin.com/in/avioletliu"
                >
                  LinkedIn.
                </a>
              </div>
            }
          ></Card>
        </div>
      </div>
    </main>
  );
}
