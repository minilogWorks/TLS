import Modal from "react-modal";
import { X, PlayCircle } from "lucide-react";
import { useState } from "react";

Modal.setAppElement("#root");

interface Testimony {
  id: string;
  title: string;
  speaker: string;
  thumbnail: string; // YouTube thumbnail URL
}

const TESTIMONIES: Testimony[] = [
  {
    id: "k4LjOWJeOME",
    title: "From Broken to Blessed",
    speaker: "Sister Grace",
    thumbnail: "https://i.ytimg.com/vi/k4LjOWJeOME/hqdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Never Gonna Give Up",
    speaker: "Brother David",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    id: "9bZkp7q19f0",
    title: "Healing in His Wings",
    speaker: "Pastor John",
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
  },
  {
    id: "k4LjOWJeOME",
    title: "From Broken to Blessed",
    speaker: "Sister Grace",
    thumbnail: "https://i.ytimg.com/vi/k4LjOWJeOME/hqdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Never Gonna Give Up",
    speaker: "Brother David",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    id: "9bZkp7q19f0",
    title: "Healing in His Wings",
    speaker: "Pastor John",
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
  },
  {
    id: "k4LjOWJeOME",
    title: "From Broken to Blessed",
    speaker: "Sister Grace",
    thumbnail: "https://i.ytimg.com/vi/k4LjOWJeOME/hqdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Never Gonna Give Up",
    speaker: "Brother David",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    id: "9bZkp7q19f0",
    title: "Healing in His Wings",
    speaker: "Pastor John",
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
  },
  // Add more...
];

interface TestimonyModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

export default function TestimonyModal({
  modalIsOpen,
  closeModal,
}: TestimonyModalProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="max-w-5xl w-[95%] max-h-[90vh] bg-white rounded-2xl shadow-2xl outline-none overflow-hidden"
      overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      closeTimeoutMS={300}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Testimonies of Faith
        </h2>
        <button
          onClick={closeModal}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* VIDEO GRID */}
      <div className="p-6 overflow-y-auto max-h-[70vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIES.map((testimony) => (
            <div
              key={testimony.id}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedVideo(testimony.id)}
            >
              <div className="relative aspect-video bg-black">
                <img
                  src={testimony.thumbnail}
                  alt={testimony.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
                  {testimony.title}
                </h3>
                <p className="text-sm text-gray-600">{testimony.speaker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL VIDEO PLAYER (when selected) */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              className="w-full aspect-video rounded-xl"
              src={`https://www.youtube-nocookie.com/embed/${selectedVideo}?autoplay=1`}
              title="Testimony Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </Modal>
  );
}
