/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import isaac from "../assets/isaac.jpg";
import christianah from "../assets/single.jpg";

const AboutUsPage = () => {
  const [showMoreIsaac, setShowMoreIsaac] = useState(false);
  const [showMoreChristianah, setShowMoreChristianah] = useState(false);

  const isaacText = `
    During a departmental vigil in preparation for our church’s peak conference, our HOD assigned Christianah and me to manage the emails for new members. It was at this vigil that I first met Christianah.

Our initial interaction was strictly business, focusing on the task at hand. I didn’t even save her number or follow up beyond the assignment. A month after the conference, Christianah approached me after a service, noticing that I seemed troubled. Despite my initial reluctance, I opened up to her about the stress I was under from exams and assignments. She offered to help, and her innovative approach to breaking down my workload impressed me.

God is the absolute best in crafting beautiful love stories, you know! As she monitored my study progress, we began talking more frequently. I found myself not just studying but also observing her character, values, and outlook on life. She fit perfectly into what I envisioned in a life partner, much like a drug perfectly fitting into its receptor.

Our first date came months after she took up her " accountability and supervisory role." It was then that I realized she was everything I had been searching for—intelligent, detailed, and passionate. Her deep thinking, genteel, and drive for excellence stood out. I saw what she communicated and even beyond what she communicated as her purpose and passion- the fire in her eyes, the hunger for excellence and success in her soul, her pizzazz, her brio and oomph...all simply amazing! I knew then that I had reached the "peak plasma concentration" and was ready to commit.

With prayers and guidance from our spiritual leaders, parents, and mentors, we’re now eagerly beginning our journey together.
  `;

  const christianahText = `
    HOW IT ALL STARTED(Christianah's Version)

I was out of town and not physically present in church, I saw his name among those added to my department WhatsApp page as one of the new stewards posted to the department. A week later,  I saw him physically at our departmental vigil and we were assigned to write mail copies for the church anniversary conference, we then realized that we were both medical practitioners so we talked on topics bordering medicine, business and writing.

A month later, he told me he was preparing for exams and he needed someone to put him on his toes, since I didn't have much on my hands, I obliged him and became his accountability partner. We drafted a weekly reading timetable and I dropped a daily check-up call till he was done with the exams. A few weeks into being his accountability partner, I saw some of the characteristics of the Man-God had told me he was bringing my way in him, like Mary, I kept them in my heart and went further to cut connections with him immediately after he was done with his exams😅😅.

Sometimes later, I posted a campaign to expand my clothing brand's followers base on Instagram and he offered to help, he ensured we surpassed our target for the campaign. This got us talking again and via our conversations, I saw him for who he is.

We had our first date several months later but in the weeks leading to that date, I admired his deep reverence for God,  his love for the people, his level of intelligence and retention, his sense of purpose, his degree of accountability, his brutal honesty, his culinary skills and of course, his looks and fashion sense.

Five months after our first physical meeting, he asked me to marry him and yes, it's been a transformative experience for me and I am excited to be taking a step to forever with the man I truly love, my PG😊.
  `;

  const renderText = (text, showMore, setShowMore) => {
    const paragraphs = text
      .trim()
      .split("\n")
      .filter((p) => p); // Split text by line breaks
    const previewText = paragraphs.slice(0, 4); // Show first 4 paragraphs in preview

    return (
      <div className="flex-grow">
        {showMore
          ? paragraphs.map((p, index) => (
              <p
                key={index}
                className="leading-[1.5rem] text-base text-justify mb-4"
              >
                {p}
              </p>
            ))
          : previewText.map((p, index) => (
              <p
                key={index}
                className="leading-[1.5rem] text-base text-justify mb-4"
              >
                {p}
              </p>
            ))}
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-500 ml-1"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    );
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-[#8d0102] mb-8">
        Our Story
      </h1>

      <div className="text-xl text-gray-700 leading-relaxed mb-8 space-y-6">
        <p className="text-[#8d0102]">Once upon a time...</p>

        <p className="text-[#8d0102]">
          <strong>HOW IT ALL STARTED (Isaac's Version)</strong>
        </p>

        <article className="flex flex-col lg:flex-row gap-4 items-stretch">
          {renderText(isaacText, showMoreIsaac, setShowMoreIsaac)}
          <div className="lg:w-[30%] flex-shrink-0">
            <img
              src={isaac}
              alt="Isaac"
              className={`h-full w-full object-center rounded-md shadow-md ${
                showMoreIsaac ? "h-auto" : "h-[50vh]"
              }`}
            />
          </div>
        </article>

        <p className="text-[#8d0102]">
          <strong>HOW IT ALL STARTED (Christianah's Version)</strong>
        </p>

        <article className="flex flex-col lg:flex-row gap-4 items-stretch">
          {renderText(
            christianahText,
            showMoreChristianah,
            setShowMoreChristianah
          )}
          <div className="lg:w-[30%] flex-shrink-0">
            <img
              src={christianah}
              alt="Christianah"
              className={`h-full w-full object-center rounded-md shadow-md ${
                showMoreChristianah ? "h-auto" : "h-[50vh]"
              }`}
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutUsPage;
