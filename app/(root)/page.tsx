import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "hafied" },
      description: "This is Description",
      image:
        "https://media.istockphoto.com/id/2007060977/id/foto/pegang-tablet-untuk-memeriksa-inspeksi-dan-dokumen-persetujuan-manajemen-kontrak-dan-memeriksa.jpg?s=1024x1024&w=is&k=20&c=-HkdxDVS4UT0rzW_ykLNmGziIxZ3kWmRw-R3txdAoSI=",
      category: "AI",
      title: "Lead Future With AI",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="pink_container ">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed Virtual Competition
        </p>

        <SearchForm query={query} />
      </section>

      {/* MAIN CONTENT */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
