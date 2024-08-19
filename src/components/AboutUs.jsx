/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
// import cple from "../assets/cple.jpg";
// import proposal from "../assets/proposal.jpg";
import isaac from "../assets/isaac.jpg";
import christianah from "../assets/single.jpg";

const AboutUsPage = () => {
  const [showMoreIsaac, setShowMoreIsaac] = useState(false);
  const [showMoreChristianah, setShowMoreChristianah] = useState(false);

  const isaacText = `
    “As part of the preparation from the department for the coming
    conference, let Miss Christianah and Mr Isaac handle the email to be
    sent to all the first-timers and new members”. These were the very
    words of our HOD at the vigil where I first met my Christianah. I
    did not meet her until two months after I relocated to Ibadan. My
    first time meeting Christianah was in church, not in a church
    service but a departmental vigil. We were preparing for the apex
    meeting of our church. We were both assigned to be in charge of
    sending out invites for the meeting via e-mails. So I can say that
    it was service in God’s house that brought us together. God is the
    absolute best in crafting love stories, you know?!
    I forgot to tell you that I did not save her number nor
    did I reach out to her personally to follow up on the assignment (my
    bad). I merely went doing “my thing”. I can remember our first
    conversation on WhatsApp, it was strictly business and it continued
    like that for days.
    Fast forward to the month after our conference, this beautiful lady
    walked up to me one day after service. “Are you fine? You looked so
    disturbed and you are not in your usual high spirit!” These were
    Christianah’s words to me that day. I rarely open up to people on
    personal matters but she kept pestering and when I saw her
    genuineness, I opened up to her. I had a long list of assessments
    and exams those days and I was already overwhelmed by the workload
    as I had little or no time to prepare for them again. She offered to
    assist to help me get ready for the assessments and exams. I
    initially laughed at the idea in my mind but she amazed me with her
    innovative approach by crafting out milestones for me and monitoring
    my progress.
    Her new supervisory role (lol) got us talking a lot, especially
    during the day and early hours of the night (yeah, she monitors my
    studying at night). Little did she know that as she was monitoring
    my studying, I was carefully studying her too and assessing her
    values, her mindset about life, her disposition to certain beliefs
    and her conviction about life. Just like the lock and key theory of
    drugs and drug receptors, she fits in so well into my receptors for
    my life partner.
    As a wise builder, our first date did not happen immediately until
    after four months she took up the "supervisory role". We had
    intelligent conversations. From this first hangout, I knew that I
    had reached a peak plasma concentration and I was most likely going
    to marry her. She was so detailed, expressive, courteous and highly
    cerebral. Her deep-thinking ability, genteel communication and
    intelligence were my key takeaways. I saw what she communicated and
    beyond what she communicated as her purpose and passion- the fire in
    her eyes, the hunger for excellence and success in her soul, her
    pizzazz, her brio and oomph… all simply amazing! Oh my, I am in
    love.
    From that point going forward, I considered trusting the matter into
    God’s hands, the One who is omnipotent, all-wise and all-knowing.
    With prayers, guidance and confirmations from our spiritual parents,
    earthly parents, mentors and guardians, we are here today and we are
    eager to begin our journey forever.
  `;

  const christianahText = `
    I was out of town and not physically present in church, I saw his name
    among those added to my department WhatsApp page as one of the new
    stewards posted to the department. A week later, I saw him physically
    at our departmental vigil and we were assigned to write mail copies
    for the church anniversary conference, we then realized that we were
    both medical practitioners so we talked on topics bordering medicine,
    business and writing. A month later, he told me he was preparing for
    exams and he needed someone to put him on his toes, since I didn't
    have much on my hands, I obliged him and became his accountability
    partner. We drafted a weekly reading timetable and I dropped a daily
    check-up call till he was done with the exams. A few weeks into being
    his accountability partner, I saw some of the characteristics of the
    Man-God had told me he was bringing my way in him, like Mary, I kept
    them in my heart and went further to cut connections with him
    immediately after he was done with his exams😅😅. Sometimes later, I
    posted a campaign to expand my clothing brand's followers base on
    Instagram and he offered to help, he ensured we surpassed our target
    for the campaign. This got us talking again and via our conversations,
    I saw him for who he is. We had our first date several months later
    but in the weeks leading to that date, I admired his deep reverence
    for God, his love for the people, his level of intelligence and
    retention, his sense of purpose, his degree of accountability, his
    brutal honesty, his culinary skills and of course, his looks and
    fashion sense. Five months after our first physical meeting, he asked
    me to marry him and yes, it's been a transformative experience for me
    and I am excited to be taking a step to forever with the man I truly
    love, my PG😊.
  `;

  const renderText = (text, showMore, setShowMore) => {
    const previewText = text.slice(0, 1300);
    return (
      <div className="flex-grow">
        <p className="leading-[1.5rem] text-base text-justify">
          {showMore ? text : `${previewText}...`}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-500 ml-1"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </p>
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
              // className={`flex-grow overflow-hidden transition-all duration-300 ease-in-out
              // }`}
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutUsPage;
