import { useState } from "react";
import Hero from "../components/Hero";
import {
  DeclarationModal,
  EventModal,
  PrayerModal,
  TestimonyModal,
} from "../components/modals";

export default function Home() {
  const [declarationModalIsOpen, setDeclarationModalIsOpen] =
    useState<boolean>(false);
  const [testimonyModalIsOpen, setTestimonyModalIsOpen] =
    useState<boolean>(false);
  const [prayerModalIsOpen, setPrayerModalIsOpen] = useState<boolean>(false);
  const [eventModalIsOpen, setEventModalIsOpen] = useState<boolean>(false);

  const closeDeclarationModal = () => {
    setDeclarationModalIsOpen(false);
  };

  const closeTestimonyModal = () => {
    setTestimonyModalIsOpen(false);
  };

  const closePrayerModal = () => {
    setPrayerModalIsOpen(false);
  };

  const closeEventModal = () => {
    setEventModalIsOpen(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="w-full">
        <div className="mx-auto w-[90%] lg:w-[75%]">
          <Hero />
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="mx-auto w-[90%] lg:w-[75%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "/images/declaration.jpg",
                alt: "Declaration",
                openModal: () => {
                  setDeclarationModalIsOpen(true);
                },
                modal: (
                  <DeclarationModal
                    closeModal={closeDeclarationModal}
                    modalIsOpen={declarationModalIsOpen}
                  />
                ),
              },
              {
                src: "/images/prayer.jpg",
                alt: "Prayer",
                openModal: () => {
                  setPrayerModalIsOpen(true);
                },
                modal: (
                  <PrayerModal
                    closeModal={closePrayerModal}
                    modalIsOpen={prayerModalIsOpen}
                  />
                ),
              },
              {
                src: "/images/testimony.jpg",
                alt: "Testimony",
                openModal: () => {
                  setTestimonyModalIsOpen(true);
                },
                modal: (
                  <TestimonyModal
                    closeModal={closeTestimonyModal}
                    modalIsOpen={testimonyModalIsOpen}
                  />
                ),
              },
              {
                src: "/images/event.jpg",
                alt: "Upcoming Event",
                openModal: () => {
                  setEventModalIsOpen(true);
                },
                modal: (
                  <EventModal
                    closeModal={closeEventModal}
                    modalIsOpen={eventModalIsOpen}
                  />
                ),
              },
            ].map((img) => (
              <>
                <div
                  key={img.alt}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
                  onClick={img.openModal}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-square w-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                  <p className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition">
                    {img.alt}
                  </p>
                </div>
                {img.modal}
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gradient-to-b from-white to-gray-100">
        <div className="mx-auto w-[90%] lg:w-[75%]">
          <div className="grid lg:grid-cols-2 gap-8 **items-stretch**">
            <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Latest Sermon
                </h2>
              </div>

              <div className="flex-1 p-6 flex items-center justify-center">
                <iframe
                  className="w-full max-w-2xl aspect-video rounded-xl shadow-2xl"
                  src="https://www.youtube-nocookie.com/embed/k4LjOWJeOME?si=ANr30_WEpzjHC-aH"
                  title="Latest Sermon"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold77 text-gray-800">
                  Upcoming Events
                </h2>
              </div>
              <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                <div className="text-center">
                  <img
                    src="/images/ofec.jpg"
                    alt="OFEC 2025"
                    className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                  />
                  <div className="mt-4">
                    <p className="font-bold text-lg text-[#b69121]">
                      OFEC 2025
                    </p>
                    <p className="text-sm text-gray-600">
                      Oil for Enthronement Conference
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      12–16 Nov • Independence Hall, KNUST
                    </p>
                  </div>
                </div>

                {/* Add more cards – they’ll auto-scroll */}
                {/* <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-medium">Youth Night</p>
                  <p className="text-sm text-gray-600">22 Nov • 6 PM</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
