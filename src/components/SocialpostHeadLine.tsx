import Link from "next/link";

export default function SocialpostHeadline() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Having Fun with People Who Just Like You!
        </h1>
        <div className="flex flex-col py-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            href="/writer"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Find Influencers!
          </Link>
        </div>
      </div>
    </section>
  );
}
