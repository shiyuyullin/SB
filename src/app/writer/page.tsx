import PostTextarea from "@/components/PostTextarea";
import WriterCard from "@/components/WriterCard";
import { PrismaClient } from "@prisma/client";

export default async function Writers() {
  const prismaClient = new PrismaClient();

  const writers = await prismaClient.user.findMany();

  const writerCardList = writers.map((writer) => (
    <WriterCard
      key={writer.id}
      id={writer.id}
      name={writer.name}
      email={writer.email}
      imageUrl={writer.image}
    />
  ));

  return (
    <div>
      <div className="container mx-auto my-6 flex justify-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-700 md:text-5xl lg:text-6xl">
          Post Your Mood to Be A&#160;
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Super Bah!
          </span>
        </h1>
      </div>
      <div className="container mx-auto ">
        <PostTextarea />
      </div>
      <div className="container mx-auto my-6 flex justify-center">
        {writerCardList}
      </div>
    </div>
  );
}
