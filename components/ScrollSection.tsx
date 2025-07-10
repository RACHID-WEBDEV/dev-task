/* eslint-disable @typescript-eslint/no-unused-expressions */

// ScrollAnimation.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MultiCurrency from "./MultiCurrency";
import FAQSection from "./FAQSection";
import ShopOnline from "./ShopOnline";
import CTA from "./CTA";
gsap.registerPlugin(ScrollTrigger);

type Direction = "horizontal" | "vertical" | null;

const ScrollAnimation = ({ setOpenModal }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections =
      containerRef.current?.querySelectorAll<HTMLElement>(".scroll-section");

    if (!sections) return;

    sections.forEach((section) => {
      const wrapper = section.querySelector<HTMLElement>(".wrapper");
      const items = wrapper?.querySelectorAll<HTMLElement>(".item");

      if (!wrapper || !items || items.length === 0) return;

      let direction: Direction = null;
      if (section.classList.contains("vertical-section")) {
        direction = "vertical";
      } else if (section.classList.contains("horizontal-section")) {
        direction = "horizontal";
      }

      initScroll(section, items, direction);
    });
  }, []);

  const initScroll = (
    section: HTMLElement,
    items: NodeListOf<HTMLElement>,
    direction: Direction
  ) => {
    items.forEach((item, index) => {
      if (index !== 0) {
        direction === "horizontal"
          ? gsap.set(item, { xPercent: 100 })
          : gsap.set(item, { yPercent: 100 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      timeline.to(item, {
        // scale: 0.9,
        borderRadius: "0px",
      });

      if (items[index + 1]) {
        direction === "horizontal"
          ? timeline.to(
              items[index + 1],
              {
                xPercent: 0,
              },
              "<"
            )
          : timeline.to(
              items[index + 1],
              {
                yPercent: 0,
              },
              "<"
            );
      }
    });
  };

  return (
    <div className="body" ref={containerRef}>
      <main className="main-wrapper">
        {/* <div className="section">
          <div className="container-medium">
            <div className="padding-vertical">
              <div className="max-width-large">
                <h1 className="heading">But Vertical Scroll Is Also Cool!</h1>
              </div>
            </div>
          </div>
        </div> */}
        <div className="scroll-section vertical-section section">
          <div className="wrapper">
            <div role="list" className="list">
              {/* <div role="listitem" className="item">
                <div className="item_content">
                  <h2 className="item_number h2">1</h2>
                  <h2 className="h2">
                    Wildlife in Action: A Glimpse into Nature’s Daily Drama
                  </h2>
                  <p className="item_p">
                    Witness the fascinating lives of animals in their natural
                    habitats, from playful cubs to stealthy predators.
                  </p>
                </div>
                <video
                  src="https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4"
                  autoPlay
                  muted
                  loop
                  className="item_media"
                />
              </div> */}
              <div role="listitem" className="item">
                <MultiCurrency />
              </div>
              <div role="listitem" className="item">
                <ShopOnline setOpenModal={setOpenModal} />
              </div>
              <div role="listitem" className="item">
                <CTA setOpenModal={setOpenModal} />
              </div>
              <div role="listitem" className="item">
                <FAQSection />
              </div>
              {/* <div role="listitem" className="item">
                <div className="item_content">
                  <h2 className="item_number h2">2</h2>
                  <h2 className="h2">
                    The Changing Seasons: Nature’s Everlasting Cycle
                  </h2>
                  <p className="item_p">
                    Experience the beauty of natures transitions, from blooming
                    spring flowers to snowy winter landscapes.
                  </p>
                </div>
                <video
                  src="https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4"
                  autoPlay
                  muted
                  loop
                  className="item_media"
                />
              </div>
              <div role="listitem" className="item">
                <div className="item_content">
                  <h2 className="item_number h2">3</h2>
                  <h2 className="h2">
                    Guardians of Nature: Protecting Our Planet’s Future
                  </h2>
                  <p className="item_p">
                    Learn about the importance of conservation and how we can
                    work together to preserve the beauty of nature for
                    generations to come.
                  </p>
                </div>
                <video
                  src="https://videos.pexels.com/video-files/4328514/4328514-uhd_2560_1440_30fps.mp4"
                  autoPlay
                  muted
                  loop
                  className="item_media"
                />
              </div>
              <div role="listitem" className="item">
                <div className="item_content">
                  <h2 className="item_number h2">4</h2>
                  <h2 className="h2">
                    Astral Aesthetics: Portraits from the Infinite
                  </h2>
                  <p className="item_p">
                    Experience the boundless beauty of the cosmos through
                    striking portraits that capture its infinite aesthetic
                    appeal.
                  </p>
                </div>
                <video
                  src="https://videos.pexels.com/video-files/2871916/2871916-hd_1920_1080_30fps.mp4"
                  autoPlay
                  muted
                  loop
                  className="item_media"
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="section">
          <div className="container-medium">
            <div className="padding-vertical">
              <div className="max-width-large">
                <h1 className="heading">Horizontal Scroll Is Cool!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-section horizontal-section section">
          <div className="wrapper">
            <div role="list" className="list">
              <div role="listitem" className="item">
                <div className="item_content">
                  <h2 className="item_number h2">1</h2>
                  <h2 className="h2">
                    Wildlife in Action: A Glimpse into Nature’s Daily Drama
                  </h2>
                  <p className="item_p">
                    Explore the untouched beauty of forests, mountains, and
                    rivers as we uncover the hidden secrets of natures most
                    breathtaking landscapes.
                  </p>
                </div>
                <video
                  src="https://videos.pexels.com/video-files/10178127/10178127-uhd_2560_1440_30fps.mp4"
                  autoPlay
                  muted
                  loop
                  className="item_media"
                />
              </div>
              <div role="listitem" className="item">
                <div className="item_content">
                  <h2 className="item_number h2">2</h2>
                  <h2 className="h2">
                    Nature’s Symphony: The Sounds That Heal the Soul
                  </h2>
                  <p className="item_p">
                    Immerse yourself in the soothing sounds of chirping birds,
                    rustling leaves, and flowing streams – natures music for
                    peace and tranquility.
                  </p>
                </div>
                <video
                  src="https://videos.pexels.com/video-files/15708463/15708463-uhd_2560_1440_24fps.mp4"
                  autoPlay
                  muted
                  loop
                  className="item_media"
                />
              </div>
              <div role="listitem" className="item">
                <div className="item_content">
                  <h2 className="item_number h2">3</h2>
                  <h2 className="h2">
                    Nature’s Masterpieces: Landscapes That Take Your Breath Away
                  </h2>
                  <p className="item_p">
                    Discover stunning views of majestic mountains, endless
                    oceans, and golden sunsets that remind us of natures
                    artistic brilliance.
                  </p>
                </div>
                <video
                  src="https://videos.pexels.com/video-files/15708462/15708462-uhd_2560_1440_24fps.mp4"
                  autoPlay
                  muted
                  loop
                  className="item_media"
                />
              </div>
              <div role="listitem" className="item">
                <div className="item_content">
                  <h2 className="item_number h2">4</h2>
                  <h2 className="h2">
                    The Power of Nature: How It Shapes Our World
                  </h2>
                  <p className="item_p">
                    Dive into the incredible forces of nature – from roaring
                    waterfalls to mighty hurricanes – and see how they sculpt
                    the earth we live on.
                  </p>
                </div>
                <video
                  src="https://videos.pexels.com/video-files/5788966/5788966-hd_1920_1080_25fps.mp4"
                  autoPlay
                  muted
                  loop
                  className="item_media"
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="section">
          <div className="padding-global">
            <div className="container-medium">
              <div className="padding-vertical">
                <div className="max-width-large">
                  <h1 className="heading">Soo Cool!!</h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default ScrollAnimation;
