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
    />
  ));

  return <div>{writerCardList}</div>;
}